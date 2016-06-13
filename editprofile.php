<?php
require_once('admin/includes/configurations.php');
$body_id = 'editprofilebody';
require_once('logincheck.php');

require_once('admin/module/classLecturer.php');
require_once('admin/module/classManageClass.php');
require_once('admin/module/classStudent.php');
require_once('admin/module/classStudentCourse.php');

?>
<?php require_once('header.php'); ?>
  <div class="white_bg padding-page">
    <div class="container">
      <div class="col-xs-12 col-md-6 col-sm-7 col-centered">
      	<?php
          if( isset($errors) && count($errors) >0 ){
            foreach($errors as $key=>$val){
        ?>
            <p class="error_msg"><?php echo $val;?></p>
        <?php
            }
          }
       ?>
        <?php
          if( isset($successMsg) && $successMsg !="" ){
				?>
            <p class="success_msg">Your account has been updated successfully.</p>
        <?php
				  }
			 ?>
			 
		
      
		<div class="reg-title">Edit Classes</div>
        <div class="login_box registration">
          <form method="post" action="" onSubmit="return updateProfile();" id="registerform" enctype="multipart/form-data" >
            <div class="row">
              
           
            
           
              <div class="form-group">
              <label for="">Currently Registered Courses</label>
			  
              <div class="classesrow" id="classesrow1">
				<div class="row">
               <div class="col-md-8 col-sm-8">
                  <select class="form-control" id="course-input">
                    <option value="" disabled selected>Select a Class</option>
</select>
</div>
				</div>
              </div>
              <div class="form-group">
                    <a class="btn btn-info" id="add-course-row">Add Course</a>
                    <a class="btn btn-warning" id="remove-course-row">Remove Course</a>
              </div>
            </div>
            <div class="form-group">
				  <label for="class_year">Don't see your class? Request we add it below!</label>
				  <input type="text" class="form-control" placeholder="Request class" name="class_name_custom" id="class_name_custom" value="<?=(!empty($_POST['class_name_custom']))? $CommanObj->inscrape($_POST['class_name_custom']) : $CommanObj->inscrape($studentData['class_name_custom']);?>">
			</div>
            <div class="submit">
			  <input type="hidden" class="form-control" name="editemail" value="<?=$CommanObj->inscrape($studentData['email']);?>">
			  <input type="hidden" class="form-control" name="eidtpic" value="<?=$CommanObj->inscrape($studentData['profile_pic']);?>">
              <button class="btn btn-default" title="BookUp" type="reg_submit" name="reg_submit" id="submit">Update</button>
            </div>
        	</div>
          </form>
          <div class="create_account"><a target="_blank" href="#"></a></div>
<ul id="userClasses" style="display: none"></ul>
        </div>
      </div>
    </div>
  </div>
<script>
function updateProfile() {
    var updatedCourses = new Array();
    var updateCurrClasses = new RSVP.Promise(function(fulfill) {
        $(".classesrow select").each(function(index) {
            if ($(this).val() && $(this).val() != '') {

                var courseId = $(this).val();
                updatedCourses.push(courseId);
                var classObj = Parse.Object.extend("Class");
                var classQuery = new Parse.Query(classObj);
                classQuery.get(courseId, {
                    success: function(result) {
                        // The object was retrieved successfully.
                        var relation = result.relation("students");
                        relation.add(Parse.User.current());
                        result.save();
                    },
                    error: function(user, error) {
                        // Show the error message somewhere and let the user try again.
                        alert("Error: " + error.code + " " + error.message);
                    }
                });

            }
        });
        fulfill(updatedCourses);
    });

updateCurrClasses.then(function(updatedCourses) {

        $('.userClass').each(function(index) {
                var courseId = $(this).attr("id");
//alert($.inArray(courseId, updatedCourses));
            if ($.inArray(courseId, updatedCourses)==-1) {
                var classObj = Parse.Object.extend("Class");
                var classQuery = new Parse.Query(classObj);
                classQuery.get(courseId, {
                    success: function(result) {
                        // The object was retrieved successfully.
                        var relation = result.relation("students");
                        relation.remove(Parse.User.current());
                        result.save();
                    },
                    error: function(user, error) {
                        // Show the error message somewhere and let the user try again.
                        alert("Error: " + error.code + " " + error.message);
                    }
                });

            }
        });
return false;
});
}
window.onload = function() {

    var getMyClasses = new RSVP.Promise(function(fulfill) {
        var classIds = new Array();
        //load in my classes
        var classes = Parse.Object.extend("Class");
        var classQuery = new Parse.Query(classes);


        classQuery.equalTo("students", Parse.User.current());
        // execute the query
        classQuery.find({
            success: function(results) {
                for (var i = 0; i < results.length; i++) {
                    classIds.push(results[i].id);
                    $('#userClasses').append('<li class="userClass" id="' + results[i].id + '"></li>');
                }
                fulfill(classIds);
                // results contains all of the User objects, and their associated Weapon objects, too
            }
        });

    });
    getMyClasses.then(function(classIds) {
        if (classIds.length > 1) {
            var classRowNum = 3;
            var classesRow = $(".classesrow").html();
if(classIds.length<4){
var totRows=classIds.length;
}else{
var totRows=classIds.length-1;
}
            for (var j = 1; j < totRows; j++) {
                $("#classesrow" + (classRowNum - 1)).after('<div class="classesrow" id="classesrow' + classRowNum + '">' + classesRow + '</div>');
                $("#classesrow" + classRowNum + " select").val('');
                classRowNum++;
            }
adjustAddRemoveCourseButtons()
        }
        //Load in available classes to dropdown menus
        var classes = Parse.Object.extend("Class");
        var classQuery = new Parse.Query(classes);
        classQuery.ascending("department", "number");
        classQuery.find({
            success: function(groups) {
                var selectMyClass = new RSVP.Promise(function(fulfill) {
                    for (var i = 0; i < groups.length; i++) {
                        var prof = groups[i].get("prof");
                        var dep = groups[i].get("department");
                        var title = groups[i].get("title");
                        var id = groups[i].id;
                        var num = groups[i].get("number");
                        var per = groups[i].get("period");
                        $(".form-control").append("<option value=" + id + ">" + "[" + dep + num + "] " + title + " with Professor " + prof + "</option>");

                    }
                    fulfill(classIds);
                });
                selectMyClass.then(function(classIds) {
                    for (var j = 0; j < classIds.length; j++) {
                        $("#classesrow" + (j + 1) + " select").val(classIds[j]);
                    }


                });
            },
            error: function(object, error) {
                // The object was not retrieved successfully.
                // error is a Parse.Error with an error code and message.
                alert("Error: Courses could not be retrieved.");
            }
        });


    });
};
</script>
<?php require_once('footer.php'); ?>