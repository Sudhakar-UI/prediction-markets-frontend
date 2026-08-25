"use client"
import React, { useRef, useState, useEffect, Suspense } from 'react'
import { Container, Button, FormControl, Form, FormGroup, FormLabel, Row, Col, Image, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { useSearchParams } from 'next/navigation'

function ProfileSettingsContent() {

    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const searchParams = useSearchParams();
    const tabParam = searchParams.get('tab');

    const [activeTab, setActiveTab] = useState(tabParam || "profile");

    useEffect(() => {
        if (tabParam) {
            setActiveTab(tabParam);
        }
    }, [tabParam]);

    const [isOn, setIsOn] = useState(false);
    const [isOn2, setIsOn2] = useState(false);
    const [isOn3, setIsOn3] = useState(false);

    return (
        <div className='innerpages'>

            <div className='profile-page-container'>
                <Container className=''>
                    <Row>
                        <Col lg={2}>
                            <div className="profile-page-left">
                                <div className="profile-page-left-tabs">
                                    <Button className={`profile-tab-btn ${activeTab === "profile" ? "active" : ""}`} onClick={() => setActiveTab("profile")}>
                                        <Image className="side-icons"
                                            src={
                                                activeTab === "profile"
                                                    ? "assets/images/profile-active.svg"
                                                    : "assets/images/profile.svg"
                                            }
                                            alt="icon" width={100} height={100} />
                                        Profile
                                    </Button>
                                    <Button className={`profile-tab-btn ${activeTab === "account" ? "active" : ""}`} onClick={() => setActiveTab("account")}>
                                        <Image className="side-icons"
                                            src={
                                                activeTab === "account"
                                                    ? "assets/images/account-active.svg"
                                                    : "assets/images/s-2.png"
                                            }
                                            alt="icon" width={100} height={100} />
                                        Account
                                    </Button>
                                    <Button className={`profile-tab-btn ${activeTab === "trading" ? "active" : ""}`} onClick={() => setActiveTab("trading")}>
                                        <Image className="side-icons"
                                            src={
                                                activeTab === "trading"
                                                    ? "assets/images/trading-active.svg"
                                                    : "assets/images/s-3.png"
                                            }
                                            alt="icon" width={100} height={100} />
                                        Trading
                                    </Button>
                                    <Button className={`profile-tab-btn ${activeTab === "notifications" ? "active" : ""}`} onClick={() => setActiveTab("notifications")}>
                                        <Image className="side-icons"
                                            src={
                                                activeTab === "notifications"
                                                    ? "assets/images/notification-active.svg"
                                                    : "assets/images/s-4.png"
                                            }
                                            alt="icon" width={100} height={100} />
                                        Notifications
                                    </Button>
                                    <Button className={`profile-tab-btn ${activeTab === "buildercodes" ? "active" : ""}`} onClick={() => setActiveTab("buildercodes")}>
                                        <Image className="side-icons"
                                            src={
                                                activeTab === "buildercodes"
                                                    ? "assets/images/builder-codes-active.svg"
                                                    : "assets/images/s-5.png"
                                            }
                                            alt="icon" width={100} height={100} />
                                        Builder Codes
                                    </Button>
                                    <Button className={`profile-tab-btn ${activeTab === "privatekey" ? "active" : ""}`} onClick={() => setActiveTab("privatekey")}>
                                        <Image className="side-icons"
                                            src={
                                                activeTab === "privatekey"
                                                    ? "assets/images/private-key-active.svg"
                                                    : "assets/images/s-6.png"
                                            }
                                            alt="icon" width={100} height={100} />
                                        Private Key
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={10}>
                            <div className="profile-page-right">
                                {activeTab === "profile" && (
                                    <div className="profile-page-right-content">
                                        <div className='profile-settings-page'>
                                            <div className="gridparentbox">
                                                <h2 className="inner-heading-title">Profile Settings</h2>
                                                <div className="profile-upload">
                                                    <div className="avatar" onClick={handleClick}>
                                                        <img
                                                            src={image || "assets/images/male.svg"}
                                                            alt="profile"
                                                        />
                                                        <div className="camera-icon">
                                                            <FontAwesomeIcon icon={faCamera} />
                                                        </div>
                                                    </div>

                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        ref={fileInputRef}
                                                        onChange={handleChange}
                                                        hidden
                                                    />
                                                </div>

                                                <Form className="siteformbg">
                                                    <FormGroup className="mb-3">
                                                        <FormLabel htmlFor="profileusername">Username</FormLabel>
                                                        <FormControl id="profileusername" type="text" />
                                                    </FormGroup>
                                                    <FormGroup className="mb-3">
                                                        <FormLabel htmlFor="profileemail">Email Address</FormLabel>
                                                        <FormControl id="profileemail" type="email" />
                                                    </FormGroup>
                                                    <FormGroup className="mb-3 w-100">
                                                        <FormLabel htmlFor="profileaddress">Address</FormLabel>
                                                        <FormControl id="profileaddress" type="text" />
                                                    </FormGroup>
                                                </Form>
                                                <div className="text-start">
                                                    <Button className="sitebtn">Save changes</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === "account" && (
                                    <div className="profile-page-right-content">
                                        <div className='account-settings-page'>
                                            <div className="gridparentbox">
                                                <h2 className="inner-heading-title">Account Settings</h2>
                                                <p className='card-title mb-3'>Two-Factor Authentication</p>
                                                <div className="accountsettingsbox">
                                                    <div>
                                                        <p className='card-title'>Enable 2FA</p>
                                                        <p className='mb-0'>Add an extra layer of security to your account using an authenticator app</p>
                                                    </div>
                                                    <div
                                                        className={`toggle-switch ${isOn ? "on" : ""}`}
                                                        onClick={() => setIsOn(!isOn)}
                                                        style={{ background: "#19181B" }}
                                                    >
                                                        <div className="toggle-circle"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === "trading" && (
                                    <div className="profile-page-right-content">
                                        <div className='trading-settings-page'>

                                            <div className="gridparentbox">
                                                <h2 className="inner-heading-title">Trading Settings</h2>
                                                <p className='card-title mb-0'>Market Order Type</p>
                                                <p className='mb-0'>Choose how your market orders are executed</p>
                                                <div className="trading-settings-box">
                                                    <div className="radio-group mt-1">
                                                        <label className="radio-circle">
                                                            <input type="radio" name="twofa" />
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <p className="card-title">Fill and Kill (FAK)</p>
                                                        <p className="mb-0">
                                                            Fills as much as possible of the best available prices and cancels any unfilled portion
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="trading-settings-box">
                                                    <div className="radio-group mt-1">
                                                        <label className="radio-circle">
                                                            <input type="radio" name="twofa" />
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <p className="card-title">Fill or Kill (FOK)</p>
                                                        <p className="mb-0">
                                                            Executes the entire order immediately at the specified price or cancels it completely
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === "notifications" && (
                                    <div className="profile-page-right-content">
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
                                                            className={`toggle-switch ${isOn2 ? "on" : ""}`}
                                                            onClick={() => setIsOn2(!isOn2)}
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
                                                            className={`toggle-switch ${isOn3 ? "on" : ""}`}
                                                            onClick={() => setIsOn3(!isOn3)}
                                                        >
                                                            <div className="toggle-circle"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === "buildercodes" && (
                                    <div className="profile-page-right-content">
                                        <div className='builder-codes-page'>
                                            <div className="gridparentbox">
                                                <h2 className="inner-heading-title">Builder Settings</h2>
                                                <p className='card-title mb-0'>You don’t have a builder profile yet</p>
                                                <p className='mb-0'>Create one to get started with building on Polymarket</p>
                                                <Form className="siteformbg w-50">
                                                    <FormGroup className="my-3">
                                                        <FormLabel htmlFor="profileusername">Builder Name</FormLabel>
                                                        <FormControl id="profileusername" type="text" placeholder='Enter your builder name' />
                                                    </FormGroup>
                                                </Form>
                                                <div className="text-start">
                                                    <Button className="sitebtn">Create Builder Profile</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === "privatekey" && (
                                    <div className="profile-page-right-content">
                                        <div className='private-key-page'>
                                            <div className="gridparentbox">
                                                <h2 className="inner-heading-title">Private Key </h2>
                                                <p className='card-title mb-0'>You don’t have a builder profile yet</p>
                                                <p className='mb-0'>Exporting your private key gives you direct control and security over your funds. This is applicable if you've signed up via email.</p>

                                                <Alert variant="danger" className="mt-3 w-75" >
                                                    <Image className="art-icons" src="assets/images/art.svg" alt="icon" width={100} height={100} />
                                                    Please export your private key before logging out.
                                                </Alert>
                                                <div className='mas-card-y w-75 my-3'>
                                                    <h2 className="inner-heading-title">Basic Steps</h2>
                                                    <div className="steps-container">
                                                        <div className="step-item">
                                                            <div className="step-circle">1</div>
                                                            <p>Start the process below and sign into Magic.Link</p>
                                                        </div>

                                                        <div className="step-item">
                                                            <div className="step-circle">2</div>
                                                            <p>
                                                                Export your private key and securely store the private key displayed.
                                                            </p>
                                                        </div>

                                                        <div className="step-item">
                                                            <div className="step-circle">3</div>
                                                            <p>Log out of Magic.Link</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text-start">
                                                    <Button className="sitebtn">Start Export</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>




        </div>
    )
}

export default function ProfileSettingsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProfileSettingsContent />
        </Suspense>
    )
}
