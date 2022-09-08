import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <section className="d-flex vw-100 vh-100">
            {/* sidebar */}
            <section className='position-relative'>
                <Sidebar />
            </section>

            {/* content */}
            <section style={{ padding: "2rem" }} className="mx-auto w-50">
                {children}
            </section>
        </section >
    );
}
export default Layout;