//recoil root
import React, { useEffect, useState } from "react";
import {
    useRecoilValue
} from 'recoil';
//recoil root
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { filteredTodoListState } from '../selectors/filteredTodoListStateSelector';
import TodoItemCreator from './TodoItemCreator';
import TodoListFilters from './TodoListFilters';
import TodoListStats from './TodoListStats';

function TodoList() {
    /* const todoList = useRecoilValue(todoListState); */

    // 필터링 된 todo 리스트를 표시하고 싶으면 위의 const에서 스테이트만 변경하면 된다.
    const todoList = useRecoilValue(filteredTodoListState);

    const [useList, setUseState] = useState(0);
    const plusState = useList + todoList.length;


    /* const handleEnd = (result) => {
        if(!result.destination) return;

        const currentTags = [...tags];
        const draggingItemIndex = result.source.index;
        const afterDragItemIndex = result.destination.index;

        const removeTag = currentTags.splice(draggingItemIndex, 1);

        currentTags.splice(afterDragItemIndex, 0, removeTag[0]);

        setTags(currentTags);
    } */

    const [enabled, setEnabled] = useState(false);
    useEffect(() => {
        const animation = requestAnimationFrame(() => setEnabled(true));

        return() => {
            cancelAnimationFrame(animation);
            setEnabled(false);
        }
    }, []);

    if(!enabled) {
        return null;
    }

    return (
        <div className="list_wrap">
            <div className="list_wrap_bg bg_el1">
                <TodoListStats />
                <TodoListFilters />

                <TodoItemCreator />

                {plusState <= 0 ? (
                    <div className=""> <span className="text1">아직 할 일이 없습니다.</span></div>
                ) : (
                    ""
                )}

                <DragDropContext>
                    <Droppable droppableId="tags">
                        {(provided) => (
                            <div className="tags" {...provided.droppableProps} ref={provided.innerRef}>
                                {todoList.map((todoItem, index) => (
                                    
                                    <Draggable key={todoItem.id} draggableId={todoItem.id} index={index}>
                                        {(provided) => (
                                            <div ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            >
                                                {todoItem.text}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

                {/* <TodoItem key={todoItem.id} item={todoItem} plusState={plusState}/> */}
                {/* UI는 todoListFilterState의 기본값인 "Show All"과 동일하다. 필터를 변경하려면 우리는 TodoListFilter 컴포넌트를 구현해야 한다 */}

                {/* <TodoItem
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                key={todoItem.id}
                                                item={todoItem}
                                                plusState={plusState}
                                                >
                                            </TodoItem> */}
                                            {/* <TodoItem key={todoItem.id} item={todoItem} plusState={plusState} /> */}
            </div>
        </div>
    )
}

export default TodoList;

// 필터링 