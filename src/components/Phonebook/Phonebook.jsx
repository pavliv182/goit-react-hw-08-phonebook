import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import PropTypes from 'prop-types';

import './phonebook.module.css';

const Phonebook = ({ add, items = [] }) => {
  const [formData, setFormData] = useState({ name: '', number: '' });

  const { name, number } = formData;

  const handleChange = e => {
    setFormData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      number,
      id: nanoid(),
    };

    if (items.find(contact => contact.name === data.name)) {
      Notify.failure('This name is already exicited');
      formReset();

      return;
    }
    add(data);
    Notify.success('Contact succesfully added');
    formReset();
  };

  const formReset = () => {
    setFormData({
      name: '',
      number: '',
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">
          Name
          <input
            id="Name"
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="Number">
          Number
          <input
            id="Number"
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  add: PropTypes.func.isRequired,
  items: PropTypes.array,
};
