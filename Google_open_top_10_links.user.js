// ==UserScript==
// @name        Google top 10
// @namespace   mhtsos
// @version     1.1
// @include     http*www.google.*/search?*
// @downloadURL https://github.com/JimTortex/Google_open_top_10_links/raw/master/Google_open_top_10_links.user.js
// @grant       none
// ==/UserScript==

function openTabs(number_of_tabs){

	var links = document.getElementsByClassName("g");

	for (var i = 0; i < number_of_tabs; i++) {//links.length
		window.open(links[i].getElementsByTagName("a")[0].href);
	};

}

var img = document.createElement("img");
img.src = "https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/preferences-system-windows-64.png"


var div = document.createElement("div");//create image link and set position
div.style = "display: inline-block;position:absolute;top:5em;left:100%;zIndex:99999;";

div.setAttribute("class", "hdtb-mitem hdtb-imb");
div.appendChild(img);

var input = document.createElement("input");
input.id = "not";
input.setAttribute("type", "number");
input.setAttribute("class", "hdtb-mitem hdtb-imb");
input.style = "width: 4%;display: inline-block;position:absolute;top:166%;left:110%;zIndex:99999;";

document.getElementById("tophf").appendChild(div);
document.getElementById("tophf").appendChild(input);

document.getElementById('not').value = 5;

div.onclick = function(){
	not = document.getElementById('not').value;
	openTabs(not);
};
