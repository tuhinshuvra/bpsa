import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import Loader from '../../Components/Common/Loader';
import './AllEventPage.css'

const AllEventPage = () => {
    useTitle("Events")
    const { loading, setLoading } = useContext(AllContext);
    const [allEvents, setAllEvents] = useState([]);
    // const { date, description, events, id, image, start_date, status, time, title, video_link } = allEvents;
    const navigate = useNavigate();

    // console.log("allEvents : ", allEvents);

    useEffect(() => {
        setLoading(true);
        fetch("https://dev.bpsa.com.bd/api/event")
            .then(response => response.json())
            .then(data => {
                // console.log("All Event :", data.data.event)
                setAllEvents(data.data.event);
                setLoading(false);
            })
    }, [setLoading])



    if (loading) {
        <Loader></Loader>
    }

    return (
        <div className='eventsArea'>
            <h1 className='fw-bold text-center text-success my-4'>All EVENTS</h1>
            <div className=' col-md-10 mx-auto'>

                <Marquee pauseOnHover={true} gradient={false}>
                    {allEvents &&
                        allEvents?.map((item, index) => {
                            return (
                                <div className=' AllEventCard'>
                                    <div onClick={() => navigate(`/events/${item?.id}`)} key={index}>
                                        <img src={item?.image} className='allEventImage' alt="" />
                                        <div className=' text-center mt-2'>
                                            <p className=' fw-bold my-0 text-primary'>{item?.title.slice(0, 27)}</p>
                                            <p className=' my-0'><b>Venue:</b> {item?.events}</p>
                                            <p className=' my-0'><b>Date:</b> {item?.date}</p>
                                            <p className=' my-0'>{item?.description.slice(0, 30)}</p>
                                            <Link className='btn btn-outline-primary btn-sm w-100 ' to={`/events/${item?.id}`}>Show Details</Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </Marquee>

            </div>
        </div>
    );
};

export default AllEventPage;