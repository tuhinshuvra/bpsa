import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import MemberImageUpload from './MemberImageUpload';
import MemberCoCurriculamActivitiesEntry from './MemberCoCurriculamActivitiesEntry';
import "./MemberProfileSample.css";

const MemberProfileSample = ({ member, userNewData }) => {
    const { user, showImageUpload, setShowImageUpload, showCoCurricular, setShowCoCurricular } = useContext(AllContext);

    const toggleImageUpload = () => {
        setShowImageUpload(!showImageUpload);
    };

    const toggleCoCurricularUpload = () => {
        setShowCoCurricular(!showCoCurricular);
    };

    console.log("MemberProfileSample memberData : ", member);
    // blood_group cadre  current_designation dateofbirth degree email employeecode employeename employeenameinenglish fathername gift gov_email
    // gov_mob homedistrict idsex main_unit marital_status mobilephone mothername pic rank rankinenglish religion sub_sub_unit sub_unit unit  

    return (
        <div className="py-4  bg-[#EEE]">
            <section>
                <div className='container mx-auto '>

                    <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2 mb-4 mx-1">
                        <h2 className='fw-bold text-center  '>{member?.employeenameinenglish} PROFILE</h2>
                    </nav>
                    <div className="row    bg-white mx-1    rounded-xl  py-3 ">

                        <div className="col-lg-5 my-auto">

                            {userNewData?.image ?
                                <>
                                    <img src={userNewData?.image} alt="avatar" className="memberImage mx-auto   mb-0" style={{ width: "300px", height: "340px" }} />
                                </>
                                :
                                <>
                                    <img src={`data:image/jpeg;base64,${member?.pic}`} alt="avatar" className="memberImage mx-auto   mb-0" style={{ width: "300px", height: "340px" }} />
                                </>
                            }
                            <div className='col-lg-9 mx-auto text-center mt-1  mb-[-7px] '>
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

                            <div className=' col-lg-9 mx-auto text-center mt-3'>

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

                            {/* <div className="about-avatar">
                                <img src={`data:image/jpeg;base64,${member?.pic}`} alt="avatar" className="memberImage mx-auto   mb-0" style={{ width: "300px", height: "340px" }} />
                            </div> */}
                        </div>
                        <div className="col-lg-7">
                            <div className="about-text go-to">
                                <h4 className=" text-black fw-bold">{member?.employeename}</h4>
                                <h6 className=" text-black lead">
                                    {member?.current_designation && <> {member?.current_designation}, </>}
                                    {member?.main_unit && <> {member?.main_unit}</>}
                                    {member?.unit && <>, {member?.unit}</>}
                                    {member?.sub_unit && <>, {member?.sub_unit}</>}
                                    {member?.sub_sub_unit && <>, {member?.sub_sub_unit}</>}
                                </h6>
                                <p className=' fw-bold'>{member.rank}<> </> ({member?.rankinenglish})</p>
                                {/* <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p> */}
                                <div className="row about-list">
                                    <div className="col-md-6">

                                        <div className="media">
                                            <label>Work Place:</label>
                                            <p> {member?.main_unit && <> {member?.main_unit}</>}
                                                {member?.unit && <>/ {member?.unit}</>}
                                                {member?.sub_unit && <>/ {member?.sub_unit}</>}
                                                {member?.sub_sub_unit && <>/ {member?.sub_sub_unit}</>}
                                            </p>
                                        </div>

                                        <div className="media">
                                            <label>BCS Batch:</label>
                                            <p>{member?.cadre}th</p>
                                        </div>

                                        <div className="media">
                                            <label>Phone:</label>
                                            <p>{member?.mobilephone}</p>
                                        </div>

                                        <div className="media">
                                            <label>BPID:</label>
                                            <p>{member?.employeecode}</p>
                                        </div>

                                        <div className="media">
                                            <label>E-mail:</label>
                                            <p>{member?.email}</p>
                                        </div>


                                        {/* <div className="media">
                                            <label>Age</label>
                                            <p>22 Yr</p>
                                        </div> */}

                                        {member?.gov_email &&
                                            <div className="media">
                                                <label>Gov-Email:</label>
                                                <p>{member?.gov_email}</p>
                                            </div>
                                        }

                                        <div className="media">
                                            <label>Blood Group:</label>
                                            <p>{member?.blood_group}</p>
                                        </div>
                                        <div className="media">
                                            <label>Medel:</label>
                                            <p>{member?.gift}</p>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="media">
                                            <label>Father's Name:</label>
                                            <p>{member?.fathername}</p>
                                        </div>
                                        <div className="media">
                                            <label>Mother's Name:</label>
                                            <p>{member?.mothername}</p>
                                        </div>

                                        {member?.gov_mob &&
                                            <div className="media">
                                                <label>Gov-Phone:</label>
                                                <p>{member?.gov_mob}</p>
                                            </div>
                                        }

                                        <div className="media">
                                            <label>Birthday:</label>
                                            <p>{new Date(member?.dateofbirth).toDateString()}</p>
                                        </div>

                                        <div className="media">
                                            <label>Marital Status:</label>
                                            <p>{member?.marital_status}</p>
                                        </div>

                                        <div className="media">
                                            <label>Education:</label>
                                            <p>{member?.degree}</p>
                                        </div>
                                        <div className="media">
                                            <label>Religion:</label>
                                            <p>{member?.religion}</p>
                                        </div>
                                        <div className="media">
                                            <label>HomeDistrict:</label>
                                            <p>{member?.homedistrict}</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>
            </section>
        </div>
    );
};

export default MemberProfileSample;