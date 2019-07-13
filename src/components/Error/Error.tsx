import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

interface IErrorProps {
    message?: string
}

const Error: React.SFC<IErrorProps> = (props) => {
    return (
        <div className="alert alert-danger" role="alert">
            { props.message || "Unknown error. Please try again" }
        </div>
    );
}

export default Error;