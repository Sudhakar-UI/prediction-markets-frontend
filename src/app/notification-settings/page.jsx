"use client"
import React from 'react'
import { useState } from "react";
import { Container, Image } from 'react-bootstrap'

export default function NotificationSettingsPage() {

    const [isOn, setIsOn] = useState(false);
    const [isOn2, setIsOn2] = useState(false);

    return (
        <div className='innerpages '>
            <div className='notification-settings-page'>
              
                    <div className="gridparentbox">
                        <h2 className="inner-heading-title">Notification Settings</h2>

                        <div className="mas-card-y   mt-2">
                            <div className='d-flex align-items-center justify-content-between w-100'>
                                <div className='d-flex align-items-center'>
                                    <Image className="side-icons" src="assets/images/mail.svg" alt="icon" width={100} height={100} />
                                    <p className="card-title mb-0">Email</p>
                                </div>

                                <div
                                    className={`toggle-switch ${isOn ? "on" : ""}`}
                                    onClick={() => setIsOn(!isOn)}
                                >
                                    <div className="toggle-circle"></div>
                                </div>
                            </div>

                            <hr />

                            <div className='d-flex align-items-center justify-content-between w-100'>
                                <div className='d-flex align-items-center w-100'>
                                    <Image className="side-icons" src="assets/images/bell.svg" alt="icon" width={100} height={100} />

                                    <p className="card-title mb-0">In-app</p>
                                </div>

                                <div
                                    className={`toggle-switch ${isOn2 ? "on" : ""}`}
                                    onClick={() => setIsOn2(!isOn2)}
                                >
                                    <div className="toggle-circle"></div>
                                </div>
                            </div>
                        </div>

                    </div>

              
            </div>
        </div>
    )
}
