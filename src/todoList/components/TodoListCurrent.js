//recoil root
import React, {useEffect, useState} from "react";
import {
    useRecoilCallback,
    useRecoilValue
} from 'recoil';
//recoil root
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";

import {todoListState} from "../atoms/todoListState";
import {filteredTodoListState} from '../selectors/filteredTodoListStateSelector';
import TodoItem from "./TodoItem";
import TodoItemCreator from './TodoItemCreator';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';

function TodoListCurrent() {
    // 필터링 된 투두리스트를 표시하고 싶으면 위의 const에서 스테이트만 변경하면 된다.
    const todoList = useRecoilValue(filteredTodoListState);

    const plusState = todoList.length;

    const todos = useRecoilValue(todoListState);

    // DragDropContext 의 onDragEnd 설정이 필수이다.
    // onDragEnd 설정을 위한 recoil 불러오기
    // 옳게 되고 있는건지 잘 모르겠는데,, 일단 되긴 한다..
    const setList = useRecoilCallback(
        ({set}) => (res) => {
            const {source, destination} = res;
            if (!destination) return;

            set(todoListState, (list) => {
                const items = Array.from(list);
                const [reorderedItem] = items.splice(source.index, 1);
                items.splice(destination.index, 0, reorderedItem);
                return items;
            });
        },
        []
    );

    const onDragEnd = (res) => {
        console.log("res: ", res)
        setList(res);
    }
    // 여기까지 onDragEnd 설정
    // https://codesandbox.io/s/react-beautiful-dnd-recoil-flash-bug-58scv?file=/src/AppWorks.js 페이지를 참고했다.

    // 드래그 애니메이션 설정
    const [enabled, setEnabled] = useState(false);
    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));

        return () => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        }
    }, []);

    if (!enabled) {
        return null;
    }

    return (
        <div className="list_wrap">
            <div className="list_wrap_bg bg_el1">

                {/*2023.11.01 // 1차 적으로 드래그 앤 드롭을 recoil 초기 설정을 통해서 구현하려고 했는데, 해당하는 페이지 스타일을 구현하는 데 어려움이 있었다.
                그래서 새로운 스타일의 페이지를 만들 수 있도록 코드를 수정했다.*/}

                <Droppable droppableId="todoList">
                    {(provided) => (
                        <div ref={provided.innerRef} className="todo-list drag_box" {...provided.droppableProps}>
                            <h2>To do</h2>
                            {todos.map((todo, index) => (
                                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}

                                            className='todo-item'
                                            style={{
                                                backgroundColor: snapshot.isDragging ? 'blue' : 'grey',
                                                ...provided.draggableProps.style,
                                            }}
                                        >
                                            {todo.title}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    )
}

export default TodoListCurrent;

// ************************** 23.08.21 정리 ***********************************
// 필터링
// Droppable 상단에 object를 묶어서

/* const [items, setItems] = useState({
    "to do": [],
    "doing": []
}) // 상태값을 어떻게 관리할 것인지 생각해보기 */

// 를 만들어 놨다. 이건 Droppable를 두 개를 생성해서 하나는 TO DO(Show UnCompleted), 하나는 체크된 상태(Show Completed)를 생성하는 Droppable이고,
// 여기서 드래그를 하면 미완료 -> 완료 상태로 가도록 만들려고 한다.
// 그래서 useEffect를 통해서 해당 리스트를 드래그하면 to do 혹은 doing 이라는 데이터 값을 가지고 있는 곳에서 반대편으로 id값을 추가하고, 해당 값에서는 제거하고
// 그렇게 만들고자 하는데 현재 atom state 값에서는 default[] 값 안에 두 개의 array[]를 가지고 있을 수 없기 때문에 두 개로 나누던지, Object처럼 두개를 생성해서 그 안에서만
// 데이터를 가지고 놀 수 있도록 만들어야 했었다.
// 그래서 숙제는, 지금 만들다말았던 것처럼 todolist를 관리하는 데이터 셋을 Object로 만든 것처럼 새로 두가지로 만들어서 관리할 것인지, atom을 현재 가지고 있는 것에서 status를 왔다갔다 하는 식으로 만들 것인지
// 고민해보고 동작을 만들어 볼 필요가 있다.