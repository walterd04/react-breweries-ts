import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

interface IErrorProps {
    message?: string, 
    show: boolean, 
    hideModal: any
}

const Error: React.SFC<IErrorProps> = (props) => {
    return (
        props.show ? 
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            { props.message || "Unknown error. Please try again" }
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={ props.hideModal }>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        : null
    );
}

export default Error;