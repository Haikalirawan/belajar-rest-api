<?php
$data = file_get_contents('data/mcdonals.json');
$menu = json_decode($data, true);

$menu = $menu["menu"];



?>


<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="shortcut icon" href="img/icon_mcd.png">

    <title>M-Donal's!</title>
</head>

<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="img/logo_mcd.png" alt="logo" class="rounded" width="50"> M-Donal's
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Kategori Makanan
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Sarapan Pagi</a></li>
                            <li><a class="dropdown-item" href="#">Daging Sapi</a></li>
                            <li><a class="dropdown-item" href="#">Ayam</a></li>
                            <li><a class="dropdown-item" href="#">Ikan</a></li>
                            <li><a class="dropdown-item" href="#">Minuman</a></li>
                            <li><a class="dropdown-item" href="#">Makanan Penutup</a></li>
                        </ul>
                    </li>
                </div>
            </div>
        </div>
    </nav>


    <div class="container">
        <div class="row mt-3">
            <div class="col">
                <h1>All Menu</h1>
            </div>
        </div>

        <div class="row">
            <?php foreach ($menu as $mnu) : ?>
                <div class="col-md-3">
                    <div class="card mt-3">
                        <img src="img/menu/<?= $mnu["gambar"]; ?>" class="card-img-top" alt="Foto Menu">
                        <div class="card-body">
                            <h4 class="card-title"><?= $mnu["nama"]; ?></h4>
                            <p class="card-text"><?= $mnu["deskripsi"]; ?>.</p>
                            <h5 class="card-title">Rp. <?= $mnu["harga"]; ?>,-</h5>
                            <a href="#" class="btn btn-danger mt-3">
                                <img src="img/menu/<?= $mnu["gambar"]; ?>" alt="icon menu" width="40">
                                Pesan Sekarang
                            </a>
                        </div>
                    </div>
                </div>
            <?php endforeach ?>
        </div>

    </div>






    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>



</body>

</html>