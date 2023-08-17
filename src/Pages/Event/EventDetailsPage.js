import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './EventDetails.css';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import Loader from '../../Components/Common/Loader';

const EventDetailsPage = () => {
    const { eventId } = useParams();
    const [eventDetails, setEventDetils] = useState([]);
    const { loading, setLoading } = useContext(AllContext);
    // console.log("Event Details id : ", eventId);

    useEffect(() => {
        fetch(`http://dev.bpsa.com.bd/api/get-event/${eventId}`)
            .then(response => response.json())
            .then(data => {
                // console.log("Events Details data: ", data.data.event);
                setEventDetils(data.data.event);
            })
    }, [eventId])

    // const { date, description, events, id, image, start_date, status, time, title, video_link } = allEvents;

    if (loading) {
        <Loader></Loader>
    }

    return (
        <div className=' col-lg-8 col-md-10 mx-auto'>
            <h2 className=' text-center fw-bold mt-5 mb-3 text-success'>{eventDetails?.title}</h2>
            <div class="card mb-3">
                <img src={eventDetails?.image} class="card-img-top eventDetailImg" alt="..." />
                <div class="card-body">
                    <div className=' d-flex'>
                        <h4> <b>Venue:</b> {eventDetails?.events} </h4>
                        <h4 className=' ms-4'> <b>Date:</b> {eventDetails?.date} </h4>
                    </div>
                    <p class="card-text"> <b>Specification:</b>{eventDetails?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsPage;