import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import Loader from '../../Components/Common/Loader';
import { BsCalendarDateFill } from 'react-icons/bs';
import './EventDetails.css';
import FullScreenImage from '../Blogs/FullScreenImage/FullScreenImage';
import useTitle from '../../hooks/useTitle';
import { formatDate } from '../../utlis/dateFormat';

const EventDetailsPage = () => {
    useTitle("EventDetails");
    const { eventId } = useParams();
    const [eventDetails, setEventDetils] = useState([]);
    const { loading, setLoading } = useContext(AllContext);
    const [showFullScreenImage, setShowFullScreenImage] = useState(false);
    // console.log("Event Details id : ", eventId);

    const handleImageClick = () => {
        setShowFullScreenImage(true);
    };

    useEffect(() => {
        fetch(`https://dev.bpsa.com.bd/api/get-event/${eventId}`)
            .then(response => response.json())
            .then(data => {
                // console.log("Events Details data: ", data.data.event);
                setEventDetils(data.data.event);
                setLoading(false);
            })
    }, [eventId, setLoading])

    // const { date, description, events, id, image, start_date, status, time, title, video_link } = allEvents;

    if (loading) {
        <Loader></Loader>
    }

    return (
        <div className=' col-md-10 mx-auto'>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-5 ">
                    <nav aria-label=" " className="bg-light rounded-3 p-2 mb-4">
                        <h2 className='fw-bold text-center text-success'>{eventDetails?.title}</h2>
                    </nav>

                    <div className="card mb-3 p-3">
                        <div className=' d-lg-flex'>
                            <div className=" col-lg-7">
                                <img src={eventDetails?.image} className=" eventDetailImg shadow-lg" alt="..." onClick={handleImageClick} />
                            </div>
                            <div className="card-body col-lg-5">
                                <div className=' d-flex flex-column justify-content-lg-start'>
                                    {eventDetails?.events &&
                                        <h4> <b>Venue:</b> {eventDetails?.events} </h4>
                                    }
                                    {eventDetails?.start_date &&
                                        <h5 className=' d-flex '><BsCalendarDateFill className=' me-1' /> {formatDate(eventDetails?.start_date)}
                                            {eventDetails?.date && <> - {formatDate(eventDetails?.date)}</>}
                                        </h5>



                                    }

                                    {eventDetails?.time &&
                                        <h5 className=' '> <b>Time:</b> {eventDetails?.time} </h5>
                                    }

                                </div>
                            </div>
                        </div>

                        <p className="card-text mt-4 mb-2"> <b></b>{eventDetails?.description}</p>

                    </div>
                </div>

                {showFullScreenImage &&
                    <FullScreenImage
                        image={eventDetails?.image}
                        id={eventDetails?.id}
                    />}
            </section>
        </div >
    );
};

export default EventDetailsPage;