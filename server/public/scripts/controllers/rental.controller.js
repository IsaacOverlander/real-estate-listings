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
    getRentals();
});