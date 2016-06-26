<?php
$body_id = 'editprofilebody';

?>
<?php require_once('header.php'); ?>
<script src="js/editProfileView.js"></script>
  <div class="white_bg padding-page">
    <div class="container">
      <div class="col-xs-12 col-md-6 col-sm-7 col-centered">
 
        
			 
		
          <div id="userClasses" style='display:none'>
       	
    </div>
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
				  <input type="text" class="form-control" placeholder="Request class" name="class_name_custom" id="class_name_custom" value="">
			</div>
            <div class="submit">
			  <input type="hidden" class="form-control" name="editemail" value="">
			  <input type="hidden" class="form-control" name="eidtpic" value="">
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


<?php require_once('footer.php'); ?>