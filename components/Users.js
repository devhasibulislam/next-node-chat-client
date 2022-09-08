import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import styles from '../styles/Users.module.css';
import Link from 'next/link';

const Users = (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        setLoading(true);
        fetch('/api/users')
            .then(request => request.json())
            .then(response => {
                setData(response.data);
                setLoading(false);
            });
    }, []);

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
                                        <a className={`d-flex justify-content-between align-items-center ${index !== (data.length - 1) && "mb-2"} ${styles.stackUsers} py-1 me-2 ${styles.anchor}`}>
                                            <div className='d-flex align-items-center'>
                                                <Image
                                                    src={dta.avatar}
                                                    alt={`dta.last_name`}
                                                    height={50}
                                                    width={50}
                                                    className={`${styles.chatAvatar} rounded-circle`}
                                                    role="button"
                                                />
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