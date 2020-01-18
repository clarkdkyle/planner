// use moment to create time tracker
// const Today= moment().format('MMMM Do YYYY');
// let date = $('#currentDay');
//   date.text(Today);
// create grid format for each hour.
// set grid to change colors based on past present future
// add save button to each grid line
// create save function to keep activities in local storage
var date = new Date();
        document.getElementById("lead").innerHTML = date;
        var calendar = document.getElementById("calendar");
        $(document).ready(function () {
        });

        function setUpHour(i) {
            var text = "text" + i;
            var img = "save-image" + i;
            var time = "time" + i;
            document.getElementById(text).value = localStorage.getItem(time);
            document.getElementById(img).addEventListener("click", function () {
                localStorage.setItem(time, document.getElementById(text).value);

            });

        }
        for (let i = 9; i <= 17; i++) {
            setUpHour(i);
        }
        
        moment().format();