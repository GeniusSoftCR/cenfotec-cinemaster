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
    },
    {
      title: 'Split',
      year:'2017',
      length: '1:57',
      image:''
    }];

    var publicAPI = {
      addMovie : _addMovie,
      getMovies : _getMovies,
      deleteMovie : _deleteMovie
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que ciuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _addMovie(pMovie){
      //users.push(pUser);
      movies.push(pMovie);
    }

     function _deleteMovie(pMovie){
      //users.push(pUser);
      movies.splice(pMovie,1);
    }


    function _getMovies(){
      return movies;
    }



  }

})();
