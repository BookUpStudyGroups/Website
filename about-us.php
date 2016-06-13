<?php
require_once('admin/includes/configurations.php');
$body_id = 'homebody';
require_once('logincheck.php');
require_once('header.php');
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="viewport" content="width=device-width">
<meta name="author" content="BookUp">
<meta name="keywords" content="BookUp">
<meta name="description" content="BookUp">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="format-detection" content="telephone=no">
<title>BookUp</title>
<link href="css/bootstrap.css" rel="stylesheet">
<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><link href="style/ie8.css" rel="stylesheet"><![endif]-->
<link href="css/style.css" rel="stylesheet">
<link href="css/scroll.css" rel="stylesheet">
<link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,400italic,600,700' rel='stylesheet' type='text/css'>
</head>
<body>
<div id="wrap" class="bookup">
  <header id="header" class="home">
    <div class="container">
     
    </div>
  </header>
  <div class="slider_section">
  <div class="logo-home"><a href="#"> <img src="images/logo.png" alt="Bookup" title="Bookup"></a> </div>
    <div class="container">
     
      <div class="top_four_icons">
      	<div class="row">
        	<div id="spacer"></div>
        </div>
        <div class="row">
          <div class="col-md-3 col-sm-3"> <a href="#section1"><img alt="Request a Study Buddy" title="Request a Study Buddy" src="images/request_s_b.png" ></a> </div>
          <div class="col-md-3 col-sm-3"> <a href="#section1"><img alt="Make a New Friend" title="Make a New Friend" src="images/make_n_f.png" ></a> </div>
          <div class="col-md-3 col-sm-3"> <a href="#section2"><img alt="Find a Study Spot" title="Find a Study Spot" src="images/find_s_s.png" ></a> </div>
          <div class="col-md-3 col-sm-3"> <a href="#section2"><img alt="Request a Tutor" title="Request a Tutor" src="images/request_t.png" ></a> </div>
          
        </div>
      </div>
      <div class="start_studying"> <a href="login.php">Start Studying </a> </div>
      <div class="scroll_button"> <a href="#section1" id="topbottom">Connect inside and outside the classroom<span></span></a> </div>
    </div>
  </div>
  <section id="section1" class="section">
    <div class="container">
      <div class="row">
        <div class="column column-1">
          <div class="col-md-8 col-sm-8">
            <div class="content">
              <h1>Request a Study Buddy</h1>
              <p>Tackling coursework alone can be tough. Get matched with a classmate to even the odds. Find a study buddy today.</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="icon-image align-right"><img src="images/request_s_b.png" alt=""></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column column-2">
          <div class="col-md-4 col-sm-4">
            <div class="icon-image align-left"><img src="images/make_n_f.png" alt=""></div>
          </div>
          <div class="col-md-8 col-sm-8">
            <div class="content">
              <h1>Make a New Friend</h1>
              <p></p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="start_studying"> <a href="login.php">Start Studying </a> </div>
      <div class="scroll_button scroll_button_black"> <a href="#section2" id="topbottom">Easy access to academic resources <span></span></a> </div>
    </div>
  </section>
  <section id="section2" class="section">
    <div class="container">
      <div class="row">
        <div class="column column-1">
          <div class="col-md-8 col-sm-8">
            <div class="content">
              <h1>Find a Study Spot</h1>
              <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making ittrch for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years.</p>
            </div>
          </div>
          <div class="col-md-4 col-sm-4">
            <div class="icon-image align-right"><img src="images/find_s_s.png" alt=""></div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column column-2">
          <div class="col-md-4 col-sm-4">
            <div class="icon-image align-left"><img src="images/request_t.png" alt=""></div>
          </div>
          <div class="col-md-8 col-sm-8">
            <div class="content">
              <h1>Request a Tutor</h1>
              <p>Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making ittrch for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years.</p>
            </div>
          </div>
        </div>
      </div>
      
        <div class="start_studying greenbtn"> <a href="login.php">Start Studying </a> </div>
        <div class="scroll_button scroll_button_black"> <a href="#startstudy" id="topbottom">Start studying today <span></span></a> </div>
    </div>
  </section>
  <div class="study_img" id="startstudy">
  	<div class="container container1">
	  <div class="start_studying bottom-btn"> <a href="login.php">Start Studying </a> </div>
    </div><!--.container-->
        
  <div class="copyrite">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-6">
          <div class="social-icon"> <a href="#"><img src="images/facebook.png" alt="Facebook"></a> <a href="#"><img src="images/googleplus.png" alt="Google Plus"></a> <a href="#"><img src="images/twitter.png" alt="Twitter"></a> <a href="#"><img src="images/rss.png" alt="RSS"></a> </div>
        </div>
        <div class="col-md-6 col-sm-6">
          <div class="text">&copy; 2015 BOOKUP. ALL RIGHTS RESERVED.</div>
        </div>
      </div>
    </div>
  </div><!--.copyrite-->
  </div><!--#startstudy-->
</div>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="js/bootstrap.js"></script>

<script>
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  
  $(window).on('load resize', function(){
	  var winHeight = $(window).height();
	  var headerHeight = $("header#header").height() + 170;//20 for padding

    if($(window).width() < 768){
      headerHeight = $(".slider_section .logo-home").height() + 40;//20 for padding
    }
	  //set slider section's min-height
	  $(".slider_section .container").css('height', (winHeight - headerHeight) + 'px');
	  
	  $(".slider_section #spacer").height( (winHeight-headerHeight ) * 0.5 );
  });//window load or resize
  
  
});
</script>
</body>
</html>
