
//create an array called topics to hold the options
var topics = ["tiramisu", "ice cream", "cake", "eclair", "cupcake", "brownie", "donut", "pudding", "gelato", "pie", "cookies"];

//use a for loop to create and append a button for each topic in the array
//buttons function creates all of the buttons
function buttons(){

    //empty the buttons div
    $("#buttons").empty();

    //for loop that runs through the topics array
    for(var i = 0; i < topics.length; i++) {
        //creating a button for each topic
        var button = $("<button>");
        //adding a class to each button
        button.addClass("dessert");
        //adding a data-name to each button
        button.attr("data-name", topics[i]);
        //adding the text to the button
        button.text(topics[i]);
        //appending the button to the buttons div
        $("#buttons").append(button);
  };

}

//displayGifs function does what it says - displays the gifs
function displayGifs() {

    //creates a variable with the data-name
    var item = $(this).attr("data-name");
    //AJAX call query URL
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + config + "=" + item + "&limit=10";

    //AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        //for loop that runs through the array that the response creates (10 gif images)
        for (var j = 0; j < response.data.length; j++) {

            //creating a new img tag for each gif
            var image = $("<img>");
            //adding a class to each img tag
            image.addClass("image");
            //adding the src attribute to each image - using the still url
            image.attr("src", response.data[j].images.original_still.url);
            //adding an attribute to hold the animating url
            image.attr("animate", response.data[j].images.original.url);
            //adding an attribute to hold the still url so they can click to set it back to that
            image.attr("still", response.data[j].images.original_still.url);
            //setting the data-state to still
            image.attr("data-state", "still");

            //creating a new p tag for the rating to display above the image
            var rating = $("<p>");
            //adding a class to each p tag
            rating.addClass("rating");
            
            //prepending the images to the gifs div
            $("#gifs").prepend(image);
            //prepending the p tag to the gifs div
            $("#gifs").prepend(rating);
            //prepending the rating to the p tag
            $(rating).prepend("Rating: " + response.data[j].rating);
        }

    });
}

//when clicked, gifs should animate, if clicked again, they should stop animating
//gifReaction function changes the data-state of the gifs
function gifReaction(){

    //a variable to hold the current data-state
    var state = $(this).attr("data-state");

    //if statement where if the state is still, change the url and state to be animated
    if (state === "still") {
        $(this).attr("data-state", "animate");
        $(this).attr("src", $(this).attr("animate"));
    }

    //if statement where if the state is animate, change the url and state to be still
    if (state === "animate") {
        $(this).attr("data-state", "still");
        $(this).attr("src", $(this).attr("still"));
    }    
 
}

//running the buttons function to display them at the start
buttons();

//listening for any clicks on an element with the dessert class, when one is clicked, run the displayGifs function
$(document).on("click", ".dessert", displayGifs);

//listening for any clicks on an element with the image class, when one is clicked, run the gifReaction function
$(document).on("click", ".image", gifReaction);

//click event for the add-gif button
$("#add-gif").on("click", function(event) {
    event.preventDefault();

    //variable to hold the input from the input box
    var gif = $("#gif-input").val().trim();

    //pushing the input into the topics array
    topics.push(gif);

    //run the buttons function so the new button displays
    buttons();
});
