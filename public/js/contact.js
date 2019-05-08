
 $("#submit").on("click", function(event) {
        event.preventDefault();
      
        var newUser = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            subject: $("#subject").val(),
            message: $("#message").val(),
           
        }
    
        
            console.log(newUser);

    })