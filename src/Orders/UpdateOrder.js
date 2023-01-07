import React, {useState} from 'react';
import getDate from "../common/getDate";

const UpdateOrder = (props) => {

    const {order, updateOrder} = props;

    const [newPayment, setNewPayment] = useState(0);
    const [updStatuses, setUpdStatuses] = useState(order.statuses);
    const [sentToDoChecked, setSentToDoChecked] = useState(order.sentToDo.status);
    const [completedChecked, setCompletedChecked] = useState(order.completed.status);
    const [sayToClientChecked, setSayToClientChecked] = useState(order.sayToClient.status);
    const [clientReceivedChecked, setClientReceivedChecked] = useState(order.clientReceived.status);



    function saveButtonHandler() {
        const updOrder = {...order,
            paid: {
            ...order.paid,
                payment: order.paid.payment + newPayment,
                debt: order.paid.debt - newPayment,
                status: order.paid.debt - newPayment <= 0,
                date: order.paid.status - newPayment <= 0 ? getDate() : ''
            },
        }
        updateOrder(order._id, updOrder)
        setNewPayment(0);
    }

    function cancelButtonHandler() {
        setNewPayment(0);
        setSentToDoChecked(order.sentToDo.status)
        setCompletedChecked(order.completed.status);
        setSayToClientChecked(order.sayToClient.status);
        setClientReceivedChecked(order.clientReceived.status);
    }

    function checkBoxHandler(chkBox, setChkBox) {
        setChkBox(!chkBox);
    }

    return (
        <div className="modal fade" id={`update${order._id}`} tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Update <b>{order.clientName}'s</b>
                            <b>"{order.service.job}"</b> order</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <ul className="list-group">
                            <li className="list-group-item">Client name: <b>{order.clientName}</b></li>
                            <li className="list-group-item">Service: <b>{order.service.job}</b></li>
                            <li className="list-group-item">Price: <b>${order.service.price}</b></li>
                            <li className="list-group-item">Debt: <b>${order.paid.debt}</b></li>
                        </ul>
                        <div className="input-group mb-3 mt-3">
                            <span className="input-group-text bg-primary-subtle" id="basic-addon1">New payment:</span>
                            <input
                                type="number"
                                className="form-control"
                                aria-describedby="basic-addon1"
                                value={newPayment}
                                onChange={e => setNewPayment(+e.target.value)}
                            />
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox" value=""
                                        id="flexCheckDefault"
                                        checked={sentToDoChecked}
                                        onClick={() => checkBoxHandler(sentToDoChecked, setSentToDoChecked)}
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        In Progress
                                    </label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox" value=""
                                        id="flexCheckDefault"
                                        checked={completedChecked}
                                        onClick={() => checkBoxHandler(completedChecked, setCompletedChecked)}
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Completed
                                    </label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox" value=""
                                        id="flexCheckDefault"
                                        checked={sayToClientChecked}
                                        onClick={() => checkBoxHandler(sayToClientChecked, setSayToClientChecked)}
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Say to client
                                    </label>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox" value=""
                                        id="flexCheckDefault"
                                        checked={clientReceivedChecked}
                                        onClick={() => checkBoxHandler(clientReceivedChecked, setClientReceivedChecked)}
                                    />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Client received
                                    </label>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={cancelButtonHandler}
                        >Close
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={saveButtonHandler}
                        >Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateOrder;