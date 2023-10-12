import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import './BlogAdminAssign.css';
import { AllContext } from '../../hooks/ContextData';
import toast from 'react-hot-toast';
import Loader from '../../Components/Common/Loader';
import swal from 'sweetalert';

const BlogAdminAssign = () => {
    useTitle("AssignPostAdmin")
    const { user, loading, setLoading } = useContext(AllContext);
    const [errorMessage, setErrorMessage] = useState("");
    const [memberList, setMemberList] = useState([]);

    useEffect(() => {
        fetch(`https://dev.bpsa.com.bd/api/adminlist/admin`)
            .then((res) => res.json())
            .then((data) => {
                console.log("Admin List: ", data?.data?.admin);
                setMemberList(data?.data?.admin); // Set the initial member list
                setErrorMessage("");
            })
            .catch((error) => {
                console.error("Fetch error: ", error);
                toast("An error occurred while fetching member data");
            });

    }, [])

    const handleAddMember = (e) => {
        e.preventDefault();
        const form = e.target;
        const BpId = form.bpid.value;

        if (!BpId) {
            toast("Please enter a BPID");
            setErrorMessage("Please enter a BPID");
            return;
        }
        const matchMember = memberList.find(member => member.BPID == BpId);
        if (matchMember) {
            toast("The member already added");
            setErrorMessage("The member already added");
            return;
        }

        if (memberList.length >= 5) {
            toast("Already 5 members added here. Please remove member");
            setErrorMessage("Already 5 members added here");
            return;
        }
        setErrorMessage("");
        // Fetch the member data using the entered BPID
        fetch(`https://dev.bpsa.com.bd/api/profile/${BpId}`)
            .then((res) => res.json())
            .then((data) => {
                if (data?.member) {

                    setMemberList([...memberList, data?.member]); // Add the new member to the list
                    console.log("Member User table Data: ", data?.member);
                    console.log("AdminAssing MemberList: ", memberList);
                    form.reset();
                } else {
                    toast("This member does not exist in our system");
                    setErrorMessage("This member does not exist in our system");
                }
            })
            .catch((error) => {
                console.error("Fetch error: ", error);
                toast("An error occurred while fetching member data");
            });
    };

    const handleRemoveMember = (mem) => {

        swal({
            title: "Are you sure?",
            text: "You want to delete status from it!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    if (mem.MemberRole == 'admin') {
                        fetch(`https://dev.bpsa.com.bd/api/admin-status?pmsid=${mem.BPID}&role=member`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                // toast.success(data?.message);

                                // Fetch the updated member list after making the role change
                                fetch(`https://dev.bpsa.com.bd/api/adminlist/admin`)
                                    .then((res) => res.json())
                                    .then((data) => {
                                        console.log("Updated Admin List: ", data?.data?.admin);
                                        const oldMember = memberList.filter(member => member.MemberRole != 'admin');
                                        setMemberList([...data?.data?.admin, ...oldMember]);
                                        swal("Removed his role from here!", {
                                            icon: "success",
                                        });
                                        setErrorMessage("");
                                    })
                                    .catch((error) => {
                                        console.error("Fetch error: ", error);
                                        toast("An error occurred while fetching updated member data");
                                    });
                            })
                            .catch((error) => {
                                console.error("Fetch error: ", error);
                                toast("An error occurred while updating member role");
                            });
                    }
                    else {
                        setMemberList(memberList.filter(member => member.BPID != mem.BPID));
                        swal("delete from here", {
                            icon: "success",
                        });
                    }
                } else {
                    swal("no update role!");
                }
            });
    }

    const handleRoleUpdate = (BPID, role) => {

        const matchAdmin = memberList.filter(member => member.MemberRole == 'admin');
        if (matchAdmin.length >= 3 && role == 'member') {
            toast("The system has already 3 admin");
            setErrorMessage("The system has already 3 admin");
            return;
        }

        let newRole;
        if (role === 'member') {
            newRole = 'admin';
        } else if (role === 'admin') {
            newRole = 'member';
        }

        // Update the member role first
        fetch(`https://dev.bpsa.com.bd/api/admin-status?pmsid=${BPID}&role=${newRole}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success(data?.message);

                // Fetch the updated member list after making the role change
                fetch(`https://dev.bpsa.com.bd/api/adminlist/admin`)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log("Updated Admin List: ", data?.data?.admin);
                        // console.log(data?.data)

                        const oldMember = memberList.filter(member => member.MemberRole != 'admin' && member.BPID != BPID);
                        setMemberList([...data?.data?.admin, ...oldMember]);

                        setErrorMessage("");
                    })
                    .catch((error) => {
                        console.error("Fetch error: ", error);
                        toast("An error occurred while fetching updated member data");
                    });
            })
            .catch((error) => {
                console.error("Fetch error: ", error);
                toast("An error occurred while updating member role");
            });
    };


    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className=' col-md-10 mx-auto'>
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-3 pb-1 ">
                    <nav aria-label="" className="bg-light rounded-3 p-2 ">
                        <h3 className='fw-bold text-center text-success'>Post Admin Assign</h3>
                    </nav>
                    <div className='col-xl-7  col-lg-10 mx-auto  my-4 adminAssign'>
                        <p className=' text-danger fw-bold text-center'>{errorMessage}</p>
                        <form onSubmit={handleAddMember} className=' d-flex justify-content-between align-items-baseline'>
                            <div className="mb-3 d-flex align-items-baseline ">
                                <label htmlFor="bpid" className="form-label col-2 fw-bold">BPID </label>
                                <input className="form-control" type="text" name='bpid' id="bpid" placeholder='Enter member BPID' />
                            </div>
                            <button className=' btn btn-outline-secondary btn-sm w-20   ms-md-0 me-2'>Add</button>
                        </form>
                        <div className="">
                            <table className="table table-striped table-hover adminAssignTable">
                                <thead>
                                    <tr className=' bg-secondary text-white'>
                                        <th className=' fw-bold' scope="col">SL</th>
                                        <th className=' fw-bold' scope="col">Name</th>
                                        <th className=' fw-bold' scope="col">BPID</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Role Update</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {memberList.map((member, index) =>
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{member?.Name}</td>
                                            <td className=' small'>{member?.BPID}</td>
                                            <td>{member?.MemberRole === 'admin' ? <>Admin</> : <>Member</>}</td>
                                            <td className='  '>
                                                {member?.MemberRole === 'member' ?
                                                    <button onClick={() => handleRoleUpdate(member?.BPID, member?.MemberRole)} className="btn btn-outline-secondary btn-sm">Make Admin</button>
                                                    :
                                                    <button onClick={() => handleRoleUpdate(member?.BPID, member?.MemberRole)} className="btn btn-outline-secondary btn-sm "> Make Member</button>
                                                }
                                            </td>
                                            <td className='   '>
                                                <button onClick={() => handleRemoveMember(member)} className=' btn btn-outline-secondary btn-sm adminAssignBtn'> <span> X </span></button>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogAdminAssign;
