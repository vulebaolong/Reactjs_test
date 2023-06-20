import { useState } from "react";
import _ from "lodash";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function DragAndDrop() {
    const [state, setState] = useState({
        toDo: {
            id: "toDo",
            items: [
                { id: "1", taskName: "task 1" },
                { id: "2", taskName: "task 2" },
                { id: "3", taskName: "task 3" },
            ],
        },
        inProcess: {
            id: "inProcess",
            items: [
                { id: "4", taskName: "task 4" },
                { id: "5", taskName: "task 5" },
                { id: "6", taskName: "task 6" },
            ],
        },
        done: {
            id: "done",
            items: [
                { id: "7", taskName: "task 7" },
                { id: "8", taskName: "task 8" },
                { id: "9", taskName: "task 9" },
            ],
        },
    });

    const handleDragEnd = (result) => {
        let { destination, source } = result;
        console.log({ destination, source });

        if (!destination) {
            return;
        }

        if (
            destination.index === source.index &&
            destination.droppableId === source.droppableId
        ) {
            return;
        }

        //tạo ra 1 tag drag
        let itemCopy = { ...state[source.droppableId].items[source.index] };
        console.log(itemCopy);

        //Droppable bắt đầu kéo
        let index = state[source.droppableId].items.findIndex(
            (item) => item.id == itemCopy.id
        );
        state[source.droppableId].items.splice(index, 1);

        //Droppable thả vào
        let dropDestination = state[destination.droppableId].items;
        dropDestination.splice(destination.index, 0, itemCopy);
        console.log("dropDestination thả vào", dropDestination);

        setState(state);
    };

    return (
        <div className="container">
            <h3 className="text-center display-4">Demo Drag And Drop</h3>
            {
                <DragDropContext onDragEnd={handleDragEnd}>
                    <div className="row">
                        {_.map(state, (statusTask, index) => {
                            return (
                                <Droppable droppableId={statusTask.id} key={index}>
                                    {(provided) => {
                                        return (
                                            <div className="col-4 p-5">
                                                <div
                                                    className="border border-1 p-5"
                                                    key={index}
                                                    ref={provided.innerRef}
                                                    {...provided.droppableProps}
                                                >
                                                    {statusTask.items.map(
                                                        (item, index) => {
                                                            return (
                                                                <Draggable
                                                                    key={item.id}
                                                                    index={index}
                                                                    draggableId={item.id}
                                                                >
                                                                    {(provided) => {
                                                                        return (
                                                                            <div
                                                                                className="mt-2 p-3 bg-primary text-center rounded-4"
                                                                                ref={
                                                                                    provided.innerRef
                                                                                }
                                                                                {...provided.draggableProps}
                                                                                {...provided.dragHandleProps}
                                                                            >
                                                                                {
                                                                                    item.taskName
                                                                                }
                                                                            </div>
                                                                        );
                                                                    }}
                                                                </Draggable>
                                                            );
                                                        }
                                                    )}
                                                    {provided.placeholder}
                                                </div>
                                            </div>
                                        );
                                    }}
                                </Droppable>
                            );
                        })}
                    </div>
                </DragDropContext>
            }
        </div>
    );
}
export default DragAndDrop;
