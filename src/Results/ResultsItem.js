import React from 'react';

const ResultsItem = (props) => {

    const {order, resultConfig} = props;

    return (
        <tr>
            {resultConfig.map(el => (
                <td key={el.key}>
                    {el.render(order)}
                </td>
            ))}
        </tr>
    );
};

export default ResultsItem;