// Code your solution here
const drivers = [
    {
      name: 'Jane',
      gender: 'Female' },
    {
      name: 'Richie',
      gender: 'Male' } ,
    {
      name: 'Jeniffer',
      gender: 'Female' },
    {
      name: 'Iva',
      gender: 'Female' },
    {
      name: 'Vero',
      hometown: 'Female' }
  ];


const findMatching = (drivers, value) => {
     return drivers.filter((fn) => fn.toLowerCase() === value.toLowerCase());
}

const fuzzyMatch = (drivers, value) => {
    return drivers.filter((fn) => fn[0] === value[0]      )
}
const matchName = function(drivers, value){
    return drivers.filter(item => item.name === value);
}  