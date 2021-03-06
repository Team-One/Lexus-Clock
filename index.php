<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>eTa | by Team One</title>
    <meta name="description" content="  ">       <!-- ADD A DESCRIPTION -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">


    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
    
	<meta name="apple-mobile-web-app-title" content="AddToHome">

	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	
<!-- icon links --> 
	<link rel="apple-touch-icon" href="../images/touch-icon-iphone.png">
	<link rel="apple-touch-icon" sizes="72x72" href="../images/touch-icon-ipad.png">
	<link rel="apple-touch-icon" sizes="114x114" href="../images/touch-icon-iphone4.png">
	<link rel="apple-touch-icon" sizes="144x144" href="../images/touch-icon-ipad2.png">
	
	<link rel="stylesheet" href="../../style/add2home.css">
	<script type="text/javascript" src="../../src/add2home.js" charset="utf-8"></script>
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/custom_fonts.css" />
    <script src="js/vendor/modernizr-2.6.2.min.js"></script>
    <script type="text/javascript" src="js/moment.js"></script>
	<script type="text/javascript" src="js/leaflet.js"></script>
	<script type="text/javascript" src="js/tomtom.map.js"></script>
	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
</head>


<body>

        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->




<!-- T1 ICON -->
<img class="t1-icon" src="img/t1-icon.png"/>

<!-- SLIDER CONTENT -->

<div id="cbp-fwslider" class="cbp-fwslider">
				<ul>
				
				<!-- SLIDE 1 -->
					<li class="slide one">
						<div class="time-card">
							<h2 id="lexustime" class="number" >#</h2>
							<p class="minutes">Minutes</p>					
						</div>
						<div class="secondary-block">
							<div><img src="img/lex-icon.png"/></div>
							<p class="copy">
								Estimated driving time to: 
								<br/>
								<em><strong>Lexus HQ</strong></em>
							</p>
						</div>
					</li>
				
				<!-- SLIDE 2 -->
					<li class="slide two"><div class="time-card">
							<h2 id="airporttime" class="number">12</h2>
							<p class="minutes">Minutes</p>					
						</div>
						<div class="secondary-block">
							<img src="img/plane-icon.png"/>
							<p class="copy">
								Estimated driving time to: 
								<br/>
								<em><strong>LAX</strong></em>
								</p>
						</div>
					</li>
					
				<!-- SLIDE 3 -->	
					<li class="slide three"><div class="time-card">
							<h2 id="beachtime" class="number">12</h2>
							<p class="minutes">Minutes</p>					
						</div>
						<div class="secondary-block">
							<div><img src="img/beach-icon.png"/></div>
							<p class="copy">
								Estimated driving time to: 
								<br/>
								<em><strong>The Beach</strong></em>
								</p>
						</div>
					</li>
				</ul>
			</div>
		</div>
		
		
		        
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.9.1.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
		<script src="js/jquery.cbpFWSlider.min.js"></script>
		<script>
			$( function() {
				/*
				- how to call the plugin:
				$( selector ).cbpFWSlider( [options] );
				- options:
				{
					// default transition speed (ms)
					speed : 500,
					// default transition easing
					easing : 'ease'
				}
				- destroy:
				$( selector ).cbpFWSlider( 'destroy' );
				*/

				$( '#cbp-fwslider' ).cbpFWSlider();

			} );
		</script>
       <script>
		// Here be the seconds and the Tom Tom URL request  
		$.ajax({
			url:"https://api.tomtom.com/lbs/services/route/3/33.91859,-118.39372:33.85716,-118.30965/Quickest/jsonp?includeTraffic=true&time=now&trafficModelID=-1&includeInstructions=false&key=5zbbuuejq22suvrg4fjrg3fs&jsonp=?&callback=?",
			dataType:"jsonp",
			success:function(data){
				// console.log(data); DEBUGS
  				var totalSeconds = data.route.summary.totalTimeSeconds;
  				var humanTime = Math.round(totalSeconds/60);
  				console.log(humanTime);
  				$('#lexustime')
  					.html('<p>'+humanTime+'</p>');
  					},
			
			error:function(e){
			
			}
			
		});	
		$.ajax({
			url:"https://api.tomtom.com/lbs/services/route/3/33.91859,-118.39372:33.942449,-118.407876/Quickest/jsonp?includeTraffic=true&time=now&trafficModelID=-1&includeInstructions=false&key=5zbbuuejq22suvrg4fjrg3fs&jsonp=?&callback=?",
			dataType:"jsonp",
			success:function(data){
				// console.log(data); DEBUGS
  				var totalSeconds = data.route.summary.totalTimeSeconds;
  				var humanTime = Math.round(totalSeconds/60);
  				console.log(humanTime);
  				$('#airporttime')
  					.html('<p>'+humanTime+'</p>');
  					},
			
			error:function(e){
			
			}
			
		});	
		$.ajax({
			url:"https://api.tomtom.com/lbs/services/route/3/33.91859,-118.39372:33.917347,-118.429291/Quickest/jsonp?includeTraffic=true&time=now&trafficModelID=-1&includeInstructions=false&key=5zbbuuejq22suvrg4fjrg3fs&jsonp=?&callback=?",
			dataType:"jsonp",
			success:function(data){
				// console.log(data); DEBUGS
  				var totalSeconds = data.route.summary.totalTimeSeconds;
  				var humanTime = Math.round(totalSeconds/60);
  				console.log(humanTime);
  				$('#beachtime')
  					.html('<p>'+humanTime+'</p>');
  					},
			
			error:function(e){
			
			}
			
		});	
	</script>

       
       
       
        
</body>
</html>