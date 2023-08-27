import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SideBar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(true);

    const handleResize = () => {
        if(window.innerWidth < 640) setIsOpen(false);
        else setIsOpen(true);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    const handleClick = (location: string) => {
        navigate(location);
    };

    return (
        <>
            {(isOpen)?(<div className={`bg-gray-900 text-white lg:w-1/6 md:w-1/3 h-screen fixed top-0 left-0 overflow-y-auto transition-all duration-300 sm:w-0 md:w-1/3'}`}>
            <div
                className="p-4 text-2xl font-semibold"
            >
                 Sidebar
            </div>
            <div
                className="p-4 cursor-pointer hover:bg-gray-700"
                onClick={() => {
                    handleClick('/');
                }}
            >
                Contacts
            </div>
            <div
                className="p-4 cursor-pointer hover:bg-gray-700"
                onClick={() => {
                    handleClick('/data-display');
                }}
            >
                Charts and Maps
            </div>
        </div>
        ):(
           <div>Open SideBar</div> 
        )}
        </>
    );
}

export default SideBar;

