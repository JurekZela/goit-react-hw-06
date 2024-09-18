import { Input } from './SearchBox-styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';


export default function SearchBox () {
    const dispatch = useDispatch();

    const handleChangeFilter = filterValue => dispatch(changeFilter(filterValue.target.value));

    return (
        <div>
        <p>Find contacts by name</p>
        <Input 
        type="text"
        name="filter"    
        onChange={handleChangeFilter}
        />
        </div>
    )
}