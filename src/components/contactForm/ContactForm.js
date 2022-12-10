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
          name="name"
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
          name="phone"
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
          name="email"
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
