import "./App.css";
import FormCopo from "./components/FormCopo";
import TodoListCompo from "./components/TodoListCompo";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [todosCom, setTodosCom] = useState([...todos]);
  const [todosActive, setTodosActive] = useState([...todos]);
  const addTodos = (todo) => {
    setTodos([todo, ...todos]);
    setTodosCom([todo, ...todos]);
    setTodosActive([todo, ...todos]);
  };
  const handleDelete = (id) => {
    const todosIn = todos.filter((item) => item.id !== id);
    setTodos(todosIn);
    setTodosCom(todosIn);
    setTodosActive(todosIn);
  };
  const handleComplete = (id) => {
    let newStatus = todos.filter((item) => item.id === id);
    // setTodos(todos.filter((item) => item.id !== id));
    if (newStatus[0].complete !== true) {
      newStatus[0].complete = true;
    } else {
      newStatus[0].complete = false;
    }
    setTodos([...todos]);
  };
  const handleAll = () => {
    setTodos([...todosCom]);
  };
  const handleComp = () => {
    setTodos(todosCom.filter((item) => item.complete === true));
  };
  const handleActive = () => {
    setTodos(todosActive.filter((item) => item.complete !== true));
  };
  return (
    <Container>
      <FormCopo onSubmit={addTodos} />
      {todos.map((item) => (
        <TodoListCompo
          key={item.id}
          todo={item}
          onDelete={() => handleDelete(item.id)}
          onComplete={() => handleComplete(item.id)}
        />
      ))}
      <ButtonGroup className="d-flex justify-content-center mx-auto w-50 my-5">
        <Button variant="outline-primary col-2" onClick={handleAll}>
          All Todos
        </Button>
        <Button variant="outline-success col-2" onClick={handleComp}>
          Completed Todos
        </Button>
        <Button variant="outline-dark col-2" onClick={handleActive}>
          Active Todos
        </Button>
      </ButtonGroup>
      <div className="row">
        <Button
          variant="outline-danger  mx-auto col-3"
          onClick={() => {
            setTodos([]);
            setTodosCom([]);
            setTodosActive([]);
          }}
        >
          Remove All
        </Button>
      </div>
    </Container>
  );
}

export default App;
