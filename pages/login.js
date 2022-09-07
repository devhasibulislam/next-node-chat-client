import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';

const Login = () => {
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
                                <form>
                                    {/* <!-- Email input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="email" id="form1Example13" className="form-control form-control-lg" />
                                        <label className="form-label" htmlFor="form1Example13">Email address</label>
                                    </div>

                                    {/* <!-- Password input --> */}
                                    <div className="form-outline mb-4">
                                        <input type="password" id="form1Example23" className="form-control form-control-lg" />
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