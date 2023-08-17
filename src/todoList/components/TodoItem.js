//recoil root
import React, { useEffect, useState } from "react";
import {
    useRecoilState
} from 'recoil';
//recoil root
import { Draggable } from "react-beautiful-dnd";


import { todoListState } from "../atoms/todoListState";


function TodoItem({item, plusState}) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item );

    const editItemText = ({target : {value}}) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text:value,
        });

        setTodoList(newList);
    } // 추가하기

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete:!item.isComplete,
        });

        setTodoList(newList);
    } //

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    } // 리스트 삭제

    /* const onDragEnd = ({source, destination}) => {
        if(!destination) return;

        const scourceKey = source.droppableId;
        const destinationKey = destination.droppableId;

        const _items = JSON.parse(JSON.stringify(items));
        const [targetItem] = _items[scourceKey].splice(source.index, 1);
        _items[destinationKey].splice(destination.index,0,targetItem);
        setItems(_items);
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

    return(
    <>
        {/* <div className="TodoList_complete_list text1">
            <input type="text" value={item.text} onChange={editItemText} className="TodoList_complete_input" readOnly="readonly"/>
            <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />

            <button onClick={deleteItem}>X</button>
        </div> */}
        <Draggable key={item.id} item={item} draggableId={item.id} index={item}>
            {(provided) => (
                <div ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                >
                    {item.text}
                </div>
            )}
        </Draggable>
    </>
        
    )
}

function replaceItemAtIndex( arr, index, newValue ) {
    return [...arr.slice(0,index), newValue, ...arr.slice(index + 1)];
} // 리스트 추가 함수

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
} // 리스트 삭제 함수

export default TodoItem;