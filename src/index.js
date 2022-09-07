/**
 * 1주차 과제(타입 선언): choyj109 님의 과제를 참고하여 작성하였습니다.
 * [링크](https://github.com/choyj109/wanted-pre-onboarding-challenge-fe-2/blob/main/src/index.js)
 */

/**
 * 2주차 과제(JS 구현)
 */

/**
 * Todo 타입 정의
 * @typeof {Object} Todo
 * @property {string} id (required)
 * @property {string} content (required)
 * @property {boolean} isCompleted (required)
 * @property {string} category (required)
 * @property {string[]} tags (optional)
 */
const Todo = ({ id, content, isCompleted, category, tags }) => {
  return {
    id,
    content,
    isCompleted,
    category,
    tags,
  };
};

/**
 * Todo List 타입 정의
 * @typeof {Array} TodoList
 * @return {Todo[]} Todo 배열
 */
const todoList = [];
const TodoList = (todo) => {
  return [...todoList, todo];
};

/**
 * createTodo - Todo 추가
 * @function createTodo
 * @param {string} content (required)
 * @param {string} category (required)
 * @param {string[]} tags (optional)
 * @return {Object} Todo 객체
 */
const createTodo = ({ content, category, tags }) => {
  const newTodo = new Todo({ content, category, tags });
  TodoList({ todo: newTodo });
  return newTodo;
};

/**
 * getAllTodo - 전체 Todo 조회
 * @function getAllTodo
 * @return {Array} Todo 리스트 배열
 */
const getAllTodo = () => {
  return TodoList();
};

/**
 * getTodo - 특정 Todo 조회
 * @function getTodo
 * @param {string} id (required)
 * @return {Object} Todo 객체
 */
const getTodo = ({ id }) => {
  return TodoList().filter((todo) => todo.id === id);
};

/**
 * updateTodo - Todo 수정
 * @function updateTodo
 * @param {string} id (required)
 * @param {string} content (required)
 * @param {string} category (required)
 * @return {Object} Todo 객체
 */
const updateTodo = ({ id, content, category }) => {
  const updatedTodo = TodoList().map((todo) =>
    todo.id === id ? { ...todo, content, category } : todo
  );

  return updatedTodo;
};

/**
 * updateTodoTag - 특정 Todo의 태그 수정
 * @function updateTodoTags
 * @param {string} id (required)
 * @param {string[]} tags (optional)
 * @return {Object} Todo 객체
 */
const updateTodoTags = ({ id, tags }) => {
  const tagUpdatedTodo = TodoList().map((todo) =>
    todo.id === id ? { ...todo, tags } : todo
  );

  return tagUpdatedTodo;
};

/**
 * isTodoCompleted - Todo 완료여부 변경
 * @param {string} id (required)
 * @return {Object} Todo 객체
 */
const toggleTodoCompleted = ({ id }) => {
  const willUpdateToggleTodo = TodoList().map((todo) =>
    todo.id === id ? { ...todo, isCompleted: !isCompleted } : todo
  );
  return willUpdateToggleTodo;
};

/**
 * deleteTodo - Todo 삭제
 * @function deleteTodo
 * @param {string} id (required)
 */
const deleteTodo = ({ id }) => {
  const todoDeletedList = TodoList().map((todo) => todo.id !== id);
  todoList = [...todoDeletedList];
};

/**
 * deleteAllTodo - 전체 Todo 삭제
 * @function deleteAllTodo
 */
const deleteAllTodo = () => {
  todoList = [];
};

/**
 * deleteAllTodoTags - 특정 Todo의 태그 전체 삭제
 * @function deleteAllTodoTags
 * @param {string} id (required)
 * @return {Object} Todo 객체
 */
const deleteAllTodoTags = ({ id }) => {
  const tagDeleteTodo = TodoList().map((todo) =>
    todo.id === id ? { ...todo, tags: [] } : todo
  );
  return tagDeleteTodo;
};
