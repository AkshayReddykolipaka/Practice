const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);



//Battrey ApI

const battery = () => {
  if("getBattery" in navigator){
    navigator.getBattery().then(battery => {
      console.log(battery);

    });
  }
console.log("battery");
};

battery();

