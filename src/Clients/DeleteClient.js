import React from 'react';

const DeleteClient = (props) => {

    const {client, deleteClient} = props;

    return (
        <div>
            {/*// <!-- Button trigger modal -->*/}
            {/*<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">*/}
            {/*    Launch demo modal*/}
            {/*</button>*/}

            {/*// <!-- Modal -->*/}
            <div className="modal fade" id={`delete${client._id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Delete Client</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete client: <strong>{client.name}</strong>?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => deleteClient(client._id)}
                            >Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteClient;