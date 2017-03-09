(function(){
  angular
  .module('myApp')
  .service('ImageService', ImageService);

  function ImageService($http){

    var cloudObj = {
      url:'',
      data:{
        upload_preset: '',
        tags:'Any',
        context:'photo=test'
      }
    };

    var public_api = {
      getConfiguration:getConfiguration
    }
    return public_api;

    function getConfiguration(){
      return cloudObj;
    }


  }

})();
