//recoil root
import React, { useState } from "react";
import {
    useSetRecoilState
} from 'recoil';
import { todoListState } from "../atoms/todoListState";
//recoil root

function TodoItemCreator() {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);
    /* const listLength = ; */ // 렝쓰 확인 한 후 콘솔에 찍어보고 리스트가 없을 때 div박스 하나 만들어서 리스트 없다고 쓰기

    const addItem = () => {
        if(inputValue === "") {
            window.alert("Do check your list text");
            return false;
        } // 리스트 인풋 value를 입력하지 않은 상태에서 추가를 누르면 alert창 생성 후 실행되지 않도록 함

        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id:getId(),
                text: inputValue,
                isComplete:false,
            },
        ]);
        
        setInputValue('');
    };

    const onChange = ({target: {value}}) => {
        setInputValue(value);
    };

    const listData = (keyWord) => {
        console.log(listData+"what is data");
    }

    return (
        <div className="list_wrap_fr" data-list={listData}>
            <div>
                <input type="text" value={inputValue} onChange={onChange} />
                <button onClick={addItem}>Add</button>
            </div>
            {/* <div className="cssVar" prefers-color-scheme="dark">cssVar</div> */}
        </div>
        /* {
            TodoItem.index == "0" ? (
                <></>
            ) : (
                <>
                <div>
                    <input type="text" value={inputValue} onChange={onChange} />
                    <button onClick={addItem}>Add</button>
                </div>
                </>
            )
        } */
        
    )
}

// 고유한 id 생성을 위한 유틸리티
let id = 0;
function getId() {
    return id++;
}

export default TodoItemCreator;