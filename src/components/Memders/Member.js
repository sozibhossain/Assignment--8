import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Team from '../Team/Team';
import './Member.css';

const Member = () => {
    const [members, setMembers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('./team-member.json')
        .then(res => res.json())
        .then(data => setMembers(data));
    }, [])


    const handleAddToCart = (member) => {
        const newCart = [...cart, member];
        setCart(newCart);
    }

    return (
        <div className="member-container d-flex">
            <div className="team-container col-md-8">

                {
                    members.map(member => <Team 
                        key={member._id}
                        member={member}
                        handleAddToCart={handleAddToCart}
                        >
                        </Team>)
                }
              
                
            </div>
            <div className="cart-container col-md-4">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Member;