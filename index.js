import { createStore } from 'redux'
import { addTodo, toggleTodo, setVisiblityFilter } from './actions/index.js'

const store = createStore(function() { return 'Hello' });

const addTodoElem = document.getElementById('addTodo');
const input = addTodoElem.getElementsByTagName('input')[0];
const button = addTodoElem.getElementsByTagName('button')[0];

button.addEventListener('click', () => {
  const todoText = input.value;
  store.dispatch(addTodo(todoText));
});

const todoList = document.getElementById('todoList');
const elements = todoList.getElementsByTagName("li");
const listArray = [...elements]

listArray.forEach((v, index) => {
  v.addEventListener('click', e => {
    store.dispatch(toggleTodo(index));
  });
});

const links = document.getElementById('links');
const children = links.childNodes;
const childList = [...children];
childList.filter(v => v.nodeName != '#text').forEach(v => {
  v.addEventListener('click', e => {
    const filterText = v.innerHTML;
    store.dispatch(setVisiblityFilter(filterText));
  });
})


