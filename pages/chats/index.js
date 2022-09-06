import React from 'react';
import Layout from '../../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../../components/Header';
import Image from 'next/image';

const Chats = () => {
    return (
        <section>
            <Header title="Unicorn error" />
            <Layout>
                <div className='d-flex flex-column justify-content-center align-items-center h-100 w-100'>
                    <Image
                        src="/failed.png"
                        alt="failed unicorn"
                        height={400}
                        width={409}
                    />
                    <h3>No Conversation Selected!</h3>
                </div>
            </Layout>
        </section>
    );
}
export default Chats;