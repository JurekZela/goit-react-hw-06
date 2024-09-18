import ContactList from '../ContactList/ContactList';
import ContactForm  from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import { Card } from '../ContactList/contactList-styled';

export default function App() {

  return (
    <Card>
      <ContactForm />
        <SearchBox />
        <ContactList />
    </Card>
  )
}