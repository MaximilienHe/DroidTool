var cron = require('node-cron');

cron.schedule('00 6 * * *', function () {

  //============================\\
  //======CREATE DATABASE=======\\
  //============================\\

  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'MicMacAdmin',
    password: '56l$N1hw9',
    database: 'testMadeOnDroidsoft'
  });
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });

  //============================\\
  //===Get All URLs from page===\\
  //============================\\

  const cheerio = require('cheerio');

  const got = (...args) => import('got').then(({
    default: got
  }) => got(...args));
  // You cannot use "require" with the latest version of got
  // If you're using ES Module or TypeScript, just import got like this: import got from 'got'

  const extractLinks = async (url) => {
    try {
      // Fetching HTML
      const response = await got(url);
      const html = response.body;

      // Using cheerio to extract <a> tags
      const $ = cheerio.load(html);
      const linkObjects = $('a');

      // Collect the "href" and "title" of each link and add them to an array
      const links = [];
      linkObjects.each((index, element) => {
        // We collect links that is made in 2020 and more (first condition), and which includes "test-", you can custom this based on your needs
        if ($(element).attr('href').startsWith('https://droidsoft.fr/202') && $(element).attr('href').includes('test-')) {
          links.push($(element).attr('href')); // We collect different URLS
        }
      });

      // Writing in file to get all URLS from each iteration of for loop
      require('fs').appendFile(

        'C:/Droidsoft/TestFaits/GetAllTests/sortie.txt',

        JSON.stringify(links),

        function (err) {
          if (err) {
            console.error('Crap happens');
          }
        }
      );

      return;
    } catch (error) {
      console.log(error);
    }
  };

  const fs = require('fs')
  // remove all content from file, to make sure that it doesn't accumulate each time you launch your program
  fs.truncate('C:/Droidsoft/TestFaits/GetAllTests/sortie.txt', 0, function () {
    console.log('done')
  })

  // Loooooooooooooop on a number of test pages
  for (let cptpages = 1; cptpages < 33; cptpages++) { // On parcourt les 33 pages de tests-android
    const URL = 'https://droidsoft.fr/category/tests-android/page/' + cptpages;
    extractLinks(URL); // On appelle la fonction pour récuperer les URL de chaque test, de chaque page, avec le tableau initial
  }

  // Take back the content of the file, as a string
  var text = fs.readFileSync("C:/Droidsoft/TestFaits/GetAllTests/sortie.txt", 'utf-8');
  // Remove the " from the content
  text = text.replaceAll('"', '');
  // Split it into an array
  var arrayOfURLS = text.split(',');

  // We remove the first character, a "[" and the last one, a "]"
  arrayOfURLS = arrayOfURLS.slice(1);
  arrayOfURLS = arrayOfURLS.slice(0, -1);

  // We filter this array, to remove duplicate content
  uniq = [...new Set(arrayOfURLS)];

  // To make sure we have everything, we can print it out on console, each element by itself !
  // uniq.forEach(element => console.log(element + "\n"));

  //===========================\\
  //===Get All info from URL===\\
  //===========================\\

  // Import of article parser
  const {
    extract
  } = require('article-parser/dist/cjs/article-parser.js');

  // Purge content from output file
  fs.truncate('C:/Droidsoft/TestFaits/GetAllTests/sortieInfosArticles.txt', 0, function () {
    console.log('done')
  })

  // For each element of tab we got previously, we call the function to get informations
  uniq.forEach(element => extract(element).then((article) => {

    // Remove the content category
    delete article['content'];

    // Converting JSON-encoded string to JS object
    //console.log(article[`url`]);
    //console.log(article[`url`] + "\n" + article[`title`] + "\n" + article[`description`] + "\n" + article[`image`] + "\n" + article[`published`] + "\n");

    // Write 5 strings
    con.query('INSERT INTO `testsInfos` (`Titre`, `URL`, `Description`, `Image`, `date`) VALUES (article[`title`], article[`url`], article[`description`], article[`image`], article[`published`]', (err, rows) => {
      if (err) throw err;

      console.log('Data received from Db:');
      console.log(rows);
    });

  }).catch((err) => {
    console.trace(err)
  }));


});