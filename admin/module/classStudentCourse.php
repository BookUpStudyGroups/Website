<?php
	class studentCourse extends connectionMySQL 
	{
		var $recordSet, $id, $user_id, $course_num, $lecturer_id, $department_id, $created, $last_updated;
		
		/******************* Modify From Table*********************/
		function insertStudentCourse($dumpSQL=true)
		{
			$query 	= " INSERT into ".tblUserCourse." set "
					. " user_id				= '$this->user_id', "
					. " course_num			= '$this->course_num', "
					. " lecturer_id  		= '$this->lecturer_id', "
					. " department_id  		= '$this->department_id', "
					. " last_updated		=  NOW(), "
					. " created				=  NOW() ";
			
			if($dumpSQL) return $this->insertSQL($query);
			else echo $query;
		}
		
		function updateStudentCourse($courseID, $dumpSQL=true)
		{
			$query 	= "UPDATE ".tblUserCourse." set "
					. " course_num			= '$this->course_num', "
					. " lecturer_id  		= '$this->lecturer_id', "
					. " department_id  		= '$this->department_id', "
					. " last_updated		=  NOW() "
					. " WHERE id 			= '$courseID' ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
		}

		function getStudentClassCourseById($studentId, $dumpSQL=true)
		{
			
			$query ="SELECT * FROM ".tblUserCourse." WHERE user_id = '$studentId'";
			
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}

		function getStudentClassNamesById($studentId, $dumpSQL=true)
		{			
			$query ="SELECT c.classID as class_id, c.name as class_name, course_num FROM ".tblUserCourse." uc, tbl_sb_class c WHERE uc.user_id = '$studentId' AND uc.department_id = c.classID GROUP BY class_id, course_num";
			
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}
		

		function getAllCoursesById($studentId, $dumpSQL=true)
		{			
			$query ="SELECT * FROM ".tblUserCourse." WHERE user_id='$studentId'";
			
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}
	
	};
	$StudentCourseObj = new studentCourse();	//	lecturer
?>