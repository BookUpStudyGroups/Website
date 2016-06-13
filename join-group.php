<?php
require_once('admin/includes/configurations.php');
$body_id = 'joingroup';
require_once('logincheck.php');
require_once('admin/module/classStudent.php');
$StudentId = $StudentObj->joinStudentGroup($_SESSION['student_user']['id'], $_GET['group_id']);
exit("<script>window.location='profile.php?mes=joinGroup';</script>");