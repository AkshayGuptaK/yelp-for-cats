const cors = 'https://cors-anywhere.herokuapp.com'
const domain = 'https://api.yelp.com/v3'
const key = 'NUvkMgNejyHF9AYnPRdtXaqMGkX2sbad1ZG1hKIEeRKv3IVrUzmosnNpLrtBUSopwGm6mP5_Qy1SPcMmVzG-o2cygfT4_gFqFBpf2pakOrqFqbSs4uR7gHGgrm37W3Yx'

function formatYelpData (data) {
  console.log('data is', data) // debug
  return data.businesses.map(business => {
    return {
      'id': business.id,
      'name': business.name,
      'image': business.image_url,
      'reviews': business.review_count,
      'rating': business.rating,
      'price': business.price,
      'phone': business.display_phone,
      'address': business.location.display_address
    }
  })
}

function fetchYelp (url) {
  console.log('Submitting get request')
  return fetch(`${cors}/${domain}/${url}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Authorization': 'Bearer ' + key
    }
  }).then(res => res.json())
    .catch(e => console.log(e))
}

class fetchRequests {
  static doSearch (term, location) {
    return fetchYelp(`businesses/search?term=${term}&location=${location}`)
      .then(res => formatYelpData(res))
  }
}

export default fetchRequests
