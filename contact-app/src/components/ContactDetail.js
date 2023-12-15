import React from "react";
import { Link,useParams , useLocation} from "react-router-dom";
import user from "../images/user1.png";



const ContactDetail = (props) => {
  const { id } = useParams(); // Retrieve the 'id' from the URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Retrieve 'name' and 'email' from query params
  const name = queryParams.get('name');
  const email = queryParams.get('email');

    //const { name, email } = props.location.state.contact;
    //console.log(props);
    //const { id } = useParams(); // Get the ID from the URL params
    //const { state } = useLocation();
    //const { id } = useParams(); // Retrieve the 'id' from the URL
    //const { name, email } = new URLSearchParams(window.location.search); // Retrieve 'name' and 'email' from query params
  
    //const location = useLocation();

    // Access the name value from the state passed via the Link component
    //const { name } = location.name;
    //const { name, email } = state.contact|| {};;

    console.log( {name}); // Check if these values are correctly retrieved
    return (
        <div className="main">
            <div className="ui card centered">
                <div className="image">
                    <img src={user} alt="user"></img>
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    <div className="description">{email}</div>
                </div>
            </div>
            <div className="center-div">
                <Link to="/">
                <button className="ui button blue center">Back to Cantact List</button>
                </Link>
            </div>
        </div>
    );
}

export default ContactDetail;