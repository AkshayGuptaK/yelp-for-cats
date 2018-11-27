var request = require('request')

var options = { method: 'GET',
  url: 'https://api.yelp.com/v3/businesses/search?term=delis&location=Berkeley',
//  qs: { term: 'delis', location: 'Berkeley' },
  headers:
   { Authorization: 'Bearer NUvkMgNejyHF9AYnPRdtXaqMGkX2sbad1ZG1hKIEeRKv3IVrUzmosnNpLrtBUSopwGm6mP5_Qy1SPcMmVzG-o2cygfT4_gFqFBpf2pakOrqFqbSs4uR7gHGgrm37W3Yx' }
}

request(options, function (error, response, body) {
  if (error) throw new Error(error)

  console.log(body)
})
