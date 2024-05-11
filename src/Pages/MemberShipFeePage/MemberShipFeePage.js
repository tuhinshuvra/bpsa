import React from 'react';
import './MemberShipFeePage.css';
import { Link } from 'react-router-dom';

const MemberShipFeePage = () => {
    return (
        <div className=' col-lg-10  mx-auto'>

            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-3 ">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2 mb-4">
                                <h3 className=' text-center fw-bold'>Membership Fee Details</h3>
                            </nav>
                        </div>
                    </div>
                    <div className=' col-lg-6 col-md-10 mx-auto'>
                        <table className="table table-striped table-hover adminAssignTable">
                            <thead>
                                <tr className=' bg-secondary   fw-bold text-white'>
                                    <th scope="col">SL</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Fee</th>
                                    <th scope="col">Comment</th>
                                    <th scope="col">Payment Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>2014</td>
                                    <td className=' text-success fw-bold'>Paid</td>
                                    <td className=''>5000</td>
                                    <td className='colWidth'></td>
                                    <td className=''>Manual</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>2015</td>
                                    <td className='text-success fw-bold'>Paid</td>
                                    <td className=''>5000</td>
                                    <td className='colWidth'></td>
                                    <td className=''>Manual</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>2016</td>
                                    <td className='text-success fw-bold'>Paid</td>
                                    <td className=''>5000</td>
                                    <td className=''></td>
                                    <td className=''>Manual</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>2017</td>
                                    <td className='text-success fw-bold'>Paid</td>
                                    <td className=''>5000</td>
                                    <td className='colWidth'></td>
                                    <td className=''>Manual</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>2018</td>
                                    <td className='text-success fw-bold'>Paid</td>
                                    <td className=''>5000</td>
                                    <td className=''></td>
                                    <td className=''>Manual</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>2019</td>
                                    <td className='text-success fw-bold'>Paid</td>
                                    <td className=''>5000</td>
                                    <td className='colWidth'></td>
                                    <td className=''>Manual</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>2020</td>
                                    <td className='text-success fw-bold'>Paid</td>
                                    <td className=''>5000</td>
                                    <td className=''></td>
                                    <td className=''>Manual</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>2021</td>
                                    <td className=' text-warning fw-bold'>Due</td>
                                    <td className=''>5000</td>
                                    <td className='colWidth'> </td>
                                    <td className=''></td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>2022</td>
                                    <td className='text-warning fw-bold'>Due</td>
                                    <td className=''>5000</td>
                                    <td className='colWidth'> </td>
                                    <td className=''></td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>2023</td>
                                    <td className='text-warning fw-bold'>Due</td>
                                    <td className=''>5000</td>
                                    <td className='colWidth'>Due date is 31st December, 2023</td>
                                    <td className=''></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className=' col-lg-10 mx-auto d-flex justify-content-between'>

                            <p className=' fw-bold fst-italic'>Total due is <b> 15000.00</b> Taka till 2023 </p>

                            <Link className='btn btn-primary btn-sm' to={`/sslCommerz/id`}>Pay Now</Link>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    );
};

export default MemberShipFeePage;
