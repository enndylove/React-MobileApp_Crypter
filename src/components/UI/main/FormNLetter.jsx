import React, { useState } from "react";

const NewsletterInput = (classes, placeholder, setValue, value, type, name) => {
  return (
    <input
      className={`${classes} newsletter__input font-base w-100`}
      placeholder={placeholder}
      onChange={(event) => setValue(event.target.value)}
      value={value}
      type={type}
      name={name}
    />
  )
}
const NewsletterButton = (clickFunc, isSub, isSubText, isNotSubText) => {
  return (
    <button className="newsletter__form-btn font-button color-darken w-100" type="button" onClick={clickFunc} disabled={isSub}>
      {isSub ? isSubText : isNotSubText}
    </button>
  )
}

export default function FormNLetter() {
  const [nameValue, setName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [isSubscribing, setSubscribing] = useState(false);

  const handleSubscribe = async () => {
    try {
      if (nameValue.trim() !== "" && currentEmail.trim() !== "") {
        setSubscribing(true);

        const data = {
          name: nameValue.trim(),
          email: currentEmail.trim(),
        };

        const response = await fetch("/api/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          // Handle success
          console.log("Subscription successful");
        } else {
          // Handle error
          console.error("Subscription failed");
        }
      }
    } catch (error) {
      console.error("Error during subscription:", error);
    }
  };

  return (
    <form className="newsletter__form" method="post" action="">

      {NewsletterInput("newsletter__name", "Name", setName, nameValue, "text", "newsletter__name")}
      {NewsletterInput("newsletter__email", "Email", setCurrentEmail, currentEmail, "email", "newsletter__email")}

      {NewsletterButton(handleSubscribe, isSubscribing, "You are subscribed", "Subscribe")}

    </form>
  );
}
