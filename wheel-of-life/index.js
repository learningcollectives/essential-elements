document.querySelector("#themeButton").addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

document.querySelector("#printButton").addEventListener("click", function () {
  window.print();
});

const form = document.querySelector("#form");
const nameSpan = document.getElementById("myName");

const data = {
  labels: [
    "Health, Physial",
    "Health, Mental",
    "Love",
    "Creativity/Self Exprssion",
    "Housing",
    "Friends/Family",
    "Prosperity/Money",
    "Personal Development",
    "Work",
    "Fun & Relaxation",
  ],
  datasets: [
    {
      label: "Current",
      data: [5, 7, 4, 7, 8, 5, 7, 8, 6, 8],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 0, 0, 1)",
      borderWidth: 1,
    },
    {
      label: "Ideal",
      data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      backgroundColor: "rgba(0, 0, 255, 0.2)",
      borderColor: "rgba(0, 0, 255, 1)",
      borderWidth: 1,
    },
  ],
};

// config
const config = {
  type: "radar",
  data,
  options: {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 12,
          },
        },
      },
    },
  },
};

let userName;

const formHandler = (event) => {
  event.preventDefault();
  userName = event.target.name.value;
  nameSpan.innerHTML = userName;
  form.reset();
};

form.addEventListener("submit", formHandler);

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);

const hello = function () {
  let output1 = document.getElementById("current1");
  output1.innerHTML = myChart.config.data.datasets[0].data[0];
  let output2 = document.getElementById("current2");
  output2.innerHTML = myChart.config.data.datasets[0].data[1];
  let output3 = document.getElementById("current3");
  output3.innerHTML = myChart.config.data.datasets[0].data[2];
  let output4 = document.getElementById("current4");
  output4.innerHTML = myChart.config.data.datasets[0].data[3];
  let output5 = document.getElementById("current5");
  output5.innerHTML = myChart.config.data.datasets[0].data[4];
  let output6 = document.getElementById("current6");
  output6.innerHTML = myChart.config.data.datasets[0].data[5];
  let output7 = document.getElementById("current7");
  output7.innerHTML = myChart.config.data.datasets[0].data[6];
  let output8 = document.getElementById("current8");
  output8.innerHTML = myChart.config.data.datasets[0].data[7];
  let output9 = document.getElementById("current9");
  output9.innerHTML = myChart.config.data.datasets[0].data[8];
  let output10 = document.getElementById("current10");
  output10.innerHTML = myChart.config.data.datasets[0].data[9];
  let output11 = document.getElementById("ideal1");
  output11.innerHTML = myChart.config.data.datasets[1].data[0];
  let output12 = document.getElementById("ideal2");
  output12.innerHTML = myChart.config.data.datasets[1].data[1];
  let output13 = document.getElementById("ideal3");
  output13.innerHTML = myChart.config.data.datasets[1].data[2];
  let output14 = document.getElementById("ideal4");
  output14.innerHTML = myChart.config.data.datasets[1].data[3];
  let output15 = document.getElementById("ideal5");
  output15.innerHTML = myChart.config.data.datasets[1].data[4];
  let output16 = document.getElementById("ideal6");
  output16.innerHTML = myChart.config.data.datasets[1].data[5];
  let output17 = document.getElementById("ideal7");
  output17.innerHTML = myChart.config.data.datasets[1].data[6];
  let output18 = document.getElementById("ideal8");
  output18.innerHTML = myChart.config.data.datasets[1].data[7];
  let output19 = document.getElementById("ideal9");
  output19.innerHTML = myChart.config.data.datasets[1].data[8];
  let output20 = document.getElementById("ideal10");
  output20.innerHTML = myChart.config.data.datasets[1].data[9];
};
hello();

function changeCurrentHealthPhysical(health) {
  myChart.config.data.datasets[0].data[0] = health.value;
  myChart.update();
  let output1 = document.getElementById("current1");
  output1.innerHTML = health.value;
}

function changeCurrentHealthMental(health) {
  myChart.config.data.datasets[0].data[1] = health.value;
  myChart.update();
  let output2 = document.getElementById("current2");
  output2.innerHTML = health.value;
}
function changeCurrentLove(love) {
  myChart.config.data.datasets[0].data[2] = love.value;
  myChart.update();
  let output3 = document.getElementById("current3");
  output3.innerHTML = love.value;
}
function changeCurrentCreativity(creativity) {
  myChart.config.data.datasets[0].data[3] = creativity.value;
  myChart.update();
  let output4 = document.getElementById("current4");
  output4.innerHTML = creativity.value;
}

function changeCurrentHousing(housing) {
  myChart.config.data.datasets[0].data[4] = housing.value;
  myChart.update();
  let output5 = document.getElementById("current5");
  output5.innerHTML = housing.value;
}

function changeCurrentFriends(friends) {
  myChart.config.data.datasets[0].data[5] = friends.value;
  myChart.update();
  let output6 = document.getElementById("current6");
  output6.innerHTML = friends.value;
}

function changeCurrentMoney(money) {
  myChart.config.data.datasets[0].data[6] = money.value;
  myChart.update();
  let output7 = document.getElementById("current7");
  output7.innerHTML = money.value;
}
function changeCurrentPersonalDev(personaldev) {
  myChart.config.data.datasets[0].data[7] = personaldev.value;
  myChart.update();
  let output8 = document.getElementById("current8");
  output8.innerHTML = personaldev.value;
}

function changeCurrentWork(work) {
  myChart.config.data.datasets[0].data[8] = work.value;
  myChart.update();
  let output9 = document.getElementById("current9");
  output9.innerHTML = work.value;
}

function changeCurrentFun(fun) {
  myChart.config.data.datasets[0].data[9] = fun.value;
  myChart.update();
  let output10 = document.getElementById("current10");
  output10.innerHTML = fun.value;
}

function changeIdealHealthPhysical(health) {
  myChart.config.data.datasets[1].data[0] = health.value;
  myChart.update();
  let output11 = document.getElementById("ideal1");
  output11.innerHTML = health.value;
}
function changeIdealHealthMental(health) {
  myChart.config.data.datasets[1].data[1] = health.value;
  myChart.update();
  let output12 = document.getElementById("ideal2");
  output12.innerHTML = health.value;
}
function changeIdealLove(love) {
  myChart.config.data.datasets[1].data[2] = love.value;
  myChart.update();
  let output13 = document.getElementById("ideal3");
  output13.innerHTML = love.value;
}
function changeIdealCreativity(creativity) {
  myChart.config.data.datasets[1].data[3] = creativity.value;
  myChart.update();
  let output14 = document.getElementById("ideal4");
  output14.innerHTML = creativity.value;
}
function changeIdealHousing(housing) {
  myChart.config.data.datasets[1].data[4] = housing.value;
  myChart.update();
  let output15 = document.getElementById("ideal5");
  output15.innerHTML = housing.value;
}
function changeIdealFriends(friends) {
  myChart.config.data.datasets[1].data[5] = friends.value;
  myChart.update();
  let output16 = document.getElementById("ideal6");
  output16.innerHTML = friends.value;
}
function changeIdealMoney(money) {
  myChart.config.data.datasets[1].data[6] = money.value;
  myChart.update();
  let output17 = document.getElementById("ideal7");
  output17.innerHTML = money.value;
}

function changeIdealPersonalDev(personaldev) {
  myChart.config.data.datasets[1].data[7] = personaldev.value;
  myChart.update();
  let output18 = document.getElementById("ideal8");
  output18.innerHTML = personaldev.value;
}
function changeIdealWork(work) {
  myChart.config.data.datasets[1].data[8] = work.value;
  myChart.update();
  let output19 = document.getElementById("ideal9");
  output19.innerHTML = work.value;
}

function changeIdealFun(fun) {
  myChart.config.data.datasets[1].data[9] = fun.value;
  myChart.update();
  let output20 = document.getElementById("ideal10");
  output20.innerHTML = fun.value;
}

// get today's date
const d = new Date();
document.getElementById("demo").innerHTML = d;
