import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import styles from '../styles/Sidebar.module.css';
import { Nav } from 'react-bootstrap';
import Image from 'next/image';
import Window from './Window';
import Users from './Users';

const Sidebar = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('/api/users')
            .then(request => request.json())
            .then(response => {
                setData(response.data);
                setLoading(false);
            }).catch(error => console.log(error.message));
    }, []);

    return (
        <section className={`${styles.sidebarContent} vh-100 overflow-auto shadow p-3`}>
            {
                loading ? <Loading /> :
                    <Nav className={`flex-column`}>
                        {
                            data?.map((dta, index) => <div key={dta._id} className={`${index !== (data.length - 1) && "mb-3"} px-3 py-1 ${styles.userSelect}`}>
                                <div className={`d-flex justify-content-between align-items-center ${styles.userStack}`}>
                                    <Image
                                        src={dta.avatar}
                                        alt={`dta.last_name`}
                                        height={50}
                                        width={50}
                                        className={`${styles.chatAvatar} rounded-circle`}
                                        role="button"
                                    />
                                    <p className={`mb-0 ${styles.visibility}`}> • {dta.first_name} • </p>
                                    <p className={`${styles.removeUser} shadow d-flex justify-content-center align-items-center bg-white rounded-circle mb-0`} role="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                        </svg>
                                    </p>
                                </div>
                            </div>)
                        }
                    </Nav>
            }
            <div
                className='d-flex align-items-center justify-content-center position-absolute bottom-0 start-0 w-100 py-3 rounded-end text-white'
                style={{ backgroundColor: "#808080" }}
                role="button"
                onClick={() => setModalShow(true)}
            >
                <p className={`${styles.addUser} bg-white text-black rounded-circle mb-0`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                    </svg>
                </p>
                <p className={`${styles.visibility} mb-0 ms-3 fs-5 fw-normal font-monospace`}>Add Conversation</p>
            </div>

            {/* modal window */}
            {
                modalShow &&
                <Window
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    title="Add new conversion"
                    child=<Users
                        onHide={() => setModalShow(false)}
                    />
                />
            }
        </section>
    );
}
export default Sidebar;