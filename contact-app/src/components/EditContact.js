import React, { useState } from "react";
import { Link, useParams, useLocation} from "react-router-dom";
import user from "../images/user1.png";

const EditContact = (props) => {
  const { id } = useParams(); // Retrieve the 'id' from the URL
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  // Retrieve 'name' and 'email' from query params
  const initialName = queryParams.get('name') || '';
  const initialEmail = queryParams.get('email') || '';

  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are mandatory");
      return;
    }   
    setName("");
    setEmail("");
    console.log({ id, name, email });
    const contact = { id, name, email };
    console.log(contact.id);    // Output: 1
    console.log(contact.name);  // Output: John Doe
    console.log(contact.email);
    console.log(contact);
    props.updateContactHandler(contact);    
    //<Redirect to="/" />;
    window.location.href = '/';
  };

  return (
    <div className="ui main">
      <br />
      <h2>Edit Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Update</button>
        <Link to={"/"}>
          <div style={{ textAlign: 'right' }}>
            <button className="ui button blue right">Go to ContactList</button>
          </div>
        </Link>
      </form>
    </div>
  );
}
export default EditContact;
