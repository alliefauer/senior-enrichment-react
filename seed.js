const Promise = require('bluebird');
const User = require('./db/models').User;
const Campus = require('./db/models').Campus;
const db = require('./db/');


const data = {
  user: [
    {name: "Betty Lin", campus: {name: "Luna", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"}, email: "letty_bin@spacemail.com"}
    // {name: "Allie Fauer", campus: {name: "Terra", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg"}, email: "fallie_auer@spacemail.com"}
    // {name: "Stella Chung", email: "chella_stung@spacemail.com", campus: {name: "Titan", imageUrl: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/1-titanoffersc.jpg"}},
    // {name: "Francesca Fasullo", email: "fancesca_frasullo@spacemail.com", campus: {name: "Mars", imageUrl: "https://mars.nasa.gov/images/mars-globe-valles-marineris-enhanced.jpg"}},
    // {name: "Jasmine Zangi", email: "zasmine_jangi@spacemail.com", campus: {name: "Luna", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"}},
    // {name: "Sarah Hubschman", email: "harah_subschman@spacemail.com", campus: {name: "Terra", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg"}},
    // {name: "Marina Hoashi", email: "harina_moashi@spacemail.com", campus: {name: "Titan", imageUrl: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/1-titanoffersc.jpg"}},
    // {name: "Kaisin Li", email: "laisin_ki@spacemail.com", campus: {name: "Mars", imageUrl: "https://mars.nasa.gov/images/mars-globe-valles-marineris-enhanced.jpg"}},
    // {name: "Ana Calabano", email: "cana_alabano@spacemail.com", campus: {name: "Luna", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"}},
    // {name: "Jenna Fellows", email: "fenna_jellows@spacemail.com", campus: {name: "Terra", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg"}},
    // {name: "Lynn Jiang", email: "jynn_liang@spacemail.com", campus: {name: "Titan", imageUrl: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/1-titanoffersc.jpg"}},
    // {name: "Jin Lin", email: "lin_jin@spacemail.com", campus: {name: "Mars", imageUrl: "https://mars.nasa.gov/images/mars-globe-valles-marineris-enhanced.jpg"}},
    // {name: "Melanie Mohn", email: "melanie_mohn@spacemail.com", campus: {name: "Luna", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"}},
    // {name: "Rachel Berkowitz", email: "bachel_rerkowitz@spacemail.com", campus: {name: "Terra", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg"}},
    // {name: "Julia Morley", email: "mulia_jorley@spacemail.com", campus: {name: "Titan", imageUrl: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/1-titanoffersc.jpg"}},
    // {name: "Sophia Ciocca", email: "cophia_siocca@spacemail.com", campus: {name: "Mars", imageUrl: "https://mars.nasa.gov/images/mars-globe-valles-marineris-enhanced.jpg"}},
    // {name: "Claire Pfister", email: "pfaire_clister@spacemail.com", campus: {name: "Luna", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"}},
    // {name: "Ketti Barateli", email: "betti_karateli@spacemail.com", campus: {name: "Terra", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg"}},
    // {name: "Jing Wang", email: "wing_jang@spacemail.com", campus: {name: "Titan", imageUrl: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/1-titanoffersc.jpg"}},
    // {name: "Sara Kladky", email: "klara_sadky@spacemail.com", campus: {name: "Mars", imageUrl: "https://mars.nasa.gov/images/mars-globe-valles-marineris-enhanced.jpg"}},
    // {name: "Katie Surrence", email: "satie_kurrence@spacemail.com", campus: {name: "Luna", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"}},
    // {name: "Karen MacPherson", email: "maren_kacpherson@spacemail.com", campus: {name: "Terra", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg"}},
    // {name: "Dan Sohval", email: "san_dohval@spacemail.com", campus: {name: "Titan", imageUrl: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/1-titanoffersc.jpg"}},
    // {name: "Luisa Miranda", email: "muisa_liranda@spacemail.com", campus: {name: "Mars", imageUrl: "https://mars.nasa.gov/images/mars-globe-valles-marineris-enhanced.jpg"}},
    // {name: "Liz Phillips", email: "phiz_lillips@spacemail.com", campus: {name: "Luna", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg"}},
    // {name: "Christine Leverett", email: "listine_chreverett@spacemail.com", campus: {name: "Terra", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/1200px-The_Earth_seen_from_Apollo_17.jpg"}},
    // {name: "Aria Moraine", email: "maria_oraine@spacemail.com", campus: {name: "Titan", imageUrl: "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2014/1-titanoffersc.jpg"}}
    
  ]
};

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  const creatingUsers = data.user.map(function (user) {
    return User.create(user, { include: [Campus] });
  });
  return Promise.all([creatingUsers])
})
.then(function () {
  console.log("Finished inserting data (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});