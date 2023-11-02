import { selector } from "recoil";
import { todoListFilterState, todoListState } from "../atoms/todoListState";

export const filteredTodoListState = selector({
    key : 'filteredTodoListState',
    get: ({get}) => {
        const filter = get(todoListFilterState);
        const list = get(todoListState);

        switch(filter) {
            case 'Show Completed': // atom의 초기값 default를 변경하는 함수인거 같당..
                return list.filter((item) => item.isComplete);
            case 'Show Uncompleted':
                return list.filter((item) => !item.isComplete);
            default: // 기본값은 todoListFilterState의 값인 Show All 이다.
                return list;
            // todoItem.js에서 인자 item의 속성에 대해서 정의해 놓은 것이 있는데 확인해보면 될듯?
        }
    },
})

// filteredTodoListState는 내부적으로 2개의 의존성 todoListFilterState와 todoListState를 추적한다. 그래서 둘 중 하나라도 변하면 filteredTodoListState는 재실행된다.

// 컴포넌트 관점에서 보면 selector는 atom을 읽을 때 사용하는 같은 훅을 사용해서 읽을 수 있다. 그러나 특정한 훅은 쓰기 가능 상태(즉, useRecoilState())에서만 작동하는 점을 유의해야 한다.
// 모든 atom은 쓰기 가능 상태지만 selector는 일부만 쓰기 가능한 상태(get과 set 속성을 둘 다 가지고 있는 selector)로 간주된다. 이 주제에 대해서 더많은 정보를 얻고 싶다면 
// https://recoiljs.org/ko/docs/introduction/core-concepts 를 읽으면 된다.


// export const testSelector = selector({
//     key: 'testSel',
//     get: ({get}) => {

//     },
//     set: ({get, set}, e) => {
//         const 뭐 = get(todoListState)
//         로직로직...

//         set(todoListState, asd)
//     }
// })