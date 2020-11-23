// $(document).ready( () => {
// 	    // alert(`Welcome to jQuery!`);
//
//
// var currentYear = new Date().getFullYear():
// <script>document.write(new Date().getFullYear())</script>;
//
// // });

$(document).ready( () => {
    alert(`Welcome to a page about the one and only Tanya Singh!!! Let's be honest we've all be expecting for one of these to be made eventually. I am very very proud and excited to welcome you to my page. You will not be disappointed. ENJOY!! Have a fantastic day. Please hit the like buttom below, comment & subscribe !! I love my fans <3`);
});
window.onload = () => {
  let outputContainer = document.getElementById(`output-container`);
  let output;
  let now = new Date();

  output = `<b>Today is</b> ${now}<br>`;
  // output += `<b>The month is</b> ${now.getMonth()}<br>`;
  // output += `<b>The day is</b> ${now.getDay()}<br>`;
  // output += `<b>The year is</b> ${now.getFullYear()}<br>`;
  // output += `<b>The hour is</b> ${now.getHours()}<br>`;
  // output += `<b>The minute is</b> ${now.getMinutes()}<br>`;
  // output += `<b>The seconds is</b> ${now.getSeconds()}`;

  outputContainer.innerHTML = output;
};
