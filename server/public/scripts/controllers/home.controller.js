myApp.controller( 'HomeController', function($http){
    const vm = this;

   vm.listing = {
    cost: 0,
    sqft: 0,
    type: '',
    city: '',
    image_path: ''
}
   vm.addListing = function (listing) {
       console.log(listing);
       
       $http({
           method: 'POST',
           url: '/home',
           data: listing
       }).then(function (response) {
           console.log('Listing Created');
       }).catch(function (error) {
           alert('There was an error adding the listing');
           console.log('Error:', error);
       });//End POST
    }

})

