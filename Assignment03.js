"use strict";
// Thông tin cá nhân
const inputPersonalInfo = document.querySelector(".input-personal-info");
const outputPersonalInfo = document.querySelector(".output-personal-info");
const btnInputInfo = document.querySelector(".btnInputPersonal");
const emailaddress = document.querySelector(".form-control");
const textEmailnote = document.querySelector(".form-text");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btnInputInfo.addEventListener("click", function () {
  const enteredEmail = emailaddress.value;
  if (regex.test(enteredEmail)) {
    outputPersonalInfo.classList.remove("hide");
    inputPersonalInfo.classList.add("hide");
  } else {
    textEmailnote.textContent = "Your email is not valid";
    textEmailnote.style.color = "red";
  }
});

//Thông tin nghề nghiệp
const containerJobInfo = document.querySelectorAll(".item_job-info");
const btnDetailInfo = document.querySelectorAll(".btn-detailInfo");
const detailJobInfo = document.querySelectorAll(".detail-job-info");

const mouseOverContainer = function () {
  const index = Array.from(containerJobInfo).indexOf(this);
  btnDetailInfo[index].classList.remove("hide");
};
console.log(mouseOverContainer);

const mouseOutContainer = function () {
  const index = Array.from(containerJobInfo).indexOf(this);
  btnDetailInfo[index].classList.add("hide");
};

for (let i = 0; i < containerJobInfo.length; i++) {
  containerJobInfo[i].addEventListener("mouseover", mouseOverContainer);
  containerJobInfo[i].addEventListener("mouseout", mouseOutContainer);

  // Sử dụng mảng để theo dõi trạng thái cho mỗi công việc
  let isDetailVisible = false;

  btnDetailInfo[i].addEventListener("click", function () {
    if (isDetailVisible) {
      detailJobInfo[i].classList.add("hide");
      btnDetailInfo[i].textContent = "show more";
    } else {
      detailJobInfo[i].classList.remove("hide");
      btnDetailInfo[i].textContent = "show less";
    }
    // Đảo ngược trạng thái
    isDetailVisible = !isDetailVisible;
  });
}

// nâng cao
const projectItem = document.querySelectorAll(".project-item");

for (i = 0; i < projectItem.length; i++) {
  // viblo.asia & ChatGPT
  projectItem[i].addEventListener("click", function () {
    window.location.href = "JobChapter.html";
  });
}
