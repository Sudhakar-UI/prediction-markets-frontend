"use client"
import React from 'react'
import { Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Image, Tabs, Tab, Form, FormControl, Button, FormSelect, FormGroup, FormCheck, FormLabel } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEllipsis, faBitcoinSign, faThLarge, faFootball, faMicrophone, faChartLine, faBarsProgress, faLaptop, faNewspaper } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { BookMarkIcon, LinkIcon, ShieldIcon, SettingsIcon, CodeIcon, UploadIcon, FavoriteIcon, CommentIcon, BallIcon, BitCoinIcon, FinanceIcon, ListIcon, MediaIcon, MetalsIcon, MicIcon, TechIcon } from '../components/HomeIcons';
import SportsChart from './SportsChart'
import MoneyLineGraph from './MoneyLineGraph'
import UserHeader from '../components/UserHeader'
import Homefooter from '../components/Homefooter'


export default function PostPreview() {

    const comments = [
        {
            username: 'Wet-Gaffer',
            time: '6h ago',
            text: 'Girl 👍👍',
            likes: 0,
            avatar: '/assets/images/cmt-profile1.png'
        },
        {
            username: 'Wet-Gaffer',
            time: '6h ago',
            text: '2-0?',
            likes: 0,
            avatar: '/assets/images/cmt-profile2.png'
        },
        {
            username: 'Wet-Gaffer',
            time: '6h ago',
            text: '0-0',
            likes: 0,
            avatar: '/assets/images/cmt-profile3.png'
        }
    ];

    const topLinks = [
        { label: 'Live', href: '#0' },
        { label: 'Futures', href: '#0' },
    ];

    const categoryLinks = [
        { label: 'NBA', href: '#0' },
        { label: 'NCAAB', href: '#0' },
        { label: 'NHL', href: '#0' },
        { label: 'UFC', href: '#0' },
        {
            label: 'Winter Games',
            isDropdown: true,
            dropdownItems: [
                { label: 'Alpine Skiing', href: '#0' },
                { label: 'Biathlon', href: '#0' },
                { label: 'Bobsleigh', href: '#0' },
                { label: 'Cross Country', href: '#0' },
                { label: 'Curling', href: '#0' }
            ]
        },
        {
            label: 'Football',
            isDropdown: true,
            dropdownItems: [
                { label: 'NFL', href: '#0' },
                { label: 'NCAA Football', href: '#0' },
                { label: 'CFL', href: '#0' },
                { label: 'XFL', href: '#0' },
                { label: 'AFL', href: '#0' },
            ]
        },
        {
            label: 'Basketball',
            isDropdown: true,
            dropdownItems: [
                { label: 'NBA', href: '#0' },
                { label: 'WNBA', href: '#0' },
                { label: 'EuroLeague', href: '#0' },
                { label: 'NCAAB', href: '#0' },
                { label: 'LNB', href: '#0' },
            ]
        },
        {
            label: 'Soccer',
            isDropdown: true,
            dropdownItems: [
                { label: 'Premier League', href: '#0' },
                { label: 'La Liga', href: '#0' },
                { label: 'Serie A', href: '#0' },
                { label: 'Bundesliga', href: '#0' },
                { label: 'Ligue 1', href: '#0' },
            ]
        },
        {
            label: 'Tennis',
            isDropdown: true,
            dropdownItems: [
                { label: 'Wimbledon', href: '#0' },
                { label: 'US Open', href: '#0' },
                { label: 'French Open', href: '#0' },
                { label: 'Australian Open', href: '#0' },
                { label: 'ATP Finals', href: '#0' },
            ]
        },
        {
            label: 'ESports',
            isDropdown: true,
            dropdownItems: [
                { label: 'League of Legends', href: '#0' },
                { label: 'CS:GO', href: '#0' },
                { label: 'Dota 2', href: '#0' },
                { label: 'Valorant', href: '#0' },
                { label: 'Overwatch', href: '#0' }
            ]
        },
        {
            label: 'Baseball',
            isDropdown: true,
            dropdownItems: [
                { label: 'MLB', href: '#0' },
                { label: 'NPB', href: '#0' },
                { label: 'KBO', href: '#0' },
                { label: 'CPBL', href: '#0' },
                { label: 'World Baseball Classic', href: '#0' },
            ]
        },
        {
            label: 'Hockey',
            isDropdown: true,
            dropdownItems: [
                { label: 'NHL', href: '#0' },
                { label: 'KHL', href: '#0' },
                { label: 'SHL', href: '#0' },
                { label: 'Liiga', href: '#0' },
                { label: 'DEL', href: '#0' },
                { label: 'World Championship', href: '#0' },
            ]
        },
        {
            label: 'Cricket',
            isDropdown: true,
            dropdownItems: [
                { label: 'IPL', href: '#0' },
                { label: 'Big Bash', href: '#0' },
                { label: 'Test Matches', href: '#0' },
                { label: 'ODI', href: '#0' },
                { label: 'T20 World Cup', href: '#0' }
            ]
        },
        {
            label: 'Rugby',
            isDropdown: true,
            dropdownItems: [
                { label: 'Premiership', href: '#0' },
                { label: 'Top 14', href: '#0' },
                { label: 'Super Rugby', href: '#0' },
                { label: 'Six Nations', href: '#0' },
                { label: 'Rugby World Cup', href: '#0' }
            ]
        },
        {
            label: 'Table Tennis',
            isDropdown: true,
            dropdownItems: [
                { label: 'World Cup', href: '#0' },
                { label: 'World Championships', href: '#0' },
                { label: 'ITTF Finals', href: '#0' },
                { label: 'Olympics', href: '#0' },
            ]
        },
        { label: 'Golf', href: '#0' },
        { label: 'Formula 1', href: '#0' },
        { label: 'Chess', href: '#0' },
        { label: 'Boxing', href: '#0' },
        { label: 'Pickleball', href: '#0' },
    ]



    return (
        <div>
            <section className='post-preview-page'>
                <Container>
                    <Tabs
                        defaultActiveKey="all"
                        className="category-tabs justify-content-center gap-3 border-0"
                    >
                        {/* All Tab */}
                        <Tab
                            eventKey="all"
                            title={
                                <div className="tab-box">
                                    <ListIcon size={24} />
                                    <span>All</span>
                                </div>
                            }
                        >
                            <Row className='row-gap-3'>
                                <Col lg={2}>
                                    <div className='stickybox panelcontentbox'>
                                        <div className='preview-links-align'>
                                            <ul>
                                                {topLinks.map((link, index) => (
                                                    <li key={index}><Link href={link.href}>{link.label}</Link></li>
                                                ))}
                                            </ul>
                                            <hr />
                                            <ul>
                                                {categoryLinks.map((item, index) => (
                                                    <li key={index}>
                                                        {item.isDropdown ? (
                                                            <Dropdown>
                                                                <DropdownToggle>
                                                                    {item.label}
                                                                </DropdownToggle>
                                                                <DropdownMenu>
                                                                    {item.dropdownItems?.map((dropdownItem, dropIndex) => (
                                                                        <DropdownItem key={dropIndex} href={dropdownItem.href}>
                                                                            {dropdownItem.label}
                                                                        </DropdownItem>
                                                                    ))}
                                                                </DropdownMenu>
                                                            </Dropdown>
                                                        ) : (
                                                            <Link href={item.href}>{item.label}</Link>
                                                        )}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={7}>
                                    <div className='panel-flex'>
                                        <div className='panelcontentbox'>
                                            <div className='post-head-align'>
                                                <div>
                                                    <span>Sports - La Liga</span>
                                                    <h6 className='subhead'>Club Atlético de Madrid vs Real Betis Balompié</h6>
                                                </div>
                                                <div>
                                                    <div className='d-flex align-items-center gap-2'>
                                                        <SettingsIcon size={20} color='#74717A' />
                                                        <CodeIcon size={20} color='#74717A' />
                                                        <BookMarkIcon size={20} color='#74717A' />
                                                        <UploadIcon size={18} color='#74717A' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='bet-team-div'>
                                                <div className='bet-team-box'>
                                                    <div>
                                                        <Image src="/assets/images/team1.png" className='team-icon'></Image>
                                                        <h6 className='subhead'>MAD</h6>
                                                    </div>
                                                    <div>
                                                        <h6 className='score'>0 - 1</h6>
                                                        <span className='subhead'>FINAL</span>
                                                    </div>
                                                    <div>
                                                        <Image src="/assets/images/team2.png" className='team-icon'></Image>
                                                        <h6 className='subhead'>BET</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <SportsChart />
                                        </div>

                                        <div className='panelcontentbox moneyline-box'>
                                            <div className='sources-head mb-3'>
                                                <h6 className='subhead'>Moneyline</h6>
                                                <span>$4M Vol.</span>
                                            </div>
                                            <Tabs defaultActiveKey={"graph1"}>
                                                <Tab title={
                                                    <span>Graph</span>
                                                } eventKey={"graph1"}>
                                                    <MoneyLineGraph />
                                                </Tab>
                                                <Tab title={
                                                    <span>About</span>
                                                } eventKey={"about1"}>
                                                    2
                                                </Tab>
                                            </Tabs>
                                        </div>

                                        <div className='panelcontentbox sources-box'>
                                            <div className='sources-head mb-3'>
                                                <h6 className='subhead'>Sources</h6>
                                                <span>$77.0K Vol.</span>
                                            </div>
                                            <Tabs defaultActiveKey={"graph2"}>
                                                <Tab title={
                                                    <span>Graph</span>
                                                } eventKey={"graph2"}>
                                                    <h6 className='subhead mt-4'>Rules</h6>
                                                    <p>This market will resolve to "Club Atlético de Madrid" if Club Atlético de Madrid win the game by 2 or more goals. Otherwise, this market will resolve to "Real Betis Balompié". If the game is postponed, this market will remain open until the game has been completed. If the game is canceled entirely, with no make-up game, this market will resolve 50–50. This market refers only to the outcome within the first 90 minutes of regular play plus stoppage time.</p>

                                                    <div>
                                                        <p className='mb-1'>End Date : Feb 8, 2026</p>
                                                        <p className='mb-0'>Created At : Feb 5, 2026, 2:41 PM ET</p>
                                                    </div>

                                                    <div className='sources-wrp'>
                                                        <h6 className='subhead mt-3'>Sources</h6>
                                                        <div className='sources-link-wrp'>
                                                            <div>
                                                                <LinkIcon size={32} color='#74717A' />
                                                                <div className='d-flex flex-column gap-1'>
                                                                    <p className='mb-0'>Resolution Source</p>
                                                                    <Link href="#0">https://www.laliga.com/</Link>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <LinkIcon size={32} color='#74717A' />
                                                                <div className='d-flex flex-column gap-1'>
                                                                    <p className='mb-0'>Resolution Source</p>
                                                                    <Link href="#0">0x65070BE91...</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab title={
                                                    <span>About</span>
                                                } eventKey={"about2"}>
                                                    2
                                                </Tab>
                                            </Tabs>
                                        </div>

                                        <div className='panelcontentbox sources-box'>
                                            <hr className='mb-2 mt-0' />

                                            <Tabs defaultActiveKey={"cmnts"}>
                                                <Tab title={
                                                    <span>Comments</span>
                                                } eventKey={"cmnts"}>
                                                    <div className=''>
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
                                                            </Form>

                                                            <div>
                                                                <ShieldIcon size={18} color='#A4A1AA' />
                                                                <span>Beware of external links.</span>
                                                            </div>

                                                        </div>
                                                        <hr />
                                                        <div className='comments-div'>
                                                            {comments.map((comment, index) => (
                                                                <React.Fragment key={index}>
                                                                    <div className="comment-item">
                                                                        <div className="comment-left">
                                                                            <Image src={comment.avatar} alt="profile" className="comment-avatar"></Image>
                                                                        </div>

                                                                        <div className="comment-right">
                                                                            <div className="comment-header">
                                                                                <div className="comment-user-info">
                                                                                    <span className="comment-username">{comment.username}</span>
                                                                                    <span className="comment-time">{comment.time}</span>
                                                                                </div>

                                                                                <div className="comment-menu"><FontAwesomeIcon icon={faEllipsis} /></div>
                                                                            </div>

                                                                            <div className="comment-text">
                                                                                {comment.text}
                                                                            </div>

                                                                            <div className="comment-actions">
                                                                                <span className="comment-like"><FavoriteIcon size={16} color='#74717A' /> {comment.likes}</span>
                                                                                <span className="comment-reply"><CommentIcon size={16} color='#74717A' /> Reply</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    {index < comments.length - 1 && <hr className="comment-divider" />}
                                                                </React.Fragment>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab title={
                                                    <span>Top Holders</span>
                                                } eventKey={"tp-holders"}>
                                                    2
                                                </Tab>
                                                <Tab title={
                                                    <span>Positions</span>
                                                } eventKey={"posnts"}>
                                                    3
                                                </Tab>
                                                <Tab title={
                                                    <span>Activity</span>
                                                } eventKey={"actvty"}>
                                                    4
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </div>

                                </Col>
                                <Col lg={3}>
                                    <div className='stickybox panelcontentbox'>
                                        <div className='outcome-div'>
                                            <FontAwesomeIcon icon={faCheckCircle} fontSize={60} color='#6300FF' />
                                            <h6 className='subhead'>Outcome: Yes</h6>
                                            <p>Real Betis Balompié</p>
                                            <p>By trading, you agree to the <Link href="#" className='alink'>Terms of Use.</Link></p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Tab>

                        {/* Crypto Tab */}
                        <Tab
                            eventKey="crypto"
                            title={
                                <div className="tab-box">
                                    <BitCoinIcon size={24} />
                                    <span>Crypto</span>
                                </div>
                            }
                        ></Tab>

                        {/* Sports Tab */}
                        <Tab
                            eventKey="sports"
                            title={
                                <div className="tab-box">
                                    <BallIcon size={24} />
                                    <span>Sports</span>
                                </div>
                            }
                        ></Tab>

                        {/* Politics Tab */}
                        <Tab
                            eventKey="politics"
                            title={
                                <div className="tab-box">
                                    <MicIcon size={24} />
                                    <span>Politics</span>
                                </div>
                            }
                        ></Tab>

                        {/* Finance Tab */}
                        <Tab
                            eventKey="finance"
                            title={
                                <div className="tab-box">
                                    <FinanceIcon size={24} />
                                    <span>Finance</span>
                                </div>
                            }
                        ></Tab>

                        {/* Metals Tab */}
                        <Tab
                            eventKey="metals"
                            title={
                                <div className="tab-box">
                                    <MetalsIcon size={24} />
                                    <span>Metals</span>
                                </div>
                            }
                        ></Tab>

                        {/* Tech Tab */}
                        <Tab
                            eventKey="tech"
                            title={
                                <div className="tab-box">
                                    <TechIcon size={24} />
                                    <span>Tech</span>
                                </div>
                            }
                        ></Tab>

                        {/* Media Tab */}
                        <Tab
                            eventKey="media"
                            title={
                                <div className="tab-box">
                                    <MediaIcon size={24} />
                                    <span>Media</span>
                                </div>
                            }
                        ></Tab>
                    </Tabs>

                </Container>
            </section>
        </div>
    )

}
