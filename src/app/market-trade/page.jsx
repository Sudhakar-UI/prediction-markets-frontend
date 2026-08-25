"use client"
import React, { useState, useEffect } from 'react'
import { Container, Tabs, Tab, TabContainer, TabPane, TabContent, NavLink, NavItem, Nav, Image, Row, Col, Accordion, AccordionItem, AccordionBody, AccordionHeader, Form, FormLabel, FormGroup, FormControl, FormSelect, FormCheck, InputGroup, Button, Modal, ModalHeader, ModalTitle, ModalBody, Table, OverlayTrigger, Tooltip, Pagination, Dropdown } from 'react-bootstrap'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleLeft,
    faPlus, faMinus, faCircleInfo
} from '@fortawesome/free-solid-svg-icons';
import { BookMarkIcon, InfoIcon, LinkIcon, MoneyIcon, ShieldIcon, BallIcon, BitCoinIcon, FinanceIcon, ListIcon, MediaIcon, MetalsIcon, MicIcon, TechIcon, CopyIcon } from '../components/HomeIcons';
import CryptoChart from './CryptoChart';
import Skeleton from '../components/Skeleton';

export default function MarketTrade() {

    const [limitTab, setLimitTab] = useState('Limit');
    const [showMoreContext, setShowMoreContext] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const [count, setCount] = useState(0);

    const handleCount = (e, type) => {
        e.stopPropagation();
        if (type === 'increment') {
            setCount(prev => prev + 1);
        } else if (type === 'decrement' && count > 0) {
            setCount(prev => Math.max(0, prev - 1));
        }
    }

    const handleCountInput = (e) => {
        const val = e.target.value;
        if (val === '' || /^\d+$/.test(val)) {
            setCount(val === '' ? '' : Number(val));
        }
    }

    return (
        <div>
            <section>
                <Container className='market-trade'>
                    <Row>
                        <Col lg={8}>
                            <div className='panel-flex'>
                                <div className='panelcontentbox'>
                                    <div className='panel-heading-align'>
                                        <div>
                                            {isLoading ? (
                                                <Skeleton width="75px" height="60px" style={{ borderRadius: "50%" }} />
                                            ) : (
                                                <Image src="/assets/images/world-icon.png"></Image>
                                            )}
                                            <div className='d-flex flex-column gap-1 w-100'>
                                                {isLoading ? (
                                                    <Skeleton width="120px" height="15px" variant="text" />
                                                ) : (
                                                    <span>Politics - Ukraine</span>
                                                )}
                                                {isLoading ? (
                                                    <Skeleton width="280px" height="18px" variant="text" />
                                                ) : (
                                                    <h6 className='subhead mb-0'>Will Russia enter Mykhailivka by April 30?</h6>
                                                )}
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center gap-2'>
                                            <LinkIcon size={24} color='#74717A' />
                                            <BookMarkIcon size={24} color='#74717A' />
                                        </div>
                                    </div>

                                    <div className='mt-5'>
                                        {isLoading ? (
                                            <Skeleton width="100%" height="300px" variant="text" />
                                        ) : (
                                            <CryptoChart />
                                        )}
                                    </div>
                                </div>


                                {/* Order Book */}
                                <Accordion className='order-book-accordion' defaultActiveKey="0">
                                    <AccordionItem eventKey="0">
                                        <AccordionHeader>Order Book <FontAwesomeIcon icon={faCircleInfo} className='ms-1' color='#74717A' /></AccordionHeader>
                                        <AccordionBody>
                                            <div className='table-responsive'>
                                                <Table className='order-book-table m-0 position-relative'>
                                                    <thead>
                                                        <tr>
                                                            <th>Trades Yes</th>
                                                            <th>Price</th>
                                                            <th>Shares</th>
                                                            <th>Total</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span className='ordervolumebg bg-red' style={{ width: "1%" }}></span>
                                                            </td>
                                                            <td className='t-red'>18¢</td>
                                                            <td>29.80</td>
                                                            <td>$328.28</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className='ordervolumebg bg-red' style={{ width: "1%" }}></span>
                                                            </td>
                                                            <td className='t-red'>17¢</td>
                                                            <td>728.80</td>
                                                            <td>$322.92</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className='ordervolumebg bg-red' style={{ width: "1%" }}></span>
                                                            </td>
                                                            <td className='t-red'>16¢</td>
                                                            <td>331.14</td>
                                                            <td>$199.02</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className='ordervolumebg bg-red' style={{ width: "3%" }}></span>
                                                            </td>
                                                            <td className='t-red'>15¢</td>
                                                            <td>320.00</td>
                                                            <td>$146.04</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className='ordervolumebg bg-red' style={{ width: "3%" }}></span>
                                                            </td>
                                                            <td className='t-red'>14¢</td>
                                                            <td>700.28</td>
                                                            <td>$98.04</td>
                                                        </tr>
                                                    </tbody>
                                                    <thead>
                                                        <tr>
                                                            <th>Last: 14¢</th>
                                                            <th>Spread: 1¢</th>
                                                            <th></th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span className='ordervolumebg bg-green' style={{ width: "5%" }}></span>
                                                            </td>
                                                            <td className='t-green'>18¢</td>
                                                            <td>29.80</td>
                                                            <td>$328.28</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className='ordervolumebg bg-green' style={{ width: "7%" }}></span>
                                                            </td>
                                                            <td className='t-green'>17¢</td>
                                                            <td>728.80</td>
                                                            <td>$322.92</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className='ordervolumebg bg-green' style={{ width: "10%" }}></span>
                                                            </td>
                                                            <td className='t-green'>16¢</td>
                                                            <td>331.14</td>
                                                            <td>$199.02</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className='ordervolumebg bg-green' style={{ width: "15%" }}></span>
                                                            </td>
                                                            <td className='t-green'>15¢</td>
                                                            <td>320.00</td>
                                                            <td>$146.04</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <span className='ordervolumebg bg-green' style={{ width: "20%" }}></span>
                                                            </td>
                                                            <td className='t-green'>14¢</td>
                                                            <td>700.28</td>
                                                            <td>$98.04</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </AccordionBody>
                                    </AccordionItem>
                                </Accordion>

                                {/* Rules and Market Context */}

                                <div className='rules-market-wrp panelcontentbox mt-0'>
                                    <Tabs
                                        defaultActiveKey="rules"
                                        className="rules-market-tabs"
                                    >
                                        <Tab
                                            eventKey="rules"
                                            title={
                                                <span>Rules</span>
                                            }
                                        >
                                            <p className='mt-4'>This market will resolve to “Yes” if, according to the ISW map, Russia captures any territory of Mykhailivka, Sumy Oblast, (50.797758° N, 35.315210° E) between market creation and the specified date (ET).... Show more</p>

                                            <hr className='mt-4' />

                                            <div className='rules-market-tabs-wrp'>
                                                <Tabs
                                                    defaultActiveKey="comments"
                                                    className="rules-market-tabs"
                                                >
                                                    <Tab
                                                        eventKey="comments"
                                                        title={
                                                            <span>Comments</span>
                                                        }
                                                    >

                                                        <div className='siteformbg'>
                                                            <Form className='mt-4'>
                                                                <FormControl placeholder='Add a comment' />
                                                                <Button className='sitebtn mt-2'>Post</Button>
                                                            </Form>
                                                        </div>

                                                        <hr />

                                                        <div className='rules-filters'>
                                                            <Form className='filter-form'>
                                                                <FormSelect>
                                                                    <option>Newest</option>
                                                                    <option>Oldest</option>
                                                                    <option>Most Liked</option>
                                                                    <option>Most Commented</option>
                                                                </FormSelect>

                                                                <FormGroup className='d-flex gap-2'>
                                                                    <FormCheck type='checkbox' id='holders' />
                                                                    <FormLabel htmlFor='holders' className='mb-0'>Holders</FormLabel>
                                                                </FormGroup>
                                                            </Form>

                                                            <div>
                                                                <ShieldIcon size={18} color='#A4A1AA' />
                                                                <span>Beware of external links.</span>
                                                            </div>
                                                        </div>

                                                        <div className='no-cmts'>
                                                            <p>No comments</p>
                                                        </div>

                                                        <hr className='mt-0' />

                                                        <div className='rules-faq-section'>
                                                            <h6 className='subhead'>Frequently Asked Questions</h6>

                                                            <Accordion defaultActiveKey="0" className='mt-4'>
                                                                <AccordionItem eventKey="0">
                                                                    <AccordionHeader>What is the "Will Russia enter Mykhailivka by April 30?" prediction market?</AccordionHeader>
                                                                    <AccordionBody>Polymarket is a prediction market platform where users can create and trade on market predictions. The "Will Russia enter Mykhailivka by April 30?" prediction market is a market that allows users to bet on whether or not Russia will enter Mykhailivka by April 30.</AccordionBody>
                                                                </AccordionItem>
                                                                <AccordionItem eventKey="1">
                                                                    <AccordionHeader>How much trading activity has "Will Russia enter Mykhailivka by April 30?" generated on Polymarket?</AccordionHeader>
                                                                    <AccordionBody>Polymarket is a prediction market platform where users can create and trade on market predictions. The "Will Russia enter Mykhailivka by April 30?" prediction market is a market that allows users to bet on whether or not Russia will enter Mykhailivka by April 30.</AccordionBody>
                                                                </AccordionItem>
                                                                <AccordionItem eventKey="2">
                                                                    <AccordionHeader>How do I trade on "Will Russia enter Mykhailivka by April 30?"?</AccordionHeader>
                                                                    <AccordionBody>Polymarket is a prediction market platform where users can create and trade on market predictions. The "Will Russia enter Mykhailivka by April 30?" prediction market is a market that allows users to bet on whether or not Russia will enter Mykhailivka by April 30.</AccordionBody>
                                                                </AccordionItem>
                                                                <AccordionItem eventKey="3">
                                                                    <AccordionHeader>What are the current odds for "Will Russia enter Mykhailivka by April 30?"?</AccordionHeader>
                                                                    <AccordionBody>Polymarket is a prediction market platform where users can create and trade on market predictions. The "Will Russia enter Mykhailivka by April 30?" prediction market is a market that allows users to bet on whether or not Russia will enter Mykhailivka by April 30.</AccordionBody>
                                                                </AccordionItem>
                                                                <AccordionItem eventKey="4">
                                                                    <AccordionHeader>How will "Will Russia enter Mykhailivka by April 30?" be resolved?</AccordionHeader>
                                                                    <AccordionBody>Polymarket is a prediction market platform where users can create and trade on market predictions. The "Will Russia enter Mykhailivka by April 30?" prediction market is a market that allows users to bet on whether or not Russia will enter Mykhailivka by April 30.</AccordionBody>
                                                                </AccordionItem>
                                                            </Accordion>

                                                            <div className='d-flex justify-content-center mt-4'>
                                                                <Button className='faq-btn'>View More</Button>
                                                            </div>

                                                        </div>

                                                    </Tab>
                                                    <Tab
                                                        eventKey="topholders"
                                                        title={
                                                            <span>Top Holders</span>
                                                        }
                                                    >


                                                        <div>

                                                        </div>
                                                    </Tab>
                                                    <Tab
                                                        eventKey="positions"
                                                        title={
                                                            <span>Positions</span>
                                                        }
                                                    >


                                                        <div>

                                                        </div>
                                                    </Tab>
                                                    <Tab
                                                        eventKey="activity"
                                                        title={
                                                            <span>Activity</span>
                                                        }
                                                    >


                                                        <div>

                                                        </div>
                                                    </Tab>
                                                </Tabs>
                                            </div>
                                        </Tab>
                                        <Tab
                                            eventKey="market-context"
                                            title={
                                                <span>Market Context</span>
                                            }
                                        >
                                            <p className={`mt-4 mb-0 ${!showMoreContext ? 'clamped' : ''}`}>On May 28, 2025, the U.S. Court of International Trade ruled that Donald Trump exceeded his authority under the International Emergency Economic Powers Act (IEEPA) by imposing a series of broad tariffs. The ruling blocked several major measures, including the “Liberation Day” tariffs—a 10% tariff on all imports and country-specific rates of up to 50%—as well as additional tariffs targeting Canadian, Mexican, and Chinese goods. The Trump administration has filed a single consolidated appeal of this decision, titled V.O.S. Selections, Inc. v. United States. This market will resolve to “Yes” if, by June 30, 2026, 11:59 PM ET, both of the following occur:. The Trump administration’s appeal in V.O.S. Selections, Inc. v. United States is denied, in whole or in part. U.S. importers receive refunds of at least some tariffs invalidated by the May 28, 2025 ruling, where such refunds occur as a consequence of the denial, in whole or in part, of the Trump administration’s appeal. Otherwise, this market will resolve to "No".Announcements, court orders, or plans to issue refunds will not be sufficient for resolution unless actual refunds are issued within the market timeframe. For purposes of this market, a “refund” includes direct payments, credits, or offsets issued to importers by U.S. Customs and Border Protection or the U.S. Treasury reflecting repayment of previously collected tariffs.If the appeal is fully upheld and no refunds are issued, this market will resolve to “No”. The primary resolution source will be official government or court information, or a consensus of credible reporting.</p>
                                            <span className='show-more-btn alink' onClick={() => setShowMoreContext(!showMoreContext)}>{showMoreContext ? 'Show less' : 'Show more'}</span>

                                            <hr className='mt-4' />
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>

                        </Col>

                        <Col lg={4}>
                            <div className='buysell-panel panelcontentbox'>
                                <div className='buysell-panel-tabs-wrp buysell-panel-tabs'>
                                    <TabContainer
                                        defaultActiveKey="buy"
                                    >
                                        <div className='buy-sell-opt'>
                                            <Nav variant="tabs" className="mb-1">
                                                <NavItem>
                                                    <NavLink eventKey="buy">Buy</NavLink>
                                                </NavItem>
                                                <NavItem>
                                                    <NavLink eventKey="sell">Sell</NavLink>
                                                </NavItem>
                                                {/* <FormSelect
                                                    className='ms-auto'
                                                    value={limitTab}
                                                    onChange={(e) => setLimitTab(e.target.value)}
                                                >
                                                    <option value="limit">Limit</option>
                                                    <option value="market">Market</option>
                                                </FormSelect> */}

                                                <Dropdown align="end" className='ms-auto'>
                                                    <Dropdown.Toggle className="custom-select-btn">
                                                        {limitTab}
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu className="custom-dropdown">
                                                        <Dropdown.Item onClick={() => setLimitTab("Market")}>
                                                            Market
                                                        </Dropdown.Item>

                                                        <Dropdown.Item onClick={() => setLimitTab("Limit")}>
                                                            Limit
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Nav>

                                        </div>
                                        <TabContent>
                                            <TabPane eventKey="buy">
                                                <div className='d-flex gap-2 mt-3'>
                                                    <Button className='yes-btn'>Yes 14.3¢</Button>
                                                    <Button className='no-btn'>No 87¢</Button>
                                                </div>

                                                <FormGroup className='counter-wrp'>
                                                    <FormLabel>Limit Price</FormLabel>
                                                    <InputGroup>
                                                        <InputGroup.Text className='count-handler' onClick={(e) => handleCount(e, 'decrement')}>
                                                            <FontAwesomeIcon icon={faMinus} />
                                                        </InputGroup.Text>
                                                        <FormControl type="text" placeholder="0" value={count} onChange={handleCountInput} />
                                                        <InputGroup.Text className='count-handler' onClick={(e) => handleCount(e, 'increment')}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                </FormGroup>

                                                <hr />

                                                {limitTab === 'Limit' && (
                                                    <div className='mt-2 limit-wrp-tab'>
                                                        <FormGroup className='shares-wrap'>
                                                            <FormLabel>Shares</FormLabel>
                                                            <FormControl placeholder='0' />
                                                        </FormGroup>
                                                        <div className='add-on-wrp'>
                                                            <Button className='btn-sm'>-100</Button>
                                                            <Button className='btn-sm'>-50</Button>
                                                            <Button className='btn-sm'>+10</Button>
                                                            <Button className='btn-sm'>+100</Button>
                                                            <Button className='btn-sm'>+20</Button>
                                                        </div>
                                                        <div className='exp-toggle-wrp'>
                                                            <span>Set Expiration</span>
                                                            <label className="toggle-switch">
                                                                <input type="checkbox" id="toggle" />
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                        <div className='total-wrp'>
                                                            <span>Total</span>
                                                            <span>$0</span>
                                                        </div>
                                                        <div className='win-wrp'>
                                                            <span>To Win <OverlayTrigger
                                                                placement="top"
                                                                overlay={<Tooltip id="to-win-tooltip">
                                                                    <div className='tooltip-wrp'>
                                                                        <span>Price</span>
                                                                        <span>$0.01</span>
                                                                    </div>
                                                                </Tooltip>}
                                                            >
                                                                <span>
                                                                    <InfoIcon size="16" color="#74717A" />
                                                                </span>
                                                            </OverlayTrigger></span>
                                                            <span><MoneyIcon size='20' color='#359A5E' />$0</span>
                                                        </div>
                                                        <Button className='sitebtn'>Trade</Button>
                                                        <p className='mt-2'>By trading, you agree to the <Link href="#0" className='alink'>Terms of Use.</Link></p>
                                                    </div>
                                                )}

                                                {limitTab === 'Market' && (
                                                    <div className='market-wrp-tab'>
                                                        <FormGroup className='mamount-wrp'>
                                                            <FormLabel>Amount</FormLabel>
                                                            <FormControl placeholder='0' type='number' />
                                                        </FormGroup>
                                                        <div className='add-on-wrp'>
                                                            <Button className='btn-sm'>+100</Button>
                                                            <Button className='btn-sm'>+5</Button>
                                                            <Button className='btn-sm'>+10</Button>
                                                            <Button className='btn-sm'>+100</Button>
                                                            <Button className='btn-sm'>Max</Button>
                                                        </div>
                                                        <Button className='sitebtn'>Trade</Button>
                                                        <p className='mt-2'>By trading, you agree to the <Link href="#0" className='alink'>Terms of Use.</Link></p>
                                                    </div>
                                                )}
                                            </TabPane>
                                            <TabPane eventKey="sell">
                                                <div className='d-flex gap-2 mt-3'>
                                                    <Button className='yes-btn'>Yes 14.3¢</Button>
                                                    <Button className='no-btn'>No 87¢</Button>
                                                </div>

                                                <FormGroup className='counter-wrp'>
                                                    <FormLabel>Limit Price</FormLabel>
                                                    <InputGroup>
                                                        <InputGroup.Text className='count-handler' onClick={(e) => handleCount(e, 'decrement')}>
                                                            <FontAwesomeIcon icon={faMinus} />
                                                        </InputGroup.Text>
                                                        <FormControl type="text" placeholder="0" value={count} onChange={handleCountInput} />
                                                        <InputGroup.Text className='count-handler' onClick={(e) => handleCount(e, 'increment')}>
                                                            <FontAwesomeIcon icon={faPlus} />
                                                        </InputGroup.Text>
                                                    </InputGroup>
                                                </FormGroup>

                                                <hr />

                                                {limitTab === 'Limit' && (
                                                    <div className='mt-2 limit-wrp-tab'>
                                                        <FormGroup className='shares-wrap'>
                                                            <FormLabel>Shares</FormLabel>
                                                            <FormControl placeholder='0' />
                                                        </FormGroup>
                                                        <div className='add-on-wrp'>
                                                            <Button className='btn-sm'>-100</Button>
                                                            <Button className='btn-sm'>-50</Button>
                                                            <Button className='btn-sm'>+10</Button>
                                                            <Button className='btn-sm'>+100</Button>
                                                            <Button className='btn-sm'>+20</Button>
                                                        </div>
                                                        <div className='exp-toggle-wrp'>
                                                            <span>Set Expiration</span>
                                                            <label className="toggle-switch">
                                                                <input type="checkbox" id="toggle" />
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                        <div className='win-wrp'>
                                                            <span>You'll receive <InfoIcon size='16' color='#74717A' /></span>
                                                            <span><MoneyIcon size='20' color='#359A5E' />$0</span>
                                                        </div>
                                                        <Button className='sitebtn'>Trade</Button>
                                                        <p className='mt-2'>By trading, you agree to the <Link href="#0" className='alink'>Terms of Use.</Link></p>
                                                    </div>
                                                )}

                                                {limitTab === 'Market' && (
                                                    <div className='market-wrp-tab'>
                                                        <FormGroup className='mamount-wrp'>
                                                            <FormLabel>Shares</FormLabel>
                                                            <FormControl placeholder='0' type='number' />
                                                        </FormGroup>
                                                        <div className='add-on-wrp'>
                                                            <Button className='btn-sm'>25%</Button>
                                                            <Button className='btn-sm'>50%</Button>
                                                            <Button className='btn-sm'>Max</Button>
                                                        </div>
                                                        <Button className='sitebtn'>Trade</Button>
                                                        <p className='mt-2'>By trading, you agree to the <Link href="#0" className='alink'>Terms of Use.</Link></p>
                                                    </div>
                                                )}
                                            </TabPane>
                                        </TabContent>
                                    </TabContainer>

                                </div>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </div>
    )
}
