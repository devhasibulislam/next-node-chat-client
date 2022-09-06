// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const url = req.url;
  console.log(url);

  res.status(200).json({
    success: true,
    message: "successfully fetching demo users API",
    data: [{
      "_id": 1,
      "first_name": "Gwyn",
      "last_name": "Grafhom",
      "email": "ggrafhom0@people.com.cn",
      "avatar": "https://robohash.org/autremrerum.png?size=250x250&set=set1",
      "gender": "Female"
    }, {
      "_id": 2,
      "first_name": "Belvia",
      "last_name": "Blakeborough",
      "email": "bblakeborough1@redcross.org",
      "avatar": "https://robohash.org/officiisducimuscumque.png?size=250x250&set=set1",
      "gender": "Female"
    }, {
      "_id": 3,
      "first_name": "Westleigh",
      "last_name": "Bumphrey",
      "email": "wbumphrey2@kickstarter.com",
      "avatar": "https://robohash.org/explicabosimiliqueaut.png?size=250x250&set=set1",
      "gender": "Male"
    }, {
      "_id": 4,
      "first_name": "Fionna",
      "last_name": "Ghione",
      "email": "fghione3@google.fr",
      "avatar": "https://robohash.org/quiducimusquibusdam.png?size=250x250&set=set1",
      "gender": "Female"
    }, {
      "_id": 5,
      "first_name": "Greggory",
      "last_name": "Carff",
      "email": "gcarff4@about.me",
      "avatar": "https://robohash.org/optiovoluptasut.png?size=250x250&set=set1",
      "gender": "Male"
    }, {
      "_id": 6,
      "first_name": "Milty",
      "last_name": "Bole",
      "email": "mbole5@independent.co.uk",
      "avatar": "https://robohash.org/hicarchitectodolores.png?size=250x250&set=set1",
      "gender": "Male"
    }, {
      "_id": 7,
      "first_name": "Jone",
      "last_name": "Langlois",
      "email": "jlanglois6@jalbum.net",
      "avatar": "https://robohash.org/praesentiumeumdolores.png?size=250x250&set=set1",
      "gender": "Male"
    }, {
      "_id": 8,
      "first_name": "Vincenty",
      "last_name": "Hebborne",
      "email": "vhebborne7@home.pl",
      "avatar": "https://robohash.org/reprehenderitprovidentut.png?size=250x250&set=set1",
      "gender": "Male"
    }, {
      "_id": 9,
      "first_name": "Lotty",
      "last_name": "Jesper",
      "email": "ljesper8@dropbox.com",
      "avatar": "https://robohash.org/abatqueut.png?size=250x250&set=set1",
      "gender": "Female"
    }, {
      "_id": 10,
      "first_name": "Saba",
      "last_name": "Arnecke",
      "email": "sarnecke9@imdb.com",
      "avatar": "https://robohash.org/remestpraesentium.png?size=250x250&set=set1",
      "gender": "Female"
    }]
  })
}
