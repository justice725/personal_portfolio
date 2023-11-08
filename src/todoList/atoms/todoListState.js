import { atom } from "recoil";

export const todoListState = atom({
    key:'todoState',
    default: [
        {id:'1', title:'여기는 todo-list들을 만들고 관리하는 공간이에요.'},
        {id:'2', title:'새로운 많은 기능들을 추가하려고 계획하고 있어요.'},
        {id:'3', title:'새로운 리스트들을 추가하고 드래그도 해보며 놀아보세요!'},
    ],
});

export const doingState = atom({
  key: 'doingState',
  default: [],
});

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: "Show All",
});

export const listLength = atom({
    key:'todoLength',
    default:0,
});

export const todoStatusState = atom({
    key: 'todo/todoStatusState',
    default: {
        items: [],
        setItems: () => {},
        droppableId: ''
    }
})


export const doingStatusState = atom({
    key: 'todo/doingStatusState',
    default: {
        items: [],
        setItems: () => {},
        droppableId: ''
    }
})