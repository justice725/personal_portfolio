//recoil root
import React from "react";
import {
    useRecoilValue
} from 'recoil';
//recoil root

import { todoListStatsState } from "../selectors/todoListStatsStateSelector";

function TodoListStats() {
    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
    } = useRecoilValue(todoListStatsState);

    const formattedPercentCompleted = Math.round(percentCompleted * 100);

    return (
        <ul className="total_list text2">
            <li className="total_list_item"><span className="list_item_tit">총 리스트 개수</span> <span className="list_item_text">{totalNum}</span></li>
            <li className="total_list_item"><span className="list_item_tit">완료된 리스트 개수</span> <span className="list_item_text">{totalCompletedNum}</span></li>
            <li className="total_list_item"><span className="list_item_tit">완료되지 않은 리스트 개수</span> <span className="list_item_text">{totalUncompletedNum}</span></li>
            <li className="total_list_item"><span className="list_item_tit">완료 퍼센트</span> <span className="list_item_text">{formattedPercentCompleted}</span></li>
        </ul>
    )
}

export default TodoListStats;

// 요약하자면, 우리는 모든 요구 사항을 충족하는 todo 리스트 앱을 만들었다.

// todo 아이템 추가
// todo 아이템 수정
// todo 아이템 삭제
// todo 아이템 필터링
// 유용한 통계 표시