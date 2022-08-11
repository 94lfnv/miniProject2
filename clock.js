const currTime = document.querySelector("#currTime");

const getTime = () => {
  const today = new Date();

  const hours = ("0" + today.getHours()).slice(-2);
  const minutes = ("0" + today.getMinutes()).slice(-2);
  const seconds = ("0" + today.getSeconds()).slice(-2);
  const timeStr = `${hours}:${minutes}:${seconds}`;

  currTime.innerText = timeStr;
};

getTime();
setInterval(getTime, 1000);
