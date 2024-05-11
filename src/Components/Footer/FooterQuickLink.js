import React from 'react';
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PMOFFICE from '../../assets/Image/quick_link_photo/logo-PM_Office.png';
import POLICE from '../../assets/Image/quick_link_photo/police_logo.png';
import DMP from '../../assets/Image/quick_link_photo/DMP_Logo.png';
import RAB from '../../assets/Image/quick_link_photo/rab_logo.png';
import BPA from '../../assets/Image/quick_link_photo/Logo_of_Police_Academy_BD.jpg';
import SSF from '../../assets/Image/quick_link_photo/ssf_logo.png';

const FooterQuickLink = () => {
    return (
        <div>
            <h5 className='text-center fw-bold text-white '>Hot Link</h5>

            <div className=" col-md-6 mx-auto d-flex justify-content-between">
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip
                            id="button-tooltip-2"
                            style={{ fontSize: "10px" }}
                        >
                            Prime Minister Office
                        </Tooltip>
                    }
                >
                    {({ ref, ...triggerHandler }) => (
                        <Link to="https://pmo.gov.bd/"  {...triggerHandler} className="d-inline-flex align-items-center" target="_blank">
                            <Image
                                className="footerQuickLinkLogo"
                                ref={ref}
                                roundedCircle
                                src={PMOFFICE}
                            />
                        </Link>
                    )}
                </OverlayTrigger>
                <OverlayTrigger

                    placement="top"
                    overlay={
                        <Tooltip
                            id="button-tooltip-2"
                            style={{ fontSize: "10px" }}
                        >
                            Bangladesh Police
                        </Tooltip>
                    }
                >
                    {({ ref, ...triggerHandler }) => (
                        <Link to="https://www.police.gov.bd"  {...triggerHandler} className="d-inline-flex align-items-center" target="_blank">
                            <Image
                                className="footerQuickLinkLogo"
                                ref={ref}
                                roundedCircle
                                src={POLICE}
                            />
                        </Link>
                    )}
                </OverlayTrigger>
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip
                            id="button-tooltip-2"
                            style={{ fontSize: "10px", background: "white" }}
                        >
                            Bangladesh Police Academy
                        </Tooltip>
                    }
                >
                    {({ ref, ...triggerHandler }) => (
                        <Link to="https://bpa.police.gov.bd/"  {...triggerHandler} className="d-inline-flex align-items-center" target="_blank">
                            <Image
                                className="footerQuickLinkLogo"
                                ref={ref}
                                roundedCircle
                                src={BPA}
                            />
                        </Link>
                    )}
                </OverlayTrigger>
            </div>


            <div className=" col-md-6 mx-auto d-flex justify-content-between mt-2">
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip
                            id="button-tooltip-2"
                            style={{ fontSize: "10px" }}
                        >
                            Dhaka Metropolitan Police(DMP)
                        </Tooltip>
                    }
                >
                    {({ ref, ...triggerHandler }) => (
                        <Link to="https://dmp.gov.bd/"  {...triggerHandler} className="d-inline-flex align-items-center" target="_blank">
                            <Image
                                className="footerQuickLinkLogo"
                                ref={ref}
                                roundedCircle
                                src={DMP}
                            />
                        </Link>
                    )}
                </OverlayTrigger>
                <OverlayTrigger

                    placement="top"
                    overlay={
                        <Tooltip
                            id="button-tooltip-2"
                            style={{ fontSize: "10px" }}
                        >
                            Rapid Action Battalion(RAB)
                        </Tooltip>
                    }
                >
                    {({ ref, ...triggerHandler }) => (
                        <Link to="https://www.rab.gov.bd/"  {...triggerHandler} className="d-inline-flex align-items-center" target="_blank">
                            <Image
                                className="footerQuickLinkLogo"
                                ref={ref}
                                roundedCircle
                                src={RAB}
                            />
                        </Link>
                    )}
                </OverlayTrigger>
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip
                            id="button-tooltip-2"
                            style={{ fontSize: "10px" }}
                        >
                            Special Security Force
                        </Tooltip>
                    }
                >
                    {({ ref, ...triggerHandler }) => (
                        <Link to="https://www.ssf.gov.bd/"  {...triggerHandler} className="d-inline-flex align-items-center" target="_blank">
                            <Image
                                className="footerQuickLinkLogo"
                                ref={ref}
                                roundedCircle
                                src={SSF}
                            />
                        </Link>
                    )}
                </OverlayTrigger>
            </div>
        </div>
    );
};

export default FooterQuickLink;