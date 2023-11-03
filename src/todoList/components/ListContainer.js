import React, {useEffect} from 'react';
import {useRecoilState, useSetRecoilState} from 'recoil';
import {todoListState, doingState, doingStatusState, todoStatusState} from '../atoms/todoListState';
import {Draggable, Droppable, DragDropContext} from 'react-beautiful-dnd';

const ListContainer = ({items, setItems, droppableId, naming}) => {

    const setTodoStatus = useSetRecoilState(todoStatusState)
    const setDoingStatus = useSetRecoilState(doingStatusState)
    // const onDragEnd = (result) => {
    //   if (!result.destination) return;
    //
    //   const sourceIndex = result.source.index;
    //   const destinationIndex = result.destination.index;
    //
    //   // 아이템 위치 업데이트
    //   const updatedItems = [...items[droppableId]];
    //   const [movedItem] = updatedItems.splice(sourceIndex, 1);
    //   updatedItems.splice(destinationIndex, 0, movedItem);
    //
    //   // 상태 업데이트
    //   setItems({ ...items, [droppableId]: updatedItems });
    // };

    useEffect(() => {
        if (naming === "todo-list") {
            setTodoStatus({items, setItems, droppableId})
        } else if (naming === "doing-list") {
            setDoingStatus({items, setItems, droppableId})
        }
    }, []);

    return (
        <div className="list_wrap relative">
            <div className="list_wrap_bg bg_el1 relative">
                <Droppable droppableId={droppableId}>
                    {(provided) => (
                        <div ref={provided.innerRef} {...provided.droppableProps} className='list_box drag_box flex flex-col gap-[1rem] px-[1rem] relative'>
                            <h2 className="font-bold">{naming}</h2>
                            {items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided,snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={"todo_item bg-white rounded-[5px] p-[1rem]" + (snapshot.isDragging ? ' drop-shadow-[0_1px_10px_rgba(0,0,0,0.3)]' : ' drop-shadow-[2px_1px_3px_rgba(0,0,0,0.3)]')}
                                        >
                                            {item.title}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                    )}
                </Droppable>
            </div>
        </div>
    );
};

const TodoListDirection = ({items, setItems, droppableId, naming}) => {
    return (
        <ListContainer items={items} setItems={setItems} droppableId={droppableId} naming={naming}/>
    );
};

const DoingListDirection = ({items, setItems, droppableId, naming}) => {
    return (
        <ListContainer items={items} setItems={setItems} droppableId={droppableId} naming={naming}/>
    );
};

export {TodoListDirection, DoingListDirection};