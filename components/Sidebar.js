import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import styles from '../styles/Sidebar.module.css';
import { Nav } from 'react-bootstrap';
import Image from 'next/image';
import Window from './Window';
import Users from './Users';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useUserData from '../hooks/useUserData';

const Sidebar = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const router = useRouter();

    const { data, loading } = useUserData();

    function handleRemoveUser(id) {
        fetch(`https://next-node-chat-server.onrender.com/users/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    return (
        <section className={`${styles.sidebarContent} vh-100 overflow-auto shadow p-3`}>
            {
                loading ? <Loading /> :
                    <>
                        <Nav className={`flex-column`}>
                            {
                                data?.map((dta, index) => <div key={dta._id} className={`${index !== 0 && "mb-3"} ${index === 0 && "mb-5"} px-3 py-1 ${styles.userSelect}`}>
                                    <div className={`d-flex justify-content-between align-items-center ${styles.userStack}`}>
                                        <Link href={`/chats/${dta._id}`}>
                                            <a className={`${styles.anchor} ${styles.userStack} d-flex justify-content-between align-items-center`}>
                                                <span style={{
                                                    height: "25px",
                                                    width: "25px"
                                                }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>

                                                </span>
                                                <p className={`mb-0 ${styles.visibility} ${(router.asPath === `/chats/${dta._id}`) && "border border-3 pb-1 border-bottom border-top-0 border-start-0 border-end-0"}`}> • {dta.first_name} • </p>
                                            </a>
                                        </Link>
                                        <p className={`${styles.removeUser} shadow d-flex justify-content-center align-items-center bg-white rounded-circle mb-0`} role="button" onClick={() => handleRemoveUser(dta._id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                                            </svg>
                                        </p>
                                    </div>
                                </div>).reverse()
                            }
                        </Nav>
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
                    </>
            }

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