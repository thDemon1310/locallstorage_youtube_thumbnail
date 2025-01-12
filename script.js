// // -------title----------
// async function Ctitle() {
//   let key = "title";
//   let title = document.getElementById("input_title").value;
//   await localStorage.setItem(key, title);
//   title = localStorage.getItem(key);
//   document.getElementById("title").children[0].innerHTML = title;
// }
// // -----------dureation---------
// function dure() {
//   let time = document.getElementById("input_dur").value;
//   console.log(time);

//   var timepart = [];
//   timepart = time.split(":");
//   minpart = timepart[0];
//   secpart = timepart[1];
//   if (timepart.length == 1) {
//     console.log("Please provide proper formet for time");
//     if (minpart == 0) {
//       if (secpart == 0) {
//         console.log("The min timeplay for video is 1 sec");
//       } else {
//         console.log(`video length is ${secpart}`);
//       }
//     }
//   } else {
//     document.getElementById("dureation").innerHTML = time;
//   }
// }
// // ---------thumbnail-------
// function photo() {
//   let pic_link = document.getElementById("input_thumbnail").value;
//   let pic = document.getElementById("thumbnail");
//   pic.src = pic_link;
// }
// // -------------channel name----------
// function cname() {
//   let chaname = document.getElementById("input_channel").value;
//   console.log(chaname);

//   document.getElementsByClassName("link")[0].innerHTML = chaname;
// }
// // ----------views-----------
// function t_views() {
//   let view = document.getElementById("input_views").value * 1;
//   console.log(view);
//   let show_view;
//   if (view >= 1000000) {
//     show_view = Math.floor(view / 1000000) + "M";
//   } else if (view >= 1000) {
//     show_view = Math.floor(view / 1000) + "K";
//   } else {
//     show_view = view;
//   }
//   document.getElementById("v").innerHTML = show_view;
// }
// // --------MOnths old=--------
// function monthsold() {
//   let time = document.getElementById("input_months").value;
//   let cal_time = time / 12;
//   if (cal_time < 1) {
//     document.getElementById("o").innerHTML = time;
//     document.getElementById("year").innerHTML = " months";
//   } else {
//     let year = Math.floor(cal_time);
//     let month = time % 12;
//     if (month == 0) {
//       document.getElementById("o").innerHTML = cal_time;
//       document.getElementById("year").innerHTML = " years";
//     } else {
//       document.getElementById("year").innerHTML = "";
//       document.getElementById("o").innerHTML = `${year} years ${month} months`;
//     }
//   }
// }
// const submit_data = async () => {
//   await Ctitle();
//   // dure();
//   // photo();
//   // cname();
//   // t_views();
//   // monthsold();
// };
