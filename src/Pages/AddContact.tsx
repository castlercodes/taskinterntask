import React, { FormEvent, useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { addContacts } from '../Features/Store.ts';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
  const [name, setName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    
  }, [name, phonenumber, companyName, address])
  

  const handleSubmit = (e:FormEvent) => {
    e.preventDefault();
    const contact = {
      id: 1,
      name,
      phonenumber,
      companyName,
      address,
    };
    console.log(contact);
    dispatch(addContacts(contact));
    navigate("/")
  };

  return (
    <div className={`flex  justify-center items-center w-full mt-5`}>
      <form onSubmit={handleSubmit} >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`p-2 rounded-md border-gray-300`}
        />
        <input
          type="text"
          placeholder="Phonenumber"
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
          className={`p-2 rounded-md border-gray-300`}
        />
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className={`p-2 rounded-md border-gray-300`}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className={`p-2 rounded-md border-gray-300`}
        />
        <button type="submit" className={`bg-blue-500 text-white p-2 rounded-md`}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default AddContact;
