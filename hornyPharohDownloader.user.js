// ==UserScript==
// @name          Horny Pharoh Video downloader
// @namespace     Horny Pharoh Video downloader
// @namespace     hornyPharohDownloader.js
// @description	  Allows the download of videos from hornypharoh.com
// @author        thingywhat
// @include       http://www.hornypharaoh.com/videos/*/*
// @version       1
// @grant         none
// ==/UserScript==

$("#video_option td")[2].appendChild($('<button />').click(function(){
  location.replace(JSON.parse($('[name=flashvars]').val().split("config=")[1]).clip.url);
}).text("Download!")[0]);
