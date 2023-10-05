import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AllContext } from '../../hooks/ContextData';

const MemberShipFeeComp = () => {
    const { user } = useContext(AllContext);
    return (
        <div>
            <div className="row mt-5 mb-2">
                <div className="col">
                    <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2  ">
                        <h4 className=' text-center'>Membership Fee </h4>
                    </nav>
                </div>
            </div>

            <div className="card blogArea text-center"  >
                <div className="card-body">
                    <p className=' fs-5 fw-bold my-auto'>
                        Your membership fee payment clear till {2020}
                        <Link className='fst-italic ms-1' to={`/membershipFee/${user?.id}`}>Show Details</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MemberShipFeeComp;