import React from 'react';
import { Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const FooterToolTip = (linkTitle, link, logo) => {
    return (
        <div>
            <OverlayTrigger
                placement="top"
                overlay={
                    <Tooltip
                        id="button-tooltip-2"
                        style={{ fontSize: "10px" }}
                    >
                        {/* Criminal Investigation Department(CID) */}
                        {linkTitle}
                    </Tooltip>
                }
            >
                {({ ref, ...triggerHandler }) => (
                    <Link to={link}  {...triggerHandler} className="d-inline-flex align-items-center" target="_blank">
                        <Image
                            className="footerQuickLinkLogo"
                            ref={ref}
                            roundedCircle
                            src={logo}
                        />
                    </Link>
                )}
            </OverlayTrigger>
        </div>
    );
};

export default FooterToolTip;