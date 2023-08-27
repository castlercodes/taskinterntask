import React, { useState, useEffect } from 'react';

interface Contact {
  id: number;
  name: string;
  phonenumber: string;
  address: string;
  companyName: string;
}

const ContactCard = ({ contact }: {contact: Contact}) => {
    const [showDetails, setShowDetails] = useState(false);
  
    return (
      <div
        className={`flex items-center justify-between mb-4 ${showDetails ? 'w-full' : 'w-2/3'}`}
      >
        <div className="flex-1">
          {/* <img
            src={contact.image}
            alt={contact.name}
            className="rounded-full w-16 h-16"
          /> */}
          <div className="ml-4">
            <h4 className="text-lg font-bold">{contact.name}</h4>
            <p className="text-sm">{contact.companyName}</p>
          </div>
        </div>
        <div>
          <button
            className="bg-blue-500 text-white rounded-md px-4 py-2"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Hide ' : 'Show '}
          </button>
          {showDetails && (
            <button
              className="bg-gray-500 text-white rounded-md px-4 py-2"
              onClick={() => setShowDetails(false)}
            >
              Details Information Return
            </button>
          )}
        </div>
        {showDetails && (
          <div className="w-full mt-4 bg-gray-100">
            <p className="text-sm text-gray-600">Phone Number: {contact.phonenumber}</p>
            <p className="text-sm text-gray-600">Address: {contact.address}</p>
          </div>
        )}
  
      </div>
    );
  };
  
  export default ContactCard;
