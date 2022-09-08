import Link from 'next/link';
import React, { useState } from 'react';
import Header from '../components/Header';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    function handleLoginUser(event) {
        event.preventDefault();

        const userInfo = {
            email, password
        };
        fetch("http://localhost:5000/users", {
            method: "PATCH",
            headers: {
                "accept": "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => setRedirect(data.success))
            .catch(error => console.log(error))

        event.target.reset();
    }

    if (redirect)
        location.href = "/chats"

    return (
        <section>
            <Header title="Login" />

            {/* login form */}
            <section className='container'>
                <section className="vh-100">
                    <div className="container py-5 h-100">
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <div className="col-md-8 col-lg-7 col-xl-6">
                                <picture>
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                        className="img-fluid"
                                        alt="Phone image"
                                    />
                                </picture>
                            </div>
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                <form onSubmit={handleLoginUser}>
                                    {/* <!-- Email input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form1Example13" className="form-control form-control-lg" required onChange={e => setEmail(e.target.value)} />
                                        <label className="form-label" htmlFor="form1Example13">Email address</label>
                                    </div>

                                    {/* <!-- Password input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="password" id="form1Example23" className="form-control form-control-lg" required onChange={e => setPassword(e.target.value)} />
                                        <label className="form-label" htmlFor="form1Example23">Password</label>
                                    </div>

                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className="d-flex justify-content-around align-items-center">
                                            <Link href="/register">
                                                <a>Create new account</a>
                                            </Link>
                                        </div>

                                        {/* <!-- Submit button --> */}
                                        <button type="submit" className="btn btn-primary btn-md btn-block">Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}
export default Login;