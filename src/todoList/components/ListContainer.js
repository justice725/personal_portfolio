import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { todoListState, doingState, doingStatusState, todoStatusState } from '../atoms/todoListState';
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd';
import { db } from '../../firebase';
import { doc, deleteDoc } from 'firebase/firestore';
import CloseBtn from '../img/close_btn.svg'

const ListContainer = ({ items, setItems, droppableId, naming }) => {
    const setTodoStatus = useSetRecoilState(todoStatusState);
    const setDoingStatus = useSetRecoilState(doingStatusState);

    useEffect(() => {
        if (naming === "todo-list") {
            setTodoStatus({ items, setItems, droppableId });
        } else if (naming === "doing-list") {
            setDoingStatus({ items, setItems, droppableId });
        }
    }, [items, setItems, droppableId, naming, setTodoStatus, setDoingStatus]);

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, 'todos', id));
        setItems(items.filter(item => item.id !== id));
    };

    // 오늘의 날짜 출력하기
    const renderDate = () => {
        const nowDate = new Date();
        if (nowDate) {
            const dayToKorean = ['월', '화', '수', '목', '금', '토', '일'];
            const year = nowDate.getFullYear();
            const month = String(Number(nowDate.getMonth()) + 1);
            const date = nowDate.getDate();
            const day = nowDate.getDay();

            return `${year}년 ${month}월 ${date}일 ${dayToKorean[day]}요일`;
        }
        return '';
    };

    return (
        <div className="list_wrap relative pb-[0]">
            <div className="list_wrap_bg bg_el4 relative">
                <div className='flex flex-row justify-between w-full '>
                    <h2 className="font-bold text2">{naming}</h2>
                    <h2 className='font-bold text2'>{renderDate()}</h2>
                </div>
                <Droppable droppableId={droppableId}>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className='list_box drag_box flex flex-col gap-[1rem] px-[1rem] relative h-auto min-h-[15rem] tablet:min-h-[30rem]'>
                            {items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`todo_item bg_el5 rounded-[5px] p-[1rem] flex justify-between items-center gap-[8px] ${snapshot.isDragging ? 'drop-shadow-[0_1px_10px_rgba(0,0,0,0.3)]' : 'drop-shadow-[2px_1px_3px_rgba(0,0,0,0.3)]'}`}
                                        >
                                            <p>{item.title}</p>
                                            <button onClick={() => handleDelete(item.id)} className="delete-button text-red-500">
                                                <img src={CloseBtn} alt="" className={'w-[24px] min-w-[24px]'}/></button>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    );
};

const TodoListDirection = ({ items, setItems, droppableId, naming }) => {
    return (
        <ListContainer items={items} setItems={setItems} droppableId={droppableId} naming={naming} />
    );
};

const DoingListDirection = ({ items, setItems, droppableId, naming }) => {
    return (
        <ListContainer items={items} setItems={setItems} droppableId={droppableId} naming={naming} />
    );
};

export { TodoListDirection, DoingListDirection };
