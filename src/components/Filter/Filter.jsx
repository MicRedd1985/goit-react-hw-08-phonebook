import { Label } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selector';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = query => {
    dispatch(setFilter(query.toLowerCase()));
  };
  const filter = useSelector(selectFilter);

  return (
    <Label htmlFor="findInputId">
      Find contacts by name
      <input
        type="text"
        placeholder=""
        name="filterContact"
        value={filter}
        id="findInputId"
        onChange={e => onFilterChange(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        required
      />
    </Label>
  );
};

export default Filter;
