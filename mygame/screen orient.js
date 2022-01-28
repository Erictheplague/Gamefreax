window.onload = function initialLoad(){
      updateOrientation();
   }
   
   function updateOrientation(){
      var contentType = “display_”;
      switch(window.orientation){
         case 0:
         contentType += “portrait”;
         break;
         case -90:
         contentType += “cw”;
         break;
         case 90:
         contentType += “ccw”;
         break;
         case 180:
         contentType += “upsideDown”;
		          break;
      }
   document.getElementById(“page_background”).setAttribute(“class”, contentType);
   }