import React from 'react';
import Layout from '../../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import User from '../../components/User';
import Loading from '../../components/Loading';
import useUserData from '../../hooks/useUserData';
import useChatData from '../../hooks/useChatData';

const UserID = () => {
    const router = useRouter();
    const { uid } = router.query;

    const { data, loading } = useUserData();

    // const matchedData = data?.find(dta => dta._id === Number(uid));

    function handleSentMessage(event) {
        event.preventDefault();

        const message = {
            _id: Date.now(),
            message: event.target.message.value
        };

        fetch("https://next-node-chat-server.onrender.com/chats", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify(message)
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))

        event.target.reset();
    }

    const { data: chatsData, loading: chatsloading } = useChatData();

    function handleDeleteMessage(id) {
        fetch(`https://next-node-chat-server.onrender.com/chats/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }

    return (
        <section>
            <Header title="Conversations" />
            <Layout>
                {/* {loading ? <Loading /> : <User matchedData={matchedData} />} */}


                <div className='d-flex flex-column h-100 w-100 justify-content-end'>
                    <div
                        className='overflow-auto'
                        style={{ height: "500px" }}
                    >
                        {
                            chatsData?.map(chat => <div key={chat._id} className="px-2">
                                <div className='d-flex justify-content-between'>
                                    <p className='mb-0' style={{ textAlign: "justify" }}>{chat.message}</p>
                                    <span
                                        className='shadow p-3 d-flex justify-content-center align-items-center rounded-circle ms-1'
                                        style={{ height: "10px", width: "10px" }}
                                        onClick={() => handleDeleteMessage(chat._id)}
                                        role="button"
                                    >x</span>
                                </div>
                                <hr />
                            </div>)
                        }
                    </div>
                    <form className='w-100' onSubmit={handleSentMessage}>
                        <div className='d-flex shadow px-3 py-2 rounded-3'>
                            <textarea
                                name="message"
                                className='border-0 w-100 shadow-sm px-3 me-5'
                                placeholder='Enter your message'
                            />
                            <button
                                type="submit"
                                style={{
                                    height: "50px",
                                    width: "50px"
                                }}
                                className="mt-auto border-0 rounded-circle"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>

                            </button>
                        </div>
                    </form>
                </div>
            </Layout>
        </section>
    );
}
export default UserID;