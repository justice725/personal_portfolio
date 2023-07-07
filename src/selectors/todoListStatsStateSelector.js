import { selector } from "recoil";
import { todoListState } from "../atoms/todoListState";


export const todoListStatsState = selector({
    key:'todoListStatsState',
    get:({get}) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
        const totalUncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 0 :totalCompletedNum / totalNum;

        return {
            totalNum,
            totalCompletedNum,
            totalUncompletedNum,
            percentCompleted,
        };
    }
});

export const listLength = selector({
    key:'todoListLength',
    get:({get}) => {
        const listLength = get(todoListState);
        const listLengthNum = listLength.length;
        const listLengthNumPlue = listLengthNum++;

        return {
            listLengthNum,
        }
    },

    set:({set}, newLength) => {
        const newLengthNum = 0;
        newLengthNum++;
        set(todoListState, newLengthNum);
    }
});

// todolistStatsState 값을 읽기 위해, 우리는 useRecoilValue()를 한번 더 사용할 것이다.