import React from 'react';
import { Link } from 'react-router-dom';
import './EventsGridCarousol.css';

const EventGridCarousolItem = ({ titleOne, titleTwo, titleThree, subTitleOne, subTitleTwo, subTitleThree,
    venueOne, venueTwo, venueThree, eventDateOne, eventDateTwo, eventDateThree, imageOne, imageTwo, imageThree }) => {
    return (
        <div className="d-flex justify-content-between mb-5 mb-md-5 mb-3">


            <div className="cardArea" data-aos="flip-left">
                <div className="card border-0 "  >
                    <div className="eventsCarousol" >
                        <div className="card-body ">
                            <div className=''>
                                <img src={imageOne} className=' cardImage shadow-lg' alt="" />
                            </div>
                            <h4 className="commonSubHead text-center text-primary ms-2">{titleOne}</h4>
                            <p className="card-text subTitle my-0 text-center "><b> Venue: </b> {venueOne}</p>
                            <p className="card-text subTitle my-0 text-center"><b> Date: </b>{eventDateOne}</p>
                            <p className="card-text  my-0 text-center">{subTitleOne.slice(0, 80)}</p>
                            <Link className=' btn btn-outline-primary btn-sm' to="/events/:eventId">Show Details</Link>
                        </div>
                    </div>
                </div>
            </div>



            <div className="cardArea d-none  d-md-block " data-aos="flip-right">
                <div className="card  border-0 " >
                    <div className="eventsCarousol" >
                        <div className="card-body">
                            <div className=''>
                                <img src={imageTwo} className=' cardImage shadow-lg' alt="" />
                            </div>
                            <h4 className="commonSubHead text-center text-primary ms-2">{titleTwo}</h4>
                            <p className="card-text subTitle my-0 text-center"><b> Venue: </b> {venueTwo}</p>
                            <p className="card-text subTitle my-0 text-center"><b> Date: </b>{eventDateTwo}</p>
                            <p className="card-text  my-0 text-center">{subTitleTwo.slice(0, 80)}</p>
                            <Link className=' btn btn-outline-primary btn-sm' to="/events/:eventId">Show Details</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cardArea d-none  d-md-block" data-aos="flip-left">
                <div className="card  border-0 " >
                    <div className="eventsCarousol" >
                        <div className="card-body">
                            <div className=''>
                                <img src={imageThree} className=' cardImage shadow-lg' alt="" />
                            </div>
                            <h4 className="commonSubHead text-center text-primary ms-2">{titleThree}</h4>
                            <p className="card-text subTitle my-0 text-center"><b> Venue: </b> {venueThree}</p>
                            <p className="card-text subTitle my-0 text-center"><b> Date: </b>{eventDateThree}</p>
                            <p className="card-text  my-0 text-center">{subTitleThree.slice(0, 80)}</p>
                            <Link className=' btn btn-outline-primary btn-sm' to="/events/:eventId">Show Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventGridCarousolItem;