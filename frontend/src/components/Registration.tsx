import React, { useRef } from 'react';
import { Image } from 'cloudinary-react';
import cloudName from '../constants/cloudName';

const Registration: React.FC = () => {
  const inputName = useRef<HTMLInputElement>(null);
  const inputFile = useRef<HTMLInputElement>(null);

  const requestToBackend = async (id: string) => {
    const response = await fetch("/api/users/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name: inputName.current?.value, imageId: id }),
    });
    // return await response.json();
  }

  const requestToCloudinary = async (formData: FormData): Promise<any> => {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const response = await fetch(url, {
        method: "POST",
        body: formData
      });

    return await response.json();
  }

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const formData = new FormData();
    const file = inputFile.current?.files && inputFile.current.files[0];

    if (file) {
      const upload_preset: string = 'ujwcmlol';
      formData.append("file", file);
      formData.append("upload_preset", upload_preset);
      const data = await requestToCloudinary(formData);
      requestToBackend(data.public_id);
    } else {
      const imageId: string ='travelApp/avatar_ltzdkha';
      requestToBackend(imageId);
    }
  };

  return (
    <>
        <Image publicId="sample" />
        <form method="post" encType="multipart/form-data">
            <input
              ref={inputName}
            />
            <input
              ref={inputFile}
              name="file"
              type="file"
              data-cloudinary-field="image_id"
            />
            <button type="submit" onClick={handleClick}>Отправить</button>
          </form>
    </>
  );
}

export default Registration;
