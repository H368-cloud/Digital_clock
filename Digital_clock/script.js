

setInterval(
    function updateTimer(){
        const now = new Date();
        const hours = now.getHours(); // Get current hour (0-23)
        const minutes = now.getMinutes(); // Get current minute (0-59)
        const seconds = now.getSeconds(); // Get current second (0-59)

        if(hours < 10){
            document.getElementById('hrs').innerHTML =  "0"+ hours;
        }
        else{
            document.getElementById('hrs').innerHTML =  hours;
        }
        if(minutes < 10) {
            document.getElementById('mins').innerHTML = "0"+ minutes;
        }
        else{
            document.getElementById('mins').innerHTML = minutes;
        }
        if(seconds < 10) {
            document.getElementById('secs').innerHTML = "0"+seconds;
        }
        else{
            document.getElementById('secs').innerHTML = seconds;
        }
        if(hours > 12){
            document.getElementById('AM-PM').innerHTML = "PM"
        }
        else{
            document.getElementById("AM-PM").innerHTML = "AM"
        }
    },1000)