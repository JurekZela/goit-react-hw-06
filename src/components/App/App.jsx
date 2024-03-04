import { ContactList } from '../Contacts/Contacts';
import { ContactForm } from '../PhoneBook/Phonebook';
import { Filter } from '../Filter/Filter';
import { Card } from '../Contacts/contacts-styled';
import { useSelector } from 'react-redux';

function App() {
  const items = useSelector(state => state.contacts.items)

  return (
    <Card>
      <ContactForm />
      {
        items && (
        <>
        <Filter />
        <ContactList />
        </>
        )
      }
    </Card>
  )
}

export default App
