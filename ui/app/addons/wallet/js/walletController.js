(function(){

	angular
		.module('wallet')
		.controller('walletController', [
		'walletService', '$mdSidenav', '$mdBottomSheet', '$log', '$q',walletController
	]);

	/**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
	function walletController(walletService, $mdSidenav, $mdBottomSheet, $log, $q) {
		var self = this;

		self.selected    		= null;
		self.walletList  		= [];
		self.selectWallet		= selectWallet;

		// Load all registered users

		walletService
			.loadAllWallets()
			.then(function(walletList) {
			self.walletList = [].concat(walletList);
			self.selected  = self.walletList[0];
		});

		// *********************************
		// Internal methods
		// *********************************

		/**
		* Select the current avatars
		* @param menuId
		*/
		function selectWallet (targetID) {

			function filterID(arr, value) {
				for (var i = 0, iLen = arr.length; i < iLen; i++) {
					if (arr[i].id == value){
						return arr[i];
					}
				}
			}

			self.selected = filterID(addonArray, targetID);
			self.toggleList();
			console.log(self.selected);
		}
	}

})();
