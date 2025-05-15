// const date = new Date("2000-01-17T16:45:30");
// const [month, day, year] = [
//   date.getMonth(),
//   date.getDate(),
//   date.getFullYear(),
// ];
// // [0, 17, 2000] as month are 0-indexed
// const [hour, minutes, seconds] = [
//   date.getHours(),
//   date.getMinutes(),
//   date.getSeconds(),
// ];
// // [16, 45, 30]
const date = new Date("2000-01-17T16:45:30");

const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];
// [0, 17, 2000] - months are 0-indexed, so 0 = January

const [hour, minutes, seconds] = [
  date.getHours(),
  date.getMinutes(),
  date.getSeconds(),
];
// [16, 45, 30]

// Now display the values:
console.log("Month:", month);   // 0 (January)
console.log("Day:", day);       // 17
console.log("Year:", year);     // 2000

console.log("Hour:", hour);     // 16
console.log("Minutes:", minutes); // 45
console.log("Seconds:", seconds); // 30




