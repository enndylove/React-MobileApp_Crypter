import React, { useState } from "react";

/**
 * A reusable input field component for the newsletter form.
 *
 * @param {string} classes - Additional CSS classes to apply to the input field.
 * @param {string} placeholder - The placeholder text to display in the input field.
 * @param {function} setValue - A callback function to update the input field's value.
 * @param {string} value - The current value of the input field.
 * @param {string} type - The type of input field (e.g. "text", "email", etc.).
 * @param {string} name - The name attribute of the input field.
 *
 * @example
 * <NewsletterInput classes="newsletter__name" placeholder="Name" setValue={setName} value={nameValue} type="text" name="newsletter__name" />
 */
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

/**
 * A reusable button component for the newsletter form.
 *
 * @param {function} clickFunc - A callback function to execute when the button is clicked.
 * @param {boolean} isSub - A flag indicating whether the user is currently subscribed.
 * @param {string} isSubText - The text to display on the button when the user is subscribed.
 * @param {string} isNotSubText - The text to display on the button when the user is not subscribed.
 *
 * @example
 * <NewsletterButton clickFunc={handleSubscribe} isSub={isSubscribing} isSubText="You are subscribed" isNotSubText="Subscribe" />
 */
const NewsletterButton = (clickFunc, isSub, isSubText, isNotSubText) => {
  return (
      <button className="newsletter__form-btn font-button color-darken w-100" type="button" onClick={clickFunc} disabled={isSub}>
        {isSub ? isSubText : isNotSubText}
      </button>
  )
}

/**
 * The main newsletter form component.
 *
 * @returns {JSX.Element} The rendered newsletter form.
 */
export default function FormNLetter() {
  const [nameValue, setName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [isSubscribing, setSubscribing] = useState(false);

  /**
   * Handles the subscription process when the button is clicked.
   */
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