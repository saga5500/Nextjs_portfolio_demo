// app/components/BackButton.tsx
import React from 'react';
import { useRouter } from 'next/navigation';


// Define the type for the props (including onClick)
interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
     const router = useRouter();
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Back button
    </button>
  );
};

export default BackButton;
