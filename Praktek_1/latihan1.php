<?php

// MENGUBAH ARRAY ASSOSIATIF KE JSON

$mahasiswa = [
    [
        "nama" => "Haikal irawan",
        "NIM" => "202410103017",
        "email" => "haikalirawan5@gmail.com"
    ],
    [
        "nama" => "Alif fasal",
        "NIM" => "2410103017",
        "email" => "haikalirawan4@gmail.com"
    ]
];

// var_dump($mahasiswa);

$data = json_encode($mahasiswa);

echo $data;
