import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import Marquee from "react-fast-marquee";
import { Link, useNavigate } from 'react-router-dom';
import { BsCalendarDateFill } from 'react-icons/bs';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import Loader from '../../Components/Common/Loader';
import './AllEventPage.css'
import { formatDate } from '../../utlis/dateFormat';

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
        return <Loader></Loader>
    }

    return (
        <div className=' col-md-10 mx-auto'>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-5 ">
                    <nav aria-label="" className="bg-light rounded-3 p-2 mb-4">
                        <h2 className='fw-bold text-center text-success'>All EVENTS</h2>
                    </nav>

                    <Marquee pauseOnHover={true} gradient={false}>
                        {allEvents &&
                            allEvents?.map((item, index) => {
                                return (
                                    <div className=' AllEventCard' key={index}>
                                        <div onClick={() => navigate(`/events/${item?.id}`)}>
                                            <img src={item?.image} className='allEventImage' alt="" />
                                            <div className=' text-center mt-2'>
                                                <p className=' fw-bold my-0 text-primary'>{item?.title.slice(0, 27)}</p>
                                                <p className=' my-0'><b>Venue:</b> {item?.events}</p>
                                                {item?.start_date &&
                                                    <p className='flex my-0  justify-center '>
                                                        <BsCalendarDateFill />
                                                        <span className=' ms-1 text-sm '>  {formatDate(item?.start_date)}</span>
                                                        {item?.date && <> <span className=''> -</span> <span className='text-sm'> {formatDate(item?.date)}</span></>}
                                                    </p>
                                                }


                                                <Link className='btn btn-outline-primary btn-sm w-100 ' to={`/events/${item?.id}`}>Show Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </Marquee>
                </div>
            </section>
        </div>
    );
};

export default AllEventPage;