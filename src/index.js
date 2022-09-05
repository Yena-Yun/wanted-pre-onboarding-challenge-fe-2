/**
 * choyj109 님의 작업 내용을 참고하였습니다.
 * [링크](https://github.com/choyj109/wanted-pre-onboarding-challenge-fe-2/blob/main/src/index.js)
 */

/**
 * Todo 타입 정의
 * @typeof {Object} Todo
 * @property {string} id - The id of the todo. (required)
 * @property {string} content - The content of the todo. (required)
 * @property {boolean} isCompleted - whether the todo is completed. (required)
 * @property {string} category - The category of the todo. (required)
 * @property {string[]} tags - The tags of the todo. (optional)
 */
const Todo = {};

/**
 * createTodo - Todo 추가
 * @function createTodo
 * @param {string} content - The content of the todo. (required)
 * @param {string} category - The category of the todo. (required)
 * @param {string[]} tags - The tags of the todo. (optional)
 * @return {Object} Todo
 */
const createTodo = ({ content, category, tags }) => {};

/**
 * getAllTodo - 전체 Todo 조회
 * @function getAllTodo
 * @return {Array} Todo
 */
const getAllTodo = () => {};

/**
 * getTodo - 특정 Todo 조회
 * @function getTodo
 * @param {string} id - The id of the todo. (required)
 * @return {Object} Todo
 */
const getTodo = ({ id }) => {};

/**
 * updateTodo - Todo 수정
 * @function updateTodo
 * @param {string} id - The id of the todo. (required)
 * @param {string} content - The content of the todo. (required)
 * @param {string} category - The category of the todo. (required)
 * @return {Object} Todo
 */
const updateTodo = ({ id, content, category }) => {};

/**
 * updateTodoTag - 특정 Todo의 태그 수정
 * @function updateTodoTag
 * @param {string} id - The id of the todo. (required)
 * @param {string[]} tags - The tags of the todo. (optional)
 * @return {Object} Todo
 */
const updateTodoTag = ({ id, tags }) => {};

/**
 * isTodoCompleted - Todo의 완료 여부
 * @param {string} id - The id of the todo. (required)
 * @param {boolean} isCompleted - whether the todo is completed. (required)
 * @return {boolean}
 */
const isTodoCompleted = ({ id, isCompleted }) => {};

/**
 * deleteTodo - Todo 삭제
 * @function deleteTodo
 * @param {string} id - The id of the todo. (required)
 */
const deleteTodo = ({ id }) => {};

/**
 * deleteAllTodo - 전체 Todo 삭제
 * @function deleteAllTodo
 */
const deleteAllTodo = () => {};

/**
 * deleteAllTodoTags - 특정 Todo의 태그 전체 삭제
 * @function deleteAllTodoTags
 * @param {string} id - The id of the todo. (required)
 * @param {string[]} tags - The tags of the todo. (optional)
 * @return {Object} Todo
 */
const deleteAllTodoTags = ({ id, tags }) => {};
