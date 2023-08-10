//recoil root
import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
//recoil root

import TodoListStats from "./TodoListStats";
import { todoListState } from "../atoms/todoListState";
import { listLength } from "../selectors/todoListStatsStateSelector";

import { useState } from "react";

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

    return(
    <>
        <div className="TodoList_complete_list" /* key={WhatListLength} */>
            <input type="text" value={item.text} onChange={editItemText} className="TodoList_complete_input" readOnly="readonly"/>
            <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} />
            <button onClick={deleteItem}>X</button>
        </div>
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