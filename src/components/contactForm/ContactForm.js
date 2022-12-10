import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          required
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>
      <label>
        Phone Number:
        <input
          required
          type="tel"
          value={phone}
          pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </label>
      <label>
        Email:
        <input
          required
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label>
        <input type="submit" value="Submit" />
      </label>
    </form>
  );
};
