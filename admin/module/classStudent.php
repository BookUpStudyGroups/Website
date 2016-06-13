<?php
	class student extends connectionMySQL 
	{
		var $recordSet, $studentID, $fname, $mname, $lname, $email, $rp_hash, $password, $profile_pic, $gender, $class_year, $term, $active, $created;
		
		/******************* Modify From Table*********************/
		function insertStudent($dumpSQL=true)
		{
			$query 	= " INSERT into ".tblUser." set "
					. " fname				= '$this->fname', "
					. " mname				= '$this->mname', "
					. " lname  				= '$this->lname', "
					. " email  				= '$this->email', "
					. " password  			= '" . md5($this->password) . "', "
					. " profile_pic  		= '$this->profile_pic', "
					. " gender  			= '$this->gender', "
					. " class_year  		= '$this->class_year', "
					. " term  				= '$this->term', "
					. " class_name_custom	= '$this->class_name_custom', "
					. " active				= '$this->active', "
. " matched = 0,"
					. " created				= NOW() ";
			
			if($dumpSQL) return $this->insertSQL($query);
			else echo $query;
		}
		
		

		function updateStudent($studentID, $dumpSQL=true)
		{
			$query 	= "UPDATE ".tblUser." set "
					. " fname				= '$this->fname', "
					. " mname				= '$this->mname', "
					. " lname  				= '$this->lname', "
					. " email  				= '$this->email', "       
					. " profile_pic  		= '$this->profile_pic', "
					. " gender  			= '$this->gender', "
					. " class_year  		= '$this->class_year', "
					. " term  				= '$this->term', "
					. " class_name_custom	= '$this->class_name_custom' "
					. " WHERE id 			= '$studentID' ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
		}
function joinStudentMatch($studentID, $matchID, $dumpSQL=true)
		{
			$query 	= " INSERT into ".tblJoinMatch." set "
					. " user_id				= '$studentID', "
					. " match_id			= '$matchID', "
					. " created				= NOW() ";
			
			if($dumpSQL) return $this->insertSQL($query);
			else echo $query;
		}
function addStudentMatchCount($matchID, $dumpSQL=true)
{
			$query 	= "UPDATE ".tblUserMatches." set "
					. " num_members			= num_members+1 ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
}
function subtractStudentMatchCount($matchID, $dumpSQL=true)
{
			$query 	= "UPDATE ".tblUserMatches." set "
					. " num_members			= num_members-1 ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
}
function matchStudent($matchID, $dumpSQL=true)
		{
			$query 	= "Select tu.* from " . tblJoinMatch . " as tg " . 
					  " left join " . tblUser . " as tu on tu.id = tg.user_id " . 
					  " Where tg.match_id='" . $matchID. "'";
			
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}
function isMatchJoint($studentID, $groupID, $dumpSQL=true)
		{
			$query 	= "Select * from " . tblJoinMatch . 
					  " Where match_id='" . $groupID. "' and user_id ='" . $studentID . "'";
			
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}

		function isOtherStudentJointMatch($studentID, $groupID, $dumpSQL=true)
		{
			$query 	= "Select * from " . tblJoinMatch . 
					  " Where match_id='" . $groupID. "' and user_id !='" . $studentID . "'";
			
			
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}

		function jointMatchDetails($studentID, $dumpSQL=true)
		{
			$query 	= "Select * from " . tblUserMatches . " where id in ( Select match_id from " . tblJoinMatch . 
					  " Where user_id ='" . $studentID . "') and user_id !='$studentID'";
			
			
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}
		function joinStudentGroup($studentID, $groupID, $dumpSQL=true)
		{
			$query 	= " INSERT into ".tblJoinGroup." set "
					. " user_id				= '$studentID', "
					. " group_id			= '$groupID', "
					. " created				= NOW() ";
			
			if($dumpSQL) return $this->insertSQL($query);
			else echo $query;
		}
		function addStudentGroupCount($matchID, $dumpSQL=true)
{
			$query 	= "UPDATE ".tblUserGroups." set "
					. " num_members			= num_members+1 ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
}
		function subtractStudentGroupCount($matchID, $dumpSQL=true)
{
			$query 	= "UPDATE ".tblUserGroups." set "
					. " num_members			= num_members-1 ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
}
		function groupStudent($groupID, $dumpSQL=true)
		{
			$query 	= "Select tu.* from " . tblJoinGroup . " as tg " . 
					  " left join " . tblUser . " as tu on tu.id = tg.user_id " . 
					  " Where tg.group_id='" . $groupID. "'";
			
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}

		function isGroupJoint($studentID, $groupID, $dumpSQL=true)
		{
			$query 	= "Select * from " . tblJoinGroup . 
					  " Where group_id='" . $groupID. "' and user_id ='" . $studentID . "'";
			
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}

		function isOtherStudentJointGroup($studentID, $groupID, $dumpSQL=true)
		{
			$query 	= "Select * from " . tblJoinGroup . 
					  " Where group_id='" . $groupID. "' and user_id !='" . $studentID . "'";
			
			
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}

		function jointGroupDetails($studentID, $dumpSQL=true)
		{
			$query 	= "Select * from " . tblUserGroups . " where id in ( Select group_id from " . tblJoinGroup . 
					  " Where user_id ='" . $studentID . "') and user_id !='$studentID'";
			
			
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}

		function leftStudentGroup($studentID, $groupID, $dumpSQL=true)
		{
			$query 	= "delete from " . tblJoinGroup . 
					  " Where group_id='" . $groupID. "' and user_id ='" . $studentID . "'";
			
			if($dumpSQL) return $this->selectSQL($query);
			else echo $query;
		}

		function updateStudentNormal($studentID, $dumpSQL=true)
		{
			$query 	= "UPDATE ".tblUser." set "
					. " profile_pic  		= '$this->profile_pic', "
					. " term  				= '$this->term', "
					. " class_name_custom	= '$this->class_name_custom' "
					. " WHERE id 			= '$studentID' ";
			
						
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
		}


		function getStudentByEmail($emailAddress, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblUser." WHERE email='$emailAddress'";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}

		function getStudentById($studentId, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblUser." WHERE id='$studentId'";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}

		function getStudentByHash($hash, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblUser." WHERE rp_hash='$hash'";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}

		function updateStudentHash($studentId, $hashVal, $dumpSQL=true)
		{
			$query 	= "UPDATE ".tblUser." set "
					. " rp_hash		= '$hashVal' "
					. " WHERE id 	= '$studentId' ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
		}


		function updateStudentPassword($password, $hashVal, $dumpSQL=true)
		{
			$query 	= "UPDATE ".tblUser." set "
					. " password		= '" . md5($password) . "' "
					. " WHERE rp_hash 	= '$hashVal' ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
		}


		function getStudentByEmailPassword($emailAddress, $password, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblUser." WHERE email='$emailAddress' and password='" . md5($password) . "'";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}
		
		function getStudentByStudendIDPassword($studentID, $password, $dumpSQL=true)
		{
			$query ="SELECT id FROM ".tblUser." WHERE id='$studentID' and password='" . md5($password) . "'";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}
		
		function updateStudentUsernamePassword($studentID, $dumpSQL=true)
		{
			$query 	= " UPDATE ".tblUser." set "
					. " password = '".md5($this->new_password)."' "
					. " WHERE id = '$studentID' ";
	
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
		}
	};
	$StudentObj = new student();	//	lecturer
?>