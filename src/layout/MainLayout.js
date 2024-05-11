import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar></Navbar>
            <div className='flex-grow'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;