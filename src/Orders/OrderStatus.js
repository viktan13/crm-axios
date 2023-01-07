import React, {useState} from 'react';

const OrderStatus = (props) => {

    const {status, updateStatuses, order} = props;

    const [checked, setChecked] = useState(status.done);

    function checkBoxHandler() {
        const isDone = !checked
        setChecked(isDone);
        console.log(isDone);
        updateStatuses(status.title, isDone)
    }

    return (

        <div>

            {status.title === 'Paid: ' ? (
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox" value=""
                        id="flexCheckDefault"
                        checked={order.price <= order.payments}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    </label>
                </div>
            ) : (
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox" value=""
                        id="flexCheckDefault"
                        checked={checked}
                        onClick={checkBoxHandler}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                    </label>
                </div>
            )

            }

        </div>
    )
};

export default OrderStatus;