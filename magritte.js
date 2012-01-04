/*	magritte 2012
 *	author: Mariz Melo
 *	license: MIT
 */
(function($){  
	
	$.fn.magritte = function(mgname, mgsrc, mgtype){
		
		var lazyJS = function(scriptSRC){
			
		}//lazyJS()
		var lazyCSS = function(scriptSRC){
			
		}//lazyCSS()
		var lazyPLUG = function(pluginNAME, pluginSRC){
			
		}//lazyPLUG
		
	}//fn.magritte()
	
})(jQuery); 
 
 
//LAZY LOAD JAVASCRIPT SCRIPT FILES
function lazyJS(pluginNAME, pluginSRC, CACHE){
		
	var pluginPATH;	//hold the path for the plugin/script

	pluginSRC? pluginPATH = pluginSRC.substr(0,(pluginSRC.length)-3) : pluginPATH = "./lib/js/"+pluginNAME;	//builds correct path for the plugin/script file
	
	CACHE?1:0;	//if the script should be cached or not

	//verifies if the plugin do not exist, if true loads the plugin
	if(!jQuery().pluginNAME){
		var	insertScript = document.createElement('script');
  		insertScript.setAttribute('src',pluginPATH+".js");	//set the path (defined above) for the script
  		insertScript.setAttribute('type','text/javascript');
  		document.getElementsByTagName('head')[0].appendChild(insertScript);
	}//end:if
	
}//end:lazyJS()
 