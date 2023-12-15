import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);
    const inputEl = useRef("");
    
        const deleteContacthandler =(id) => {

            const result = window.confirm('Are you sure you want to Delete the Contact?');
            if (result) {
                console.log('User clicked OK');
                props.getContactId(id);
            } else {
                console.log('User clicked Cancel');
            }           
        };

        const renderContactList = props.contacts.map((contact) => {
        //const renderContactList = props.contacts.map((contact) => {
        return(  
        <ContactCard  contact={contact} clickHandler={deleteContacthandler} Key={contact.id}/>

             // <div className="item">
            //     <div className="content">
            //         <div className="header">{contact.name}</div>
            //         <div>{contact.email}</div>
            //     </div>
            //     <i className="trash alternate outline icon" float="right"> </i>
            // </div>     
            // <ContactCard key={contact.id}  contact={contact}></ContactCard>     
            );
            console.log(deleteContacthandler);
        })

        const getSearchTerm = () => {
           //console.log(inputEl.current.value);
           props.searchKeyword(inputEl.current.value);
        }
        return(
            <div className="main">
                <h2>Contact List
                    <Link to={"/add"}>
                    <div style={{ textAlign: 'right' }}>
                    <button className="ui button blue right">Add Contact</button>
                    </div>
                    </Link>
                </h2>
                <div className="ui search">
                    <div className="ui icon input">
                        <input ref={inputEl} type="text" placeholder="Search Contacts" className="prompt" value={props.term} onChange={getSearchTerm}
                        ></input>
                        <i className="search icon"></i>
                    </div>
                </div>
            <div className="ui celled list"> { renderContactList.length > 0 ? renderContactList : "No Contacts avalable"}</div>
            {/* <div className="ui celled list">{renderContactList}</div> */}
            </div>
        );    

    };
export default ContactList;