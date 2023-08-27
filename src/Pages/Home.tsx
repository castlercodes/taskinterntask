import React, { useEffect } from 'react';
import Sidebar from '../Components/SideBar';
import AddContacts from '../Components/AddContactButton';
import { useSelector } from 'react-redux'; // Removed useDispatch since you're not dispatching in this component
import ContactCard from '../Components/ContactCard';

interface Contact {
  id: number;
  name: string;
  phonenumber: string;
  address: string;
  companyName: string;
}

function Home() {

  const Contacts = useSelector((state: any) => state.contacts);

  return (
    <div>
      <Sidebar />
      <div
        className='pt-14 ml-500'>
        {Contacts.value[0] ? Contacts.value.map((contact: Contact) => (
          <ContactCard contact={contact}/>
        )): (<div> Nothing to Display, please try adding contacts</div>)}
      </div>

      <AddContacts />
    </div>
  );
}

export default Home;
