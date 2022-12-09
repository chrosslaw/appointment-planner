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
      <p>Name</p>
      <input
        required
        type="text"
        value={name}
        onChange={(target) => {
          setName(target.value);
        }}
      />
      <p>Phone Number</p>
      <input
        required
        type="tel"
        value={phone}
        pattern="^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"
        onChange={(target) => {
          setPhone(target.value);
        }}
      />

      <p>Email</p>
      <input
        required
        type="email"
        value={email}
        onChange={(target) => {
          setEmail(target.value);
        }}
      />
      <input type="submit" />
    </form>
  );
};
