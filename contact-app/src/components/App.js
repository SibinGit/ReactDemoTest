import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import { uuid } from 'uuidv4';
import { v4 as uuid } from 'uuid';
import api from '../api/contacts';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail  from './ContactDetail';
import EditContact from './EditContact';
import DeleteContact from './DeleteContact';

function App() {
  const LOCAL_STORAGE_KEY = 'contacts';
  const initialContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  const [contacts, setContacts] = useState(initialContacts);
  const [searchTerm,setSearchTeam] = useState("");
  const [searchresults, setSearchResults] = useState([]);

  const [i, setI] = useState(0);
  const incrementI = () => { setI(i + 1)};

  //Retrive Contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts")
    return response.data;
  };


  // const addContactHandler = (contact) => {
  //   setContacts([...contacts, contact]);
  // };
  const addContactHandler = async (contact) => {  
    // setContacts([...contacts, { id: uuid(), ...contact }]);
    //console.log(contact);
    const request = {
      d: uuid(), 
      ...contact 
    }
    const response = await api.post("/contacts",request)
    console.log(response);
    setContacts([...contacts, response.data]);
  };
  
  // const addContactHandler = (contact) => {
  //   console.log(incrementI);
  //   setContacts([...contacts, { id:incrementI, ...contact }]);
  // };

  // const addContactHandler = (contact) => {
  //   setContacts((prevContacts) => [...prevContacts, { id: uuid(), ...contact }]);
  // };

  const updateContactHandler = async (contact) => { 
    const response = await api.put(`/contacts/${contact.id}`,contact)
    console.log(response.data);
    const {id,name,email} = response.data;    
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? {...response.data} : contact;
      })
    );
  };

  const removeContactHandler =  async (id) => {
    await api.delete(`/contacts/${id}`);
    console.log(id);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });  
    //window.location.reload();
    setContacts(newContactList);
    //window.location.href = '/';
    //setContacts(contacts);  
    console.log(newContactList);      
  };

  const searchHandler = (searchTerm) => {
   // console.log(searchTerm);
   setSearchTeam(searchTerm);
   if (searchTerm !== ""){
    const newContactList = contacts.filter((contact) => {
      //console.log(Object.values(contact).join(" ")) 
      return Object.values(contact).join(" ").toLowerCase().includes(searchTerm.toLowerCase()); 
    });
    setSearchResults(newContactList);
   }
   else
   {
    setSearchResults(contacts);
   }
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts)  setContacts(allContacts);
    };
    getAllContacts();
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrieveContacts) setContacts(retrieveContacts);
  }, []);

  //useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  //}, [contacts]);

  return (
    <div className='ui container'>
      <Router>        
        <Header />
        <br/><br/>
        {/* <Routes>
        <Route path="/" exact Component={() => (<ContactList contacts={contacts} getContactId={removeContactHandler} /> )} />  
        <Route path="/add" Component={() => (<AddContact addContactHandler={addContactHandler} />)}/>
        </Routes> */}
        {/* <Routes>
        <Route path="/" exact
        render ={(props) => (
          <ContactList
          {...props}
          contacts={contacts}
          getContactId={removeContactHandler}
          />
         )}
        /> 
        <Route path="/add" 
          render={(props) => (
            <AddContact
            {...props}
            addContactHandler={addContactHandler}
            />
          )}
        />
      </Routes>           */}
        {/* <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandlet} /> */}
      <Routes>
        {/* <Route path="/" render  = {(props) => (
        //element={
          <ContactList contacts={contacts} getContactId={removeContactHandler} term={searchTerm} srarchKeyword={searchHandler} />
        //} 
        )}
        /> */}
        {/* <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler} term={searchTerm} searchKeyword={searchHandler}/>} /> */}
        <Route path="/" element={<ContactList contacts={searchTerm.length < 1 ? contacts: searchresults } getContactId={removeContactHandler} term={searchTerm} searchKeyword={searchHandler}/>} />
        <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
        <Route path="/contact/:id" Component={ContactDetail}/>
        <Route path="/edit/:id" element={<EditContact updateContactHandler={updateContactHandler} />} />
        {/* <Route path="/Delete/:id" element={<DeleteContact removeContactHandler={removeContactHandler}/>} /> */}
        {/* <Route path="/Delete/:id" element={<DeleteContact getContactId={removeContactHandler} />} /> */}
        <Route path="/Delete/:id" element={<DeleteContact removeContactHandler={removeContactHandler} />} />
        {/* <Route path="/delete/:id">
        element={<DeleteContact removeContactHandler={removeContactHandler} /> }
        </Route>
        console.log(removeContactHandler); */}
        {/* <Route path="/edit" 
         render ={(props) => (
          <EditContact {...props} updateContactHandler={updateContactHandler}/>
         )
         }
        /> */}
      </Routes>      
    </Router> 
      
    </div>
  );
}

export default App;
