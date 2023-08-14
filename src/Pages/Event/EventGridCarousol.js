import imageOne from '../../assets/Image/events/eventImage2.jpg'
import imageTwo from '../../assets/Image/events/eventImage8.jpg'
import imageThree from '../../assets/Image/events/eventImage6.jpg'
import imageFour from '../../assets/Image/events/eventImage7.jpg'
import imageFive from '../../assets/Image/events/eventImage2.jpg'
import imageSix from '../../assets/Image/events/eventImage8.jpg'
import EventGridCarousolItem from './EventGridCarousolItem';
import './EventsGridCarousol.css';

const EventsGridCarousol = () => {
    // fareOne, fareTwo, fareThree, fareFive
    return (
        <div className='col-md-9 mx-auto '>

            <div id="eventsGridCarousol" className="carousel carColor slide" data-bs-ride="carousel">
                <div className="carousel-indicators carButton">
                    <button type="button" data-bs-target="#eventsGridCarousol" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#eventsGridCarousol" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#eventsGridCarousol" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#eventsGridCarousol" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>

                {/* venueOne, venueTwo, venueThree, eventDateOne, eventDateTwo, eventDateThree, */}
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="4000">
                        <EventGridCarousolItem
                            imageOne={imageOne}
                            titleOne="BPSA Musical Festival"
                            subTitleOne="BPSA arranged a musical festival on the bpsa own ground"
                            venueOne="Army Stadium"
                            eventDateOne="15/08/2023"

                            imageTwo={imageTwo}
                            titleTwo="BPSA Musical Festival"
                            subTitleTwo="BPSA arranged a musical festival on the bpsa own ground"
                            venueTwo="Bangobondhu Stadium"
                            eventDateTwo="30/09/2023"

                            imageThree={imageThree}
                            titleThree="BPSA Musical Festival"
                            subTitleThree="BPSA arranged a musical festival on the bpsa own ground"
                            venueThree="Bijay Sarani"
                            eventDateThree="25/08/2023"

                        ></EventGridCarousolItem>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <EventGridCarousolItem
                            imageOne={imageFour}
                            titleOne="BPSA Musical Festival"
                            subTitleOne="BPSA arranged a musical festival on the bpsa own ground"
                            venueOne="Army Stadium"
                            eventDateOne="15/08/2023"

                            imageTwo={imageFive}
                            titleTwo="BPSA Musical Festival"
                            subTitleTwo="BPSA arranged a musical festival on the bpsa own ground"
                            venueTwo="Bangobondhu Stadium"
                            eventDateTwo="30/09/2023"

                            imageThree={imageSix}
                            titleThree="BPSA Musical Festival"
                            subTitleThree="BPSA arranged a musical festival on the bpsa own ground"
                            venueThree="Bijay Sarani"
                            eventDateThree="25/08/2023"
                        ></EventGridCarousolItem>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <EventGridCarousolItem
                            imageOne={imageThree}
                            titleOne="BPSA Musical Festival"
                            subTitleOne="BPSA arranged a musical festival on the bpsa own ground"
                            venueOne="Army Stadium"
                            eventDateOne="15/08/2023"

                            imageTwo={imageTwo}
                            titleTwo="BPSA Musical Festival"
                            subTitleTwo="BPSA arranged a musical festival on the bpsa own ground"
                            venueTwo="Bangobondhu Stadium"
                            eventDateTwo="30/09/2023"

                            imageThree={imageFour}
                            titleThree="BPSA Musical Festival"
                            subTitleThree="BPSA arranged a musical festival on the bpsa own ground"
                            venueThree="Bijay Sarani"
                            eventDateThree="25/08/2023"
                        ></EventGridCarousolItem>
                    </div>
                    <div className="carousel-item" data-bs-interval="4000">
                        <EventGridCarousolItem
                            imageOne={imageFour}
                            titleOne="BPSA Musical Festival"
                            subTitleOne="BPSA arranged a musical festival on the bpsa own ground"
                            venueOne="Army Stadium"
                            eventDateOne="15/08/2023"

                            imageTwo={imageFive}
                            titleTwo="BPSA Musical Festival"
                            subTitleTwo="BPSA arranged a musical festival on the bpsa own ground"
                            venueTwo="Bangobondhu Stadium"
                            eventDateTwo="30/09/2023"

                            imageThree={imageSix}
                            titleThree="BPSA Musical Festival"
                            subTitleThree="BPSA arranged a musical festival on the bpsa own ground"
                            venueThree="Bijay Sarani"
                            eventDateThree="25/08/2023"
                        ></EventGridCarousolItem>
                    </div>

                </div>
            </div>

        </div>


    );
};

export default EventsGridCarousol;