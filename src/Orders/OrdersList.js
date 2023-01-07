import React from 'react';
import DropDownButton from "../common/DropDownButton";
import OrdersItem from "./OrdersItem";
import CreateOrder from "./CreateOrder";
import DeleteOrder from "./DeleteOrder";
import UpdateOrder from "./UpdateOrder";



const OrdersList = (props) => {

    const {orders, clients, jobs, addOrder, deleteOrder, updateOrder} = props;
    
    console.log(orders);

    const orderConfig = [
        {key: 'orderNumber', label: '№', render: (row) => <b>{row.orderNumber}</b>,},
        {key: 'name', label: 'Name', render: (row) => <b>{row.clientName}</b>,},
        {
            key: 'service', label: 'Service', render: (row) => (
                <div>
                    <b>{row.service.job}</b>
                    <p>({row.service.employee})</p>
                </div>
            ),
        },
        {key: 'price', label: 'Price', render: (row) => `$${row.service.price}`},
        {key: 'payments', label: 'Payments', render: (row) => `$${row.paid.payment}`},
        {key: 'debt', label: 'Debt', render: (row) => `$${row.paid.debt}`},
        {key: 'createAt', label: 'Created on', render: (row) => row.service.createAt},
        {
            key: 'statuses', label: 'Statuses', render: (row) => (
                <ul className="list-unstyled">
                    <li>In Progress: {row.sentToDo.status ? '✓' : ''}</li>
                    <li>Completed: {row.completed.status ? '✓' : ''}</li>
                    <li>Say to client: {row.sayToClient.status ? '✓' : ''}</li>
                    <li>Client received: {row.clientReceived.status ? '✓' : ''}</li>
                    <li>Paid: {row.paid.status ? '✓' : ''}</li>
                </ul>
            )
        },
        {
            key: 'dates', label: 'Dates', render: (row) => (
                <ul className="list-unstyled">
                    <li>{row.sentToDo.date}</li>
                    <li>{row.completed.date}</li>
                    <li>{row.sayToClient.date}</li>
                    <li>{row.clientReceived.date}</li>
                    <li>{row.paid.date}</li>
                </ul>
            )
        },
        {
            key: 'actions', label: 'Actions', render: row => (
                <>
                    <DropDownButton
                        item={row}
                    />
                    <DeleteOrder
                        order={row}
                        deleteOrder={deleteOrder}
                    />
                    <UpdateOrder
                        order={row}
                        updateOrder={updateOrder}
                    />
                </>
            )
        }
    ]

    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2>Orders</h2>
                <CreateOrder
                    clients={clients}
                    jobs={jobs}
                    addOrder={addOrder}
                    orders={orders}
                />
                <button
                    className="btn btn-outline-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#createOrderModal"
                >Create new order
                </button>
            </div>

            <table className="table table-striped">
                <thead>
                <tr>
                    {orderConfig.map(el => (
                        <th scope="col" key={el.key}>{el.label}</th>
                    ))}
                </tr>
                </thead>
                <tbody className="table-group-divider">
                {orders.map((el) => <OrdersItem
                    order={el}
                    orderConfig={orderConfig}

                />)}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersList;