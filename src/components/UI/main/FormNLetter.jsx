import React, { useEffect, useState } from "react";

export default function FormNLetter() {
    let [nameValue, setName] = useState('');
    let [currentEmail, setCurrentEmail] = useState('');
    let [allEmails, setAllEmails] = useState(() => {
        const storedEmails = localStorage.getItem('emails');
        return storedEmails ? JSON.parse(storedEmails) : [];
    });

    useEffect(() => {
        localStorage.setItem('emails', JSON.stringify(allEmails));
        console.log(allEmails);
    }, [allEmails]);

    const handleSubscribe = () => {
        if (nameValue.trim() !== '' && currentEmail.trim() !== '') {
            const newPerson = {
                name: nameValue,
                email: currentEmail
            };

            setAllEmails([...allEmails, newPerson]);
            setCurrentEmail('');
        }
    };

    return (
        <form className="newsletter__form" method="post" action="">
            <input
                className="newsletter__name newsletter__input font-base w-100"
                placeholder="Name"
                onChange={event => setName(event.target.value)}
                value={nameValue}
                type="text"
                name="newletter__name"
            />
            <input
                className="newsletter__email newsletter__input font-base w-100"
                placeholder="Email"
                onChange={event => setCurrentEmail(event.target.value)}
                value={currentEmail}
                type="email"
                name="newletter__email"
            />
            <button
                className="newsletter__form-btn font-button color-darken w-100"
                type="button"
                onClick={handleSubscribe}
            >
                SUBSCRIBE NOW
            </button>
        </form>
    );
}
