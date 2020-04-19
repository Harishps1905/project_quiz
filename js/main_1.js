function validate() {
  var myname = document.getElementById("my_name");

  if (myname.value == "") {
    alert("Please enter your name and proceed");
    return false;
  } else {
    true;
  }
}

var pg1 = $("#pg_1");
var pg2 = $("#pg_2");
var pg3 = $("#pg_3");
var pg4 = $("#pg_4");

pg2.hide();
pg3.hide();
pg4.hide();

// page1
$(".opt_1").click(function () {
  pg1.hide();
  alert("your answer is correct Here is the next Question");
  pg2.show();
});

// page2
$(".opt_8").click(function () {
  pg2.hide();
  alert("your answer is correct Here is the next Question");
  pg3.show();
});

// page3
$(".opt_12").click(function () {
  pg3.hide();
  alert("your answer is correct Here is the next Question");
  pg4.show();
});

// page4
$(".opt_13").click(function () {
  pg1.hide();
  alert("quiz completed and u answered all the question correct");
  location.replace("../index/index_2.html");
});

$(".opt_2").click(function () {
  alert("your answer is incorrect, u r out of the game");
  location.replace("../index/index_2.html");
});

$(".opt_3").click(function () {
  alert("your answer is incorrect, u r out of the game");
  location.replace("../index/index_2.html");
});

$(".opt_4").click(function () {
  alert("your answer is incorrect, u r out of the game");
  location.replace("../index/index_2.html");
});

$(".opt_5").click(function () {
  alert("your answer is incorrect, u r out of the game");
  location.replace("../index/index_2.html");
});

$(".opt_6").click(function () {
  alert("your answer is incorrect, u r out of the game");
  location.replace("../index/index_2.html");
});
$(".opt_7").click(function () {
  alert("your answer is incorrect, u r out of the game");
  location.replace("../index/index_2.html");
});

$(".opt_9").click(function () {
  alert("your answer is incorrect, u r out of the game");
  location.replace("../index/index_2.html");
});

$(".opt_10").click(function () {
  alert("your answer is incorrect, u r out of the game");
  location.replace("../index/index_2.html");
});

$(".opt_11").click(function () {
  alert("your answer is incorrect, u r out of the game");
  location.replace("../index/index_2.html");
});

$(".opt_14").click(function () {
  alert("your answer is incorrect, u r out of the game");
  location.replace("../index/index_2.html");
});
$(".opt_15").click(function () {
  alert("your answer is incorrect, u r out of the game");
  location.replace("../index/index_2.html");
});

$(".opt_16").click(function () {
  alert("your answer is incorrect, u r out of the game");
  location.replace("../index/index_2.html");
});
