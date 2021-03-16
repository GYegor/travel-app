import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Popup from './Popup';

const Entry: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isSignUp, setIsSignUp] = useState<boolean>(false);
    const clickLogIn = () => {
        setIsOpen(true);
        setIsSignUp(false);
    };

    const clickSignUp = () => {
        setIsOpen(true);
        setIsSignUp(true);
    }

    return (
        <>
            <Popup isOpen={isOpen} setIsOpen={setIsOpen} isSignUp={isSignUp} />
            <Button color="inherit" onClick={clickLogIn}>Log in</Button>
            <Button color="inherit" onClick={clickSignUp}>Sign up</Button>
        </>
    );
}

export default Entry;
