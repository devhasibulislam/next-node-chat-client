/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Card } from 'react-bootstrap';

const User = ({ matchedData }) => {
    return (
        <section>
            <Card style={{ width: 'fit-content' }}>
                <Card.Header>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>

                    </span>
                </Card.Header>
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