import { atom } from "recoil";

export const todoListState = atom({
    key:'todoState',
    default: [
        {id:'1', title:'Task 1'},
        {id:'2', title:'Task 2'},
        {id:'3', title:'Task 3'},
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