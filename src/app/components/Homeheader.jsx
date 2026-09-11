"use client"
import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import { Container, Navbar, Nav, Image, NavDropdown, Modal, ModalBody, ModalHeader, ModalTitle, Form, FormControl, FormSelect, FormLabel, FormGroup, Button, InputGroup, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Offcanvas, OffcanvasHeader, OffcanvasTitle, OffcanvasBody } from 'react-bootstrap';
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faBars, faEye, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { CopyCheckIcon, CopyIcon, InfoIcon, SettingsIcon } from '../components/HomeIcons';
import Skeleton from "./Skeleton";
import Select from "react-select";

const Homeheader = () => {

  const pathname = usePathname();
  const scrollRef = useRef();


  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [isSignInLoading, setIsSignInLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  // Deposit Modal
  const handleCloseDepositModal = () => setShowDepositModal(false);
  const handleShowDepositModal = () => setShowDepositModal(true);

  // Transfer Modal
  const handleCloseTransferModal = () => setShowTransferModal(false);
  const handleShowTransferModal = () => setShowTransferModal(true);

  const handleSignIn = () => {
    setIsSignInLoading(true);
    setTimeout(() => {
      setIsSignInLoading(false);
      handleClose1();
    }, 5000);
  };

  const [canvasShow, setCanvasShow] = useState(false);
  const handleCloseCanvas = () => setCanvasShow(false);
  const handleShowCanvas = () => setCanvasShow(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };


  return (
    <div>
      <header className="headermenu homeheader homeheader-x">
        <Navbar expand="lg" data-bs-theme="dark" className="headbg">
          <Container>
            <Navbar.Brand><Link href="/"><Image src="assets/images/logo.svg" width={100} height={57} className="logo" alt="logo" /></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShowCanvas} />
            <div className="d-lg-flex d-none align-items-center ms-auto">
              <Nav className="navbar-nav port-y">

                {/* <Nav.Item><Link href="/#" className="nav-link">Portfolio <h5>$0.00</h5> </Link></Nav.Item>
                <Nav.Item><Link href="/#" className="nav-link">Cash <h5>$0.00</h5></Link></Nav.Item> */}
                {/* <Nav.Item><Button href="#0" id="register" className="nav-link btn sitebtn me-3" onClick={handleShowDepositModal}>Deposit</Button></Nav.Item> */}
                {/* <Nav.Item>
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

                      <DropdownItem href="/profile-settings?tab=account">Account</DropdownItem>
                      <DropdownItem href="/profile-settings?tab=trading">Trading</DropdownItem>
                      <DropdownItem href="/profile-settings?tab=notifications">Notification</DropdownItem>
                      <DropdownItem href="/profile-settings?tab=buildercodes">Builder Codes</DropdownItem>
                      <DropdownItem href="/profile-settings?tab=privatekey">Private Key</DropdownItem>
                      <DropdownItem href="#0">Support</DropdownItem>
                      <div className="px-3">
                        <hr className="my-1" />
                      </div>
                      <DropdownItem href="#0">Log Out</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </Nav.Item> */}
                <Nav.Item>
                  {isLoading ? (
                    <Skeleton width="80px" height="30px" variant="rounded" className="me-1" />
                  ) : (
                    <Link href="#0" id="login" className="nav-link btn borderbtn me-1" onClick={handleShow1}>Sign in</Link>
                  )}
                </Nav.Item>
                <Nav.Item>
                  {isLoading ? (
                    <Skeleton width="80px" height="30px" variant="rounded" />
                  ) : (
                    <Link href="#0" id="register" className="nav-link btn sitebtn" onClick={handleShow}>Sign up</Link>
                  )}
                </Nav.Item>
              </Nav>
            </div>
          </Container>
        </Navbar>
        <Navbar expand="lg" data-bs-theme="dark" className="headbg category-menu">
          <Container className="justify-content-start">
            <div>
              <Button className="scroll-button btn-sm leftscroll sitebtn" onClick={scrollLeft}>
                <FontAwesomeIcon icon={faAngleLeft} />
              </Button>
            </div>
            

              <Nav className="navbar-nav port-y" ref={scrollRef} style={{ whiteSpace: "nowrap" }}>
                <Nav.Item><Link href="/" className={`nav-link ${pathname == "/" ? "active" : ""}`}>Trading</Link></Nav.Item>
                <Nav.Item><Link href="/#" className="nav-link">Crypto</Link></Nav.Item>

                <Nav.Item><Link href="/#" className="nav-link">Sports</Link></Nav.Item>

                <Nav.Item><Link href="/#" className="nav-link">Politics</Link></Nav.Item>

                <Nav.Item><Link href="/#" className="nav-link">Finance</Link></Nav.Item>

                <Nav.Item><Link href="/#" className="nav-link">Tech</Link></Nav.Item>
                <Nav.Item><Link href="/#" className="nav-link">Economy</Link></Nav.Item>
                <Nav.Item><Link href="/#" className="nav-link">Media</Link></Nav.Item>
                <Nav.Item><Link href="/#" className="nav-link">Climate & Science</Link></Nav.Item>
                <Nav.Item><Link href="/#" className="nav-link">Software products</Link></Nav.Item>
                <Nav.Item><Link href="/#" className="nav-link">Software</Link></Nav.Item>
                <Nav.Item><Link href="/#" className="nav-link">Software</Link></Nav.Item>

              </Nav>
            
            <div>
              <Button className="scroll-button btn-sm rightscroll sitebtn" onClick={scrollRight}>
                <FontAwesomeIcon icon={faAngleRight} />
              </Button>
            </div>
          </Container>
        </Navbar>
      </header>


      {/* SignUp Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="authmodal"
        size="md"
      >
        <ModalHeader closeButton>
          <ModalTitle>Sign Up</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p className="mb-3 text-center mt-0">Welcome to Predimark</p>
          <Form className="siteformbg">
            <FormGroup className="mb-3">
              <FormControl type="text" placeholder="Username" />
            </FormGroup>
            <FormGroup className="mb-3">
              <FormControl type="email" placeholder="Email Address" />
            </FormGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                type="password"
              />
              <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faEye} /></InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon2"
                type="password"
              />
              <InputGroup.Text id="basic-addon2"><FontAwesomeIcon icon={faEye} /></InputGroup.Text>
            </InputGroup>
            <div className="text-center">
              <Button className="sitebtn">Sign up</Button>
            </div>
            <p className="mb-0">Already have an account? <Link href="#" className="alink">Sign in</Link></p>
          </Form>
        </ModalBody>
      </Modal>


      {/* Sign In Modal */}
      <Modal
        show={show1}
        onHide={handleClose1}
        centered
        className="authmodal"
        size="md"
      >
        <ModalHeader closeButton>
          <ModalTitle>Sign In</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p className="mb-3 text-center mt-0">Welcome back to Predimark</p>
          <Form className="siteformbg">
            <FormGroup className="mb-3">
              <FormControl type="email" placeholder="Email Address" />
            </FormGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
                type="password"
              />
              <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faEye} /></InputGroup.Text>
            </InputGroup>
            <div className="text-center">
              <Button className="sitebtn" disabled={isSignInLoading} onClick={handleSignIn}>
                {isSignInLoading ? (
                  <><span className="custom-spinner"></span> Signing In...</>
                ) : (
                  "Sign In"
                )}
              </Button>
            </div>
            <p className="mb-0">Don’t have an account? <Link href="#" className="alink">Sign Up</Link></p>
          </Form>
        </ModalBody>
      </Modal>

      <Offcanvas show={canvasShow} id="offcanvasNavbar" onHide={handleCloseCanvas} className="home-offcanvas">
        <OffcanvasHeader closeButton>
          <OffcanvasTitle>
            <Image src="assets/images/logo.svg" width={100} height={57} className="logo" alt="logo" />
          </OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody>
          <Link href="/profile-preview" className="offcanvas-profile-info">
            <Image src="assets/images/male.svg" width={100} height={57} className="offcanvas-profile-icon" alt="logo" />
            <div>
              <h6 className="mb-0">John Smith</h6>
            </div>
          </Link>

          <hr />

          <div className="offcanvas-nav-link-align">
            <Link href="/profile" onClick={handleCloseCanvas} className="offcanvas-link">Profile</Link>
            <Link href="/withdraw" className="offcanvas-link">Account</Link>
            <Link href="#0" className="offcanvas-link">Trading</Link>
            <Link href="#0" className="offcanvas-link">Notification</Link>
            <Link href="#0" className="offcanvas-link">Builder Codes</Link>
            <Link href="#0" className="offcanvas-link">Private Key</Link>
            <Link href="#0" className="offcanvas-link">Support</Link>
          </div>

          <hr />

          <Link href="#0" className="offcanvas-lg-link">Log Out </Link>

        </OffcanvasBody>
      </Offcanvas>


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
              <Select
                // menuIsOpen={true}
                options={[
                  { image: '/assets/images/color/usdc.svg', value: 'USDC', label: 'USDC' },
                  { image: '/assets/images/color/eth.svg', value: 'ETH', label: 'ETH' },
                  { image: '/assets/images/color/sol.svg', value: 'SOL', label: 'SOL' }
                ]}
                defaultValue={{ image: '/assets/images/color/usdc.svg', value: 'USDC', label: 'USDC' }}
                formatOptionLabel={(option) => (
                  <div className="d-flex align-items-center gap-2">
                    {option.image && <Image src={option.image} alt={option.label} className="select-token-icon" />}
                    <span>{option.label}</span>
                  </div>
                )}
                className="react-select-container"
                classNamePrefix="react-select"
              />
            </FormGroup>
            <FormGroup>
              <FormLabel className='w-100'>Supported chain <span className='me-auto'>Min $10 <InfoIcon size={13} color='#A4A1AA' className="ms-1" /></span></FormLabel>
              <Select
                options={[
                  { image: '/assets/images/color/usdc.svg', value: 'USDC', label: 'USDC' },
                  { image: '/assets/images/color/eth.svg', value: 'ETH', label: 'ETH' },
                  { image: '/assets/images/color/sol.svg', value: 'SOL', label: 'SOL' }
                ]}
                defaultValue={{ image: '/assets/images/color/usdc.svg', value: 'USDC', label: 'USDC' }}
                formatOptionLabel={(option) => (
                  <div className="d-flex align-items-center gap-2">
                    {option.image && <Image src={option.image} alt={option.label} className="select-token-icon" />}
                    <span>{option.label}</span>
                  </div>
                )}
                className="react-select-container"
                classNamePrefix="react-select"
              />
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

export default Homeheader