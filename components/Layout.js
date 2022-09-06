import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <section className="d-flex vw-100 vh-100">
            {/* sidebar */}
            <Sidebar />

            {/* content */}
            <section>
                {children}
            </section>
        </section >
    );
}
export default Layout;