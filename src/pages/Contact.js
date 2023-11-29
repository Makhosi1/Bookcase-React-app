import React, { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/footer";

export default function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail]= useState("");
    const [message, setMessage] = useState("");
    const [hasSubmitted, setHasSubmitted] =useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        //write code to send your to the backend
        setHasSubmitted(true);
    }

    return (
        <>
            <Header />
            <h1> Contact Us </h1>
            {hasSubmitted
            ? "The form has been submitted. We will get back to you in 1-2 business days."
            :<form onSubmit ={e => handleSubmit(e)}>
                <label>
                    Name
                    <input
                        type="text"
                        value= {name}
                        onChange={e => setName(e.target.value)}
                    />
                </label>
                <label>
                    Email
                    <input
                    type ="email"
                    value ={email}
                    onChange = {e => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    Message
                    <input
                    type = "textarea"
                    value ={message}
                    onChange ={e => setMessage(e.target.value)}
                    />
                </label>
                
                <input type="submit" value="Submit" />
                
            </form>}
            <Footer />
        </>
    )
}