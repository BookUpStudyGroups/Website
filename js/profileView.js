//Profile page
function loadProfile()
{
    
var classes = Parse.Object.extend("Class");
var classQuery = new Parse.Query(classes);
var fullName = Parse.User.current().get("fullName");

classQuery.equalTo("students", Parse.User.current());
// execute the query
classQuery.find({
  success: function(results){
for (var i = 0; i < results.length; i++) {
var prof=results[i].get("prof");
var dep=results[i].get("department");
var title=results[i].get("title");
var per=results[i].get("period");
var depId=results[i].get("depId");


$("#class-row").append("<div class='col-md-12 col-sm-12'> <a href='groups.php'><div class='col-lg-12 col-md-12 col-sm-12'><img class='profile-classimg' src='images/class-"+depId+"-icon.png' alt='' ></div><div class='col-lg-12 col-md-12 col-sm-12'><b>&nbsp;"+title+"</b><br>"+prof+", "+per+"</div></a> </div>");
//<div class="col-md-12 col-sm-12"> <a href="#"> </a> </div>
}
    // results contains all of the User objects, and their associated Weapon objects, too
  }
});


document.getElementById("si_profile_heading").innerHTML=fullName;
    $('#quote_section').append('Welcome, '+fullName.split(' ')[0]+". <a id='top-scroll-link' href='#'>Scroll Below</a> to Get Started, or Change Settings <a href='editprofile.php'>Here.<a>");
    
    $("#home-down").click(function() {
    $('html, body').animate({
        scrollTop: $("#home-down").offset().top
    }, 1000);
});
    $("#top-scroll-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#home-down").offset().top
    }, 1000);
});
    easterEgg();
	 

}
function easterEgg(){
$('#shark_secret').click(function(event){
        if($("#slogan_section iframe").length>0){
            $("#slogan_section iframe").remove();
            $("#slogan_section br").remove();
        }else{
        $("#slogan_section").prepend('<iframe width="560" height="315" src="https://www.youtube.com/embed/XiWl8Ge1Hl8" frameborder="0" allowfullscreen></iframe><br>');
        }
    });
}
