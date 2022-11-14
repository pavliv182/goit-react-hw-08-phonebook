import { useDispatch } from 'react-redux';

import Phonebook from 'components/Phonebook';
import Section from 'components/Section';
import Filter from 'components/Filter';
import Notification from 'components/Notification';
import Contacts from 'components/Contacts';

import { addContact } from 'redux/contacts/contacts-operations';

function ContactsPage() {
  const dispatch = useDispatch();

  const addNewContact = data => {
    dispatch(addContact(data));
  };

  return (
    <>
      <Phonebook add={addNewContact} />
      <Section title="Contacts">
        <Filter />
        <Notification message="Add new contact" />
        <Contacts />
      </Section>
    </>
  );
}

export default ContactsPage;
