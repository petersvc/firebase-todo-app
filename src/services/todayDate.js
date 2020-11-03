const d = new Date();

const weekDay = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];

const dayDate = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate();

const months = [
   'Jan',
   'Fev',
   'Mar',
   'Abr',
   'Mai',
   'Jun',
   'Jul',
   'Ago',
   'Set',
   'Out',
   'Nov',
   'Dez',
];

const todayDate = {
   weekDay: `${weekDay[d.getDay()]}`,
   day: `${dayDate}`,
   month: `${months[d.getMonth()]}`,
   year: `${[d.getFullYear()]}`,
};

export default todayDate;
