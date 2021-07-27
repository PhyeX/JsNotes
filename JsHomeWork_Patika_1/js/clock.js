

 

 var name = prompt("İsmini gir");

 var nameSpace = document.getElementById("myName");

 function showTime() {
 const date = new Date();
 var hours = date.getHours();
 var minute = date.getMinutes();
 var second = date.getSeconds();
 
    hours = hours < 10 ? "0" + hours : hours;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

 var time = `${hours}:${minute}:${second}`;

 var day = date.getDay();

 if (day == 1) {
    day = "Pazartesi";
  } else if (day == 2) {
    day = "Salı";
  } else if (day == 3) {
    day = "Çarşamba";
  } else if (day == 4) {
    day = "Perşembe";
  } else if (day == 5) {
    day = "Cuma";
  } else if (day == 6) {
    day = "Cumartesi";
  } else if (day == 7) {
    day = "Pazar";
  }

   time += ` `+day;

   var clock = document.getElementById("myClock");
   console.log(time);
   clock.innerText = time;
}
showTime();