var fs = require('fs');

var colors = require('colors');


fs.readdir('./', 'utf-8', function(err, files) {
  if (err) {
    throw err;
  } else {


    fs.readFile('./nowy.txt', 'utf-8', function(err, data) {
      console.log('Zawartość katalogu to: '.yellow + data);
    });

    fs.writeFile('./nowy.txt', files, function() {

      if (err) throw err;
      console.log('Zapisano zawartość katalogu do pliku nowy.txt'.rainbow);
    });

  }
});
