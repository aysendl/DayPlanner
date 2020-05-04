// Display Current Day
var currentdate =moment();
$("#currentDay").text(currentdate.format('dddd, MMMM Do'));

// configuring save buttons
var saveButtons = $(".saveBtn");
saveButtons.on('click', function(){
    var clickedbutton = $(this);
    var hour = clickedbutton.data("hour");
    var userinput = $("#task-"+hour).val();
    console.log(userinput);
    localStorage.setItem("taskval"+hour, userinput);
});

// displaying saved values
for( var i =9; i<18; i++){
    var display = localStorage.getItem("taskval"+i);
    $("#task-"+i).val(display);
    if(currentdate.hour() > i) {
        $("#task-"+i).addClass("past");
    }
    else if(currentdate.hour() == i) {
        $("#task-"+i).addClass("present");
    }
    else {
        $("#task-"+i).addClass("future");
    }
}


