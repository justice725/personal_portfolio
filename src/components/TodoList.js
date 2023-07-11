//recoil root
import React, {useState} from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
//recoil root

import { todoListState } from "../atoms/todoListState";
import TodoItemCreator from "./TodoItemCreator";
/* import TodoList from ''; */
import TodoListStats from "./TodoListStats";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import { filteredTodoListState } from "../selectors/filteredTodoListStateSelector";
import { todoListFilterState } from "../atoms/todoListState";


function TodoList() {
    /* const todoList = useRecoilValue(todoListState); */

    // 필터링 된 todo 리스트를 표시하고 싶으면 위의 const에서 스테이트만 변경하면 된다.
    const todoList = useRecoilValue(filteredTodoListState);

    const [useList, setUseState] = useState(0);
    const plusState = useList + todoList.length;

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

                {todoList.map((todoItem) => (
                    
                    <TodoItem key={todoItem.id} item={todoItem} plusState={plusState}/>
                ))}
                {/* UI는 todoListFilterState의 기본값인 "Show All"과 동일하다. 필터를 변경하려면 우리는 TodoListFilter 컴포넌트를 구현해야 한다 */}

            </div>
        </div>
    )
}

export default TodoList;

// 필터링 