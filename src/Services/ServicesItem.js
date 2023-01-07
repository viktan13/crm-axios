import React from 'react';

const ServicesItem = (props) => {

    const {job, config} = props;

    return (

            <tr key={job._id}>
                {config.map(el => (
                    <td key={el.key}>{el.render(job)}</td>
                ))}
            </tr>

    );
};

export default ServicesItem;