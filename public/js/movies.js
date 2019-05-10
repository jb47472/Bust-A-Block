
var config = {
    ".chosen-select": {},
    ".chosen-select-deselect": { allow_single_deselect: true },
    ".chosen-select-no-single": { disable_search_threshold: 10 },
    ".chosen-select-no-results": { no_results_text: " nothing found!" },
    ".chosen-select-width": { width: "95%" }

};
for (var selector in config) {
    $(selector).chosen(config[selector]);
}

//capturing the form input with the submitbutton
$("#submit").on("click", function () {

    //validation for the form
    function validateForm() {
        var isValid = true;
        $(".form-control").each(function () {
            if ($(this).val() === "") {
                isValid = false;
            }
        });

        $(".chosen-select").each(function () {

            if ($(this).val() === "") {
                isValid = false;
            }
        });
        return isValid;
    }

    //creating an object for the user data if the fields are filled
    if (validateForm()) {

        $.post("/html/results")
            .then(window.location.href = 'http://localhost:3000/results');

        // var userData = {
        //     name: $("#name").val(),
        //     photo: $("photo").val(),
        //     scores: [
        //         $("#item1").val(),
        //         $("#item2").val(),
        //         $("#item3").val(),
        //         $("#item4").val(),
        //         $("#item5").val(),
        //         $("#item6").val(),
        //         $("#item7").val(),
        //     ]


    };
  



    //grab the URL 0f the website
    // var currentURL = window.location.origin;

    // $.post(currentURL + "/api/movies", userData, function (data) {

    //     // grab image of the match and display
    //     $("#matchName").text(data.name);
    //     $("#matchImg").attr("src", data.photo);

    //     $("#resultsModal").modal("toggle");

    // });
// }
    //     else {
    //     alert("please fill out all of the fields before hitting submitt");
    // }
    //     return false;
    });


