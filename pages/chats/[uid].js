import React from 'react';
import Layout from '../../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import User from '../../components/User';
import Loading from '../../components/Loading';
import useUserData from '../../hooks/useUserData';

const UserID = () => {
    const router = useRouter();
    const { uid } = router.query;

    const { data, loading } = useUserData();

    const matchedData = data?.find(dta => dta._id === Number(uid));

    return (
        <section>
            <Header title="Conversations" />
            <Layout>
                {
                    loading ? <Loading /> : <User matchedData={matchedData} />
                }
            </Layout>
        </section>
    );
}
export default UserID;