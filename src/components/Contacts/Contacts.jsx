import { useDispatch, useSelector } from 'react-redux';
import { ListContact, RemoveButton, Title } from './contacts-styled';
import { deleteContact } from '../../redux/contactsSlice';

const itemsFilter = (contacts, filter) => contacts.filter(({ name }) => name.toLowerCase().trim().includes(filter));

const ContactList = () => {

    const dispatch = useDispatch();
    const selectNameFilter = useSelector((state) => state.filters);
    console.log(selectNameFilter);
    
    const selectContacts = useSelector((state) => state.contacts.items);
    console.log(selectContacts);
    
    const filteredContacts = itemsFilter(selectContacts, selectNameFilter);
    
    return (  
     <ul>
     {
      filteredContacts.map(({ id, name, number }) => (
        <ListContact key={id}>
          <Title>
          {name}: {number}
          </Title>
         <RemoveButton onClick={() => dispatch(deleteContact(id))}>Delete</RemoveButton>
       </ListContact>
       )
       )
     }
     </ul>
    )
}

export default ContactList;