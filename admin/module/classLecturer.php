<?php
	class lecturer extends connectionMySQL 
	{
		var $recordSet, $lecturerID, $firstName,$lastName, $additionalInformation, $createDate, $notShow, $active;
		
		/******************* Modify From Table*********************/
		function insertLecturer($dumpSQL=true)
		{
			$query 	= " INSERT into ".tblLecturer." set "
					. " firstName				= '$this->firstName', "
					. " lastName				= '$this->lastName', "
					. " additionalInformation= '$this->additionalInformation', "
					. " active				= '$this->active', "
					. " createDate			= NOW() ";
			
			if($dumpSQL) return $this->insertSQL($query);
			else echo $query;
		}
		
		function updateLecturer($lecturerID, $dumpSQL=true)
		{
			$query 	= "UPDATE ".tblLecturer." set "
					. " firstName				= '$this->firstName', "
					. " lastName				= '$this->lastName', "
					. " additionalInformation= '$this->additionalInformation', "
					. " active				= '$this->active' "
					. " WHERE lecturerID 		= '$lecturerID' ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
		}
				
		function updateLecturerByLecturerID($lecturerID, $dumpSQL=true)
		{
			$query 	= "UPDATE ".tblLecturer." set "
					. " active		= '$this->active', "
					. " WHERE lecturerID = '$lecturerID' ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
		}

		function deleteLecturerByLecturerID($lecturerID, $dumpSQL=true)
		{
			$query ="DELETE FROM ".tblLecturer." WHERE lecturerID = '$lecturerID'";
	
			if($dumpSQL) return $this->selectSQL($query);
			else echo $query;
		}		
			
		/******************* Get From Table*********************/
		
		function getLecturerByLecturerID($lecturerID, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblLecturer." WHERE lecturerID='$lecturerID'";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}
		
		function getLecturerNameByLecturerID($lecturerID, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblLecturer." WHERE lecturerID='$lecturerID'";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}
		
		
		function getAllLecturer($searchVal, $dumpSQL=true)
		{
			$extraSql = '';
			if($searchVal != ''){
				$extraSql = " AND ( name LIKE '%".$searchVal."%' OR additionalInformation LIKE '%".$searchVal."%')";
			}
			$query ="SELECT * FROM ".tblLecturer." WHERE notShow = '0' ".$extraSql." ORDER BY lecturerID";
			
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}

		function getAllActiveLecturer($searchVal, $dumpSQL=true)
		{
			$extraSql = '';
			if($searchVal != ''){
				$extraSql = " AND ( name LIKE '%".$searchVal."%' OR additionalInformation LIKE '%".$searchVal."%')";
			}
			$query ="SELECT * FROM ".tblLecturer." WHERE notShow = '0' and active='1' ".$extraSql." ORDER BY lastName";
			
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}
		
		function getLimitLecturer($searchVal, $limitStart, $limit, $orderBy, $dumpSQL=true)
		{
			$extraSql = '';
			if($searchVal != ''){
				$extraSql = " AND ( name LIKE '%".$searchVal."%' OR additionalInformation LIKE '%".$searchVal."%')";
			}
			$query 	= " SELECT * FROM ". tblLecturer." WHERE 1 AND notShow = '0' ".$extraSql." ORDER BY $orderBy LIMIT $limitStart, $limit";
					
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}	
	};
	$LecturerObj = new lecturer();	//	lecturer
?>