import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Team.css';

const Team = (props) => {
    const {name, age, balance, company, picture, email} = props.member;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="team-area py-3">
            <div className="team-area">
            <img src={picture} alt="" />
            </div>
            <h4>Name: {name}</h4>
            <h5>Age: {age}</h5>
            <h4>Balance: {balance}</h4>
            <h5>Company: {company}</h5>
            <p>Email: {email}</p>
            <button onClick={() => props.handleAddToCart(props.member)}
            className="btn-regular"
            >{element} add team</button>
        </div>
    );
};

export default Team;