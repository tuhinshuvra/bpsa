import { signout } from "../../utlis/helper";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { AllContext } from './hooks/ContextData';

const IdelTimeLogout = () => {
    const { user, setUser } = useContext(AllContext);
    const navigate = useNavigate()
    signout(() => {
        setUser("");
        toast.success('User Logout Successfully')
        navigate("/login")
    })

    return signout
};

export default IdelTimeLogout