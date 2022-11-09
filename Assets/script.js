// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist


// need current day to be displayed
    // calender? Time? Moment.js? 

 var today = moment();
$("#currentDay").text(today.format('MMM DD, YYYY [at] h:mm A'));
// console.log('current hour', today.hour())
// console.log(moment(today.hour(), ["HH"]).format("h A"))
var currentHour = moment(today.hour(), ["HH"]).format("hh A")
var currentMilitaryHour = parseInt(moment(today.hour(), ["H"]).format("H"))

// need hourly timeblocks for 8am - 5pm
$("textarea").each(function (index) {
    // console.log( index + ": " + $(this) );
    // console.log('span',$(this).siblings( ".hour" ).text())
    var blockHour = parseInt($(this).siblings(".hour").attr('id'))
    var storedText = localStorage.getItem(blockHour);
    $(this).val(storedText)
    console.log("storedText:", storedText)
    if (blockHour === currentMilitaryHour) {
        //change the css to show that its current hour
        // color grey to represent past 
        // color red to represent present
        // color green to represent future
        console.log('span', $(this).siblings(".hour").text())
        $(this).addClass('present')
    } else if (blockHour < currentMilitaryHour) {
        $(this).addClass('past')
    }
    else {
        $(this).addClass('future')
    }
});


// button to save 
    // save to local storage 
var saveButton = $('.saveBtn');
saveButton.on("click", save)

function save() {
    var textDescription = ($(this).siblings(".description").val())
    var key = ($(this).siblings(".hour").attr('id'))
    localStorage.setItem(key, textDescription);
}




// 
// $(".saveBtn").click(function()
// {
//    $(this).data('clicked', true);
// });
// Questions:

// So will I need to indicate that it is a certain time on the planner in order to show past, present, future?? 

// when page is refreshed and events stay, does saving it into local storage not keep it there?? Or what does this mean? "refresh page, events persist"
