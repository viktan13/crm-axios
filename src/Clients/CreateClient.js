import React, {useState} from 'react';
import getDate from '../common/getDate'
import {v4 as uuidv4} from 'uuid';
import InputMask from 'react-input-mask'


const initialClient = {
    name: '',
    address: '',
    phoneNumber: '',
    createAt: '',
}

const CreateClient = (props) => {
    
    const {addClient} = props;

    const [newClient, setNewClient] = useState(initialClient);

    function saveButtonHandler() {
        addClient({...newClient, createAt: getDate()});
        setNewClient(initialClient)
    }

    return (
        <div>
            {/*// <!-- Modal -->*/}
            <div className="modal fade" id="createClient" tabindex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Create Client</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-primary-subtle" id="basic-addon1">Name:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-describedby="basic-addon1"
                                    value={newClient.name}
                                    onChange={e => setNewClient({...newClient, name: e.target.value})}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-primary-subtle" id="basic-addon1">Address:</span>
                                <input
                                    type="text"
                                    className="form-control"
                                    aria-describedby="basic-addon1"
                                    value={newClient.address}
                                    onChange={e => setNewClient({...newClient, address: e.target.value})}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-primary-subtle" id="basic-addon1">Phone #:</span>
                                <InputMask
                                    type="text"
                                    mask="999-999-9999"
                                    className="form-control"
                                    aria-describedby="basic-addon1"
                                    value={newClient.phoneNumber}
                                    onChange={e => setNewClient({...newClient, phoneNumber: e.target.value})}
                                />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                                onClick={() => setNewClient(initialClient)}
                            >Close</button>
                            <button 
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={saveButtonHandler}
                            >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateClient;