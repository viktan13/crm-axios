import React from 'react';
import DropDownButton from "../common/DropDownButton";
import ServicesItem from "./ServicesItem";
import CreateService from "./CreateService";
import DeleteService from "./DeleteService";
import UpdateService from "./UpdateService";


const ServicesList = (props) => {

    const {jobs, addJob, deleteJob, updateJob} = props;

    const jobConfig = [
        {key: 'name', label: 'Name of job', render: (row) => <b>{row.job}</b>},
        {key: 'price', label: 'Price', render: (row) => `$${row.price}`},
        {key: 'employee', label: 'Employee', render: (row) => row.employee},
        {key: 'primeCost', label: 'Prime cost', render: (row) => `$${row.primeCost}`},
        {
            key: 'actions', label: 'Actions', render: (row) => (
                <>
                    <DropDownButton
                        item={row}
                    />
                    <DeleteService
                        job={row}
                        deleteJob={deleteJob}
                    />
                    <UpdateService
                        service={row}
                        updateJob={updateJob}
                    />
                </>
            )
        },
    ]

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>Services</h2>
                <CreateService
                    addJob={addJob}
                />
                <button
                    className="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#createServiceModal"
                >Create new service
                </button>
            </div>
            <table className="table table-striped">
                <thead>
                <tr>
                    {jobConfig.map(el => (
                        <th scope="col" key={el.key}>{el.label}</th>
                    ))}
                </tr>
                </thead>
                <tbody className="table-group-divider">
                {jobs.map(job => <ServicesItem
                    job={job}
                    config={jobConfig}
                />)}
                </tbody>
            </table>
        </div>
    );
};

export default ServicesList;