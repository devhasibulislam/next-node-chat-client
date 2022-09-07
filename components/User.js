/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card } from 'react-bootstrap';

const User = ({ matchedData }) => {
    return (
        <section>
            <Card style={{ width: '19rem' }}>
                <Card.Img variant="top" src={matchedData?.avatar} />
                <Card.Body>
                    <Card.Title>{matchedData?.first_name} {matchedData?.last_name}</Card.Title>
                    <Card.Text>
                        <p className='mb-0 text-nowrap'><span className='fw-bold'>Email:</span> {matchedData?.email}</p>
                        <p className='mb-0 text-nowrap'><span className='fw-bold'>Gender:</span> {matchedData?.gender}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </section>
    );
}
export default User;