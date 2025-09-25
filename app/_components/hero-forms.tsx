import Image from "next/image";
import pic from "@/public/images/pic_me.png";
import { useState } from "react";

interface ProfilePhotoProps {
  //src: string;
  alt: string;
  size?: number; // Default size will be 100px
}

const ProfilePhoto = ({
  //src,
  alt,
  size = 100,
}: ProfilePhotoProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        style={{
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
        onClick={handleOpenModal}
        className="cursor-pointer"
      >
        {/* <Image src={src} alt={alt} width={size} height={size} /> */}
        <Image src={pic} alt={alt} width={size} height={size} />
      </div>
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg p-4 shadow-lg z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={pic} alt={alt} width={size * 4} height={size * 4} />
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePhoto;
