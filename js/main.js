var text_1 = document.getElementById("heading");
var text_2 = document.getElementById("ash");
var text_3 = document.getElementById("from");

animate();
function animate() {
  setTimeout(function () {
    text_1.classList.add("banner-animate-1");
  }, 1000);

  setTimeout(function () {
    text_3.classList.add("banner-animate-3");
  }, 2000);

  setTimeout(function () {
    text_2.classList.add("banner-animate-2");
  }, 3000);
  setTimeout(function () {
    window.location.replace("https://ams238te7opczbec4pex7w-on.drv.tw/www.ashteam.com/index/index_2.html");
  }, 5000);
}
