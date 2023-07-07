import {atom} from "recoil";

export const todoListState = atom({
    key:'todoListState',
    default: [],
    length:'',
});

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: "Show All",
});

export const listLength = atom({
    key:'todoLength',
    default:0,
});
