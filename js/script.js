$( document ).ready(function() {


$("form").submit(function(event){
	window.scrollTo(0, 0);

// Get value of each radio button
var hipsterScore = 0;
$("imput:radio:checked").each(function() {
	hipsterScore = hipsterScore + parseInt($(this).val());
});

//if value = 0 - 6 display No, definitely not.
if (hipsterScore < 7){
	$("#not").show();
}
// if 7-12, display You definitely have hipster sympathies.
else if (hipsterScore < 13){
	$("#maybe").show();
} else {
//if 13-16 display so hipster, your wayfarers are melting.
	$("#fully").show();
}
$("#quizpage").hide();

event.preventDefault();
});

});