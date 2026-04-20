import React from 'react';

const VenueCard = ({ name, image, location, price }) => {
    return (
        <div className="card bg-base-100 w-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200">
            <figure className="h-56 overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">{name}</h2>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {location}
                </div>
                <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">₹ {price}</span>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-sm rounded-full px-6">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VenueCard;
