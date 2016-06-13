<?php
	class configuration extends connectionMySQL 
	{
		var $recordSet, $configureID, $confName, $confKey, $confValue, $changeAble;

		function insertConfigure($dumpSQL=true)
		{
			$query 	= " INSERT INTO ".tblConfigure." set "
					. " confName 	= '$this->confName', "
					. " confKey 	= '$this->confKey', "
					. " confValue 	= '$this->confValue' ";
					
			if($dumpSQL) return $this->insertSQL($query);
			else echo $query;					
		}

		function updateConfigure($configureID, $dumpSQL=true)
		{
			$query 	= " UPDATE ".tblConfigure." set "
					. " confName 	= '$this->confName', "
					. " confValue 	= '$this->confValue' "
					. " WHERE configureID = '$configureID' ";
					
			if($dumpSQL) return $this->updateSQL($query);
			else echo $query;					
		}

		function deleteConfigure($configureID, $dumpSQL=true)
		{
			$query ="DELETE FROM ".tblConfigure." WHERE configureID = '$configureID'";
	
			if($dumpSQL) return $this->selectSQL($query);
			else echo $query;
		}		

		function getConfValueByConfKey($confKey, $dumpSQL=true)
		{
			$query 	= " SELECT * FROM ".tblConfigure." WHERE confKey = '$confKey' ";
			$this->selectSQL($query);
			
			if(!$dumpSQL) {echo $query;}				
			
			if($this->getNumRow() == 1)
			{					
				$Obj = $this->getRow();
				return $Obj['confValue'];
			}
			else 
				return false;
		}
	
		function getConfigureByConfigureID($configureID, $dumpSQL=true)
		{
			$query 	= " SELECT * FROM ".tblConfigure." WHERE configureID = '$configureID' ";
			$this->selectSQL($query);
			
			if($dumpSQL) return $this->getRow();
			else {echo $query; return $this->getRow();}
		}
	
		function getChangeableConfigure($dumpSQL=true)
		{
			$query 	= " SELECT * FROM ".tblConfigure." WHERE changeAble = '1' ";
					
			if(!$dumpSQL) return $this->selectSQL($query);
			else echo $query;
		}
		
		function getAllConfigure($changeAble = 0, $dumpSQL=true)
		{
			$query 	= " SELECT * FROM " . tblConfigure." WHERE changeAble = '$changeAble' ORDER BY configureID ";
					
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}
		
		function getLimitConfigure($limitStart, $limit, $changeAble = 0, $dumpSQL=true)
		{
			$query 	= " SELECT * FROM " . tblConfigure." WHERE changeAble = '$changeAble' ORDER BY configureID LIMIT $limitStart, $limit";
					
			if($dumpSQL) return $this->selectSQL($query);
			else {echo $query; return $this->selectSQL($query);}
		}
	};
	$ConfigureObj = new configuration();
?>