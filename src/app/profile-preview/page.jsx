"use client"
import React from 'react'
import UserHeader from '../components/UserHeader'
import { Container, Tabs, Tab, Row, Col, Image, Button, InputGroup, FormControl, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBitcoinSign, faThLarge, faFootball, faMicrophone, faChartLine, faBarsProgress, faLaptop, faNewspaper, faSearch } from '@fortawesome/free-solid-svg-icons'
import Homefooter from '../components/Homefooter'
import { BookMarkIcon, CopyIcon, FilterIcon, HandPackageIcon, UploadIcon, BallIcon, BitCoinIcon, FinanceIcon, ListIcon, MediaIcon, MetalsIcon, MicIcon, TechIcon } from '../components/HomeIcons'
import ProfilePreviewChart from './ProfilePreviewChart'

export default function ProfilePreview() {
    return (
        <div className='profile-preview-page'>
            <Container>
                <div className='profile-preview-container mt-4'>
                    <Row className='mt-4 row-gap-3'>
                        <Col lg={6} md={6} sm={12}>
                            <div className="panelcontentbox h-100">
                                <div className='pro-preview-panel1'>
                                    <div className='panel-heading-align'>
                                        <div>
                                            <div>
                                                <Image src="/assets/images/world-icon.png"></Image>
                                            </div>
                                            <div className='d-flex flex-column gap-1'>
                                                <h6 className='subhead mb-0'>KeyTransporter</h6>
                                                <span>Joined Jan 2026 · 7.6K views</span>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'>
                                            <CopyIcon size={20} color='#74717A' />
                                            <HandPackageIcon size={22} color='#74717A' />
                                            <BookMarkIcon size={24} color='#74717A' />
                                        </div>
                                    </div>
                                    <div className='pro-preview-content-cont'>
                                        <div className='pro-preview-content'>
                                            <div>
                                                <h6 className='subhead'>$0.00</h6>
                                                <span>Positions Value</span>
                                            </div>
                                            <div>
                                                <h6 className='subhead'>$2.0M</h6>
                                                <span>Biggest Win</span>
                                            </div>
                                            <div>
                                                <h6 className='subhead'>14</h6>
                                                <span>Predictions</span>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'>
                                            <Button className='sitebtn w-100'>Deposit</Button>
                                            <Button className='sitebtn w-100'>Withdraw</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className='panelcontentbox'>
                                <ProfilePreviewChart />
                            </div>
                        </Col>
                    </Row>
                    <div className='panelcontentbox preview-panel-tabs my-4'>
                        <Tabs defaultActiveKey={"potns"}>
                            <Tab title={
                                <span>Positions</span>
                            } eventKey={"potns"}>
                                <div className='mt-3'>
                                    <Row className='align-items-center row-gap-3'>
                                        <Col lg={2}>
                                            <Tabs defaultActiveKey={"activetb"} className='preview-sts-tab'>
                                                <Tab title={
                                                    <span>Active</span>
                                                } eventKey={"activetb"}>
                                                </Tab>
                                                <Tab title={
                                                    <span>Closed</span>
                                                } eventKey={"closedtb"}>
                                                </Tab>
                                            </Tabs>
                                        </Col>
                                        <Col lg={9}>
                                            <InputGroup className="siteformbg filter-srch">
                                                <InputGroup.Text id="basic-search"><FontAwesomeIcon icon={faSearch} color='#74717A' /></InputGroup.Text>
                                                <FormControl
                                                    aria-describedby="basic-search"
                                                />
                                            </InputGroup>
                                        </Col>
                                        <Col lg={1}>
                                            <Button className='filter-btn'><FilterIcon size={15} color='#A4A1AA' /> Filter</Button>
                                        </Col>
                                    </Row>

                                    <div className="preview-panel-tb mt-4">
                                        <div className='table-responsive'>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>MARKET</th>
                                                        <th>AVG</th>
                                                        <th>Current</th>
                                                        <th>Value</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td data-label="MARKET">
                                                            <div className="market-cell">
                                                                <Image src="/assets/images/table-icons1.png" alt="icon" className="market-icon" />
                                                                <div>
                                                                    <div className="market-title">
                                                                        What is the "Will Russia enter Mykhailivka by April 30?" prediction market?
                                                                    </div>

                                                                    <div className="market-meta">
                                                                        <span className="yes-badge">Yes 63.7¢</span>
                                                                        <span className="shares">586,905.6 shares</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td data-label="AVG" className="text-end avg-col">63.7¢</td>
                                                        <td data-label="Current" className="text-end current-col">0¢</td>

                                                        <td data-label="Value" className="text-end value-col">
                                                            <span>$0.00</span>
                                                            <div className="negative-value">-$379,996.82 (100%)</div>
                                                        </td>

                                                        <td className="text-end">
                                                            <span className="download-icon"><UploadIcon size={15} color='#A4A1AA' /></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div className="market-cell">
                                                                <Image src="/assets/images/table-icons2.png" alt="icon" className="market-icon" />
                                                                <div>
                                                                    <div className="market-title">
                                                                        Will Club Atlético de Madrid win on 2026-02-08?
                                                                    </div>

                                                                    <div className="market-meta">
                                                                        <span className="yes-badge">Yes 68¢</span>
                                                                        <span className="shares">727,353.3 shares</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="text-end avg-col">68¢</td>
                                                        <td className="text-end current-col">0¢</td>

                                                        <td className="text-end value-col">
                                                            <span>$0.00</span>
                                                            <div className="negative-value">-$494,600.21 (-100%)</div>
                                                        </td>

                                                        <td className="text-end">
                                                            <span className="download-icon">
                                                                <UploadIcon size={15} color='#A4A1AA' />
                                                            </span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>

                                    </div>

                                </div>
                            </Tab>
                            <Tab title={
                                <span>Activity</span>
                            } eventKey={"actviy"}>
                                2
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </Container>
        </div>
    )
}
