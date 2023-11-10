import TodoListCurrent from "./TodoListCurrent";
import {DragDropContext} from "react-beautiful-dnd";
import DoingListCurrent from "./DoingListCurrent";
import {useRecoilState, useRecoilValue} from "recoil";
import {currentStatusState, doingState, doingStatusState, todoListState, todoStatusState} from "../atoms/todoListState";
import {TodoListDirection, DoingListDirection} from './ListContainer'
import {useState} from "react";

function TodoWrap() {
    // const [todos, setTodos] = useRecoilState(todoListState)
    // const [doing, setDoing] = useRecoilState(doingState)

    const [todoList, setTodoList] = useRecoilState(todoListState);
    const [doingList, setDoingList] = useRecoilState(doingState);

    const [newTodo, setNewTodo] = useState('')

    const onDragEnd = (e) => {
        if (!e.destination) return; // 영역을 벗어나면 함수를 끝낸다

        console.log("e: ", e)
        const sourceList = e.source.droppableId;
        // const destinationList = e.destination.droppableId;
        const itemToMove = sourceList === 'todoList'
            ? todoList.find((todo) => todo.id === e.draggableId)
            : doingList.find((item) => item.id === e.draggableId);

        if (e.destination.droppableId === "todoList") {
            if (e.destination.droppableId === e.source.droppableId) {
                // todoList => todoList
                let newList = [...todoList.filter(todo => todo.id !== e.draggableId)]
                newList.splice(e.destination.index, 0, itemToMove)
                setTodoList(newList)

            } else {
                // todoList => doingList
                setDoingList(doingList.filter((item) => item.id !== itemToMove.id));
                setTodoList([...todoList, itemToMove]);

            }
        } else {
            if (e.destination.droppableId === e.source.droppableId) {
                // doingList => doingList
                let newList = [...doingList.filter(doing => doing.id !== e.draggableId)]
                newList.splice(e.destination.index, 0, itemToMove)
                setDoingList(newList)

            } else {
                // doingList => todoList
                setTodoList(todoList.filter((todo) => todo.id !== itemToMove.id));
                setDoingList([...doingList, itemToMove]);

            }
        }
    };

    const handleAddTodo = () => {
        if (newTodo.trim() === '') {
            return;
        } // 리스트 인풋이 비어있으면 추가하지 않도록 확인

        const todoId = `todo-${Math.random().toString(36).substr(2, 9)}`;
        const newTodoItem = {
            id: todoId,
            title: newTodo,
        }

        // 새로운 Todo를 todoListState에 추가
        setTodoList([...todoList, newTodoItem]);

        // 입력 필드 초기화
        setNewTodo('');
    }

    return (
        <>
            <DragDropContext onDragEnd={(e) => onDragEnd(e)}>
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
                    <button onClick={handleAddTodo} className='w-fit border-[1px]'>리스트 추가</button>
                </div>
                <div className='todoListWrap_flex flex-col tablet:flex-row'>
                    {/*<TodoListCurrent />
                    <DoingListCurrent/>*/}
                    {/*<TodoList />
                    <DoingList />*/}
                    <TodoListDirection items={todoList} setItems={setTodoList} droppableId="todoList"
                                       naming='todo-list'/>
                    <DoingListDirection items={doingList} setItems={setDoingList}
                                        droppableId="doingList" naming='doing-list'/>
                </div>
            </DragDropContext>
        </>
    )
}

export default TodoWrap;

// 2023.11.02 todoList와 DoingList를 생성하는 방법에 대한 로직을 변경했다. 이전 로직은 리스트 안에서 리스트들끼리 위치를 이동하면 원래 있던 인덱스 값으로 돌아가도록 설계되어 있었다.
// 이는 내가 원하는 방식이 아니었고, 기존 기능에 리스트들끼리의 이동을 통해 인덱스 값을 변경하는 로직을 추가하도록 새로 코드를 짰다. 이 코드를 짜면서 '최열'의 도움을 받았다.
// 초기 세개의 리스트에는 id 값을 임의로 1, 2, 3으로 두었고, 인풋을 통해서 리스트를 추가하게 되면 random 값을 추가하도록 함수를 추가하였다.
