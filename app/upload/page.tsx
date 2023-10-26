"use client";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudResult {
  public_id: string;
}

const UploadImage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage src={publicId} width={200} height={200} alt="logo" />
      )}
      <CldUploadWidget
        uploadPreset="h6r1rbef"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};
export default UploadImage;
