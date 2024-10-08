import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import { RemoveButton, Title } from '../ContactList/contactList-styled';

export default function Contact ({ contacts }) {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contacts.id))

    return (
       <>
        <Title>
          {contacts.name}: {contacts.number}
          </Title>
          <RemoveButton onClick={handleDelete}>Delete</RemoveButton>
     </>
    )
}