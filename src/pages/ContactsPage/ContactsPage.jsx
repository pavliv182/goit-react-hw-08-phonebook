import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Notify } from 'notiflix';

import Phonebook from 'components/Phonebook';
import Section from 'components/Section';
import Filter from 'components/Filter';
import Notification from 'components/Notification';
import ContactsList from 'components/ContactsList';

import {
  addContact,
  fetchContacts,
  removeContact,
} from 'redux/contacts/contacts-operations';

import { addFilterContacts } from 'redux/filter/filter-slice';
import { getFilter } from 'redux/filter/filter-selector';

import { getContacts } from 'redux/contacts/contacts-selectors';

function ContactsPage() {
  const dispatch = useDispatch();
  const token = useSelector(store => store.auth.token);

  useEffect(() => {
    dispatch(fetchContacts(token));
  }, [dispatch, token]);

  const filter = useSelector(getFilter);
  const { items, isLoading, error } = useSelector(getContacts);

  const addNewContact = data => {
    dispatch(addContact(data));
  };

  const deleteContact = id => {
    dispatch(removeContact(id));
    Notify.info('Contact deleted from your phonebook');
  };

  const filterContacts = () => {
    if (filter) {
      const filteredContacts = items.filter(el =>
        el.name.toLowerCase().includes(filter.toLowerCase())
      );
      return filteredContacts;
    }

    return items;
  };

  const addFilter = e => {
    dispatch(addFilterContacts(e.target.value));
  };

  return (
    <>
      <Section title="Phonebook">
        <Phonebook add={addNewContact} items={items} />
      </Section>

      <Section title="Contacts">
        <Filter items={items} filter={filter} addFilter={addFilter} />
        <Notification
          message="Add new contact"
          items={items}
          isLoading={isLoading}
          error={error}
        />
        <ContactsList deleteContact={deleteContact} data={filterContacts()} />
      </Section>
    </>
  );
}

export default ContactsPage;
