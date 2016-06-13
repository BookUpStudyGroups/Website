<?php
	class manageClass extends connectionMySQL 
	{
		var $recordSet, $classID, $name, $active, $additionalInformation, $createDate, $notShow;
		
		/******************* Modify From Table*********************/
		function insertManageClass($dumpSQL=true)
		{
			$query 	= " INSERT into ".tblManageClass." set "
					. " name				= '$this->name', "
					. " additionalInformation= '$this->additionalInformation', "
					. " active				= '$this->active', "
					. " createDate			= NOW() ";
			
			if($dumpSQL) return $this->insertSQL($query);
			else echo $query;
		}
		
		function updateManageClass($classID, $dumpSQL=true)
		{
			$query 	= "UPDATE ".tblManageClass." set "
					. " name				= '$this->name', "
					. " additionalInformation= '$this->additionalInformation', "
					. " active				= '$this->active' "
					. " WHERE classID 		= '$classID' ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
		}
				
		function updateManageClassByManageClassID($classID, $dumpSQL=true)
		{
			$query 	= "UPDATE ".tblManageClass." set "
					. " active		= '$this->active', "
					. " WHERE classID = '$classID' ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;
		}

		function deleteManageClassByManageClassID($classID, $dumpSQL=true)
		{
			$query ="DELETE FROM ".tblManageClass." WHERE classID = '$classID'";
	
			if($dumpSQL) return $this->selectSQL($query);
			else echo $query;
		}		
			
		/******************* Get From Table*********************/
		function getAllClassByUserAndDepartment($userID, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblUserCourse." as uc LEFT JOIN ".tblManageClass." as mc ON uc.department_id=mc.classID WHERE uc.user_id='".$userID."'";
			
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
			
		}
		function getManageClassByManageClassID($classID, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblManageClass." WHERE classID='$classID'";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}
		
		function getManageClassNameByManageClassID($classID, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblManageClass." WHERE classID='$classID'";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}
		
		function getManageClassIDByName($manageClassName, $dumpSQL=true)
		{
			$query ="SELECT * FROM ".tblManageClass." WHERE name='$manageClassName'";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}
		
		function getAllManageClass($searchVal, $dumpSQL=true)
		{
			$extraSql = '';
			if($searchVal != ''){
				$extraSql = " AND ( name LIKE '%".$searchVal."%' OR additionalInformation LIKE '%".$searchVal."%')";
			}
			$query ="SELECT * FROM ".tblManageClass." WHERE notShow = '0' ".$extraSql." ORDER BY classID";
			
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}

		function getAllActiveClass($searchVal, $dumpSQL=true)
		{
			$extraSql = '';
			if($searchVal != ''){
				$extraSql = " AND ( name LIKE '%".$searchVal."%' OR additionalInformation LIKE '%".$searchVal."%')";
			}
			$query ="SELECT * FROM ".tblManageClass." WHERE notShow = '0' and active ='1' ".$extraSql." ORDER BY classID";
			
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}
		
		function getLimitManageClass($searchVal, $limitStart, $limit, $orderBy, $dumpSQL=true)
		{
			$extraSql = '';
			if($searchVal != ''){
				$extraSql = " AND ( name LIKE '%".$searchVal."%' OR additionalInformation LIKE '%".$searchVal."%')";
			}
			$query 	= " SELECT * FROM ". tblManageClass." WHERE 1 AND notShow = '0' ".$extraSql." ORDER BY $orderBy LIMIT $limitStart, $limit";
					
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}	
	};
	$ManageClassObj = new manageClass();	//	manageClass
?>