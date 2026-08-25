"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Button, Image, TabContainer, TabPane, TabContent, Nav, NavItem, NavLink } from 'react-bootstrap';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BookMarkIcon, LinkIcon } from './components/HomeIcons';
import HomePredictChart from './components/HomePredictChart';
import SemiCircleProgress from './components/SemiCircleProgress';

export default function Home() {

  const MemoChart = React.memo(HomePredictChart);

  useEffect(() => {
    AOS.init();
  })

  const CircleProgress = ({ percent, color }) => {
    const radius = 12;
    const stroke = 3;
    const normalizedRadius = radius - stroke * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset =
      circumference - (percent / 100) * circumference;

    return (
      <svg
        height={radius * 2}
        width={radius * 2}
        className="circle-progress"
      >
        {/* Background */}
        <circle
          stroke="#2a2a32"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress */}
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    );
  };

  var settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <main className="contentpagesbg">
      <section>
        <Container className='banner-cont'>
          <Row>
            <Col lg={9}>
              <div>
                <Slider {...settings} className='slider-container'>
                  <div>
                    <div className="chartbox">
                      <div className="panelcontentbox">
                        <div>
                          <div className='chartbox-tabs'>
                            <div className='chartbox-panel'>
                              <div>
                                <img src="/assets/images/no-img.svg" alt="" />
                                <div className='d-flex flex-column gap-1'>
                                  <span>Geopolitics - NYMEXC Crude Oil Futures</span>
                                  <h6 className='subhead mb-0'>Will Crude Oil (CL) hit by end of March?</h6>
                                </div>
                              </div>
                              <div className='d-flex align-items-center gap-2'>
                                <LinkIcon size={24} color='#74717A' />
                                <BookMarkIcon size={24} color='#74717A' />
                              </div>
                            </div>
                            <Row>
                              <Col lg={4}>
                                <div className='d-flex gap-2'>
                                  <Button className='yes-btn'>Yes - (80%)</Button>
                                  <Button className='no-btn'>No - (20%)</Button>
                                </div>


                                <div className="marquee-container">
                                  <div className="chart-newsbox marquee-content">

                                    {/* --- SET 1 (Original) --- */}
                                    <div className='newsbox-cont'>
                                      <div className='newsbox-head'>
                                        <img src="assets/images/news-icon.svg" alt="icon" />
                                        <span>News • 2 hours ago</span>
                                      </div>
                                      <p>Oil prices are expected to rise by the end of March.</p>
                                    </div>

                                    <div className='newsbox-cont'>
                                      <div className='newsbox-head'>
                                        <img src="assets/images/news-icon.svg" alt="icon" />
                                        <span>News • 1 hour ago</span>
                                      </div>
                                      <p>Market volatility increases ahead of Fed meeting.</p>
                                    </div>

                                    <div className='newsbox-cont'>
                                      <div className='newsbox-head'>
                                        <img src="assets/images/news-icon.svg" alt="icon" />
                                        <span>News • 30 mins ago</span>
                                      </div>
                                      <p>New tech regulations proposed in the EU assembly.</p>
                                    </div>

                                    {/* --- SET 2 (The Duplicate for Seamless Looping) --- */}
                                    <div className='newsbox-cont'>
                                      <div className='newsbox-head'>
                                        <img src="assets/images/news-icon.svg" alt="icon" />
                                        <span>News • 2 hours ago</span>
                                      </div>
                                      <p>Oil prices are expected to rise by the end of March.</p>
                                    </div>

                                    <div className='newsbox-cont'>
                                      <div className='newsbox-head'>
                                        <img src="assets/images/news-icon.svg" alt="icon" />
                                        <span>News • 1 hour ago</span>
                                      </div>
                                      <p>Market volatility increases ahead of Fed meeting.</p>
                                    </div>

                                    <div className='newsbox-cont'>
                                      <div className='newsbox-head'>
                                        <img src="assets/images/news-icon.svg" alt="icon" />
                                        <span>News • 30 mins ago</span>
                                      </div>
                                      <p>New tech regulations proposed in the EU assembly.</p>
                                    </div>

                                  </div>
                                </div>

                              </Col>
                              <Col lg={8}>
                                <MemoChart />
                              </Col>
                            </Row>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                </Slider>
              </div>
            </Col>
            <Col lg={3}>
              <div className='banner-box'>
                <div className='panelcontentbox'>
                  <div className='banner-box-title'>
                    <h6 className='mb-0'>Breaking News</h6>
                    <Link href="#0">View All</Link>
                  </div>
                  <div className='banner-box-content'>
                    <div>
                      <p className='mb-0'>Trump’s Fed Chair Pick: Who Will It Be?</p>
                      <div className='d-flex flex-column'>
                        <span>38%</span>
                        <span>16%</span>
                      </div>
                    </div>
                    <div>
                      <p className='mb-0'>Trump’s Fed Chair Pick: Who Will It Be?</p>
                      <div className='d-flex flex-column'>
                        <span>38%</span>
                        <span>16%</span>
                      </div>
                    </div>
                    <div>
                      <p className='mb-0'>Trump’s Fed Chair Pick: Who Will It Be?</p>
                      <div className='d-flex flex-column'>
                        <span>38%</span>
                        <span>16%</span>
                      </div>
                    </div>
                    <div>
                      <p className='mb-0'>Trump’s Fed Chair Pick: Who Will It Be?</p>
                      <div className='d-flex flex-column'>
                        <span>38%</span>
                        <span>16%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='panelcontentbox'>
                  <div className='banner-box-title'>
                    <h6 className='mb-0'>Hot Topics</h6>
                    <Link href="#0">View All</Link>
                  </div>
                  <div className='banner-box-content2'>
                    <div>
                      <p>1 West ham</p>
                      <div>
                        <span>$4M today</span>
                        <Image src="/assets/images/fire.svg"></Image>
                      </div>
                    </div>
                    <div>
                      <p>Lazio</p>
                      <div>
                        <span>$4M today</span>
                        <Image src="/assets/images/fire.svg"></Image>
                      </div>
                    </div>
                    <div>
                      <p>Trump</p>
                      <div>
                        <span>$4M today</span>
                        <Image src="/assets/images/fire.svg"></Image>
                      </div>
                    </div>
                    <div>
                      <p>Peru</p>
                      <div>
                        <span>$4M today</span>
                        <Image src="/assets/images/fire.svg"></Image>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="markettablebg" id="marketslist">
        <Container>
          <div className="markt-head-wrp">
            <div className='master-card'>
              <div className="mas-card-y">
                <div>
                  <div className='mas-card-head'>
                    <Image src="/assets/images/precard-img1.png"></Image>
                    <div className="card-title">
                      Who will Trump nominate as Fed Chair?
                    </div>
                  </div>

                  <SemiCircleProgress percentage={85} />
                </div>

                <div>
                  <div className='d-flex gap-2'>
                    <Button className='yes-btn'>Yes</Button>
                    <Button className='no-btn'>No</Button>
                  </div>

                  <div className="card-footer">
                    <span>97,618,260</span>
                    <span>20 Feb, 2026</span>
                  </div>
                </div>
              </div>
              <div className="mas-card-y">
                <div>
                  <div className='mas-card-head'>
                    <Image src="/assets/images/precard-img2.png"></Image>
                    <div className="card-title">
                      Men's College Basketball Champion
                    </div>
                  </div>

                  <SemiCircleProgress percentage={76} />
                </div>

                <div>
                  <div className='d-flex gap-2'>
                    <Button className='yes-btn'>Yes</Button>
                    <Button className='no-btn'>No</Button>
                  </div>

                  <div className="card-footer">
                    <span>97,618,260</span>
                    <span>20 Feb, 2026</span>
                  </div>
                </div>
              </div>
              <div className="mas-card-y">
                <div>
                  <div className='mas-card-head'>
                    <Image src="/assets/images/precard-img3.png"></Image>
                    <div className="card-title">
                      Will any Category 5 hurricane make landfall in the US in before 2027?
                    </div>
                  </div>

                  <SemiCircleProgress percentage={49} />
                </div>

                <div>
                  <div className='d-flex gap-2'>
                    <Button className='yes-btn'>Yes</Button>
                    <Button className='no-btn'>No</Button>
                  </div>

                  <div className="card-footer">
                    <span>97,618,260</span>
                    <span>20 Feb, 2026</span>
                  </div>
                </div>
              </div>
              <div className="mas-card-y">
                <div>
                  <div className='mas-card-head'>
                    <Image src="/assets/images/precard-img4.png"></Image>
                    <div className="card-title">
                      When will Bitcoin hit $150k?
                    </div>
                  </div>

                  <SemiCircleProgress percentage={36} />
                </div>

                <div>
                  <div className='d-flex gap-2'>
                    <Button className='yes-btn'>Yes</Button>
                    <Button className='no-btn'>No</Button>
                  </div>

                  <div className="card-footer">
                    <span>97,618,260</span>
                    <span>20 Feb, 2026</span>
                  </div>
                </div>
              </div>
              <div className="mas-card-y">
                <div>
                  <div className='mas-card-head'>
                    <Image src="/assets/images/precard-img5.png"></Image>
                    <div className="card-title">
                      Men's College Basketball Champion
                    </div>
                  </div>

                  <SemiCircleProgress percentage={48} />
                </div>

                <div>
                  <div className='d-flex gap-2'>
                    <Button className='yes-btn'>Yes</Button>
                    <Button className='no-btn'>No</Button>
                  </div>

                  <div className="card-footer">
                    <span>97,618,260</span>
                    <span>20 Feb, 2026</span>
                  </div>
                </div>
              </div>
              <div className="mas-card-y">
                <div>
                  <div className='mas-card-head'>
                    <Image src="/assets/images/precard-img6.png"></Image>
                    <div className="card-title">
                      Who will Trump nominate as Fed Chair?
                    </div>
                  </div>

                  <SemiCircleProgress percentage={33} />
                </div>

                <div>
                  <div className='d-flex gap-2'>
                    <Button className='yes-btn'>Yes</Button>
                    <Button className='no-btn'>No</Button>
                  </div>

                  <div className="card-footer">
                    <span>97,618,260</span>
                    <span>20 Feb, 2026</span>
                  </div>
                </div>
              </div>
              <div className="mas-card-y">
                <div>
                  <div className='mas-card-head'>
                    <Image src="/assets/images/precard-img7.png"></Image>
                    <div className="card-title">
                      When will Bitcoin hit $150k?
                    </div>
                  </div>

                  <SemiCircleProgress percentage={69} />
                </div>

                <div>
                  <div className='d-flex gap-2'>
                    <Button className='yes-btn'>Yes</Button>
                    <Button className='no-btn'>No</Button>
                  </div>

                  <div className="card-footer">
                    <span>97,618,260</span>
                    <span>20 Feb, 2026</span>
                  </div>
                </div>
              </div>
              <div className="mas-card-y">
                <div>
                  <div className='mas-card-head'>
                    <Image src="/assets/images/precard-img8.png"></Image>
                    <div className="card-title">
                      Who will Trump nominate as Fed Chair?
                    </div>
                  </div>

                  <SemiCircleProgress percentage={62} />
                </div>

                <div>
                  <div className='d-flex gap-2'>
                    <Button className='yes-btn'>Yes</Button>
                    <Button className='no-btn'>No</Button>
                  </div>

                  <div className="card-footer">
                    <span>97,618,260</span>
                    <span>20 Feb, 2026</span>
                  </div>
                </div>
              </div>
              <div className="mas-card-y">
                <div>
                  <div className='mas-card-head'>
                    <Image src="/assets/images/precard-img9.png"></Image>
                    <div className="card-title">
                      Men's College Basketball Champion
                    </div>
                  </div>

                  <SemiCircleProgress percentage={21} />
                </div>

                <div>
                  <div className='d-flex gap-2'>
                    <Button className='yes-btn'>Yes</Button>
                    <Button className='no-btn'>No</Button>
                  </div>

                  <div className="card-footer">
                    <span>97,618,260</span>
                    <span>20 Feb, 2026</span>
                  </div>
                </div>
              </div>
              <div className="mas-card-y">
                <div>
                  <div className='mas-card-head'>
                    <Image src="/assets/images/precard-img10.png"></Image>
                    <div className="card-title">
                      Men's College Basketball Champion
                    </div>
                  </div>

                  <SemiCircleProgress percentage={21} />
                </div>

                <div>
                  <div className='d-flex gap-2'>
                    <Button className='yes-btn'>Yes</Button>
                    <Button className='no-btn'>No</Button>
                  </div>

                  <div className="card-footer">
                    <span>97,618,260</span>
                    <span>20 Feb, 2026</span>
                  </div>
                </div>
              </div>
              <div className="mas-card-y">
                <div>
                  <div className='mas-card-head'>
                    <Image src="/assets/images/precard-img11.png"></Image>
                    <div className="card-title">
                      Men's College Basketball Champion
                    </div>
                  </div>

                  <SemiCircleProgress percentage={21} />
                </div>

                <div>
                  <div className='d-flex gap-2'>
                    <Button className='yes-btn'>Yes</Button>
                    <Button className='no-btn'>No</Button>
                  </div>

                  <div className="card-footer">
                    <span>97,618,260</span>
                    <span>20 Feb, 2026</span>
                  </div>
                </div>
              </div>
              <div className="mas-card-y">
                <div>
                  <div className='mas-card-head'>
                    <Image src="/assets/images/precard-img12.png"></Image>
                    <div className="card-title">
                      Men's College Basketball Champion
                    </div>
                  </div>

                  <SemiCircleProgress percentage={21} />
                </div>

                <div>
                  <div className='d-flex gap-2'>
                    <Button className='yes-btn'>Yes</Button>
                    <Button className='no-btn'>No</Button>
                  </div>

                  <div className="card-footer">
                    <span>97,618,260</span>
                    <span>20 Feb, 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
