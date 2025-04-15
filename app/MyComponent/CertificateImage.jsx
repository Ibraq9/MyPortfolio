import React from 'react';
import Image from 'next/image';

const CertificateImage = ({ ImageSrc, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl p-4 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 p-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors z-50"
          onClick={onClose}
          aria-label="Close certificate"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="relative h-[80vh] rounded-lg overflow-hidden">
          <Image
            src={ImageSrc}
            alt={`Certificate`}
            fill
            style={{ objectFit: 'contain' }}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
          />
        </div>
      </div>
    </div>
  );
};

export default CertificateImage;