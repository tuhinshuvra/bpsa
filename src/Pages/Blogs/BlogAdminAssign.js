import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import './BlogAdminAssign.css';
import { AllContext } from '../../hooks/ContextData';
import toast from 'react-hot-toast';
import Loader from '../../Components/Common/Loader';


const BlogAdminAssign = () => {
    useTitle("AssignPostAdmin")
    const { user, loading, setLoading } = useContext(AllContext);
    const [errorMessage, setErrorMessage] = useState("");
    const [memberList, setMemberList] = useState([]);


    // console.log("AdminAssign Member List: ", memberList);


    const handleAddMember = (event) => {
        // event.preventDefault();

        // Get the value of the input field with name 'bpid'
        const bpid = document.querySelector('input[name="bpid"]').value;

        // Check if 'bpid' is empty
        if (!bpid) {
            toast("Please enter a BPID");
            setErrorMessage("Please enter a BPID");
            return;
        }

        // Fetch the member data using the entered BPID
        fetch(`https://dev.bpsa.com.bd/api/profile/${bpid}`)
            .then((res) => res.json())
            .then((data) => {
                if (data?.member) {
                    setMemberList([...memberList, data?.member]);
                    // Member exists, you can proceed here
                    console.log("Member User table Data: ", data?.member);
                    console.log("AdminAssing MemberList: ", memberList);
                    // You can add your logic to handle the member data
                } else {
                    toast("This member does not exist in our system");
                }
            })
            .catch((error) => {
                console.error("Fetch error: ", error);
                toast("An error occurred while fetching member data");
            });
    };


    const handleAddAdminRole = (event) => {
        event.preventDefault()

        console.log('handleAddAdminRole');
    }

    const handleRemoveAdminRole = (event) => {
        event.preventDefault()
        console.log('handleRemoveAdminRole');
    }


    const handleRoleUpdate = (BPID, role) => {
        let newRole;
        if (role === 'member') {
            newRole = 'admin';
        } else if (role === 'admin') {
            newRole = 'member';
        }

        const updatedData = {
            BPID: BPID,
            newRole: newRole,
        };

        fetch(`https://dev.bpsa.com.bd/api/member-status?pmsid=${BPID}&role=${newRole}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success(data?.message)
            })
            .catch((error) => {
                console.error("Fetch error: ", error);
                toast("An error occurred while updating member role");
            });
    }


    if (loading) {
        return <Loader></Loader>
    }

    return (
        // <div className=' container col-xl-4 col-lg-6 col-md-8 mx-auto'>
        <div className=' col-md-10 mx-auto'>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-1 ">
                    <nav aria-label="" className="bg-light rounded-3 p-2 ">
                        <h3 className='fw-bold text-center text-success'>Post Admin Assign</h3>
                    </nav>
                    <div className='  col-lg-6 col-md-8 mx-auto  my-4 adminAssign'>

                        <p className=' text-danger fw-bold text-center'>{errorMessage}</p>
                        <div className=' d-flex justify-content-between align-items-baseline'>
                            <div className="mb-3 d-flex align-items-baseline ">
                                <label htmlFor="bpid" className="form-label col-2 fw-bold">BPID </label>
                                <input className="form-control" type="text" name='bpid' id="bpid" placeholder='Enter member BPID' />
                            </div>
                            <button onClick={() => handleAddMember()} className=' btn btn-primary btn-sm w-20   ms-md-0 me-4'>Add</button>
                        </div>





                        <div className="">
                            {
                                memberList.map((member, index) =>
                                    <div className=" d-flex my-1 " key={index}>
                                        <p className="my-0 col-md-6"><b> Name</b>: {member?.Name}</p>
                                        <p className="my-0 col-md-3"><b> Role</b>: {member?.MemberRole}</p>
                                        <button onClick={() => handleRoleUpdate(member?.BPID, member?.MemberRole)} className="btn btn-primary btn-sm col-md-3"> Role Update </button>
                                    </div>)
                            }
                        </div>



                        {/* <form className='adminAssign'>
                            <div className=' d-flex justify-content-evenly align-items-baseline'>
                                <div className="mb-3 d-flex align-items-baseline ">
                                    <label htmlFor="bpid" className="form-label col-2 fw-bold">BPID </label>
                                    <input type="text" className="form-control" id="bpid" placeholder='Enter member BPID' aria-describedby="bpidHelp" />
                                </div>
                                <button className=' btn btn-primary btn-sm w-25 ms-md-0 ms-1'>Add</button>
                            </div>
                            <h5 className=' text-primary text-center fw-bold'>Post Admins</h5>
                            <table className="table table-striped table-hover adminAssignTable">
                                <thead>
                                    <tr className=' bg-secondary text-white'>
                                        <th scope="col">SL</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Role Update</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Abdur Zabbar</td>
                                        <td className=' text-success fst-italic fw-bold'>Admin</td>
                                        <td className=' text-center '> <button onClick={handleRemoveAdminRole} className=' btn btn-primary btn-sm adminAssignBtn'>RemoveAdmin</button> </td>
                                        <td className=' text-center '> <button onClick={handleListMembers} className=' btn btn-primary btn-sm adminAssignBtn'>Delete</button> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Takia Islam</td>
                                        <td className=' text-primary fst-italic fw-bold'>Member</td>
                                        <td className=' text-center '> <button onClick={handleAddAdminRole} className=' btn btn-success btn-sm adminAssignBtn'>Make Admin</button> </td>
                                        <td className=' text-center '> <button onClick={handleListMembers} className=' btn btn-primary btn-sm adminAssignBtn'>Delete</button> </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Khorshed Alam</td>
                                        <td className=' text-primary fst-italic fw-bold'>Member</td>
                                        <td className=' text-center '> <button onClick={handleAddAdminRole} className=' btn btn-success btn-sm adminAssignBtn'>Make Admin</button> </td>
                                        <td className=' text-center '> <button onClick={handleListMembers} className=' btn btn-primary btn-sm adminAssignBtn'>Delete</button> </td>
                                    </tr>
                                </tbody>
                            </table> 
                        </form> */}



                    </div>
                </div>
            </section>
        </div>





        // </div>
    );
};

export default BlogAdminAssign;