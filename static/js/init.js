(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// $(document).ready(function(){

//   

//   setInterval(function() {
//     $.each(msgs, function( i, value ) {
//       $("#msg").text(value);
//     }); 
// },3000);

// });


$(function () {
  count = 0;
  var msgs=["Don't Hoard groceries and essentials. Please ensure that people who are in need don't face a shortage because of you!",
  "Plan ahead! Take a minute and check how much you have at home. Planning ahead let's you buy exactly what you need!",
  "If you have symptoms and suspect you have coronavirus - reach out to your doctor or call state helplines. Get help.",
  "Panic mode : OFF! ❌ ESSENTIALS ARE ON! ✔️",
  "Help out the elderly by bringing them their groceries and other essentials.",
  "Be considerate : While buying essentials remember : You need to share with 130 Crore Others!",
  "Stand Against FAKE News and WhatsApp Forwards! Do NOT ❌ forward a message until you verify the content it contains.",
  "Be compassionate! Help those in need like the elderly and poor. They are facing a crisis you cannot even imagine!"];
  setInterval(function () {
    count++;
    $("#msg").fadeOut(500, function () {
      $(this).text(msgs[count % msgs.length]).fadeIn(500);
    });
  }, 5000);
});