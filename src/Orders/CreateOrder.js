import React, {useState} from 'react';
import getDate from "../common/getDate";

const CreateOrder = (props) => {

    const {clients, jobs, orders, addOrder} = props;

    const [clientId, setClientId] = useState('');
    const [serviceId, setServiceId] = useState('');
    const [initialPayment, setInitialPayment] = useState(0);
    const [jobPrice, setJobPrice] = useState(0)

    function saveButtonHandler() {
        if (clientId === '' || serviceId === '') {
            alert('You should choose a client and a service');
            return;
        }
        const selectedClient = clients.find(el => el._id === clientId);
        const selectedJob = jobs.find(el => el._id === serviceId);
        const newOrder = {
            "service": {...selectedJob, "createAt": getDate()},
            "sentToDo": {
                "date": "",
                "status": false
            },
            "completed": {
                "date": "",
                "status": false
            },
            "sayToClient": {
                "date": "",
                "status": false
            },
            "clientReceived": {
                "date": "",
                "status": false
            },
            "paid": {
                "payment": initialPayment,
                "debt": selectedJob.price - initialPayment,
                "primeCost": selectedJob.primeCost,
                "date": "",
                "status": false
            },
            "orderNumber": orders.length + 1,
            "clientName": selectedClient.name,
        }
        addOrder(newOrder);
        setClientId('');
        setServiceId('');
        setInitialPayment(0);
        setJobPrice(0)

    }

    function cancelButtonHandler() {
        setClientId('');
        setServiceId('');
        setInitialPayment(0);
        setJobPrice(0);
    }

    function serviceSelectHandler(e) {
        setServiceId(e.target.value);
        const jobPrice = jobs.find(el => el._id === e.target.value).price;
        setJobPrice(jobPrice);
    }

    return (
        <div>
            <div className="modal fade" id="createOrderModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Create new order</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-primary-subtle"
                                      id="basic-addon1">Client name:</span>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={clientId}
                                    onChange={e => setClientId(e.target.value)}
                                >
                                    <option selected>Choose client</option>
                                    {clients.map(el => (
                                        <option value={el._id} selected={false}>{el.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-primary-subtle" id="basic-addon1">Service:</span>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    value={serviceId}
                                    onChange={e => serviceSelectHandler(e)}
                                >
                                    <option selected>Choose service</option>
                                    {jobs.map(el => (
                                        <option value={el._id}>{el.job}</option>
                                    ))}
                                </select>
                                <div className="input-group mb-3 mt-3">
                                    <span className="input-group-text bg-primary-subtle">Service price: </span>
                                    <span className="input-group-text"><b>${jobPrice}</b></span>
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-primary-subtle" id="basic-addon1">Initial payment:</span>
                                    <input
                                        type="number"
                                        className="form-control"
                                        aria-describedby="basic-addon1"
                                        value={initialPayment}
                                        onChange={e => setInitialPayment(+e.target.value)}
                                    />
                                </div>
                            </div>
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
                                onClick={saveButtonHandler}
                                data-bs-dismiss="modal"
                            >Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateOrder;