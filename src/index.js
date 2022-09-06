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
const Todo = {};

/**
 * createTodo - Todo 추가
 * @function createTodo
 * @param {string} content (required)
 * @param {string} category (required)
 * @param {string[]} tags (optional)
 * @return {Object} Todo 객체
 */
const createTodo = ({ content, category, tags }) => {};

/**
 * getAllTodo - 전체 Todo 조회
 * @function getAllTodo
 * @return {Array} Todo 리스트 배열
 */
const getAllTodo = () => {};

/**
 * getTodo - 특정 Todo 조회
 * @function getTodo
 * @param {string} id (required)
 * @return {Object} Todo 객체
 */
const getTodo = ({ id }) => {};

/**
 * updateTodo - Todo 수정
 * @function updateTodo
 * @param {string} id (required)
 * @param {string} content (required)
 * @param {string} category (required)
 * @return {Object} Todo 객체
 */
const updateTodo = ({ id, content, category }) => {};

/**
 * updateTodoTag - 특정 Todo의 태그 수정
 * @function updateTodoTags
 * @param {string} id (required)
 * @param {string[]} tags (optional)
 * @return {Object} Todo 객체
 */
const updateTodoTags = ({ id, tags }) => {};

/**
 * isTodoCompleted - Todo의 완료 여부
 * @param {string} id (required)
 * @param {boolean} isCompleted (required)
 * @return {boolean}
 */
const isTodoCompleted = ({ id, isCompleted }) => {};

/**
 * deleteTodo - Todo 삭제
 * @function deleteTodo
 * @param {string} id (required)
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
 * @param {string} id (required)
 * @return {Object} Todo 객체
 */
const deleteAllTodoTags = ({ id }) => {};
