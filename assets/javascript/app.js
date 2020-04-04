
//create an array called topics to hold the options
var topics = ["tiramisu", "ice cream", "cake", "eclair", "cupcake", "brownie", "donut", "pudding", "gelato", "pie", "cookies"];

//use a for loop to create and append a button for each topic in the array

for(var i = 0; i < topics.length; i++) {
    var button = "<button class='dessert'>" + topics[i] + "</button>";
    $("#buttons").append(button);
  };

//button click function should grab ten static gifs from giphy and display them

function displayGifs() {

    var image = $("<img id='image'>");
    var item = $(this).attr("item");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hTzhtVnszopo5Jg2X2wKhAc0qcQ6ohGQ&q=" + item + "&limit=1";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        image.attr("src", response.data[0].source);
        $("#gifs").append(image);
        console.log(response);

    });
}


$(document).on("click", ".dessert", displayGifs);




//when clicked, gifs should animate, if clicked again, they should stop animating

//display the rating over every gif

//input box so the user can add something to the array - needs input and button to add

//function that runs on the add button click to re create all the buttons