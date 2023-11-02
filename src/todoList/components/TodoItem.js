//recoil root
import React, {useState} from "react";
import {
    useRecoilState
} from 'recoil';
//recoil root
import {Draggable} from "react-beautiful-dnd";


import {todoListState} from "../atoms/todoListState";

/*
function doAjax() {
    ajax: ({ 
        url: '/todolist/set', 
        dataType: 'application/json', 
        data: {todoList: todoList}
    })
} */

function TodoItem({item, plusState, key, draggableId}) {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);
    // const toStringIndex = index.toString();
    // console.log(toStringIndex);

    const editItemText = (e) => {
        const newValue = e.target.value;
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: newValue,
        });
        setTodoList(newList);
    } // 추가하기

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });

        setTodoList(newList);
    } //

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    } // 리스트 삭제

    return (
        <>
            {/* <Draggable key={index} draggableId={toStringIndex} index={index}> */}
            <Draggable key={index} draggableId={`${index}`} index={index}>
                {(provided) => (
                    <div ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}
                    >
                        <input type="text" id="todoListTextInput" value={item.text} onChange={editItemText}
                               className="todoEditInput"/>
                        <label for="todoListTextInput" className="todoText">{item.text}</label>
                        <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion}
                               className="todoCompleteInput"/>
                        <button onClick={deleteItem} className="todoDeleteButton">X</button>
                        {/* {item.text} */}

                    </div>
                )}
            </Draggable>
        </>

    )
}

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
} // 리스트 추가 함수

function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
} // 리스트 삭제 함수

export default TodoItem;