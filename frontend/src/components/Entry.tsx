import React from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from "react-redux";
import { AppState } from '../interfaces';
import { onPopupToggle } from '../actions/popup-toggle';

const Entry: React.FC = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(onPopupToggle(true))
    };

    return (
        <>
            <Button color="inherit" onClick={handleClick}>Log in</Button>
            <Button color="inherit" onClick={handleClick}>Sign up</Button>
        </>
    );
}

export default Entry;
