<?php
$body_id = 'profilebody';

?>
<script src="js/parse-1.6.14.js"></script>

<?php require_once('header.php'); ?>

<div class="slider_section">
<div class="logo-home">
<a href=#>
<!--<img src="images/logo.png" alt="BookUp" title="BookUp">-->
</a>
    
    <div id="quote_section">BOOKUP PILOT PROGRAM 16X @DARTMOUTH</div>
    <div id="homeBuilding">
        <a href="search-group.php">
            <img src="images/polybuilding.png" alt="BookUp" title="BookUp"></a>
    </div>

</div>
  <div class="profile_sec">
    <div class="col-md-12" id="home_spacer">
      <div class="row">
        </div>  
<div class="row">
        </div>
      <!--<div class="col-md-5 col-sm-12 col-xs-12 pull-right">
              <div class="notification">
                <div class="responsive-table">
                  <table width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                      <tr>
                        <td colspan="3" class="greenbg">Notification</td>
                      </tr>
                      <tr>
                        <td width="10%" class="num">1</td>
                        <td width="40%">12 Febuary, 2015</td>
                        <td width="60%">Lorem Ipsum is that it has a more-or-less normal distribution of letters.</td>
                      </tr>
                      <tr>
                        <td class="num">2</td>
                        <td>18 March, 2015</td>
                        <td>Lorem Ipsum is that it has a more-or-less normal distribution,</td>
                      </tr>
                      <tr>
                        <td class="num">3</td>
                        <td>06 June, 2015</td>
                        <td>Lorem Ipsum is that it has a more-or-less normal distribution of letters.</td>
                      </tr>
                      <tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div> -->
    </div>
<div id="slogan_section">Studying Made Simple.</div>
      
    <div id="picons" class="htop_four_icons">
      <div class="container">
        
        <div class="row">

            <div class="col-md-4 col-sm-4"> <a href="matches.php"><div class="img_cont"><img alt="Request a Study Buddy" title="Request a Study Buddy" src="images/buddy.png" ></div></a> <div class="home_btn_label">REQUEST A<br>Study Buddy</div></div>

            <div class="col-md-4 col-sm-4"> <a href="groups.php"><div class="img_cont"><img alt="Find a Study Spot" title="Find a Study Spot" src="images/groupstudy.png" ></div></a><div class="home_btn_label">FIND A<br>Study Group</div> </div>
            <div class="col-md-4 col-sm-4"> <a href="http://www.dartmouth.edu/~acskills/peertutoring.html"><div class="img_cont"><img alt="Request a Tutor" title="Request a Tutor" src="images/tutor.png" ></div></a> <div class="home_btn_label">REQUEST A<br>Course Tutor</div></div>
        </div>

      </div>
<img src="https://media4.giphy.com/media/VOws6TqlPsBMs/200.gif" id="shark_secret" width="30px">

        <div class="form-group">
    &nbsp;
</div>
    </div>
<div id="profile_window" class="col-lg-2 col-md-3 col-sm-4 col-xs-12 maxwidth" style="display:none;">
    <h1 id="si_profile_heading" class="profile_heading"></h1>
    <div class="col-md-12 col-sm-12 col-xs-12 pull-left" id="date"></div>
    <div class="innerpage-left">
        <div class="profileimg">
            
            <div class="viewmatch search_study">
                <div class="row">
                    <div class="col-md-4 col-sm-4"><a href="matches.php"><img alt="Request a Study Buddy" title="Request a Study Buddy" src="images/buddy.png" ><div class="home_btn_label">Request a Study Buddy</div></a> </div>
                    <div class="col-md-4 col-sm-4"><a href="groups.php"><img alt="Find a Study Spot" title="Find a Study Spot" src="images/groupstudy.png" ><div class="home_btn_label">Find a Study Group</div></a> </div>
                    <div class="col-md-4 col-sm-4"><a href="http://www.dartmouth.edu/~acskills/peertutoring.html"><img alt="Request a Tutor" title="Request a Tutor" src="images/tutor.png" ><div class="home_btn_label">Request a Tutor</div></a></div>
                </div>
            </div>
            <div class="profile-sec-3">
                <div class="row" id="class-row">



                </div>
            </div>


        </div>

    </div>
<div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12" id="profile_pic">



                    <div class="row">
                        <div class="edit_profile"><a href="change-password.php">Change Password</a> <a href="editprofile.php">Edit Classes</a></div>
                        
                        <div class="emailaddress">
                            
                        </div>
                        

                    </div>
<div id="spacer">&nbsp;</div>
<div id="spacer">&nbsp;</div>
                    
                </div>

            </div>
</div>
  </div>
</div>
<script>
window.onload=function(){
var classes = Parse.Object.extend("Class");
var classQuery = new Parse.Query(classes);


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


$("#class-row").append("<div class='col-md-12 col-sm-12'> <a href='groups.php'><div class='col-lg-12 col-md-12 col-sm-12'><img class='profile-classimg' src='images/class-"+depId+"-marker-select.png' alt='' ></div><div class='col-lg-12 col-md-12 col-sm-12'><b>&nbsp;"+title+"</b><br>"+prof+", "+per+"</div></a> </div>");
//<div class="col-md-12 col-sm-12"> <a href="#"> </a> </div>
}
    // results contains all of the User objects, and their associated Weapon objects, too
  }
});

/*

var classes = Parse.Object.extend("Class");
var classQuery = new Parse.Query(classes);
classQuery.ascending("department","number");
classQuery.find({
    success: function(groups) {
for (var i = 0; i < groups.length; i++) {
                    var prof=groups[i].get("prof");
                    var dep=groups[i].get("department");
var id=groups[i].id;
var num=groups[i].get("number");
var per=groups[i].get("period");
$(".form-control").append("<option value="+id+">"+dep+" "+num+" with Professor "+prof+"</option>");
                   
                }
            
    },
    error: function(object, error) {
        // The object was not retrieved successfully.
        // error is a Parse.Error with an error code and message.
        alert("Error: Courses could not be retrieved.");
    }
});
*/
document.getElementById("si_profile_heading").innerHTML=Parse.User.current().get("fullName");
                
};


</script>
<!--#startstudy-->
<?php require_once('footer.php'); ?>