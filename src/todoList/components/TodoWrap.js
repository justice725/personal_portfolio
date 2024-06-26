import TodoListCurrent from "./TodoListCurrent";
import { DragDropContext } from "react-beautiful-dnd";
import DoingListCurrent from "./DoingListCurrent";
import { useRecoilState } from "recoil";
import { currentStatusState, doingState, doingStatusState, todoListState, todoStatusState } from "../atoms/todoListState";
import { TodoListDirection, DoingListDirection } from './ListContainer';
import { useEffect, useState } from "react";
import { db } from '../../firebase';
import { doc, getDoc, updateDoc, setDoc, collection, getDocs } from 'firebase/firestore';

function TodoWrap() {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const [doingList, setDoingList] = useRecoilState(doingState);
    const [newTodo, setNewTodo] = useState('');

    // Firestore에서 초기 데이터를 불러오기
    useEffect(() => {
        const fetchTodos = async () => {
            const todosSnapshot = await getDocs(collection(db, 'todos'));
            const todosData = todosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setTodoList(todosData.filter(todo => todo.status === 'todo'));
            setDoingList(todosData.filter(todo => todo.status === 'doing'));
        };
        fetchTodos();
    }, []);

    // Firestore에 데이터 저장하기
    const saveToFirestore = async (id, data) => {
        const docRef = doc(db, 'todos', id);
        await setDoc(docRef, data);
    };

    const handleAddTodo = async () => {
        if (newTodo.trim() === '') {
            return;
        }

        const todoId = `todo-${Math.random().toString(36).substr(2, 9)}`;
        const newTodoItem = {
            id: todoId,
            title: newTodo,
            status: 'todo'
        };

        // 새로운 Todo를 Firestore에 저장
        await saveToFirestore(todoId, newTodoItem);

        // Recoil 상태 업데이트
        setTodoList([...todoList, newTodoItem]);
        setNewTodo('');
    };

    const onDragEnd = async (e) => {
        if (!e.destination) return;

        const sourceList = e.source.droppableId;
        const destinationList = e.destination.droppableId;
        const itemToMove = sourceList === 'todoList'
            ? todoList.find((todo) => todo.id === e.draggableId)
            : doingList.find((item) => item.id === e.draggableId);

        if (sourceList === destinationList) {
            // 같은 리스트 내에서 이동
            const list = sourceList === 'todoList' ? todoList : doingList;
            const setList = sourceList === 'todoList' ? setTodoList : setDoingList;
            const newList = [...list.filter(item => item.id !== e.draggableId)];
            newList.splice(e.destination.index, 0, itemToMove);
            setList(newList);
        } else {
            // 다른 리스트로 이동
            if (sourceList === 'todoList') {
                setTodoList(todoList.filter(todo => todo.id !== e.draggableId));
                setDoingList([...doingList, { ...itemToMove, status: 'doing' }]);
                await updateDoc(doc(db, 'todos', e.draggableId), { status: 'doing' });
            } else {
                setDoingList(doingList.filter(doing => doing.id !== e.draggableId));
                setTodoList([...todoList, { ...itemToMove, status: 'todo' }]);
                await updateDoc(doc(db, 'todos', e.draggableId), { status: 'todo' });
            }
        }
    };

    return (
        <>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className='todoInputWrap px-[1rem] pt-[3rem] flex flex-row gap-[1rem] tablet:flex-row'>
                    <input type="text" className='todoEditInput flex-auto py-[0.5rem] tablet:py-[0rem]'
                        id='todoListTextInput' placeholder='새로운 할 일을 입력하세요' value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleAddTodo();
                            }
                        }}
                    />
                    <button onClick={handleAddTodo} className='w-fit border-[1px] custom_button'>리스트 추가</button>
                </div>
                <div className='todoListWrap_flex flex-col tablet:flex-row'>
                    <TodoListDirection items={todoList} setItems={setTodoList} droppableId="todoList" naming='todo-list' />
                    <DoingListDirection items={doingList} setItems={setDoingList} droppableId="doingList" naming='doing-list' />
                </div>
            </DragDropContext>
        </>
    );
}

export default TodoWrap;
