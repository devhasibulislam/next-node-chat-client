import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <section className="h-100 w-100 d-flex flex-column justify-content-center align-items-center">
            <Spinner animation="border" size="sm" />
        </section>
    );
}
export default Loading;