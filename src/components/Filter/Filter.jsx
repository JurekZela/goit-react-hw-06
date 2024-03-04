import { Input } from './Filter-styled';
import { useDispatch } from 'react-redux';
import { filter } from '../../redux/filterSlice';


export const Filter = () => {
    const dispatch = useDispatch();

    const onFilteredContacts = e => {
        dispatch(filter(e.target.value))
    };
    
    return (
        <div>
        <p>Find contacts by name</p>
        <Input 
        type="text"
        name="filter"    
        onChange={onFilteredContacts}
        />
        </div>
    )
};