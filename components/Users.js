import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import styles from '../styles/Users.module.css';
import Link from 'next/link';
import useUserData from '../hooks/useUserData';

const Users = (props) => {
    const [keyword, setKeyword] = useState("");

    const {data, loading} = useUserData();

    // RegEx
    const condition = new RegExp(keyword, "gi");
    const result = data?.filter(dta => condition.test(dta.first_name));

    return (
        <section
            style={{ height: "250px", overflowY: "scroll", overflowX: "hidden" }}
        >
            <div className='w-100 me-2 mb-3 text-center'>
                <input
                    type="text"
                    placeholder='Enter user credentials'
                    className='fs-6 px-3 py-2 rounded-3 border-3 border-top-0 border-start-0 border-end-0 border-bottom shadow-sm w-75'
                    onChange={e => setKeyword(e.target.value)}
                />
            </div>
            {
                loading ? <Loading /> :
                    <>
                        {
                            result?.map((dta, index) => <div key={dta._id}>
                                <div
                                    onClick={props.onHide}
                                >
                                    <Link href={`/chats/${dta._id}`}>
                                        <a className={`d-flex justify-content-between align-items-center ${index !== (data.length - 1) && "mb-2"} ${styles.stackUsers} py-1 me-2 ps-2 ${styles.anchor}`}>
                                            <div className='d-flex align-items-center' style={{columnGap: ".5rem"}}>
                                                <span style={{
                                                    height: "25px",
                                                    width: "25px"
                                                }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>

                                                </span>
                                                <p className='mb-0'>{dta.first_name} {dta.last_name}</p>
                                            </div>
                                            <p className={`${styles.user} mb-0`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                                </svg>

                                            </p>
                                        </a>
                                    </Link>
                                </div>
                            </div
                            >)
                        }
                    </>
            }
        </section>
    );
}
export default Users;