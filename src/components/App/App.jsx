import { ContactList } from '../Contacts/Contacts';
import { ContactForm } from '../PhoneBook/Phonebook';
import { Filter } from '../Filter/Filter';
import { Card } from '../Contacts/contacts-styled';

function App() {

  return (
    <Card>
      <ContactForm />
      <ContactList />
      <Filter />
    </Card>
  )
}

export default App
