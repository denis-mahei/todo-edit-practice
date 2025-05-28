import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import { useSelector } from 'react-redux';
import TodoList from './components/TodoList/TodoList.jsx';
import { selectCurrentTodo, selectTodos } from './redux/todoSlice.js';
import Form from './components/Form/Form.jsx';
import Filter from './components/Filter/Filter.jsx';
import EditForm from './components/EditForm/EditForm.jsx';

export const App = () => {
  const todos = useSelector(selectTodos);
  const currentTodo = useSelector(selectCurrentTodo);
  return (
    <>
      <Header />
      <Section>
        <Container>
          {!currentTodo ? <Form /> : <EditForm />}
          <Filter />
          {todos.length > 0 ? (
            <TodoList />
          ) : (
            <Text>Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
