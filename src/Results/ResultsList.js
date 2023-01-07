import React from 'react';
import ResultsItem from "./ResultsItem";

const ResultsList = (props) => {

    const {orders} = props;

    const resultConfig = [
        {key: 'job', label: 'Job', render: (row) => <b>{row.job}</b>},
        {key: 'employee', label: 'Employee', render: (row) => row.employee},
        {key: 'net', label: 'Net Profit', render: (row) => `$${row.price - row.primeCost}`},
        {key: 'income', label: 'Income', render: (row) => `$${row.price}`},
        {key: 'prime', label: 'Prime Cost', render: (row) => `$${row.primeCost}`},
        {key: 'paid', label: 'Paid Sum', render: (row) => `$${row.payments}`},
        {key: 'debt', label: 'Client Debt', render: (row) => `$${row.price - row.payments}`},
    ]

    return (
        <div>
            <h2>Company Results</h2>
            <table className="table table-striped">
                <thead>
                <tr>
                    {resultConfig.map(el => (
                        <th scope="col" key={el.key}>
                            {el.label}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className="table-group-divider">
                {orders.map(el => <ResultsItem
                    order={el}
                    resultConfig={resultConfig}
                />)}
                </tbody>
                <tfoot className="table-group-divider">
                <tr>
                    <td>
                        <b>All Services</b>
                    </td>
                    <td>

                    </td>
                    <td>
                        ${orders.reduce((acc, el) => el.price - el.primeCost + acc, 0)}
                    </td>
                    <td>
                        ${orders.reduce((acc, el) => el.price + acc, 0)}
                    </td>
                    <td>
                        ${orders.reduce((acc, el) => el.primeCost + acc, 0)}
                    </td>
                    <td>
                        ${orders.reduce((acc, el) => el.payments + acc, 0)}
                    </td>
                    <td>
                        ${orders.reduce((acc, el) => el.price + acc, 0) - orders.reduce((acc, el) => el.payments + acc, 0)}
                    </td>
                </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default ResultsList;