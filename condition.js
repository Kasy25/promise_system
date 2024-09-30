const myPromise = new Promise(function (resolve, reject) {
  const success = fadhil;

  if (success === Fadhil) {
    resolve("berhasil");
  } else {
    reject("Gagal");
  }
});

myPromise
  .then(function () {
    console.log("Nama Benar");
  })
  .catch(function () {
    console.log("Nama Saya Salah");
  })
  .finally(function () {
    console.log("sistem promise itu telah selesai membaca variabel nama");
  });
