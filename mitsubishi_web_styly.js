var screen_wdt = window.innerWidth-50;

var obj=document.getElementsByClassName("fscreen");
for (var i = 0; i < obj.length; i++) {
 if (screen_wdt>1140) {
  wdt=Math.min(screen_wdt,2510);
  var offset=570-wdt/2;
  obj[i].style.width = wdt + "px";
  obj[i].style.marginLeft = offset + "px";
  obj[i].style.marginRight = offset + "px";
 } else {
  obj[i].style.width = "100%";   
  obj[i].style.marginLeft = "0px";
  obj[i].style.marginRight = "0px";
 };
};

var obj=document.getElementsByClassName("80percent");
for (var i = 0; i < obj.length; i++) {
 if (screen_wdt>1140) {
  wdt=Math.min(screen_wdt,2510)*0.8;
  var offset=570-wdt/2;
  obj[i].style.width = wdt + "px";
  obj[i].style.marginLeft = offset + "px";
  obj[i].style.marginRight = offset + "px";
 } else {
  obj[i].style.width = "100%";   
  obj[i].style.marginLeft = "0px";
  obj[i].style.marginRight = "0px";
 };
};


var obj=document.getElementsByClassName("video-pc");
for (var i = 0; i < obj.length; i++) {
 if (screen_wdt<768) {
  obj[i].style.display = "none";
 } else {
  obj[i].style.display = "block";
 };
};

var obj=document.getElementsByClassName("video-mobile");
for (var i = 0; i < obj.length; i++) {
 if (screen_wdt>=768) {
  obj[i].style.display = "none";
 } else {
  obj[i].style.display = "block";
 };
};

var obj=document.getElementsByClassName("video-pc-vid");
for (var i = 0; i < obj.length; i++) {
 if (screen_wdt<768) {
  obj[i].pause();
 } else {
  obj[i].play();
 };
};

var obj=document.getElementsByClassName("video-mobile-vid");
for (var i = 0; i < obj.length; i++) {
 if (screen_wdt>=768) {
  obj[i].pause();
 } else {
  obj[i].play();
 };
};


window.addEventListener("resize", () => {

 var screen_wdt = window.innerWidth-50;

 var obj=document.getElementsByClassName("fscreen");
 for (var i = 0; i < obj.length; i++) {
  if (screen_wdt>1140) {
   wdt=Math.min(screen_wdt,2510);
   var offset=570-wdt/2;
   obj[i].style.width = wdt + "px";
   obj[i].style.marginLeft = offset + "px";
   obj[i].style.marginRight = offset + "px";
  } else {
   obj[i].style.width = "100%";   
   obj[i].style.marginLeft = "0px";
   obj[i].style.marginRight = "0px";
  };
 };

 var obj=document.getElementsByClassName("80percent");
 for (var i = 0; i < obj.length; i++) {
  if (screen_wdt>1140) {
   wdt=Math.min(screen_wdt,2510)*0.8;
   var offset=570-wdt/2;
   obj[i].style.width = wdt + "px";
   obj[i].style.marginLeft = offset + "px";
   obj[i].style.marginRight = offset + "px";
   } else {
    obj[i].style.width = "100%";   
    obj[i].style.marginLeft = "0px";
    obj[i].style.marginRight = "0px";
  };
 };

 var obj=document.getElementsByClassName("video-pc");
 for (var i = 0; i < obj.length; i++) {
  if (screen_wdt<768) {
   obj[i].style.display = "none";
  } else {
   obj[i].style.display = "block";
  };
 };

 var obj=document.getElementsByClassName("video-mobile");
 for (var i = 0; i < obj.length; i++) {
  if (screen_wdt>=768) {
   obj[i].style.display = "none";
  } else {
   obj[i].style.display = "block";
  };
 };

 var obj=document.getElementsByClassName("video-pc-vid");
 for (var i = 0; i < obj.length; i++) {
  if (screen_wdt<768) {
   obj[i].pause();
  } else {
   obj[i].play();
  };
 };

 var obj=document.getElementsByClassName("video-mobile-vid");
 for (var i = 0; i < obj.length; i++) {
  if (screen_wdt>=768) {
   obj[i].pause();
  } else {
   obj[i].play();
  };
 };

});


function activateTab1(pageId) {
 
 for (var j = 1; j <= 2; j++) {
  var tabCtrl = document.getElementById('tabs1-'.concat(j));
  var pageToActivate = document.getElementById(pageId.concat('-',j));
  for (var i = 0; i < tabCtrl.childNodes.length; i++) {
   var node = tabCtrl.childNodes[i];
   if (node.nodeType == 1) { /* Element */
    node.style.display = (node == pageToActivate) ? 'block' : 'none';
   };
  };
 };
};

function activateTab2(pageId) {
 for (var j = 1; j <= 2; j++) {
  var tabCtrl = document.getElementById('tabs2-'.concat(j));
  var pageToActivate = document.getElementById(pageId.concat('-',j));
  for (var i = 0; i < tabCtrl.childNodes.length; i++) {
   var node = tabCtrl.childNodes[i];
   if (node.nodeType == 1) { /* Element */
    node.style.display = (node == pageToActivate) ? 'block' : 'none';
   };
  };
 };

};

function activateTab3(pageId) {
 for (var j = 1; j <= 2; j++) {
  var tabCtrl = document.getElementById('tabs3-'.concat(j));
  var pageToActivate = document.getElementById(pageId.concat('-',j));
  for (var i = 0; i < tabCtrl.childNodes.length; i++) {
   var node = tabCtrl.childNodes[i];
   if (node.nodeType == 1) { /* Element */
    node.style.display = (node == pageToActivate) ? 'block' : 'none';
   };
  };
 };

};