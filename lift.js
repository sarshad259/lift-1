let floor0 =  document.getElementById("floor0");
let floor1 =  document.getElementById("floor1");
let floor2 =  document.getElementById("floor2");
let floor3 =  document.getElementById("floor3");
let lift =  document.getElementById("lift");

let btn0 = document.getElementById("0")
let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");

document.getElementById("0").addEventListener("click", () => {
    lift.style.bottom = "105px"
    lift.style.zIndex = "90"
    btn0.style.pointerEvents = "none";
    btn1.style.pointerEvents = "auto";
    btn2.style.pointerEvents = "auto";
    btn3.style.pointerEvents = "auto";
    btn4.style.pointerEvents = "auto";
 })
document.getElementById("1").addEventListener("click", () => {
   lift.style.bottom = "205px"
   lift.style.zIndex = "90"
   btn0.style.pointerEvents = "auto";
    btn1.style.pointerEvents = "none";
    btn2.style.pointerEvents = "auto";
    btn3.style.pointerEvents = "auto";
    btn4.style.pointerEvents = "auto";
})
document.getElementById("2").addEventListener("click", () => {
    lift.style.bottom = "305px";
    lift.style.zIndex = "90"
    btn0.style.pointerEvents = "auto";
    btn1.style.pointerEvents = "auto";
    btn2.style.pointerEvents = "none";
    btn3.style.pointerEvents = "auto";
    btn4.style.pointerEvents = "auto";
 })
 document.getElementById("3").addEventListener("click", () => {
    lift.style.bottom = "405px";
    lift.style.zIndex = "90"
    btn0.style.pointerEvents = "auto";
    btn1.style.pointerEvents = "auto";
    btn2.style.pointerEvents = "auto";
    btn3.style.pointerEvents = "none";
    btn4.style.pointerEvents = "auto";
 })
 document.getElementById("4").addEventListener("click", () => {
    lift.style.bottom = "505px";
    lift.style.zIndex = "90"
    btn0.style.pointerEvents = "auto";
    btn1.style.pointerEvents = "auto";
    btn2.style.pointerEvents = "auto";
    btn3.style.pointerEvents = "auto";
    btn4.style.pointerEvents = "none";
 })