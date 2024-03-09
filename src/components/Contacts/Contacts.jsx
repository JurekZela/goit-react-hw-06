import { useDispatch, useSelector } from 'react-redux';
import { ListContact, RemoveButton, Title } from './contacts-styled';
import { deleteContact } from '../../redux/contactsSlice';

const itemsFilter = (contacts, filter) => contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));

const ContactList = () => {
    const dispatch = useDispatch(); 
    
    const filter = useSelector(({ filters }) => filters.name);
    const contacts = useSelector(({ contacts:{ items } }) => items);

    const filteredContacts = itemsFilter(contacts, filter);

    return (  
     <ul>
     {
     filteredContacts &&
     filteredContacts.map(({ id, name, number }) => (
     <ListContact key={id}>
       <Title>
       {name}: {number}
       </Title>
      <RemoveButton onClick={() => dispatch(deleteContact(id))}>Delete</RemoveButton>
    </ListContact>
    ))}
     </ul>
    )
}

export default ContactList;