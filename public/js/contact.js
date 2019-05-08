$("#send").on("click", function(event) {
//console.log(event)


var newUser ={
name: $("#name").val(),
email: $("#email").val(),
phone: $("#phone").val(),
subject: $("#subject").val(),
message: $("#message").val(),
}
console.log(newUser)
});

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
   // event.preventDefault();