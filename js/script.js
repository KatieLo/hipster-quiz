$( document ).ready(function() {


$("form").submit(function(event){

// Get value of each radio button
var hipsterScore = 0;
$("input:radio:checked").each(function() {
	hipsterScore = hipsterScore + parseInt($(this).val());
});

// Get value of each radio button
var ans1 = parseInt($('input:radio[name=q1]:checked').val());
console.log(ans1)
var ans2 = parseInt($('input:radio[name=q2]:checked').val());
console.log(ans2)
var ans3 = parseInt($('input:radio[name=q3]:checked').val());
console.log(ans3)
var ans4 = parseInt($('input:radio[name=q4]:checked').val());
console.log(ans4)
var ans5 = parseInt($('input:radio[name=q5]:checked').val());
console.log(ans5)
var ans6 = parseInt($('input:radio[name=q6]:checked').val());
console.log(ans6)
var ans7 = parseInt($('input:radio[name=q7]:checked').val());
console.log(ans7)
var ans8 = parseInt($('input:radio[name=q8]:checked').val());
console.log(ans8)
//sum all values. 
var hipsterScore = ans1 + ans2 + ans3 + ans4 + ans5 + ans6 + ans7 + ans8;

console.log(hipsterScore);
//if value = 0 - 6 display No, definitely not.
if (hipsterScore < 7){
	console.log("You ain't no hipster! Go back to the bank!");
	$("#not").show();
}
// if 7-12, display You definitely have hipster sympathies.
else if (hipsterScore < 13){
	console.log("You definitely display hispetr sympathies.");
	$("#maybe").show();
} else {
	console.log("So hipster, your wayfarers are melting!");
	$("#fully").show();
}
$("#quizpage").hide();
//if 13-16 display so hipster, your wayfarers are melting.
event.preventDefault();
});

});