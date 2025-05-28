import GridItem from '../GridItem/GridItem.jsx';
import Text from '../Text/Text.jsx';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodos } from '../../redux/todoSlice.js';

const Todo = ({ id, text, completed }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodos(id));
  };
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {id + 1}
        </Text>

        <Text textAlign="center">{text}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={handleDelete}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button className={style.editButton} type="button">
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};

export default Todo;
