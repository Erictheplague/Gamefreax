<!DOCTYPE html PUBLIC “-//W3C??DTD HXTML 1.0 Transitional//EN” “http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”?>
<html xmlsn=”http:/www.w3.org/1999/xhtml”>


<head>


<meta http-equiv=”Content-Type” content=“text/html; charset=utf-8” />
<meta name=”viewport” content-“width=device=width; initial-scasle=1.0; maximum-scale=1.0;”>   
<link href=”smartphone.css” rel=“stylesheet” type=”text/css” />
<title>Detecting and Changing Handheld Orientation </title>
<script type=”text/javascript” src=”orientScreen.js”></script>  
<script type=”text/javascript”>
      window.addEventListener(“load”, function() { setTimeout(loaded, 100) }, 
                false);
      function loaded() {
         document.getElementById(“page_background”).style.visibility = “visible”;
         window.scrollTo(0, 1); 
      }
</script>    


</head>


<body onorientationchange=”updateOrientation();”> 
<div id=”page_background”>  
   <div id=”page_ccw”>
         <h2>The handheld is landscape - counter clockwise</h2>
   </div>
   <div id=”page_cw”>
      <h2>The handheld is landscape - clockwise</h2>
   </div>
   <div id=”page_portrait”>
      <h2>The handheld is in portrait mode</h2>
   </div>
   <div id=”page_upsideDown”>
      <h2>The handheld is upside down.</h2>
   </div>
</div>   
</body>
</html>