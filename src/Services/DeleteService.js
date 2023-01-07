import React from 'react';

const DeleteService = (props) => {

    const {job, deleteJob} = props;

    return (
        <div className="modal fade" id={`delete${job._id}`} tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Delete service</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure you want to delete service: <b>{job.job}</b>?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={() => deleteJob(job._id)}
                        >Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteService;