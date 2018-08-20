myApp.controller('HomeController', function ($http) {
    const vm = this;

    vm.listing = {
        cost: vm.cost,
        sqft: vm.sqft,
        type: vm.type,
        city: vm.city,
        image_path: vm.image_path
    }       

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

