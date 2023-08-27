import React from 'react';
import { useNavigate } from 'react-router-dom';

function AddContactButton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/addcontacts');
    };

    return (
        <div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600"
            onClick={handleClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
            </svg>
        </div>
    );
}

export default AddContactButton;
