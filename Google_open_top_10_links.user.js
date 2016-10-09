// ==UserScript==
// @name        Google top 10
// @namespace   mhtsos
// @version     1
// @include     http*www.google.*/search?*
// @downloadURL https://github.com/JimTortex/Google_open_top_10_links/raw/master/Google_open_top_10_links.user.js
// @grant       none
// ==/UserScript==

function openTabs(){

	var links = document.getElementsByClassName("g");

	for (var i = 0; i < links.length; i++) {
		window.open(links[i].getElementsByTagName("a")[0].href);
	};

}


var link = document.createElement("a");//create image link and set position
link.href = "#";
link.style = "position:absolute;top:5em;left:100%;zIndex:99999;";
var img = document.createElement("img");
img.src = "https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/preferences-system-windows-64.png"
link.appendChild(img);
document.getElementById("tophf").appendChild(link);

link.onclick = function(){
	openTabs();
};
