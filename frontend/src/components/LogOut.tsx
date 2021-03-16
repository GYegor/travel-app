import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { setUser } from '../actions/set-user';

const LogOut: React.FC = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(setUser(null));
    }

    return (
        <Button color="inherit" onClick={handleClick}>Log out</Button>
    );
}

export default LogOut;