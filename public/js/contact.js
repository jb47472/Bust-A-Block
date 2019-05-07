    $("#send").on("click", function(event) {
        event.preventDefault();
        // Form validation
        function validateForm() {
          var isValid = true;
          $(".input").each(function() {
            if ($(this).val() === "") {
              isValid = false;
            }
          });
          return isValid;
        }

         // If all required fields are filled
      if (validateForm()) {
        var newUser = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            subject: $("#subject").val(),
            message: $("#message").val(),
        }
            console.log(newUser);
    }
})
