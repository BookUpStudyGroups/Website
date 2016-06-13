<?php
	class group extends connectionMySQL 
	{
		var $recordSet, $groupID, $fname, $mname, $lname, $email, $rp_hash, $password, $profile_pic, $gender, $class_year, $term, $active, $created;
		
		/******************* Modify From Table*********************/
		
		function insertGroup($dumpSQL=true)
		{
			$query 	= " INSERT into ".tblUserGroups." set "
					. " name				= '$this->ag_groupname', "
					. " topic_name			= '$this->ag_topicname', "
					. " class_id  			= '$this->ag_class', "
					. " user_id  			= '$this->user_id', "
					. " on_date  			= '$this->ag_date', "
					. " building  			= '$this->ag_building', "
					. " room  				= '$this->ag_room', "
					. " location  			= '$this->ag_location', "
					. " location_latlng  	= '$this->ag_location_latlng', "
					. " start_time  		= '$this->ag_start_time', "
					. " end_time			= '$this->ag_end_time', "
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
					. " name				= '$this->ag_groupname', "
					. " topic_name			= '$this->ag_topicname', "
					. " class_id  			= '$this->ag_class', "
					. " on_date  			= '$this->ag_date', "
					. " building  			= '$this->ag_building', "
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

		function getGroupByEmail($emailAddress, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblUserGroups." WHERE email='$emailAddress'";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}
		
		function getGroupByGNTNCN($groupName, $topicName, $classID, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblUserGroups." WHERE name='$groupName' AND topic_name='$topicName' AND class_id='$classID'";
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

		function getGroupByHash($hash, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblUserGroups." WHERE rp_hash='$hash'";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}

		function updateGroupHash($groupId, $hashVal, $dumpSQL=true)
		{
			$query 	= "UPDATE ".tblUserGroups." set "
					. " rp_hash		= '$hashVal' "
					. " WHERE id 	= '$groupId' ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
		}


		function updateGroupPassword($password, $hashVal, $dumpSQL=true)
		{
			$query 	= "UPDATE ".tblUserGroups." set "
					. " password		= '" . md5($password) . "' "
					. " WHERE rp_hash 	= '$hashVal' ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
		}


		function getGroupByEmailPassword($emailAddress, $password, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblUserGroups." WHERE email='$emailAddress' and password='" . md5($password) . "'";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
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