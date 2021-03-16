import React from 'react';
import {
    Box,
    Dialog,
  } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import SignUp from './SignUp';

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        padding: theme.spacing(3),
    },
    close: {
        position: 'absolute',
        top: 5,
        right: 5,
        '&:hover': {
            cursor: 'pointer',
        },
    }
  }));

interface IProps {
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}

const Popup: React.FC<IProps> = ({ isOpen, setIsOpen }: IProps) => {
    const classes = useStyles();

    const onClose = () => {
        setIsOpen(false);
    }

    return (
        <Dialog open={isOpen} onClose={onClose}>
            <Box className={classes.container}>
                <CloseIcon
                    className={classes.close}
                    onClick={onClose}
                />
                <SignUp setIsOpen={setIsOpen} />
            </Box>
        </Dialog>
    );
}

export default Popup;