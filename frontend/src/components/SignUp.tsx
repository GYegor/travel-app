import React, { useState, useRef } from 'react';
import {
    Typography,
    TextField,
    Button,
  } from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { setUser } from '../actions/set-user';
import cloudName from '../constants/cloudName';

const useStyles = makeStyles((theme: Theme) => createStyles({
    heading: {
        textAlign: 'center',
        paddingBottom: theme.spacing(2),
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 200,
    },
  }));

  interface IProps {
    setIsOpen: (value: boolean) => void
  }

const SignUp: React.FC<IProps> = ({ setIsOpen }: IProps) => {
    const classes = useStyles();
    const [value, setValue] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    const inputFile = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const requestToBackend = async (id: string) => {
        const response = await fetch("/api/users/registration", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({ name: value, imageId: id }),
        });

        return await response;
      }

    const requestToCloudinary = async (formData: FormData): Promise<any> => {
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
      const response = await fetch(url, {
          method: "POST",
          body: formData
        });

      return await response.json();
    }

    const uploadImage = async (file: any, formData: FormData) => {
        let imageId: string ='travelApp/avatar_ltzdkha';

        if (file) {
          const upload_preset: string = 'ujwcmlol';
          formData.append("file", file);
          formData.append("upload_preset", upload_preset);
          const data = await requestToCloudinary(formData);
          imageId = data.public_id;
        }

        return imageId;
    }

    const isNickname = () => {
        if (value.length) return true;
        return false;
    }

    const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (isNickname()) {
            const formData = new FormData();
            const file = inputFile.current?.files && inputFile.current.files[0];
            const imageId: string = await uploadImage(file, formData);
            const result = await requestToBackend(imageId);
            if (result.status === 201) {
                const newUser = await result.json();
                dispatch(setUser(newUser));
                setIsOpen(false);
            } else {
                const message = await result.json();
                setErrorMessage(message.message);
                setIsError(true);
            }
        } else {
            setErrorMessage('field is empty');
            setIsError(true);
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const handleFocus = () => {
        setErrorMessage('');
        setIsError(false);
    }

    return (
        <>
            <Typography
                    variant="h4"
                    className={classes.heading}
                >
                    Sign up
                </Typography>
                <form
                    method="post"
                    encType="multipart/form-data"
                    className={classes.form}
                >
                    <TextField
                        onChange={handleChange}
                        onFocus={handleFocus}
                        value={value}
                        required
                        label="Nickname"
                        error={isError}
                        helperText={errorMessage}
                    />
                    <label htmlFor="upload-photo">
                        <input
                          style={{ display: 'none' }}
                          id="upload-photo"
                          ref={inputFile}
                          name="upload-photo"
                          type="file"
                        />

                        <Button
                            component="span"
                            color="secondary"
                            variant="contained"
                            style={{width: '100%'}}
                        >
                          upload photo
                        </Button>
                    </label>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                    >
                        Sign up
                    </Button>
                </form>
        </>
    );
}

export default SignUp;