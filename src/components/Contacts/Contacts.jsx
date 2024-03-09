import { useDispatch, useSelector } from 'react-redux';
import { ListContact, RemoveButton, Title } from './contacts-styled';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.contacts.items);
    const filterValue = useSelector(state => state.filters.name);

    const itemsFilter = items.filter(({ name }) => {
      return name.toLowerCase().trim().includes(filterValue.toLowerCase().trim())
    })

    return (  
     <ul>
     {
     itemsFilter.map(({ id, name, number }) => 
      <ListContact key={id}>
       <Title>
       {name}: {number}
       </Title>
      <RemoveButton onClick={() => dispatch(deleteContact(id))}>Delete</RemoveButton>
      </ListContact>
      )
        }
     </ul>
    )
}