import { useSelector } from 'react-redux';
import { ListContact } from './contactList-styled';
import Contact from '../Contact/Contact';

const itemsFilter = (contacts, filter) => contacts.filter(({ name }) => name.toLowerCase().trim().includes(filter));

export default function ContactList () {
  
  const selectNameFilter = useSelector((state) => state.filters.name);
    
  const selectContacts = useSelector((state) => state.contacts.items);
  
  const filteredContacts = itemsFilter(selectContacts, selectNameFilter);
    return (  
 <ul>
  {
 filteredContacts.map((contact) => (
  <ListContact key={contact.id}>
    <Contact  contacts={contact}/>
  </ListContact>
  ))
  }
  </ul>
  )
}


// selectNameFilter ? (
//   filteredContacts.map((selectContacts) => (
//     <ListContact key={selectContacts.id}>
//       <Contact  contacts={selectContacts}/>
//     </ListContact>
//   ))
// ) : (
//   selectContacts.map((selectContacts) => (
//     <ListContact key={selectContacts.id}>
//       <Contact  contacts={selectContacts}/>
//     </ListContact>
//   ))
// )