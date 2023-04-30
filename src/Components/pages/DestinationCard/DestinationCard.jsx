import React from 'react';

const DestinationCard = ({ ds }) => {
    return (
        <div className="card rounded-md  hover:border-4 border-btn-color">
                <img className='relative bg-cover bg-center h-96 rounded-md' src={ds.image} />
                <h2 className="card-title absolute pl-5 bottom-5 text-white text-xl">{ds.name}</h2>
        </div>
    );
};

export default DestinationCard;