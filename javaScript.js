/* functions 
Let's think about what kind of functions I will need:
1. onclick take to specific page
2. refresh "there are 5 jobs" how often? 30seconds
 */



function getToast() {
    // Get the toast DIV
    var x = document.getElementById("toast");
  
    // this adds the "show" class to DIV
    x.className = "show";
  
    // After 10 seconds, this removes the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 10000);
  }