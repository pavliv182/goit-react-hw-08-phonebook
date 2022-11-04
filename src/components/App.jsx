import Section from './Section';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';
import Notification from './Notification';

import { signup } from 'shared/services/auth/API';

export const App = () => {
  const data = {
    name: 'aaa',
    email: 'test@gmail.com',
    password: 'test',
  };

  signup(data).then(a => console.log(a));

  return (
    <>
      <Section title="Phonebook">
        <Phonebook />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Notification message="Add new contact" />
        <Contacts />
      </Section>
    </>
  );
};
