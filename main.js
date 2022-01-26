const start=document.getElementById("start");
const stopb=document.getElementById("stop");
const showbox=document.getElementById("show-box");
const restart=document.getElementById("restart");
const count=document.getElementById("count");
const continueb=document.getElementById("continue");
const countbox= document.getElementById("list");

start.addEventListener("click", stopwatch);
stopb.addEventListener("click", stopwatch);
restart.addEventListener("click", restarttime);
count.addEventListener("click", counttime);
continueb.addEventListener("click", continuetime);

let timer= null;

function stopwatch(event){
    let hours=0;
    let minutes=0;
    let seconds=0;
    let miliseconds=0;
    let display;
    
    function session(number){
        if(number<10){
            return "0"+ number;
        }
        return number;
    }

    if(event.target.id === "start"){
        timer = setInterval(function(){
          stopb.style.display="block";
          count.style.display="block"  
          start.style.display="none";  
          miliseconds++;
          if(miliseconds=== 100){
              miliseconds=0;
              seconds++
          }

          if( seconds === 60){
              seconds = 0;
              minutes++;
          }

          if(minutes === 60){
              minutes = 0;
              hours++;
          }

          display=
          session(hours)+":"+
          session(minutes)+":"+
          session(seconds)+"."+
          session(miliseconds);

          showbox.innerHTML = display;
        //   console.log(display);
      }, 10)  
    } else if (event.target.id === "stop"){
        clearInterval(timer);
        continueb.style.display="block";
        restart.style.display="block";
        stopb.style.display="none";
        count.style.display="none";
    }
}

function restarttime(){
    location.reload();
    showbox.innerText="00:00:00:00";
    start.style.display="block";
    continueb.style.display="none";
    restart.style.display="none";
}

function counttime(){
    const newcount =document.createElement("li")
    newcount.innerText=showbox.innerText;
    newcount.classList.add("count-box")
    countbox.appendChild(newcount)

}
function continuetime(event){
    stopb.style.display="block";
    count.style.display="block";
    restart.style.display="none";
    continueb.style.display="none";

    let hours= showbox.innerText.substring(0, 1);
    let minutes=showbox.innerText.substring(4, 5)
    let seconds=showbox.innerText.substring(7, 8)
    let miliseconds=showbox.innerText.substring(10, 11)
    let display;
    
    function session(number){
        if(number<10){
            return "0"+ number;
        }
        return number;
    }

        timer = setInterval(function(){
          miliseconds++;
          if(miliseconds=== 100){
              miliseconds=0;
              seconds++
          }

          if( seconds === 60){
              seconds = 0;
              minutes++;
          }

          if(minutes === 60){
              minutes = 0;
              hours++;
          }

          display=
          session(hours)+":"+
          session(minutes)+":"+
          session(seconds)+"."+
          session(miliseconds);

          showbox.innerHTML = display;
      }, 10)  
}