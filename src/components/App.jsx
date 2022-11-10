import Section from './Section';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Filter from './Filter';
import Notification from './Notification';

export const App = () => {
  // const user = { password: '666qwe666', email: 'pasha666@gmail.com' };

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
