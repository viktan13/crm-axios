import React from 'react';
import Client from "./Client";
import CreateClient from "./CreateClient";

const ClientsList = (props) => {

    const {clients, addClient, deleteClient, updateClient} = props;

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>Clients</h2>
                <button
                    className="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#createClient"
                >Create new client
                </button>
            </div>
            <CreateClient
                addClient={addClient}
            />
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone number</th>
                    <th scope="col">Created on</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody className="table-group-divider">
                {clients.map(client =>
                    <Client
                        client={client}
                        deleteClient={deleteClient}
                        updateClient={updateClient}
                    />
                )}
                </tbody>
            </table>
        </div>
    );
};

export default ClientsList;