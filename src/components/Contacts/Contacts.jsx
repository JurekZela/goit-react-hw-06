import { ListContact, RemoveButton } from './contacts-styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
    const dispatch = useDispatch();
    const filterValue = useSelector(state => state.filters)
    const listItems = useSelector(state => state.contacts.items);

    const filteredItems = listItems.filter(({ name }) => name.toLowerCase().includes(filterValue));

    return (
        <ul>
        {filteredItems &&
        filteredItems.map(({id, name, number }) => {
          return (
          <div key={id}>
          <ListContact>{name}: {number}</ListContact>
          <RemoveButton onClick={() => dispatch(deleteContact(id))}>Delete</RemoveButton>
          </div>
          )
        })
        }
        </ul>
    )
}