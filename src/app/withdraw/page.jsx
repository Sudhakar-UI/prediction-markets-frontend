"use client"
import React from 'react'
import { Container, Form, Button } from 'react-bootstrap'

export default function WithdrawPage() {

    return (
        <div className='innerpages '>
            <div className='withdraw-page'>
                <Container >
                    <div className="gridparentbox">
                        <h2 className="inner-heading-title">Withdraw</h2>
                        <div className="withdraw-container">
                            <div className="form-wrapper siteformbg">

                                {/* Step 1 */}
                                <div className="step-item">
                                    <div className="step-circle active">1</div>
                                    <div className="step-content">
                                        <label>Coin/Token<span>*</span></label>
                                        <Form.Select>
                                            <option>BTC</option>
                                        </Form.Select>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="step-item">
                                    <div className="step-circle active">2</div>
                                    <div className="step-content">
                                        <label>Network<span>*</span></label>
                                        <Form.Select>
                                            <option>BTC</option>
                                        </Form.Select>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="step-item">
                                    <div className="step-circle">3</div>
                                    <div className="step-content">
                                        <label>Withdraw Address<span>*</span></label>
                                        <Form.Control placeholder="Enter the withdraw address" />

                                        <div className="percentage-buttons">
                                            <Button>25%</Button>
                                            <Button>50%</Button>
                                            <Button>75%</Button>
                                            <Button>100%</Button>
                                        </div>
                                    </div>
                                </div>

                                <Button className="submit-btn">Submit</Button>

                                {/* Bottom Card */}
                                <div className="info-card">
                                    <div>
                                        <p>Min Withdraw</p>
                                        <span>0.00021007 BTC</span>
                                    </div>
                                    <div>
                                        <p>Max Withdraw</p>
                                        <span>210.06503508 BTC</span>
                                    </div>
                                    <div>
                                        <p>Available Balance</p>
                                        <span>0.00000000 BTC</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </Container>
            </div>
        </div>
    )
}
