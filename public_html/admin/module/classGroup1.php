<?php
	class group extends connectionMySQL 
	{
		var $recordSet, $groupID, $fname, $mname, $lname, $email, $rp_hash, $password, $profile_pic, $gender, $class_year, $term, $active, $created;
		
		/******************* Modify From Table*********************/
		
		function insertGroup($dumpSQL=true)
		{
			$query 	= " INSERT into ".tblUserGroups." set "
					. " topic_name			= '$this->ag_topicname', "
					. " class_id  			= '$this->ag_class', "
					. " user_id  			= '$this->user_id', "
					. " on_date  			= '$this->ag_date', "
					. " class_number  		= '$this->ag_class_number', "
					. " room  				= '$this->ag_room', "
					. " location  			= '$this->ag_location', "
					. " location_latlng  	= '$this->ag_location_latlng', "
					. " start_time  		= '$this->ag_start_time', "
					. " end_time			= '$this->ag_end_time', "
. " num_members			= 1, "
					. " created				= NOW() ";
			if($dumpSQL) return $this->insertSQL($query);
			else echo $query;
		}
		function updateGroupLeader($groupID,$newLeader, $dumpSQL=true)
		{
			$query 	= "UPDATE ".tblUserGroups." set "
					. " user_id			= '$newLeader', "
					. " last_updated		= NOW() "
					. " WHERE id 			= '$groupID' ";
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
		}
		function updateGroup($groupID, $dumpSQL=true)
		{
			$query 	= "UPDATE ".tblUserGroups." set "
					. " topic_name			= '$this->ag_topicname', "
					. " class_id  			= '$this->ag_class', "
					. " class_number  		= '$this->ag_class_number', "
					. " on_date  			= '$this->ag_date', "
					. " room  				= '$this->ag_room', "
					. " location  			= '$this->ag_location', "
					. " location_latlng  	= '$this->ag_location_latlng', "
					. " start_time  		= '$this->ag_start_time', "
					. " end_time			= '$this->ag_end_time', "
					. " last_updated		= NOW() "
					. " WHERE id 			= '$groupID' ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
		}

		function getGroupByGNTNCN($location, $topicName, $roomno, $classID, $classNumber, $Classdate, $classStartTime,  $classEndTime, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblUserGroups." WHERE location='$location' AND topic_name='$topicName' AND class_id='$classID' AND class_number='$classNumber' AND room='$roomno' AND on_date='$Classdate' AND ((start_time > '$classStartTime' and start_time < '$classEndTime') or (end_time > '$classStartTime' or end_time < '$classEndTime'))";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}

		function getGroupByGNTNCNUpdate($groupId, $location, $topicName, $roomno, $classID, $classNumber, $Classdate, $classStartTime,  $classEndTime, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblUserGroups." WHERE id != '$groupId' and location='$location' AND topic_name='$topicName' AND class_id='$classID' AND class_number='$classNumber' AND room='$roomno' AND on_date='$Classdate' AND ((start_time > '$classStartTime' and start_time < '$classEndTime') or (end_time > '$classStartTime' or end_time < '$classEndTime'))";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}
		
		function getGroupById($groupId, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblUserGroups." WHERE id='$groupId'";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}

		function deleteGroupById($groupId, $dumpSQL=true)
		{
			
			$query 	= "delete from " . tblUserGroups . 
					  " Where id='" . $groupId. "'";
			
			$this->selectSQL($query);

			$query ="Delete FROM ".tblJoinGroup." WHERE group_id='$groupId'";
			if($dumpSQL) return $this->selectSQL($query);
			else echo $query;
			
		}

		function getAllGroupsForCurUser($user_id, $dumpSQL=true)
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
			

			$query ="SELECT * FROM ".tblUserGroups." WHERE " . $LosSubQuery;
			
			$result = $this->selectSQL($query);
			
			if($dumpSQL) return $result;
			else {echo $query; return $this->getRow();}
		}

		function getGroupsByUserId($userId, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblUserGroups." WHERE user_id='$userId'";
			
			
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}		
		
	};
	$GroupObj = new group();	//	lecturer
?>