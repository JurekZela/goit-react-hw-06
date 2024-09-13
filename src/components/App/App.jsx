import ContactList from '../Contacts/Contacts';
import ContactForm  from '../PhoneBook/Phonebook';
import Filter from '../Filter/Filter';
import { Card } from '../Contacts/contacts-styled';

export default function App() {

  return (
    <Card>
      <ContactForm />
        <Filter />
        <ContactList />
    </Card>
  )
}