// Wrapped all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // Added a listener for click events on the save button.
  $(".saveBtn").on("click", function () {
    var timeBlock = $(this).parent().attr("id");
      var description = $(this).siblings(".description").val();
      localStorage.setItem(timeBlock, description);
});

  // Applied the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  var currentHour = dayjs().hour();
  $(".time-block").each(function () {
      var timeBlock = parseInt($(this).attr("id").split("-")[1]);
      if (timeBlock < currentHour) {
          $(this).addClass("past").removeClass("present future");
      } else if (timeBlock === currentHour) {
          $(this).addClass("present").removeClass("past future");
      } else {
          $(this).addClass("future").removeClass("past present");
      }
  // Get any user input that was saved in localStorage and set
  var savedText = localStorage.getItem($(this).attr("id"));
  $(this).find(".description").val(savedText);
});
  // Displays the current date in the header of the page.
  var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
});

