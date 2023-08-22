import React, { useEffect } from 'react';
import './BlogAdminAssign.css';


const handleAddAdminRole = (event) => {
    event.preventDefault()

    console.log('handleAddAdminRole');
}

const handleRemoveAdminRole = (event) => {
    event.preventDefault()
    console.log('handleRemoveAdminRole');
}

const handleListMembers = (event) => {
    event.preventDefault()
    console.log('handleListMembers');
}

const BlogAdminAssign = () => {

    useEffect(() => {
        fetch('/data/bpsa_member_data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => console.log("BPSA Member Data: ", data))
            .catch(error => console.error("Fetch error: ", error));
    }, []);



    return (
        <div className=' container col-xl-4 col-lg-6 col-md-8 mx-auto'>
            <h1 className='fw-bold text-center text-success my-4'>Blog Admin Assign</h1>
            <div>
                <form className='adminAssign'>
                    <div className=' d-flex justify-content-evenly align-items-baseline'>
                        <div className="mb-3 d-flex align-items-baseline ">
                            <label htmlFor="bpid" className="form-label col-2 fw-bold">BPID </label>
                            <input type="text" className="form-control" id="bpid" placeholder='Enter member BPID' aria-describedby="bpidHelp" />
                        </div>
                        <button className=' btn btn-primary btn-sm w-25 ms-md-0 ms-1'>Add</button>
                    </div>
                    <h5 className=' text-primary text-center fw-bold'>Blog Admins</h5>
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

                    {/* <div className=' d-flex justify-content-between'>
                        <button type="reset" className="btn btn-primary btn-sm">Reset</button>
                        <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                    </div> */}
                </form>

            </div>
        </div>
    );
};

export default BlogAdminAssign;