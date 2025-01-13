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
console.log("hello");

// =====get thumbnail=======
function getthumbnail() {
  let photo = document.getElementById("input_thumbnail").value;
  localStorage.setItem("photo", photo);
}
// ----set thumbnail-----
const setThumbnail = () => {
  let photo = localStorage.getItem("photo");
  let pic = document.getElementById("thumbnail");
  pic.src = photo;
};
// ======get video dureation======
function getDure() {
  let time = document.getElementById("input_dur").value;
  localStorage.setItem("time", time);
}
// -----Set video dureation------
function setTime() {
  let time = localStorage.getItem("time");
  time = parseInt(time);
  if (time <= 0 || time == null) {
    alert(`The min video length should be 1s`);
  } else {
    if (time < 60) {
      document.getElementById("dureation").innerHTML = `00:${time}`;
    } else {
      let cal_time = time / 60;
      let min = Math.floor(cal_time);
      let sec = time % 60;
      if (cal_time < 60) {
        document.getElementById("dureation").innerHTML = `${min}:${sec}`;
      } else {
        hr = min / 60;
        document.getElementById("dureation").innerHTML = `${hr}:${min}:${sec}`;
      }
    }
  }
}

// mere demag mai ek idea aaya hai jo function data set kare ga eg: setTime() use eventlistioner laga ke await karwa do jabtak me genereate per click na kardu.

// =======Get title for video======
function getTitle() {
  let title = document.getElementById("input_title").value;
  localStorage.setItem("title", title);
}
// --------set title--------
function setTitle() {
  let title = localStorage.getItem("title");
  document.getElementById("title").children[0].innerHTML = title;
}
// =========Get channel name=====
function getChannel() {
  let chaname = document.getElementById("input_channel").value;
  localStorage.setItem("channel_name", chaname);
}
// --------Set channel name----
function setChannel() {
  let chaname = localStorage.getItem("channel_name");
  document.getElementsByClassName("link")[0].innerHTML = chaname;
}
// ===== Get views on that video=======
function getViews() {
  let view = document.getElementById("input_views").value;
  localStorage.setItem("view", view);
}
// ---------Set views on your videos-------
function setViews() {
  let view = localStorage.getItem("view") * 1; // multiplying by 1 converts the string to integer; I can use parseInt() too for this.
  let show_view;
  if (view >= 1000000) {
    show_view = Math.floor(view / 1000000) + "M";
  } else if (view >= 1000) {
    show_view = Math.floor(view / 1000) + "K";
  } else {
    show_view = view;
  }
  document.getElementById("v").innerHTML = show_view;
}
// ========= Get how much old is video=======
function getMonth() {
  let oldTime = document.getElementById("input_months").value;
  localStorage.setItem("timeold", oldTime);
}
// --------- set months old to template------
function setMonth() {
  let oldTime = localStorage.getItem("timeold") * 1;
  let cal_time = oldTime / 12;
  if (cal_time < 1) {
    document.getElementById("o").innerHTML = oldTime;
    document.getElementById("year").innerHTML = " months";
  } else {
    let year = Math.floor(cal_time);
    let month = oldTime % 12;
    if (month == 0) {
      document.getElementById("o").innerHTML = cal_time;
      document.getElementById("year").innerHTML = " years";
    } else {
      document.getElementById("year").innerHTML = "";
      document.getElementById("o").innerHTML = `${year} years ${month} months`;
    }
  }
}
async function getInfo() {
  await getthumbnail();
  await getDure();
  await getTitle();
  await getChannel();
  await getViews();
  await getMonth();
  setTimeout(() => {
    alert(
      `Please wait while we are pushing your information to localdata base`
    );
  }, 1000);
}
async function setInfo() {
  await setThumbnail();
  await setTime();
  await setTitle();
  await setChannel();
  await setViews();
  await setMonth();
}
