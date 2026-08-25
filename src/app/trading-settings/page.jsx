"use client"
import React from 'react'
import { Container, } from 'react-bootstrap'

export default function TradingSettingsPage() {

    return (
        <div className='innerpages '>
            <div className='trading-settings-page'>
               
                    <div className="gridparentbox">
                        <h2 className="inner-heading-title">Trading Settings</h2>
                        <p className='card-title mb-0'>Market Order Type</p>
                        <p className='mb-0'>Choose how your market orders are executed</p>
                        <div className="trading-settings-box">
                            <div className="radio-group mt-1">
                                <label className="radio-circle">
                                    <input type="radio" name="twofa" />
                                    <span></span>
                                </label>
                            </div>
                            <div>
                                <p className="card-title">Fill and Kill (FAK)</p>
                                <p className="mb-0">
                                    Fills as much as possible of the best available prices and cancels any unfilled portion
                                </p>
                            </div>
                        </div>
                        <div className="trading-settings-box">
                            <div className="radio-group mt-1">
                                <label className="radio-circle">
                                    <input type="radio" name="twofa" />
                                    <span></span>
                                </label>
                            </div>
                            <div>
                                <p className="card-title">Fill or Kill (FOK)</p>
                                <p className="mb-0">
                                    Executes the entire order immediately at the specified price or cancels it completely
                                </p>
                            </div>
                        </div>
                    </div>

               
            </div>
        </div>
    )
}
