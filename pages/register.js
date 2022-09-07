import Link from 'next/link';
import React from 'react';
import Header from '../components/Header';

const Register = () => {
    return (
        <section>
            <Header title="Register" />

            {/* registration form */}
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
                                    <div className='d-flex flex-lg-row flex-md-row flex-column' style={{ columnGap: "1rem" }}>
                                        {/* <!-- First name input --> */}
                                        <div className="form-outline mb-4">
                                            <input type="text" id="form1Example12" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form1Example13">First name</label>
                                        </div>

                                        {/* <!-- Last name input --> */}
                                        <div className="form-outline mb-4">
                                            <input type="text" id="form1Example12" className="form-control form-control-lg" />
                                            <label className="form-label" htmlFor="form1Example13">Last Name</label>
                                        </div>
                                    </div>

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

                                    {/* gender select */}
                                    <div className='mb-4'>
                                        <select className="form-select" aria-label="Default select example">
                                            <option selected disabled>Select your gender</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                            <option value="3">Binary</option>
                                        </select>
                                        <label className="form-label" htmlFor="form1Example23">Gender</label>
                                    </div>

                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div className="d-flex justify-content-around align-items-center">
                                            <Link href="/login">
                                                <a>Already have an account?</a>
                                            </Link>
                                        </div>

                                        {/* <!-- Submit button --> */}
                                        <button type="submit" className="btn btn-primary btn-md btn-block">Sign up</button>
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
export default Register;