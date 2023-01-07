import React from 'react';

const DropDownButton = (props) => {

    const {item} = props;

    return (
        <div className="dropdown">
            <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">

            </button>
            <ul className="dropdown-menu">
                <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target={`#update${item._id}`}>Update</button></li>
                <li><button className="dropdown-item" data-bs-toggle="modal" data-bs-target={`#delete${item._id}`}>Delete</button></li>
            </ul>
        </div>
    );
};

export default DropDownButton;