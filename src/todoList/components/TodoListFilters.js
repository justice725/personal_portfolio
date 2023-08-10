//recoil root
import React from "react";
import {
    useRecoilState
} from 'recoil';
//recoil root

import { todoListFilterState } from "../atoms/todoListState";

function TodoListFilters() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({target:{value}}) => {
        setFilter(value);
    };

    return(
        <>
        <div className="filterBox">
            <span className="text1">필터 :</span>
            <select value={filter} onChange={updateFilter} className="text3 todosSelectTit bg_el4">
                <option value="Show All">전체보기</option>
                <option value="Show Completed">완료된 할 일 보기</option>
                <option value="Show Uncompleted">미완료된 할 일 보기</option>
            </select>
        </div>
        </>
    )
}
// 몇 줄의 코드로 우리는 필터링 기능을 구현할 수 있다. 우리는 TodoListStats 컴포넌트를 구현하기 위해 동일한 개념을 사용할 것이다.

// 우리는 다음 통계를 표시하려고 한다.

// todo 항목들의 총 개수 -> ${totalNum}
// 완료된 todo 항목들의 총 개수 -> ${totalCompleteNum}
// 완료되지 않은 todo 항목들의 총 개수 -> ${totalUncompletedNum}
// 완료된 항목의 백분율 -> ${formattedPercentCompleted}

// 각 통계에 대해서 selector를 만들 수 있지만, 필요한 데이터를 포함하는 객체를 반환하는 selector 하나를 만드는 것이 더 쉬운 방법일 것이다.
// 우리는 이 selector를 todoListStatsState라고 부를 것이다.

export default TodoListFilters;