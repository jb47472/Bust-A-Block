
 $("#submit").on("click", function(event) {
        event.preventDefault();
      
        var newUser = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            subject: $("#subject").val(),
            message: $("#message").val(),
           
        }
      
        
        // function createNewUser() {
          $.post("/api/contacts", newUser)
            .then(window.location.href = 'http://localhost:3000/survey');
        // }
    
        
            console.log(newUser);

    })