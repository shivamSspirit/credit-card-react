import React, { useState } from 'react'

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import './MyCardForm.css'



function MyCardForm() {
    const [number, setNumber] = useState('')
    const [names, setNames] = useState('')
    const [cvv, setCvv] = useState('')
    const [expiry, setExpiry] = useState('')
    const [focus, setFocus] = useState('')


    return (
<div className="Card-container">
<div className="credit-card">
    
    <Cards
                number={number}
                name={names}
                expiry={expiry}
                cvc={cvv}
                focused={focus}
            />
</div>
         

            <div id="PaymentForm">
                <div className="cardform">

                    <div className="card-number">
                        <label htmlFor="card number" className="card-number-label" >
                            Card Number
                        </label>
                        <input
                            className="card--number"
                            type="tel"
                            name="number"
                            value={number}
                            placeholder="card Number"
                            onChange={e => setNumber(e.target.value)}
                            onFocus={e => setFocus(e.target.name)}
                        />
                    </div>


                    <div className="card-holder">
                        <label htmlFor="card holder" className="card-name-label">
                            Card Name
                        </label>
                        <input
                            className="card--holder"
                            type="text"
                            name="name"
                            placeholder="yourname"
                            value={names}
                            onChange={e => setNames(e.target.value)}
                            onFocus={e => setFocus(e.target.name)}
                        />
                    </div>

                    <div className="expiry-cvv">

                        <div className="expiry-wrapper">
                            <label
                                className="expiry-label"
                                htmlFor="expiry-date"
                            >
                                Expiration Date
                            </label>
                            <input
                                type="text"
                                name="expiry"
                                className="expiry-input"
                                value={expiry}
                                onChange={e => setExpiry(e.target.value)}
                                onFocus={e => setFocus(e.target.name)}
                            />
                        </div>


                        <div className="card-cvv">
                            <label htmlFor="cvv" className="label-cvv">
                                CVV
                            </label>
                            <input
                                className="input-cvv"
                                type="tel"
                                name="cvc"
                                placeholder="CVV"
                                onChange={e => setCvv(e.target.value)}
                                onFocus={e => setFocus(e.target.name)}
                            />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default MyCardForm


