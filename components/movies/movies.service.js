(function(){
  angular
  .module('myApp')
  .service('movieService', movieService);

  function movieService(){
    var movies = [{
      title: 'Harry Potter',
      year:'2001',
      length: '1:20',
      image:''
    }];
    var publicAPI = {
      addMovie : _addMovie,
      getMovies : _getMovies
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que ciuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _addMovie(pMovie){
      //users.push(pUser);
      movies.push(pMovie);
      console.log(pMovie);

    }

    function _getMovies(){
      return movies;
    }



  }

})();
