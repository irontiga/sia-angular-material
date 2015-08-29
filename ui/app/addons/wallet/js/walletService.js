(function(){
	'use strict';

	angular.module('wallet')
		.service('walletService', ['$q', walletService]);

	/**
   * Users DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
	function walletService($q){
		// Promise-based API
		return {
			loadAllAddons : function() {
				// Simulate async nature of real remote calls
				return $q.when("Wallet stuff");
			}
		};
	}

})();