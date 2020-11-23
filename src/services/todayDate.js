const d = new Date();

const weekDay = [
   'Domingo',
   'Segunda',
   'Terça',
   'Quarta',
   'Quinta',
   'Sexta',
   'Sábado',
];

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
   weekDay: `${weekDay[d.getDay()]}`, // `${d.getDay()}`, //
   day: `${dayDate}`,
   month: `${months[d.getMonth()]}`,
   year: `${[d.getFullYear()]}`,
};

export default todayDate;
