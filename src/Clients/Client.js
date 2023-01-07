import React from 'react';
import DropDownButton from "../common/DropDownButton";
import DeleteClient from "./DeleteClient";
import UpdateClient from "./UpdateClient";

const Client = (props) => {

    const {client, deleteClient, updateClient} = props;

    return (
        <tr key={client._id}>
            {Object.values(client).map((el, i) => {
                if(i === 0 || i === 5) return null ;
                if(i === 1) {
                    return <th scope="row">{el}</th>
                } else {
                    return <td>{el}</td>
                }
            })}
            <td>
                <DropDownButton
                    item={client}
                />
                <DeleteClient
                    client={client}
                    deleteClient={deleteClient}
                />
                <UpdateClient
                    client={client}
                    updateClient={updateClient}
                />
            </td>
        </tr>
    );
};

export default Client;