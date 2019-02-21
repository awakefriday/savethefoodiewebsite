// Play video function
function PlayVid(vidId) {

    var $vid = $(vidId)[0]; // Get the HTML DOM instead of jQuery
    $vid.play();
  
  }
  
  // Stop all playing videos function
  function StopAllVid(vidClass) {
  
    var $vid = document.getElementsByClassName(vidClass); // Get the HTML DOM instead of jQuery
  
    for(var i = 0; i <  $vid.length; i++) { // Stop all video from the .ar-video class
      $vid[i].pause();
      $vid[i].currentTime = 0; // Go back to 0 second.
    }
  }