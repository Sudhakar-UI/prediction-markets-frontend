'use client';

import React from 'react';
import UserHeader from '../components/UserHeader';
import Leftsidemenu from '../components/Leftsidemenu';
import Homefooter from '../components/Homefooter';
import '../globals.css';

export default function UserLayout({ children }) {

    return (

        <div className={`dashboard-layout`}>
            <UserHeader />
            <div>
                <div className="sub-content">
                    <Leftsidemenu />
                    <main className="main-content">
                        {children}
                    </main>
                </div>
                <div className="user-footer">
                    <Homefooter />
                </div>
            </div>
        </div>

    );
}