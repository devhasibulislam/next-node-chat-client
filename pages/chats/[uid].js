import React from 'react';
import Layout from '../../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../../components/Header';
import { useRouter } from 'next/router';

const UserID = () => {
    const router = useRouter();
    const { uid } = router.query;

    return (
        <section>
            <Header title="Conversations" />
            <Layout>
                {uid}
            </Layout>
        </section>
    );
}
export default UserID;