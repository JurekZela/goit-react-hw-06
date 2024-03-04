import { useDispatch, useSelector } from 'react-redux';
import { ListContact, RemoveButton } from './contacts-styled';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
    const dispatch = useDispatch();
    const itemsValue = useSelector(state => state.contacts.items);
    const filterValue = useSelector(state => state.filters);

    const filter = itemsValue.map(item => item.name.toLowerCase().includes(filterValue.toLowerCase()));

    console.log(filter);
    console.log(filterValue);

    return (
     <ul>
     {itemsValue.map(({ id, name, number }) => 
     <ol key={id}>
      <ListContact>{name}: {number}</ListContact>
      <RemoveButton onClick={() => dispatch(deleteContact(id))}>Delete</RemoveButton>
      </ol>)
        }
     </ul>
    )
}