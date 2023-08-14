import React from 'react';
import useTitle from '../../hooks/useTitle';
import HeroComponent1 from '../../Components/Common/HeroComponent1';
import EventsGridCarousol from './EventGridCarousol';
import './AllEventPage.css'

const AllEventPage = () => {
    useTitle("Events")
    return (
        <div className='eventsArea'>
            {/* <HeroComponent1 title="Events" /> */}
            <h1 className=' fw-bold text-center text-success my-4'>All Events</h1>
            <div >
                <EventsGridCarousol></EventsGridCarousol>
            </div>
        </div>
    );
};

export default AllEventPage;