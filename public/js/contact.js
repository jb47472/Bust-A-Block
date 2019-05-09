
 $("#submit").on("click", function(event) {
        event.preventDefault();
      
        var newUser = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            subject: $("#subject").val(),
            message: $("#message").val(),
           
        }
        function upsertAuthor(authorData) {
            $.post("/api/authors", authorData)
              .then(getAuthors);
          }
        
            console.log(newUser);

    })
