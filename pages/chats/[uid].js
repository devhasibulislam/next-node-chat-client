import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../../components/Header';
import { useRouter } from 'next/router';
import User from '../../components/User';
import Loading from '../../components/Loading';

const UserID = () => {
    const router = useRouter();
    const { uid } = router.query;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('/api/users')
            .then(request => request.json())
            .then(response => {
                setData(response.data);
                setLoading(false);
            }).catch(error => console.log(error.message));
    }, []);

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