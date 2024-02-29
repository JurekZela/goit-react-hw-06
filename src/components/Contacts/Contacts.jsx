import { ListContact, RemoveButton } from './contacts-styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.contacts.items)

    return (
        <ul>
        {list &&
        list.map(({id, name, number }) => {
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