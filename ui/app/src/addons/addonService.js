(function(){
	'use strict';

	angular.module('addons')
		.service('addonService', ['$q', addonService]);

	/**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
	function addonService($q){
		var allAddons = addonArray;
		// Promise-based API
		return {
			loadAllAddons : function() {
				// Simulate async nature of real remote calls
				return $q.when(allAddons);
			}
		};
	}

})();