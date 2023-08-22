import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import Loader from '../../Components/Common/Loader';
import './EventDetails.css';

const EventDetailsPage = () => {
    const { eventId } = useParams();
    const [eventDetails, setEventDetils] = useState([]);
    const { loading, setLoading } = useContext(AllContext);
    // console.log("Event Details id : ", eventId);

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
        <div className=' col-lg-8 col-md-10 mx-auto'>
            <h2 className=' text-center fw-bold mt-5 mb-3 text-success'>{eventDetails?.title}</h2>
            <div className="card mb-3 p-3">
                <div className=' d-lg-flex'>
                    <div className=" col-lg-7">
                        <img src={eventDetails?.image} className=" card-img-top eventDetailImg" alt="..." />
                    </div>
                    <div className="card-body col-lg-5 text-center">
                        <div className=' d-flex flex-column justify-content-lg-start'>
                            {eventDetails?.events &&
                                <h4> <b>Venue:</b> {eventDetails?.events} </h4>
                            }
                            {eventDetails?.start_date &&
                                <h4 className=' '> <b>Start Date:</b> {eventDetails?.start_date} </h4>
                            }

                            {eventDetails?.time &&
                                <h4 className=' '> <b>Time:</b> {eventDetails?.time} </h4>
                            }
                            {eventDetails?.date &&
                                <h4 className=' '> <b>Date:</b> {eventDetails?.date} </h4>
                            }
                        </div>
                    </div>
                </div>

                <p className="card-text mt-4 mb-2"> <b>Specification:</b>{eventDetails?.description}</p>

            </div>
        </div >
    );
};

export default EventDetailsPage;