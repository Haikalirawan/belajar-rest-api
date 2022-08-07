$.getJSON('./mcdonals.json', function(data){
    let Menu = data.Menu;
    $.each(Menu, function(i, data){
        $('daftar-menu').append('<div class="col-md-3"><div class="card mt-3"><img src="img/menu-1.png" class="card-img-top" alt="Foto Menu"><div class="card-body"><h4 class="card-title">'+data.nama+'</h4><p class="card-text">2 pcs Ayam Goreng khas McDonalds dengan nasi hangat dan minuman FruitTea lemon yang menyegarkan. Tersedia dalam pilihan Ayam Krispy atau Spicy.</p><h5 class="card-title">Rp. 60.000,-</h5><a href="#" class="btn btn-danger mt-3"><img src="img/menu-1.png" alt="icon menu" width="40">Pesan Sekarang</a></div></div></div>');
    });
});