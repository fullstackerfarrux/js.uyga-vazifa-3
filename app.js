alert("Assalomu aleykum bizning kompaniyamiz orqali sayohat qilmoqchimisiz?");
alert("Unda sizga kerakli summa bu 14.546.220som");
let ketish = 14546220;
let pulingiz = +prompt("Sizda nechi pulingiz bor? Summani kriting!");

if (pulingiz >= ketish) {
  console.log("Oq yol yaxshi borib keling");
} else if (pulingiz < ketish) {
  console.log("Mablagni yetarli emas keyingi reys 10kundan keyin");
} else {    
  console.log("Summani togri kriting misoluchun: 15000000");
}
