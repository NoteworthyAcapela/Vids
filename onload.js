function onload(){
  var width = window.innerWidth;
  var height = window.innerHeight;
  width = window.innerWidth;
  height = window.innerHeight;
  width = width/2;
  width = width - (width/20);
  height = width * (9/16);
  width = width.toString();
  fullHeight = height.toString();
  width += "px";
  fullHeight += "px";
  document.getElementsByClassName("right")[0].style.right = 0;
  var x = document.getElementsByClassName("widthed");
  var i;
  for (i = 0; i < x.length; i++){
    x[i].style.width = width;
    x[i].style.height = fullHeight;
  }
  if (height < 200){
    height = 200;
  }
  height = height.toString();
  height += "px";
  var y = document.getElementsByClassName("hello");
  for (i = 0; i < y.length; i++){
    y[i].style.width = width;
    y[i].style.height = height;
  }
  var z = document.getElementsByClassName("vid");
  for (i = 0; i < z.length; i++){
    z[i].style.height = height;
  }
}
