$(document).ready(function() {
    $('#message').submit(function(e) {
        e.preventDefault()
        

        $.ajax({
            url: 'processmsg.php',
            data: $(this).serialize(),
            method: 'POST',
            success: function(resp) {
                
                $('#error_msg').html(resp);
                    // $(e.currentTarget).reset()
                // reset();  // Reset all form data
                    
            }
        })

    })
})

//  function clearinput(){
//             $ ("#message :input").each( function (){
//                 $(this).val("");
//             });  hilurians
//         };






// function clearinput(){
//     $ ("#message :input").each( function (){
//         $(this).val("");
//     });
// };

// $(document).ready(function() {
//     $('#dmsg').submit(function(e) {
//         e.preventDefault()

//         $.ajax({
//             url: 'processmsg.php',
//             data: $(this).serialize(),
//             method: 'POST',
//             success: function(resp) {
//                 $('#ds').html(resp);
//             }
//         })
//     })
// })
