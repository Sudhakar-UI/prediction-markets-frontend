"use client"
import React from 'react'
import { useRef, useState } from "react";
import { Container, Button, FormControl, Form, FormGroup, FormLabel } from 'react-bootstrap'

export default function BuilderSettingsPage() {

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
    const [isOn, setIsOn] = useState(false);
    return (
        <div className='innerpages '>
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
    )
}
