import React from 'react';
import {useRecoilValue} from 'recoil';
import {Droppable, Draggable} from 'react-beautiful-dnd';
import {doingState} from "../atoms/todoListState";

const DoingListCurrent = () => {
    const doing = useRecoilValue(doingState)

    return (
        <div className="list_wrap">
            <div className="list_wrap_bg bg_el1">
                <Droppable droppableId="doingList">
                    {(provided) => (
                        <div ref={provided.innerRef} className="doing-list drag_box">
                            <h2>Doing</h2>
                            {doing.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided,snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="doing-item"
                                            style={{
                                                backgroundColor: snapshot.isDragging ? 'blue' : 'grey',
                                                ...provided.draggableProps.style,
                                            }}
                                        >
                                            {item.title}
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
    )
}

export default DoingListCurrent