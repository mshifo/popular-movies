import React from 'react'
import { Spinner } from 'react-bootstrap';

const LoadSpinner = () => {
    return (
        <div className="spinner">
            <Spinner animation="border" role="status" />
        </div>
    )
}

export default LoadSpinner