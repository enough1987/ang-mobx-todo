export const GET_TODOS_URL = './assets/todos.json';

export interface Todo {
  name: string;
  price: number;
}

export interface State {
  todos: Todo[];
}
