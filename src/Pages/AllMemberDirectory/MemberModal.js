import './MemberModal.css';

const MemberModal = ({ isOpen, onClose, modalMember }) => {
    return (
        isOpen && (
            <div className=" col-xl-3 col-lg-5 col-md-7 mx-auto  modal-overlay bg-white">
                <div className="modal-content">

                    {/* blood_group  cadre current_designation degree email employeecode  employeename  employeenameinenglish  
                     homedistrict   idsex  main_unit marital_status  mobilephone  pic   present_workplace rank   rankinenglish
                      religion sub_sub_unit sub_unit unit */}

                    <div className=' my-0'>
                        <button className="  float-right btn btn-outline-secondary btn-sm    " onClick={onClose}> X </button>
                        <p className=' fw-bold text-center mt-0 text-primary '>  {modalMember?.employeenameinenglish}</p>


                        <div className=' d-flex justify-content-center'>
                            <img className="memberImg" src={`data:image/jpeg;base64,${modalMember?.pic}`} alt="member_Image" />
                        </div>

                        <p className=' fw-bold text-center mt-3 mb-0'>  {modalMember?.employeename}</p>

                        <div className=' col-12 d-md-flex justify-content-between'>
                            <p className=' col-md-6 my-0'> <b> BCS: </b>  {modalMember?.cadre}th</p>
                            {modalMember?.current_designation &&
                                <p className=' col-md-6 my-0'> <b> Designation: </b>   {modalMember?.current_designation}</p>
                            }
                        </div>

                        <div className='col-12 d-md-flex justify-content-between'>
                            <p className=' col-md-6 my-0'> <b> BPID: </b>  {modalMember?.employeecode}</p>
                            <p className=' col-md-6 my-0'> <b>Rank:</b> {modalMember?.rank}({modalMember?.rankinenglish}) </p>
                        </div>

                        <p className=' my-0'><b>Unit:</b>  {modalMember?.main_unit},
                            {modalMember?.unit && <>
                                {modalMember?.unit}
                            </>}
                            {modalMember?.sub_unit && <>
                                , {modalMember?.sub_unit}
                            </>}
                            {modalMember?.sub_sub_unit && <>
                                , {modalMember?.sub_sub_unit}
                            </>}
                        </p>

                        <p className=' my-0'> <b>Present Workplace: </b>  {modalMember?.present_workplace}</p>

                        <div className='col-12 d-md-flex justify-content-between'>
                            <p className=' col-md-6 my-0'> <b>Blood Group:</b>  {modalMember?.blood_group}</p>
                            <p className=' col-md-6 my-0'> <b>Phone:</b> {modalMember?.mobilephone}</p>
                        </div>

                        <div className='col-12 d-md-flex justify-content-between'>
                            <p className=' col-md-6 my-0'> <b>Email:</b> <small> {modalMember?.email}</small></p>
                            <p className=' col-md-6 my-0'> <b>Degree:</b> {modalMember?.degree}</p>
                        </div>
                        {/* <div className=' d-md-flex justify-content-between'>
                            <p> SEX:  {modalMember?.idsex}</p>
                            <p> Marital Status:  {modalMember?.marital_status}</p>
                        </div> */}
                        <div className='col-12 d-md-flex justify-content-between'>
                            <p className=' col-md-6 my-0'> <b> Religion:</b>  {modalMember?.religion}</p>
                            <p className=' col-md-6 my-0'> <b> Home district:</b> {modalMember?.homedistrict}</p>
                        </div>
                    </div>

                    <div className='modalBtn  d-flex justify-content-center my-0'>
                        <button className=" btn btn-secondary btn-sm w-50  " onClick={onClose}>
                            X
                        </button>
                    </div>
                </div>
            </div>
        )
    );
};

export default MemberModal;