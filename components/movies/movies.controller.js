(function(){
  angular
    .module('myApp')
    .controller('movieController', movieController);

    function movieController($scope,movieService,ImageService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador

      // var movieCtrl = this; //binding del controlador con el html, solo en el controlador
      $scope.movie = {};
      $scope.movieList =  movieService.getMovies();

      var cloudObj = ImageService.getConfiguration();

      
//    movies = [{
//       title: 'Harry Potter',
//       year:'2001',
//       length: '1:20',
//       image:''
//     }];

      $scope.preSave = function(){
        // cloudObj.data.file = document.getElementById("photo").files[0];
        // Upload.upload(cloudObj)
        //   .success(function(data){
        //     $scope.save(data.url);
        //   });
        var data = "ww.hola.com";
        $scope.saveMovie(data);//data.url
      }

      $scope.saveMovie= function(pImageUrl){
        var newMovie = $scope.movie;
          newMovie.image = pImageUrl;
        // {
        //   title : movie.title,
        //   year : movie.year,
        //   length : movie.length,
        //   image: pImageUrl
        // }

        movieService.addMovie(newMovie);
        $scope.movie = {};

      }

    $scope.remove= function(pMovie){    
      movieService.deleteMovie(pMovie);
      $scope.movieList =  movieService.getMovies();
    }
  }
     //se establece un objeto de angular normal
})();