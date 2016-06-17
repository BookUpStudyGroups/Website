<?php
$body_id = 'contactbody';

if( isset( $_POST['submit'] ) )
{
	$name = $_POST['name'];
	$email = $_POST['email'];
	$messageCon = $_POST['message'];
	$to = "bhkim7000@gmail.com"; #Dartmouth@bookup.org
	$subject = 'Contact Info';       
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	$headers .= 'From: '.$name.'<'.$email.'>' . "\r\n";
	
	$message = '<html>
			<style>
			table td{font-family:arial; line-height:20px;font-size:14px;}
			</style>
			<body>
			<div style="margin:0 auto; padding:0px;border:1px solid #4B89AD;width:700px;">
			<table border="0" width="100%" cellpadding="0" cellspacing="0">
			<tr><td style="background:#4B89AD; padding:10px;"><img src="http://ourdemosolution.com/studybuddy/html/images/logo-inner.png"></td></tr>
			<tr><td style="padding:20px; min-height:200px;">
			<table>
			<tr>
			<td collspan="2">Hello Studdybuddy,<br><br></td>
			</tr>
			<tr>
			<td>Name: </td>
			<td>'.$name.'</td>
			</tr>
			<tr>
			<td>Email: </td>
			<td>'.$email.'</td>
			</tr>
			<tr>
			<td>Message: </td>
			<td>'.$messageCon.'</td>
			</tr>
			<tr>
			<td collspan="2"><br><br>Thanks<br>'.$name.'</td>
			</tr>
			</table>
			</td></tr>
			<tr><td style="background:#4B89AD; padding:10px; text-align:center;color:#FFF;">&copy; 2015 BOOKUP. ALL RIGHTS RESERVED.</td></tr>
			</table>
			</div>
			</body>
			</html>';
	
	$mail_sent = mail( $to, $subject, $message, $headers );
	
	if( $mail_sent )
	{
	  exit("<script>window.location='contact.php?mes=success';</script>"); 
	}
	else
	{
	  $error_msg = 'There is some problem in sending the mail.';     
	}
    	
}#submit check
?>
<?php require_once('header.php'); ?>
  <div class="white_bg padding-page">
    <div class="container">
    	<div class="contactsec">
        	<div class="row">
            	<div class="col-md-6 col-sm-6">
				  <h2>Contact Us</h2>
				  <form method="post" action="" id="contactform" onsubmit="return validateContactForm();">
				  <div class="contact-form">
					<?php
				  if( isset($error_msg) && count($error_msg) >0 ){
				?>
					<p class="error_msg" style="color: #fff; font-size: 14px;padding: 10px;"><?php echo $error_msg;?></p>
				<?php
				  }else if( $_GET['mes'] == 'success' ){
					?>
						<p class="success_msg" style="color: #fff; font-size: 14px;padding: 10px;">Email has been sent successfully.</p>
				  <?php	
						}
					?>
					<div class="form-group">
					  <div class="col-md-12 col-sm-12">
						<input type="text" placeholder="Name" name="name" id="name" value="<?php echo $_POST['name']; ?>">
					  </div>
					  <div class="col-md-12 col-sm-12">
						<input type="text" placeholder="Email Address" name="email" id="email" value="<?php echo $_POST['email']; ?>">
					  </div>
					</div>
					<div class="form-group">
					  <div class="col-md-12 col-sm-12">
						<textarea rows="" cols="" name="message"><?php echo $_POST['message']; ?></textarea>
					  </div>
					</div>
					<div class="form-group">
					  <div class="col-md-12 col-sm-12">
						<input type="submit" name="submit" value="Submit">
					  </div>
					</div>
				  </div>
				</div>
                <div class="col-md-6 col-sm-6">
                <div class="contactadd">
          <p>This product is made for Dartmouth students by Dartmouth students and we'd love your feedback. Are there any features you think would be helpful for studying, accessing campus resources, or filtering study buddies? Imagine any feature you want, even if you don't think it's possible.</p>
          <div class="address">

            <div class="col-group">
              <label>e-mail:</label>
              <span><a href="mailto:Dartmouth@BookUp.org">dartmouth@bookup.org</a></span> </div>
          </div>
          </div>
        </div>
            </div>
        </div>
    </div>
  </div>
<?php require_once('footer.php'); ?>