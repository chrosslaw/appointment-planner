import React from "react";

export const ContactPicker = ({ name, contacts, onChange }) => {
  return (
    <select name={name} onChange={onChange}>
      <option value={""}>--Pick a contact--</option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
