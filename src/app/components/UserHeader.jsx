"use client"
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { Container, Navbar, Nav, Image, Modal, ModalHeader, ModalTitle, ModalBody, Button, FormGroup, FormLabel, FormSelect, FormControl, InputGroup, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faBars } from '@fortawesome/free-solid-svg-icons';
import { CopyCheckIcon, CopyIcon, InfoIcon, SettingsIcon } from '../components/HomeIcons';
import { usePathname } from "next/navigation";


const UserHeader = () => {

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1080) {
                document.getElementById("leftsidemenu")?.classList.remove("active");
                document.getElementById("backgroundoverlay")?.classList.remove("active");
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        document.body.classList.add('userpanelpage');
        document.body.classList.remove('loginbanner');
        return () => {
            document.body.classList.remove('userpanelpage');
        }
    }, [])
    // Deposit Modal
    const [showDepositModal, setShowDepositModal] = useState(false);
    const handleCloseDepositModal = () => setShowDepositModal(false);
    const handleShowDepositModal = () => setShowDepositModal(true);

    // Transfer Modal
    const [showTransferModal, setShowTransferModal] = useState(false);
    const handleCloseTransferModal = () => setShowTransferModal(false);
    const handleShowTransferModal = () => setShowTransferModal(true);

    return (
        <div>
            <header className="headermenu homeheader">
                <Navbar expand="lg" className="headbg">
                    <Container>
                        <Navbar.Brand><Link href="/"><Image src="assets/images/logo.svg" width={100} height={57} className="logo" alt="logo" /></Link></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="navbar-nav ms-auto port-y">
                                <Nav.Item><Link href="/#" className="nav-link">Portfolio <h5>$0.00</h5> </Link></Nav.Item>
                                <Nav.Item><Link href="/#" className="nav-link">Cash <h5>$0.00</h5></Link></Nav.Item>
                                <Nav.Item><Button href="#0" id="register" className="nav-link btn sitebtn me-3" onClick={handleShowDepositModal}>Deposit</Button></Nav.Item>
                                <Nav.Item>
                                    <Dropdown align="end" className="profile-ddowm">
                                        <DropdownToggle id="prodropdown">
                                            <Image src="assets/images/male.svg" width={100} height={57} className="logo" alt="logo" />
                                        </DropdownToggle>

                                        <DropdownMenu>

                                            <DropdownItem href="/profile-settings">
                                                <div className="profile-info">
                                                    <Image src="assets/images/male.svg" width={100} height={57} className="profile-info-icon" alt="logo" />
                                                    <div>
                                                        <h6 className="mb-0">John Smith</h6>
                                                    </div>
                                                </div>
                                            </DropdownItem>

                                            <div className="px-3">
                                                <hr className="my-1" />
                                            </div>

                                            <DropdownItem href="/profile-preview">Profile</DropdownItem>

                                            <DropdownItem href="#0">Account</DropdownItem>
                                            <DropdownItem href="#0">Trading</DropdownItem>
                                            <DropdownItem href="#0">Notification</DropdownItem>
                                            <DropdownItem href="#0">Builder Codes</DropdownItem>
                                            <DropdownItem href="#0">Private Key</DropdownItem>
                                            <DropdownItem href="#0">Support</DropdownItem>
                                            <div className="px-3">
                                                <hr className="my-1" />
                                            </div>
                                            <DropdownItem href="#0">Log Out</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </Nav.Item>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            {/* Deposit Modal */}
            <Modal
                show={showDepositModal}
                onHide={handleCloseDepositModal}
                centered
                className="authmodal depositmodal"
                size="md"
            >
                <ModalHeader closeButton>
                    <ModalTitle>Deposit</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <p className="mb-3 text-center mt-0">Balance : $0.00</p>
                    <hr />
                    <Button className='transfer-div bg-transparent border-0' onClick={() => { setShowDepositModal(false); setShowTransferModal(true); }}>
                        <div>
                            <Image src="/assets/images/transfer-icon.svg" alt="transfer-icon" />
                            <div>
                                <h6 className='subhead mb-0'>Transfer Crypto</h6>
                                <p className='m-0'>No limit • Instant</p>
                            </div>
                        </div>
                        <div>
                            <Image src="/assets/images/coins-icon.svg" alt="coins-icon" />
                        </div>
                    </Button>
                </ModalBody>
            </Modal>

            {/* Transfer Modal */}
            <Modal
                show={showTransferModal}
                onHide={handleCloseTransferModal}
                centered
                className="authmodal transfermodal"
                size="md"
            >
                <ModalHeader closeButton>
                    <Button onClick={() => { setShowTransferModal(false); setShowDepositModal(true); }} className='bg-transparent border-0'><FontAwesomeIcon icon={faAngleLeft} /></Button>
                    <ModalTitle>Transfer Crypto</ModalTitle>
                </ModalHeader>
                <ModalBody className='siteformbg'>
                    <p className="mb-3 text-center mt-0">Balance : $0.00</p>
                    <hr />
                    <div className='select-token'>
                        <FormGroup>
                            <FormLabel>Supported token</FormLabel>
                            <FormSelect>
                                <option>USDC</option>
                                <option>ETH</option>
                                <option>SOL</option>
                            </FormSelect>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel className='w-100'>Supported chain <span className='me-auto'>Min $10 <InfoIcon size={13} color='#A4A1AA' className="ms-1" /></span></FormLabel>
                            <FormSelect>
                                <option>Ethereum</option>
                            </FormSelect>
                        </FormGroup>
                    </div>
                    <div className='transfer-qr'>
                        <Image src="/assets/images/qrcode.png" alt="qr-code" />
                    </div>
                    <div className='d-flex justify-content-between align-items-center deposit-add mt-3'>
                        <span>Your deposit address <InfoIcon size={15} color='#A4A1AA' /></span>
                        <Link href="#0">Terms apply</Link>
                    </div>
                    <InputGroup className="mt-3">
                        <FormControl value="0xDdfdf8B1427b79E4aFA9Cec25B078Df7" readOnly />
                        <InputGroup.Text><CopyIcon size={15} color='#A4A1AA' /></InputGroup.Text>
                    </InputGroup>
                    <FormSelect className='mt-3'>
                        <option value="">Price Impact :0.00%</option>
                    </FormSelect>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default UserHeader