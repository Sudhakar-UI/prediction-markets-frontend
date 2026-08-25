"use client"
import React, { useState } from 'react'
import { Container, Table, Badge, Button, Modal, ModalBody, ModalHeader, ModalTitle, Form, FormGroup, FormLabel, FormControl, Offcanvas, OffcanvasHeader, OffcanvasTitle, OffcanvasBody } from 'react-bootstrap'
import FileUpload from './FileUpload'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import AttachFileUpload from './AttachFileUpload'


export default function Support() {

    const [showTicketModal, setShowTicketModal] = useState(false);
    const [chatOffCanvas, setChatOffCanvas] = useState(false);
    const [showAttachImage, setShowAttachImage] = useState(false);

    const handleShowTicketModal = () => setShowTicketModal(true);
    const handleCloseTicketModal = () => setShowTicketModal(false);

    const handleShowChatOffCanvas = () => setChatOffCanvas(true);
    const handleCloseChatOffCanvas = () => setChatOffCanvas(false);

    const handleShowAttachImage = () => setShowAttachImage(true);
    const handleCloseAttachImage = () => setShowAttachImage(false);

    return (
        <>
            <div className='support-page'>
                <Container>
                    <div>
                        <div className='supportpage-head'>
                            <h2 className='subhead'>Support</h2>
                            <Button className='sitebtn btn-sm' onClick={handleShowTicketModal}>Create Ticket</Button>
                        </div>
                        <div className='panelcontentbox'>
                            <Table className="sitetable" id="table1" responsive={true}>
                                <thead>
                                    <tr>
                                        <th>Ticket ID</th>
                                        <th>Subject</th>
                                        <th>Status</th>
                                        <th>Created At</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>TY5632137</td>
                                        <td>How to use KYC process</td>
                                        <td><Badge bg="danger">Closed</Badge></td>
                                        <td>28/12/2025, 13:17:33 </td>
                                        <td><Button className="sitebtn btn-sm" onClick={handleShowChatOffCanvas}>Chat <span className="counticon">5</span></Button></td>
                                    </tr>
                                    <tr>
                                        <td>TY5632137</td>
                                        <td>How to use KYC process</td>
                                        <td><Badge bg="danger">Closed</Badge></td>
                                        <td>28/12/2025, 13:17:33 </td>
                                        <td><Button className="sitebtn btn-sm" onClick={handleShowChatOffCanvas}>Chat </Button></td>
                                    </tr>
                                    <tr>
                                        <td>TY5632137</td>
                                        <td>How to use KYC process</td>
                                        <td><Badge bg="danger">Closed</Badge></td>
                                        <td>28/12/2025, 13:17:33 </td>
                                        <td><Button className="sitebtn btn-sm" onClick={handleShowChatOffCanvas}>Chat </Button></td>
                                    </tr>
                                    <tr>
                                        <td>TY5632137</td>
                                        <td>How to use KYC process</td>
                                        <td><Badge bg="danger">Closed</Badge></td>
                                        <td>28/12/2025, 13:17:33 </td>
                                        <td><Button className="sitebtn btn-sm" onClick={handleShowChatOffCanvas}>Chat </Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </Container>
            </div>

            <Modal show={showTicketModal} onHide={handleCloseTicketModal}
                aria-labelledby="ticketModal"
                centered
                className='create-ticket-modal authmodal'>
                <ModalHeader closeButton>
                    <ModalTitle id="ticketModal">Create Tickets</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Form className='siteformbg'>
                        <FormGroup className="mb-3">
                            <FormLabel>Title</FormLabel>
                            <FormControl type="text" id="title" />
                        </FormGroup>
                        <FormGroup className='mb-3'>
                            <FormLabel>Enter your message</FormLabel>
                            <FormControl
                                as="textarea" rows={3}
                                name="Message" id="message" />
                        </FormGroup>
                        <FormGroup>
                            <FileUpload />
                        </FormGroup>
                        <div className="text-center mt-3">
                            <Button className='sitebtn' id="chatsubmit">Submit</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>


            <Offcanvas show={chatOffCanvas} onHide={handleCloseChatOffCanvas} placement='end' className="support-chat-offcanvas">
                <OffcanvasHeader closeButton>
                    <OffcanvasTitle>
                        Ticket ID : EX6276648
                    </OffcanvasTitle>
                </OffcanvasHeader>
                <OffcanvasBody className='chat-body'>
                    <div className='chat-message-list'>

                        {/* ADMIN */}
                        <div className="chat-row left">
                            <div className="chat-avatar">
                                <img src="/assets/images/admin-icon.png" alt="admin" />
                            </div>

                            <div className="chat-content">
                                <div className="chat-meta">
                                    <strong>Admin</strong> ( Mar 10, 2026 )
                                </div>

                                <div className="chat-bubble">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>

                                <div className="chat-bubble">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </div>
                        </div>


                        {/* USER */}
                        <div className="chat-row right">
                            <div className="chat-avatar">
                                <img src="/assets/images/chatprofile.svg" alt="user" />
                            </div>

                            <div className="chat-content">
                                <div className="chat-meta text-end">
                                    <strong>John</strong> ( Mar 10, 2026 )
                                </div>

                                <div className="chat-bubble">
                                    Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                </div>

                                <div className="chat-bubble">
                                    Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                </div>
                            </div>
                        </div>

                        {/* ADMIN */}
                        <div className="chat-row left">
                            <div className="chat-avatar">
                                <img src="/assets/images/admin-icon.png" alt="admin" />
                            </div>

                            <div className="chat-content">
                                <div className="chat-meta">
                                    <strong>Admin</strong> ( Mar 10, 2026 )
                                </div>

                                <div className="chat-bubble">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>

                                <div className="chat-bubble">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </div>
                        </div>

                        {/* USER */}
                        <div className="chat-row right">
                            <div className="chat-avatar">
                                <img src="/assets/images/chatprofile.svg" alt="user" />
                            </div>

                            <div className="chat-content">
                                <div className="chat-meta text-end">
                                    <strong>John</strong> ( Mar 10, 2026 )
                                </div>

                                <div className="chat-bubble">
                                    Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                </div>

                                <div className="chat-bubble">
                                    Curabitur bibendum ornare dolor, quis ullamcorper ligula sodales.
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='chat-message-box siteformbg'>
                        <div>
                            <FormLabel className='mb-2'>Enter your message</FormLabel>
                            <Button className='sitebtn btn-sm' onClick={handleShowAttachImage}>
                                <FontAwesomeIcon icon={faPaperclip} className='me-1' />
                                Attach Image
                            </Button>
                        </div>
                        <FormControl
                            as="textarea"
                            rows={4}
                            placeholder="Type your message..."
                            className='mt-3'
                        />
                        <div className='d-flex justify-content-center'>
                            <Button className='sitebtn btn-sm mt-3'>Submit</Button>
                        </div>
                    </div>
                </OffcanvasBody>
            </Offcanvas>


            <Modal show={showAttachImage} onHide={handleCloseAttachImage}
                aria-labelledby="attachImageModal"
                centered
                className='create-ticket-modal authmodal'>
                <ModalHeader closeButton>
                    <ModalTitle id="attachImageModal">Image Upload</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <Form className='siteformbg'>
                        <FormGroup>
                            <AttachFileUpload />
                        </FormGroup>
                        <div className="text-center mt-3">
                            <Button className='sitebtn' id="imagesubmit">Submit</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>

        </>

    )
}
