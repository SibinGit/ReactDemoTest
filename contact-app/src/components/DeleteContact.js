import React from "react";
import { Link,useParams } from "react-router-dom";
import contacts from "../api/contacts";

const DeleteContact = (props) =>{
    const { id } = useParams();
    //const {id}=props.contact
    //console.log(props.contact);
    console.log(id);

      // Define clickHandler function
      const clickHandler = (contactId) => {
        // Perform delete operation using contactId
        // Example: props.deleteContact(contactId);
        //removeContactHandler(contactId);
        props.removeContactHandler(contactId);
        console.log(`Deleting contact with ID: ${contactId}`);
        window.location.href = '/';
    };

    return(        
        <div className="item">
            <div className="content">
            <div className="header"> <h3>Delete Contact</h3></div>
            <br></br>
            <div className="header"> <h3>Do you want to delete the ContactId - {id} ?</h3></div>
            <div>
                {/* <button onClick={() => props.clickHandler(id)}>Yes</button>  */}                
                <button className="ui button blue" onClick={() => clickHandler(id)}>Yes</button> 
                <Link to="/"> <button className="ui button blue">No</button></Link>
            </div>
        </div>
        {/* <div style={{ float: 'right' }}>
            <i className="trash alternate outline icon" style={{ color: 'red', marginleft: '10px' }}
            onClick={() => props.clickHandler(id)}></i>
            <Link to={`/edit/${id}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`}>
            <i className="edit alternate outline icon" style={{ color: 'blue', marginTop: '7px' }}></i>
            </Link>
        </div> */}
    </div>   
    );
}

export default DeleteContact;