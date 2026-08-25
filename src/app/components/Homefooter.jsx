import React from "react";
import Link from 'next/link';
import { Container, Image, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import { faSearch, faBook, faIdCard, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Homefooter = () => {
    return (
        <footer className="homefooter">
            <section className="footer-gray-bg fnt-reg">
                <Container>
                    <Row className="row-gap-3">
                        <Col lg={4} md={6} sm={12}>
                            <div className="footlogo">
                                <Image src="assets/images/logo.svg" className="flogo" />
                            </div>
                            <p>Predict real-world outcomes and trade on what you believe will happen.
                                Turn insights into opportunities with transparent, data-driven markets.
                            </p>
                            <p>
                                Copyright © 2026 Predimark. All rights reserved.
                            </p>
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={6}>
                            <h3 className="h3">Menu</h3>
                            <ul className="foot-list">
                                <li><Link href="">Categories</Link></li>
                                <li><Link href="/">Live</Link></li>
                                <li><Link href="">Help</Link></li>
                                <li><Link href="/">Sign in</Link></li>
                                <li><Link href="">Sign Up</Link></li>
                            </ul>
                        </Col>
                        <Col lg={3} md={6} sm={6} xs={6}>
                            <h3 className="h3">Links</h3>
                            <ul className="foot-list">
                                <li><Link href="/markets">About</Link></li>
                                <li><Link href="/#features">Contact</Link></li>
                                <li><Link href="/#howitworks">Terms and conditions</Link></li>
                                <li><Link href="/#howitworks">Privacy policy</Link></li>
                            </ul>
                        </Col>
                        <Col lg={2} md={6} sm={12} xs={12}>
                            <h3 className="h3">Follow us on</h3>
                            <ul className="foot-list">
                                <li><Link href="/contact">X (Twitter)
                                </Link></li>
                                <li><Link href="/faq">Discord
                                </Link></li>
                                <li><Link href="/#mobileapp">Instagram
                                </Link></li>
                                <li><Link href="/contact">Reddit
                                </Link></li>
                                <li><Link href="/faq">TikTok</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>
        </footer>
    )
}
export default Homefooter