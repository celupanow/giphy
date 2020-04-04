
//create an array called topics to hold the options
var topics = ["tiramisu", "ice cream", "cake", "eclair", "cupcake", "brownie", "donut", "pudding", "gelato", "pie", "cookies"];

buttons();

//use a for loop to create and append a button for each topic in the array
function buttons(){
    $("#buttons").empty();
for(var i = 0; i < topics.length; i++) {
    var button = $("<button>");
    button.addClass("dessert");
    button.attr("data-name", topics[i]);
    button.text(topics[i]);
    $("#buttons").append(button);
  };

}

//button click function should grab ten static gifs from giphy and display them

function displayGifs() {

    var item = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hTzhtVnszopo5Jg2X2wKhAc0qcQ6ohGQ&q=" + item + "&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        for (var j = 0; j < response.data.length; j++) {
        var image = $("<img>");
        image.addClass("image");
        image.attr("src", response.data[j].images.original_still.url);
        image.attr("animate", response.data[j].images.original.url);
        image.attr("still", response.data[j].images.original_still.url);
        image.attr("data-state", "still");
        var rating = $("<div>");
        $("#gifs").prepend(rating);
        $(rating).prepend("Rating: " + response.data[j].rating);
        $("#gifs").prepend(image);
        console.log(response);
        }

    });
}


$(document).on("click", ".dessert", displayGifs);

//when clicked, gifs should animate, if clicked again, they should stop animating

function gifReaction(){

    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("data-state", "animate");
        $(this).attr("src", $(this).attr("animate"));
    }

    if (state === "animate") {
        $(this).attr("data-state", "still");
        $(this).attr("src", $(this).attr("still"));
    }    
 
}

$(document).on("click", ".image", gifReaction);

//display the rating over every gif

//input box so the user can add something to the array - needs input and button to add

$("#add-gif").on("click", function(event) {
    event.preventDefault();

    var gif = $("#gif-input").val().trim();

    topics.push(gif);

    buttons();
})

//function that runs on the add button click to re create all the buttons