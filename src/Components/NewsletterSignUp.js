// src/components/NewsletterSignup.js
import React, { useState } from 'react';
import '../Styles/NewsletterSignup.css'; // Make sure to create the CSS file for styling

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form handling logic here (send email to server, etc.)
        // For now, we'll just simulate a success message
        if (email) {
            setMessage("Thank you for signing up!");
            setEmail('');
        } else {
            setMessage("Please enter a valid email.");
        }
    };

    return (
        <div className="cta-container">
            <h2>Survive the Darkness. Be the First to Know!</h2>
            <p>Get exclusive updates, early access to new features, and behind-the-scenes content from the D.A.W.N development team.</p>
            <form className="cta-form" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Join the Fight</button>
            </form>
            {message && <p className="cta-message">{message}</p>}
        </div>
    );
};

export default NewsletterSignup;
