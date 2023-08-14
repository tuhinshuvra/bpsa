import React from 'react';
import EventDetails from '../../assets/Image/events/eventDetails.jpg';
import './EventDetails.css';

const EventDetailsPage = () => {
    return (
        <div className=' col-lg-8 col-md-10 mx-auto'>
            <h2 className=' text-center fw-bold mt-5 mb-3 text-success'>Eid Ul Fitr BPSA Member Reunion</h2>
            <div class="card mb-3">
                <img src={EventDetails} class="card-img-top eventDetailImg" alt="..." />
                <div class="card-body">
                    <div className=' d-flex'>
                        <h4> <b>Venue:</b> Bangubandhu Stadium </h4>
                        <h4 className=' ms-4'> <b>Date:</b> 01/09/2023 </h4>
                    </div>
                    <p class="card-text"> <b>Specification:</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, exercitationem nihil consequatur minima tenetur explicabo molestias soluta ducimus non iste quos, consectetur error iusto culpa dolores aspernatur, rem harum facere! Earum fuga dolore reiciendis est nemo perspiciatis deserunt, veniam quia officia esse molestias, cum officiis nisi quis non tempore ullam ratione ad iusto doloribus? Tempore similique et illum quia molestiae magnam repellendus sequi quibusdam? Natus ad recusandae.  <br /><br />
                        vel provident omnis a repudiandae incidunt quo quibusdam, sequi nam veritatis? Blanditiis vel repellendus velit temporibus facere dolor, repellat explicabo sequi sunt ipsa rerum autem nam, cum, perferendis hic molestias.

                        Similique veritatis, molestiae vel excepturi repellat nihil rem, in alias ea soluta sapiente deleniti facere enim corporis accusamus aspernatur sint. Suscipit molestias minima rerum laudantium fugiat iure autem libero alias delectus sequi aliquid, dolore ad unde nesciunt distinctio architecto fuga error.   </p>
                    {/* <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> */}
                </div>
            </div>
        </div>
    );
};

export default EventDetailsPage;