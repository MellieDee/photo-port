import React, { useState } from "react";

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  // ---------- Handle Change is Sync UI input with internal state of form STARTS ---------

  // Define the handleChange function --
  // This function syncs internal state of the component formState with the user input from the DOM
  // onChange event listener ensures handleChange function fires whenever a keystroke is typed into the input field for name

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  // setFormState function updates formState value for the name 
  // assign value taken from input field in the UI with e.target.value 
  // assign this value to the property formState.name. 
  //use spread operator, ...formState, to retain the other key-value pairs in this object.
  // (Without the spread operator, the formState object would be overwritten to only contain the name: value key pair)

  //console.log(formState) - to confirm syncing wth UI

  // ------------ Handle Change is Sync UI input with internal state of form ENDS ---------



  // ----------------------------- SUBMIT form STARTS ----------------------------------
  function handleSubmit(e) {
    e.preventDefault();
    //console.log(formState); - confirm data is captured
  }
  //would need to add more for BE functionality - this is enuf to transmit data from FE
  // ----------------------------------- SUBMIT form ENDS ------------------------------


  return (
    <section>
      <h1>Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onChange={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} onChange={handleChange} name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} onChange={handleChange} rows="5" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );

}

export default ContactForm

