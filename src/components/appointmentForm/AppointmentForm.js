import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          required
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label>
        Date:
        <input
          required
          min={getTodayString()}
          type="date"
          name="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </label>
      <label>
        Time:
        <input
          required
          type="time"
          name="date"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </label>
      <label>
        Contact
        <ContactPicker
          required
          name="contact"
          value={contact}
          contacts={getContactNames()}
          onChange={(e) => setContact(e.target.value)}
        />
      </label>
      <input value="Submit" type="submit" />
    </form>
  );
};
