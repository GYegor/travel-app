import React from 'react';
import {
    Typography,
    Dialog,
  } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { onPopupToggle } from '../actions/popup-toggle';
import { AppState } from '../interfaces';

const Popup: React.FC = () => {
    const isPopup = useSelector<AppState, boolean>(state => state.isPopup);
    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(onPopupToggle(false))
    }

    return (
        <Dialog open={isPopup} onClose={onClose}>
             <Typography variant="subtitle1">Theme</Typography>
        </Dialog>
    );
}

export default Popup;