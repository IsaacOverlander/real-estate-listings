myApp.controller('RentalController', function($http){
    const vm = this;

    vm.rentalsList = []

    function getRentals(){
        $http({
            method: 'GET',
            url: '/rentals'
        }).then(function(response) {
            vm.rentalsList = response.data;
        }).catch(function(error) {
            alert('there was an error getting rentals');
            console.log('Error', error);
        });// End GET
    }

    vm.deleteListing = function(listing) {
        console.log('in delete');
        $http({
            method: 'DELETE',
            url: '/rentals/' + listing.id
        }).then(function (response) {
            console.log('deleted listing');
            getRentals();
        }).catch(function(error) {
            alert('error deleting listing');
            console.log('Error', error);
        });//End DELETE
    }

    getRentals();
});