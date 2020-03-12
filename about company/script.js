function readMore1(){
var empty = document.getElementById("empty");
 var more_first = document.getElementById("more_first");
  var btn1 = document.getElementById("btn1");
      if (empty.style.display === "none"){
          empty.style.display = "inline";
          btn1.innerHTML = "Read more";
          more_first.style.display = "none";
      } 
      else{
        empty.style.display ="none";
        btn1.innerHTML = "Less";
        more_first.style.display = "inline"; 
    }
}

function readMore2(){
var empty = document.getElementById("empty");
 var more_second = document.getElementById("more_second");
  var btn2 = document.getElementById("btn2");
      if (empty.style.display === "none"){
          empty.style.display = "inline";
          btn2.innerHTML = "Read more";
          more_second.style.display = "none";
      }
      else{
        empty.style.display ="none";
        btn2.innerHTML = "Less";
        more_second.style.display = "inline"; 
    }
}

function readMore3(){
var empty = document.getElementById("empty");
 var more_third = document.getElementById("more_third");
  var btn3 = document.getElementById("btn3");
      if (empty.style.display === "none"){
          empty.style.display = "inline";
          btn3.innerHTML = "Read more";
          more_third.style.display = "none";
      }
      else{
        empty.style.display ="none";
        btn3.innerHTML = "Less";
        more_third.style.display = "inline"; 
    }
}
