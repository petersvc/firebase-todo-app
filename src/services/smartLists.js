import todayDate from './todayDate';

const { month, day, year } = todayDate;

const today = `${month} ${day} ${year}`;

const smartListsNames = ['concluída', 'atrasada', 'hoje', 'amanhã', 'agendada'];

export default function fillLists(todos) {
  smartListsNames.map((list) => {
    const temp = { id: list, todos: [] };
    if (temp.id === 'concluída') {
      temp.todos = todos.filter((todo) => todo.complete);
    } else if (temp.id === 'hoje') {
      temp.todos = todos.filter(
        (todo) => todo.date === today && !todo.complete,
      );
    } else if (temp.id === 'atrasada') {
      temp.todos = todos.filter((todo) => {
        const [month2, day2, year2] = todo.date.split(' ');
        return !todo.complete &&
          month2 === month &&
          year2 === year &&
          day2 < day
          ? todo
          : null;
      });
    } else if (temp.id === 'amanhã') {
      temp.todos = todos.filter((todo) => {
        const [month2, day2, year2] = todo.date.split(' ');
        return !todo.complete &&
          month2 === month &&
          year2 === year &&
          Number(day2) === Number(day) + 1
          ? todo
          : null;
      });
    } else if (temp.id === 'agendada') {
      temp.todos = todos.filter((todo) => {
        const [month2, day2, year2] = todo.date.split(' ');
        return !todo.complete &&
          month2 === month &&
          year2 === year &&
          Number(day2) > Number(day) + 1
          ? todo
          : null;
      });
    }
    return temp;
  });
}
