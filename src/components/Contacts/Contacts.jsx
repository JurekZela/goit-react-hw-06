import { useDispatch, useSelector } from 'react-redux';
import { ListContact, RemoveButton, Title } from './contacts-styled';
import { deleteContact } from '../../redux/contactsSlice';

const itemsFilter = (contacts, filter) => contacts.filter(({ name }) => name.toLowerCase().trim().includes(filter));

const ContactList = () => {

    const dispatch = useDispatch();
    const selectNameFilter = useSelector((state) => state.filters);
    
    const selectContacts = useSelector((state) => state.contacts.items);
    
    const filteredContacts = itemsFilter(selectContacts, selectNameFilter);

    return (  
     <ul>
     {selectNameFilter.length > 0 ?
      filteredContacts.map(({ id, name, number }) => (
        <ListContact key={id}>
          <Title>
          {name}: {number}
          </Title>
         <RemoveButton onClick={() => dispatch(deleteContact(id))}>Delete</RemoveButton>
       </ListContact>
       )
       )
       :  selectContacts.map(({ id, name, number }) => (
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