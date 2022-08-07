// MERUBAH DARI OBJECT KE JSON

// let mahasiswa = {
//     nama : "Haikal Irawan",
//     nim : "202410103017",
//     email : "haikalirawan5@gmail.com"
// }


// console.log(JSON.stringify(mahasiswa));







// MERUBAH DARI JSON KE OBJECT

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }
// xhr.open('GET', 'coba.json', true);
// xhr.send();


// MERUBAH DARI JSON KE OBJECT MENGGUNAKAN AJAX

$.getJSON("coba.json", function (data) {
    console.log(data)
});