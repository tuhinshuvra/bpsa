import React from 'react';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import MemberCoCurriculamActivitiesEntry from './MemberCoCurriculamActivitiesEntry';
import MemberImageUpload from './MemberImageUpload';

const MemberProfileComp = ({ memberData, userNewData }) => {
    const { user, showImageUpload, setShowImageUpload, showCoCurricular, setShowCoCurricular } = useContext(AllContext);

    const toggleImageUpload = () => {
        setShowImageUpload(!showImageUpload);
    };

    const toggleCoCurricularUpload = () => {
        setShowCoCurricular(!showCoCurricular);
    };

    return (
        <div>

            <nav aria-label="breadcrumb" className="mx-1 bg-light rounded-3 p-2 mb-4">
                <h2 className='fw-bold text-center  '>{memberData?.employeenameinenglish} PROFILE</h2>
            </nav>
            <div className="row">
                <div className="col-lg-4 my-1 my-lg-0">
                    <div className="card  proCard shadow-lg">
                        <div className="card-body proCardBody ">
                            {user?.image ?
                                <>
                                    <img src={user?.image} alt="avatar" className="rounded-circle img-fluid mx-auto shadow-lg mb-0" style={{ width: "165px" }} />
                                </>
                                :
                                <>
                                    <img src={`data:image/jpeg;base64,${memberData?.pic}`} alt="avatar" className="rounded-circle img-fluid mx-auto shadow-lg mb-0" style={{ width: "165px", height: "165px" }} />
                                </>
                            }

                            <div className='text-center mt-[-11px] mb-[-7px] '>
                                {showImageUpload ? (
                                    <div>
                                        <MemberImageUpload />
                                    </div>
                                ) : (
                                    <button className='imageUpload' onClick={toggleImageUpload}>
                                        {userNewData?.image ? <>Update Image</> : <>Image Upload</>}
                                    </button>
                                )}
                            </div>


                            <div className=' text-center'>
                                <h6 className="my-0 fw-bold">{memberData?.employeenameinenglish?.slice(0, 40)}
                                </h6>
                                <h6 className="my-0 fs-6 ">
                                    {memberData?.current_designation && <>
                                        {memberData?.current_designation},&nbsp;
                                    </>}
                                    {memberData?.unit &&
                                        <>
                                            {memberData?.unit}
                                        </>
                                    }

                                </h6>
                                {userNewData?.CoCurriculumActivities &&
                                    <p className="mt-1 mb-0 coCurriculur"> <b>Interest on</b> : {userNewData?.CoCurriculumActivities} </p>
                                }


                                {showCoCurricular ? (
                                    <div>
                                        <MemberCoCurriculamActivitiesEntry />
                                    </div>
                                ) : (
                                    <button className='coCurricularUpload' onClick={toggleCoCurricularUpload}>
                                        {userNewData?.CoCurriculumActivities ? <>Update Co-Curricular Activities</> : <>  CoCurricular Activities Upload</>}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                </div>


                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-md-6 my-1 my-lg-0">
                            <div className="card proCard shadow-lg">
                                <div className="card-body proCardBody my-auto">
                                    <p className="my-0"><b> Rank</b>: {memberData?.rank}({memberData?.rankinenglish})</p>
                                    {memberData?.current_designation &&
                                        <p className="my-0"><b> Designation</b>: {memberData?.current_designation}</p>
                                    }
                                    <p className="my-0"><b> BP ID</b>: {memberData?.employeecode}</p>
                                    <p className="my-0"><b> BCS Batch</b>: {memberData?.cadre}th</p>
                                    <p className="my-0"><b> Unit</b>:
                                        {memberData?.main_unit &&
                                            <> {memberData?.main_unit}</>
                                        }
                                        {memberData?.unit &&
                                            <>, {memberData?.unit}</>
                                        }
                                        {memberData?.sub_unit &&
                                            <>, {memberData?.sub_unit}</>
                                        }
                                        {memberData?.sub_sub_unit &&
                                            <>, {memberData?.sub_sub_unit}</>
                                        }
                                    </p>
                                    <p className="my-0"><b> Phone no  </b>    : {memberData?.mobilephone}
                                        {memberData?.gov_mob && <>,&nbsp;{memberData?.gov_mob}</>}
                                    </p>
                                    <p className="my-0"> <b> Email</b>    : <small>{memberData?.email}</small>
                                        {memberData?.gov_email && <>, <small className=' my-0'>  {memberData?.gov_email}</small></>}
                                    </p>
                                    <p className="my-0"><b> Medal </b> : {memberData?.gift}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 my-1 my-lg-0">
                            <div className="card proCard shadow-lg">
                                <div className="card-body proCardBody">
                                    <p className="my-0"><b> Father’s Name </b> : {memberData?.fathername} </p>
                                    <p className="my-0"><b> Mother’s Name </b>: {memberData?.mothername}</p>
                                    <p className="my-0"><b> Education </b> : {memberData?.degree}</p>
                                    <p className="my-0"><b> DOB  </b>  :  {new Date(memberData?.dateofbirth).toDateString()}</p>
                                    <p className="my-0"><b> Marital Status </b>: {memberData?.marital_status}</p>
                                    <p className="my-0"><b> Blood Group  </b>  : {memberData?.blood_group} </p>
                                    <p className="my-0"><b> Religion    </b>  : {memberData?.religion}</p>
                                    <p className="my-0"><b> Home District </b> : {memberData?.homedistrict}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberProfileComp;