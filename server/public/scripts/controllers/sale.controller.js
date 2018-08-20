myApp.controller('SaleController', function($http){
    const vm = this;

    vm.salesList = []

    function getSales(){
        $http({
            method: 'GET',
            url: '/home/sales'
        }).then(function(response) {
            vm.salesList = response.data;
        }).catch(function(error) {
            alert('there was an error getting sales');
            console.log('Error', error);
        });// End GET
    }

    vm.deleteListing = function(listing) {
        console.log('in delete');
        $http({
            method: 'DELETE',
            url: '/home/' + listing.id
        }).then(function (response) {
            console.log('deleted listing');
            getSales();
        }).catch(function(error) {
            alert('error deleting listing');
            console.log('Error', error);
        });//End DELETE
    }

    getSales();
});