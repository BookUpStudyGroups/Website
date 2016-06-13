<?php
$MatchObj = new match();
	class match extends connectionMySQL 
	{
	
		var $recordSet, $matchID, $fname, $mname, $lname, $email, $rp_hash, $password, $profile_pic, $gender, $class_year, $term, $active, $created;
		
		/******************* Modify From Table*********************/
		
		function insertMatch($dumpSQL=true)
		{
			$query 	= " INSERT into ".tblUserMatches." set "
					. " class_id  			= '$this->am_class', "
. " class_id  			= '$this->am_class', "
					. " user_id  			= '$this->user_id', "
					. " class_number  		= '$this->am_class_number', "
. " match_times  		= '$this->am_matched_times', "
					. " room  				= '$this->am_room', "
					. " location  			= '$this->am_location', "
					. " location_latlng  	= '$this->am_location_latlng', "
					. " start_time  		= '$this->am_start_time', "
					. " end_time			= '$this->am_end_time', "
					. " created				= NOW() ";
			if($dumpSQL) return $this->insertSQL($query);
			else echo $query;
		}

		function updateMatch($matchID, $dumpSQL=true)
		{
			$query 	= "UPDATE ".tblUserMatches." set "
					. " class_id  			= '$this->am_class', "
					. " user_id  			= '$this->user_id', "
					. " class_number  		= '$this->am_class_number', "
. " match_times  		= '$this->am_matched_times', "
					. " room  				= '$this->am_room', "
					. " location  			= '$this->am_location', "
					. " location_latlng  	= '$this->am_location_latlng', "
					. " start_time  		= '$this->am_start_time', "
					. " end_time			= '$this->am_end_time', "
					. " last_updated		= NOW() "
					. " WHERE id 			= '$matchID' ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
		}

		
		function getMatchById($matchId, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblUserMatches." WHERE id='$matchId'";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}

		function deleteMatchById($matchId, $dumpSQL=true)
		{
			
			$query 	= "delete from " . tblUserMatches . 
					  " Where id='" . $matchId. "'";
			
			$this->selectSQL($query);

			$query ="Delete FROM ".tblJoinMatch." WHERE match_id='$matchId'";
			if($dumpSQL) return $this->selectSQL($query);
			else echo $query;
			
		}

		function getAllMatchesForCurUser($user_id, $dumpSQL=true)
		{

			$allUserCourses = "Select * from " . tblUserCourse . " where user_id='$user_id'";
			$resultAllCourse = $this->selectSQL($allUserCourses);
			$LoSArray = array();
			
			while($ObjRCourse = mysql_fetch_assoc($resultAllCourse)){
				$LoSArray[] = array("courseNo" => $ObjRCourse["course_num"], "departmentId" => $ObjRCourse["department_id"] );
			}
			
			$LosSubQuery = " 1 ";
			foreach($LoSArray as $key => $val){
				$LosSubQuery .= " or (class_id='" . $val['departmentId'] . "' and class_number ='" . $val['courseNo'] . "') ";
			}
			

			$query ="SELECT * FROM ".tblUserMatches." WHERE " . $LosSubQuery;
			
			$result = $this->selectSQL($query);
			
			if($dumpSQL) return $result;
			else {echo $query; return $this->getRow();}
		}

		function getMatchesByUserId($userId, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblUserMatches." WHERE user_id='$userId'";
			
			
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}		
		
	};
	$MatchObj = new match();	//	lecturer
?>