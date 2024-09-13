import { Input } from './Filter-styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';


export default function Filter () {
    const dispatch = useDispatch();

    const onFilteredContacts = evt => {
        dispatch(changeFilter(evt.target.value))
    }
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
}