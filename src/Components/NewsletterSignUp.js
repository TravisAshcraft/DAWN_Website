// src/components/NewsletterSignup.js
import React, { useState } from 'react';
import '../Styles/NewsletterSignup.css'; // Make sure to create the CSS file for styling

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            setMessage("Please enter a valid email.");
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/newsletter/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage("Thank you for signing up!");
                setEmail('');
            } else {
                const data = await response.json();
                if (data.error === 'You are already signed up!') {
                    setMessage("You're already signed up!");
                } else {
                    setMessage(data.error || "Failed to sign up. Please try again.");
                }
            }
        } catch (error) {
            console.error('Error during signup:', error);
            setMessage("An error occurred. Please try again later.");
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