import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Popup from './Popup';

const Entry: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleClick = () => {
        setIsOpen(true);
    };

    return (
        <>
            <Popup isOpen={isOpen} setIsOpen={setIsOpen} />
            <Button color="inherit" onClick={handleClick}>Log in</Button>
            <Button color="inherit" onClick={handleClick}>Sign up</Button>
        </>
    );
}

export default Entry;
