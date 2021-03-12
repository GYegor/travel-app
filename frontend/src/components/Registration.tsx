import React, { useRef } from 'react';
import { Image } from 'cloudinary-react';

const Registration: React.FC = () => {
    const input = useRef<HTMLInputElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const url = "https://api.cloudinary.com/v1_1/dshffjhdkjj/image/upload";

    const formData = new FormData();
    const file = input.current?.files && input.current.files[0];
    if (file) {
      formData.append("file", file);
      formData.append("upload_preset", "ujwcmlol");
      fetch(url, {
        method: "POST",
        body: formData
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          const obj = JSON.parse(data);
          console.log(obj.public_id);
          // do request
        });
    };
    console.log(file);
  };

  return (
    <>
        <Image publicId="sample" />
        <form method="post" encType="multipart/form-data">
            <input
              ref={input}
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
