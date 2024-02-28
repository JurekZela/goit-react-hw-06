import { ListContact, RemoveButton } from './contacts-styled';
import { useDispatch, useSelector } from 'react-redux';

export const ContactList = ({ removeContact }) => {
    const dispatch = useDispatch();
    // .filter(({ name }) => name.toLowerCase() === state.filters.name.toLowerCase())
    const list = useSelector(state => state.contacts.items)

    console.log(list);

    return (
        <ul>
        {list &&
        list.map(({id, name, number }) => {
          return (
          <div key={id}>
          <ListContact>{name}: {number}</ListContact>
          <RemoveButton onClick={() => removeContact(id)}>Delete</RemoveButton>
          </div>
          )
        })
        }
        </ul>
    )
}