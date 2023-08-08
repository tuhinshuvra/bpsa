import React from 'react';
import img from "../Blogs/s1.jpg"
const MemberBlockDetails = () => {
    return (
        <div>
            <h1 className=' mt-3 text-center'>Exploring the Fascinating World of Artificial Intelligence</h1>
            <div className='mx-[10vw] my-[3vh]'>
                <img className='w-full h-[60vh]' src={img}></img>
                <p className='my-3'>This is blog details, This is blog details, This is blog details, This is blog details, details details This is blog details , This is blog details, This is blog details, This is blog details, details details This is blog details, This is blog details, This is blog details, This is blog details, details detailsThis is blog details, This is blog details, This is blog details, This is blog details, details details This is blog details, This is blog details.</p>
                <p>
                    জঙ্গিবাদ দমনে বাংলাদেশ পুলিশের গর্বিত সদস্যদের ভুমিকা দেশে বিদেশে সমাদৃত । ২০১৬ সালে গুলশানের হলি আর্টিজান বেকারীতে জঙ্গি হামলায় ডিএমপির সহকারী পুলিশ কমিশনার রবিউল ইসলাম এবং বনানী থানার তৎকালীন অফিসার ইনচার্জ সালাউদ্দিন খান দুঃসাহসী উদ্ধার অভিযান পরিচালনা করতে গিয়ে নিহত হন।
                </p>
                <div className='flex justify-between items-center'>
                    <div>
                        <p >Blogger: Md Rasel Islam</p>
                        <p>Published: 07/08/2023</p>
                    </div>
                    <div>
                        <button className='btn btn-info'>pending</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberBlockDetails; 