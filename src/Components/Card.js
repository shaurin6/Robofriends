import React from 'react';

const Card = (props) =>{
    return(
        <div className="bg-light-green dib pr3 pa3 ma2 grow bw2 shadow-5 tc">
            <img alt='robots' src={`https://robohash.org/${props.id}?200X200`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;