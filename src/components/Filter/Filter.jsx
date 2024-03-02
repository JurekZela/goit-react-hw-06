import { Input } from './Filter-styled';
import { useSelector, useDispatch } from 'react-redux';
import { filter } from '../../redux/filterSlice';

export const Filter = () => {
    const dispatch = useDispatch();
    // const itemsValue = useSelector(state => state.contacts.items);
    const filterValue = useSelector(state => state.filters);

    const onFilteredContacts = e => {
        dispatch(filter(e.target.value))
    };
    
    return (
        <div>
        <p>Find contacts by name</p>
        <Input 
        type="text"
        name="filter"
        value={filterValue}
        onChange={onFilteredContacts}
        />
        </div>
    )
};