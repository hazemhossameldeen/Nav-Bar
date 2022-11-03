let animation1 = document.querySelector(".animation");
document.querySelector(".off1").onclick = () => {
  animation1.style.transform = "translateX(0px)";
  animation1.style.width = "100px";
};

let animation2 = document.querySelector(".animation");
document.querySelector(".off2").onclick = () => {
  animation2.style.transform = "translateX(96px)";
  animation2.style.width = "110px";
};

let animation3 = document.querySelector(".animation");
document.querySelector(".off3").onclick = () => {
  animation3.style.transform = "translateX(200px)";
  animation3.style.width = "100px";
};
