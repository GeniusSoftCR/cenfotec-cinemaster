(function(){
  angular
    .module('myApp')
    .controller('movieController', movieController);
    function movieController(movieService,ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var movieCtrl = this; //binding del controlador con el html, solo en el controlador
      movieCtrl.cloudObj = ImageService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        movieCtrl.movieList = movieService.getMovies();
      }
      init();

      movieCtrl.preSave = function(){
        movieCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(movieCtrl.cloudObj)
          .success(function(data){
            movieCtrl.save(data.url);
          });
      }

      movieCtrl.save= function(pimage){
        var newMovie ={
          title : movieCtrl.title,
          year : movieCtrl.year,
          length : movieCtrl.length,
          image: pimage
        }

        movieService.addMovie(newMovie);

        movieCtrl = {};
    }}
     //se establece un objeto de angular normal
})();