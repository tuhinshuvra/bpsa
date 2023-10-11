import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AllContext } from '../../hooks/ContextData';
import { getCookie, setLocalStorage } from '../../utlis/helper';
import Loader from '../../Components/Common/Loader';
import useTitle from '../../hooks/useTitle';
import './MemberProfilePage.css';
import '../Blogs/BlogListShow.css';
import MemberProfileComp from './MemberProfileComp';
import MemberProfileCompOld from './MemberProfileCompOld';
import MemberShipFeeComp from './MemberShipFeeComp';
import ApprovedBlogComp from './ApprovedBlogComp';
import PendingBlogComp from './PendingBlogComp';

const MemberProfilePage = () => {
    useTitle("Profile");
    const { user, loading, setLoading, setMemberBCSBatch } = useContext(AllContext);
    const [memberData, setMemberData] = useState("");
    const [userNewData, setUserNewData] = useState();
    const [approvedPosts, setApprovedPosts] = useState([]);
    const [pendingPosts, setPendingPosts] = useState([]);
    const [accessToken, setAccessToken] = useState('');
    const tokenUrl = 'https://pims.police.gov.bd:8443/pimslive/webpims/oauth/token';
    const clientId = 'ipzE6wqhPmeED-EV3lvPUA..';
    const clientSecret = 'ZIBtAfMkfuKKYqZtbik-TA..';
    const credentials = `${clientId}:${clientSecret}`;
    const base64Credentials = btoa(credentials);
    const headers = {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    const data = 'grant_type=client_credentials';

    // console.log("Profile Page Login User Data:", user);
    // console.log("Profile Page Login member police database Data:", memberData);

    useEffect(() => {
        const getAccessToken = async () => {
            try {
                const response = await axios.post(tokenUrl, data, { headers });
                setAccessToken(response.data.access_token);
            } catch (error) {
                console.error('Error getting access token:', error);
            }
        }
        getAccessToken();
    }, [])


    // login member profile data
    useEffect(() => {
        setLoading(true);
        const profileData = async () => {
            if (!accessToken) {
                return;
            }
            await axios.get(`https://pims.police.gov.bd:8443/pimslive/webpims/asp-info/member-profile/${user?.BPID}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                }
            })
                .then(result => {
                    setMemberData(result.data.items[0]);
                    setLocalStorage("loginUserPhoto", result.data.items[0]?.pic)
                    setMemberBCSBatch(result.data.items[0]?.cadre)
                    setLoading(false)
                })
        }
        profileData();
    }, [accessToken])

    if (memberData) {
        // console.log("profileUser data :", memberData);
    }

    // user new data
    useEffect(() => {
        fetch(`https://dev.bpsa.com.bd/api/profile/${user?.BPID}`)
            .then(res => res.json())
            .then(data => {
                // console.log("Member User table  Data: ", data?.member)
                setUserNewData(data?.member)
                setLoading(false)
            })
    }, [setLoading, user?.BPID]);


    // member all post
    useEffect(() => {
        setLoading(true);
        fetch("https://dev.bpsa.com.bd/api/blog", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getCookie("token")}`,
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response was not ok, status: ${res.status}`);
                }
                return res.json();
            })
            .then(result => {
                const approvedPosts = result.data.blog.filter(blog => blog?.memberName == user?.Name && blog?.status == "Approved");
                setApprovedPosts(approvedPosts);
                const pendingPosts = result.data.blog.filter(blog => blog?.memberName == user?.Name && blog?.status != "Approved");
                setPendingPosts(pendingPosts);
                setLoading(false);
            })
            .catch(error => console.log(error));
    }, [setLoading, user?.Name])


    if (loading) {
        return <Loader></Loader>
    }

    return (
        <div className=' col-md-10 mx-auto'>

            <MemberProfileComp
                member={memberData}
                userNewData={userNewData}
            ></MemberProfileComp>

            <section style={{ backgroundColor: "#eee" }}>
                <div className="container pt-1 pb-3 ">
                    {/* <MemberProfileCompOld
                        memberData={memberData}
                        userNewData={userNewData}
                    ></MemberProfileCompOld> */}

                    {/* <MemberShipFeeComp></MemberShipFeeComp> */}

                    <ApprovedBlogComp
                        approvedPosts={approvedPosts}
                    ></ApprovedBlogComp>

                    <PendingBlogComp
                        pendingPosts={pendingPosts}
                    ></PendingBlogComp>
                </div>
            </section>
        </div>
    );
};

export default MemberProfilePage; 