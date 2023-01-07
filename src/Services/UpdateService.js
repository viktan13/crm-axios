import React, {useState} from 'react';

const UpdateService = (props) => {

    const {service, updateJob} = props;

    const [job, setJob] = useState(service);

    return (
        <div className="modal fade" id={`update${service._id}`} tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-primary-subtle" id="basic-addon1">Service name:</span>
                            <input
                                type="text"
                                className="form-control"
                                aria-describedby="basic-addon1"
                                value={job.job}
                                onChange={e => setJob({...job, job: e.target.value})}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-primary-subtle" id="basic-addon1">Price:</span>
                            <input
                                type="number"
                                className="form-control"
                                aria-describedby="basic-addon1"
                                value={job.price}
                                onChange={e => setJob({...job, price: +e.target.value})}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-primary-subtle" id="basic-addon1">Employee:</span>
                            <input
                                type="text"
                                className="form-control"
                                aria-describedby="basic-addon1"
                                value={job.employee}
                                onChange={e => setJob({...job, employee: e.target.value})}
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-primary-subtle" id="basic-addon1">Prime cost:</span>
                            <input
                                type="number"
                                className="form-control"
                                aria-describedby="basic-addon1"
                                value={job.primeCost}
                                onChange={e => setJob({...job, primeCost: +e.target.value})}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            onClick={() => setJob(service)}
                        >Close</button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={() => updateJob(service._id, job)}
                        >Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateService;