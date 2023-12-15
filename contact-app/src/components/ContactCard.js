import React from "react";
import user from "../images/user.png";
import { Link } from "react-router-dom";


const ContactCard = (props) =>{
    const {id,name,email}=props.contact
    console.log(props.contact);

 

    return(        
        <div className="item">
            <img className="ui avatar image" src={user} alt="user"></img>
        <div className="content">

            {/* <Link to={{pathname:'/contact/${id}', state:{contact: props.contact }}}> */}
            {/* <Link to={{pathname:'/contact/${id}', state:{contact: props.contact } }}>
            <div className="header">{name}</div>
            <div>{email}</div>
            </Link> */}
            {/* <Link to={{ pathname: "/contact/${id}", state: { contact: { name: "John", email: "john@example.com" } } }}>                
            <div className="header">{name}</div>
            <div>{email}</div>
            </Link> */}
{/* 
            <Link
                to={{
                pathname: `/contact/${id}`,//state: { name: name, email: email }
                //state: { name: "John", email: "john@example.com" },
                //state: { name: "John", email: "john@example.com" },
                props
                }}
                >
                <div className="header">{name}</div>
                <div>{email}</div>
                <div>{email}</div>
            </Link> */}
            <Link to={`/contact/${id}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`}>
  <div className="header">{name}</div>
  <div>{email}</div>
</Link>

        </div>
        <div style={{ float: 'right' }}>
            <i className="trash alternate outline icon" style={{ color: 'red', marginleft: '10px' }}
            onClick={() => props.clickHandler(id)}></i>
            {/* <Link to={`/Delete/${id}` }>
            <i className="trash alternate outline icon" style={{ color: 'red', marginleft: '10px' }}></i>
            </Link> */}

            {/* <Link to={`/contact/${id}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`}> */}
            {/* <Link to={{pathname: "/edit", state: { contact: props.contact}}}> */}
            
            <Link to={`/edit/${id}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`}>
            <i className="edit alternate outline icon" style={{ color: 'blue', marginTop: '7px' }}></i>
            </Link>
        </div>
    </div>   
    );
}

export default ContactCard;