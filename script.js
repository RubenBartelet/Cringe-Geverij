document.getElementById("main_box").style.right = (document.documentElement.clientWidth/2-document.getElementById("main_box").offsetWidth/2);


var Space_between_icons = 10
document.getElementById("GG_button").style.top = document.getElementById("home_button").offsetTop + document.getElementById("home_button_image").offsetHeight + document.getElementById("home_button_text").offsetHeight + Space_between_icons


function main_box_x(){
    document.getElementById("main_box").style.visibility='hidden' 
}

function open_main_box(){
    document.getElementById("main_box").style.visibility='visible' 
}

function GG_box_x(){
    document.getElementById("GG_box").style.visibility='hidden' 
}

function open_GG_box(){
    document.getElementById("GG_box").style.visibility='visible' 
}

startTime() 
function startTime(){
    var today = new Date();
    if (today.getMinutes() > 10){
        document.getElementById("time_text").innerHTML = today.getHours() + ':' + today.getMinutes();
    } else{
        document.getElementById("time_text").innerHTML = today.getHours() + ':0' + today.getMinutes();
    }
    var last_time = today.getMinutes();
    setTimeout(startTime, 1000);
}


dragElement(document.getElementById("main_box"));
dragElement(document.getElementById("GG_box"));


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
      }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        if ((elmnt.offsetLeft - pos1) > (screen.width - document.getElementById(elmnt.id).offsetWidth)){
            elmnt.style.left = (screen.width - document.getElementById(elmnt.id).offsetWidth)+ "px";
        }else if((elmnt.offsetLeft - pos1) < 0){
            elmnt.style.left = 0 + "px";
        }

        if((elmnt.offsetTop - pos2) > screen.height - document.getElementById(elmnt.id).offsetHeight - document.getElementById('menubar').offsetHeight){
            elmnt.style.top = (screen.height - document.getElementById(elmnt.id).offsetHeight - document.getElementById('menubar').offsetHeight) + "px";
        }else if((elmnt.offsetTop - pos2)<0){
            elmnt.style.top = 0 + 'px';
        }
    }
}
