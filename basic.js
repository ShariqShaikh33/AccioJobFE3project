//creating new Timers

function defaultTextVisibility(){
    let defaultText = document.getElementById("timeDefaultText");
    if(timerArr.length>0){
        defaultText.classList.remove("visible");
        defaultText.classList.add("notVisible");
    }
    else if(timerArr.length==0){
        defaultText.classList.remove("notVisible");
        defaultText.classList.add("visible");
    }
}

function addTimer(id,hh,mm,ss){

    showTimer.innerHTML += `<div class="TimerWrapper" id=${id}>
                                <p class="TimeText">Time Left: </p>
                                <div class="timevalueWrapper">
                                    <p class="timeValue" id="hh${id}">${hh}</p>
                                    <p>:</p>
                                    <p class="timeValue" id="mm${id}" >${mm}</p>
                                    <p>:</p>
                                    <p class="timeValue" id="ss${id}">${ss}</p>
                                </div>
                                <button class="TimeButton DeleteButton" onclick="deleteTimer(${id})">Delete</button>
                            </div>`;
    
}


let showTimer = document.getElementById("timeDisplayDiv");
let timerArr=[];


//Function for adding the new timer in the Display timer section
function setTimer(){
    console.log("hii");
    let id=timerArr.length;
    timerArr.push(`${id}`);
    
    let hh = document.getElementById("hourInput").value;
    let mm = document.getElementById("minuteInput").value;
    let ss = document.getElementById("secondInput").value;

    if(hh==""){
        hh=0;
    }
    if(mm==""){
        mm=0;
    }

    if(hh==0 && mm==0 && ss==0){
        alert("The timer cannot start from zero");
        
    }
    else{
        addTimer(id,hh,mm,ss);
        defaultTextVisibility();
    // Set the date we're counting down to
    var countDownDate = new Date(`${hh}:${mm}:${ss}`).getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // // Time calculations for days, hours, minutes and seconds
        var hours =hh;
        var minutes =mm;
        var seconds = ss--;

        if(seconds<1 && minutes>1){
            seconds=60;
        }
        
        
        
        

        // // Display the result in the element with id="demo"
        document.getElementById("hh"+id).innerHTML = hours ;
        document.getElementById("mm"+id).innerHTML = minutes ;
        document.getElementById("ss"+id).innerHTML = seconds ;

        // If the count down is finished, write some text
        if (seconds==0 && minutes==0 && hours==0) {
            console.log("clear")
            document.getElementById(id).innerHTML = `<div class="TimerWrapper TimerFinish">
                                        <p class="timeIsUpText">Timer Is Up !</p>
                                        <button class="TimeButton StopButton" onclick="deleteTimer(${id})">Stop</button>
                                    </div>`
            clearInterval(x);
            
        }
    }, 1000);

    }

    
    
}





//function for deleting a tiimer from the display timer section
function deleteTimer(id){

    

    for(i=0;i<timerArr.length;i++){
        if(timerArr[i]==id && timerArr.length!=1){

            let deletedEle = document.getElementById(id);
            deletedEle.remove();
            timerArr.splice(timerArr[i],1);
        }
        else if(timerArr[i]==id && timerArr.length==1){
            let deletedEle = document.getElementById(id);
            deletedEle.remove();
            timerArr.pop()
        }
    }

    defaultTextVisibility();


    console.log(timerArr);

}

