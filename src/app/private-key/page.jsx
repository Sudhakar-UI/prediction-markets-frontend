"use client"
import React from 'react'
import { Container, Image, Button, Alert } from 'react-bootstrap'

export default function PrivateKeyPage() {
    return (
        <div className='innerpages '>
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
    )
}
