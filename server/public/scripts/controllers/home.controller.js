myApp.controller('HomeController', function ($http) {
    const vm = this;

    vm.listing = {
    }
    vm.listing.cost = vm.cost;
    vm.listing.sqft = vm.sqft;
    vm.listing.type = vm.type;
    vm.listing.city = vm.city;
    vm.listing.image_path = vm.image_path;
    
    

    vm.addListing = function (listing) {
        console.log(listing);

        $http({
            method: 'POST',
            url: '/home',
            data: listing
        }).then(function (response) {
            console.log('Listing Created');
            alert('Listing added');
            vm.listing = {};
        }).catch(function (error) {
            alert('There was an error adding the listing');
            console.log('Error:', error);
        });//End POST
    }

})

