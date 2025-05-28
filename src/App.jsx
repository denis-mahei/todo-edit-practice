import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Text from './components/Text/Text';
import { useSelector } from 'react-redux';
import TodoList from './components/TodoList/TodoList.jsx';

export const App = () => {
  const todos = useSelector(state => state.todos.items);
  return (
    <>
      <Header />
      <Section>
        <Container>
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
