function search_movie(){
    $('#movie-list').html('');

    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        datatype: 'json',
        data: {
            'apikey': 'fb236360',
            's' : $('#search-input').val()
        },
        success : function(result){
            if (result.Response == 'True'){

                let movies = result.Search;
                $.each(movies, function(i,data){
                    $('#movie-list').append(`
                    <div class="col-md-3">
                        <div class="card mt-3">
                            <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">`+ data.Title +`</h5>
                                <h6 class="card-subtitle mb-2 text-muted">`+ data.Year +`</h6>
                                <a href="#" class="card-link text-decoration-none see-detail" data-bs-toggle="modal" data-bs-target="#seeMore" data-id="`+ data.imdbID +`">See More</a>
                            </div>
                        </div>
                    </div>
                    `);
                });

                $('#search-input').val('');


            } else {
                $('#movie-list').html(`
                    <div class="col">
                        <h1 class="text-center"> `+ result.Error +`!</h1>
                    </div>
                    `);
            }
        }
    });
}



$('#search-button').on('click', function(){
    search_movie();
});



$('#search-input').on('keyup', function(e){
    if (e.keyCode === 13) {
        search_movie();
    }
    
});



$('#movie-list').on('click', '.see-detail', function(){

    // console.log($(this).data('id'));

    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        datatype: 'json',
        data: {
            'apikey': 'fb236360',
            'i' : $(this).data('id')
        },
        success : function(movie){
            if (movie.Response == 'True'){

                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img src="`+ movie.Poster +`" class="img-fluid">
                            </div>
                            
                            <div class="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item"><h3>`+ movie.Title +`</h3></li>
                                    <li class="list-group-item"><b>Rated</b> : `+ movie.Rated +`</li>
                                    <li class="list-group-item"><b>Released</b> : `+ movie.Released +`</li>
                                    <li class="list-group-item"><b>Genre</b> : `+ movie.Genre +`</li>
                                    <li class="list-group-item"><b>Description</b> : `+ movie.Plot +`</li>
                                    <li class="list-group-item"><b>Duration</b> : `+ movie.Runtime +`</li>
                                    <li class="list-group-item"><b>Director</b> : `+ movie.Director +`</li>
                                    <li class="list-group-item"><b>Writer</b> : `+ movie.Writer +`</li>
                                    <li class="list-group-item"><b>Actors</b> : `+ movie.Actors +`</li>
                                    <li class="list-group-item"><b>Language</b> : `+ movie.Language +`</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `);


            } else {
                $('#movie-list').html(`
                    <div class="col">
                        <h1 class="text-center"> `+ result.Error +`!</h1>
                    </div>
                    `);
            }
        }
    });
});