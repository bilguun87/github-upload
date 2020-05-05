;(function (root, factory) {

	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
    	module.exports = factory();
	} else {
	    root.YourModule = factory();
	    //console.log(root);
	}

}(this, function () {
	var myModule = {};
	var url = "";
	var actualFunc = function(){
		alert('Working')
	}
	myModule.init = function(url){
		console.log("init function working");
		console.log(url);
		if (url == '/')
			document.querySelector("[my-dyn-fun1]").addEventListener('click', actualFunc, false);
	}
	return myModule;
}));

window.YourModule.init(window.location.pathname);
//console.log('pathname: ' + window.location.pathname);