var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "newUser_db"
  });
  
  
  $("#send").on("click", function(event) {
        event.preventDefault();
        // Form validation
        // function validateForm() {
        //   var isValid = true;
        //   $(".input").each(function() {
        //     if ($(this).val() === "") {
        //       isValid = false;
        //     }
        //   });
        //   return isValid;
        // }

         // If all required fields are filled
    //   if (validateForm()) {
        var newUser = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            subject: $("#subject").val(),
            message: $("#message").val(),
        }
            console.log(newUser);

    })