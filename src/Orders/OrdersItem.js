import React from 'react';

const OrdersItem = (props) => {

    const {order, orderConfig} = props;

    return (
        <tr>
            {orderConfig.map(el => (
                <td key={el.key}>{el.render(order)}</td>
            ))}
        </tr>
    );
};

export default OrdersItem;