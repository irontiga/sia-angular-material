//Addon manager

//Node modules
//Filesystem handler
var fs = require('fs');

//Get addons

//List all addon directories
var allAddons = fs.readdirSync('./ui/app/addons');

//Make an array to store addons and their directories
var addonArray = [];

console.log(allAddons);

// Check in each of the addon directories discovered
for(var i = 0; i < allAddons.length; i++) {

	//Current addon's directory
	var addonPath = './ui/app/addons/' + allAddons[i] + '/conf.json';
	
	//Check that conf.json exists
	if(fs.existsSync(addonPath)){
		
		//Fetch and parse it
		var addonConf = JSON.parse(fs.readFileSync(addonPath, 'utf8'));
		
		//Add it to the array
		addonArray = addonArray.concat(addonConf);
	}
	else{
		//Throw error
		console.log("Not found: " + addonPath)
	}
	// Read it's config file
	/*fs.readFileSync(addonPath, {encoding: 'utf-8'} , function(err,data){
		
		
		if (err) {
			console.log('Error: ' + err);
			return;
		}

		data = JSON.parse(data);
		
		
		
		// Check each found file
		for(var cnt = 0; cnt < addon.length; cnt++) {

			//Regex code to find last 2 endings of the filename
			var regex = /(?:\.([^.]+)){2}$/;

			// Current addon's vaild files
			var validAddonsObject = {};

			//Execute the regex
			var addonFileType = regex.exec(addon[cnt]);

			if(addonFileType){

				// Getting addon type
				switch(addonFileType[0]){

					case ".page.html":
						var addonType = 'page'
						break;

					case ".nav.html":
						var addonType = 'nav'
						break;

					default:
						var addonType = NULL;
				}

				//Check that it's a valid addon
				if(addonType){

					//Add current addon to addons array
					addonArray.push(
						{
							'folder'	: addonPath,
							'file' 		: addon[cnt],
							'type'		: addonType
						}
					);
				}
			}
		}
	});*/
}

console.log(addonArray);

for(var i = 0; i < addonArray.length; i++){
	addonArray[i].basePath = './ui/app/addons/';
}

//Make ng-include include scripts

