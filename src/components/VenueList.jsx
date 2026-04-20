import React from 'react';
import VenueCard from './VenueCard';

const venues = [
    {
        id: 1,
        name: 'Grand Ballroom at The Palace',
        image: '/venues/grand_ballroom.png',
        location: 'Mumbai, Maharashtra',
        price: '2,50,000',
    },
    {
        id: 2,
        name: 'The Garden Terrace',
        image: '/venues/garden_terrace.png',
        location: 'Bangalore, Karnataka',
        price: '1,20,000',
    },
    {
        id: 3,
        name: 'Industrial Loft Space',
        image: '/venues/industrial_loft.png',
        location: 'Delhi, NCR',
        price: '85,000',
    },
    {
        id: 4,
        name: 'Ocean Whisper Resort',
        image: '/venues/beachside_resort.png',
        location: 'Goa',
        price: '3,00,000',
    },
    {
        id: 5,
        name: 'Historic Heritage Mansion',
        image: '/venues/historic_mansion.png',
        location: 'Jaipur, Rajasthan',
        price: '1,80,000',
    },
];

const VenueList = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4  from-primary to-secondary bg-clip-text text-transparent">
                    Discover Premium Venues
                </h1>
                <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                    Handpicked wedding and event spaces for your most precious moments.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {venues.map((venue) => (
                    <VenueCard key={venue.id} {...venue} />
                ))}
            </div>
        </div>
    );
};

export default VenueList;
