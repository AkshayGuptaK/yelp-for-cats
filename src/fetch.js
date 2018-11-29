const cors = 'https://cors-anywhere.herokuapp.com'
const domain = 'https://api.yelp.com/v3'
const key = 'NUvkMgNejyHF9AYnPRdtXaqMGkX2sbad1ZG1hKIEeRKv3IVrUzmosnNpLrtBUSopwGm6mP5_Qy1SPcMmVzG-o2cygfT4_gFqFBpf2pakOrqFqbSs4uR7gHGgrm37W3Yx'

function formatBusinessDetails (business) {
  return {
    'name': business.name,
    'closed': business.is_closed,
    'price': business.price,
    'rating': business.rating,
    'reviews': business.review_count,
    'phone': business.display_phone,
    'address': business.location.display_address.join('\n'),
    'tags': business.categories,
    'images': business.photos,
    'hours': business.hours
  }
}

function formatSearchData (data) {
  return data.businesses.map(business => {
    return {
      'id': business.id,
      'name': business.name,
      'tags': business.categories,
      'image': business.image_url,
      'reviews': business.review_count,
      'rating': business.rating,
      'price': business.price,
      'phone': business.display_phone,
      'address': business.location.display_address.join('\n')
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
  static doSearch (query) {
    return fetchYelp(`businesses/search?${query}`)
      .then(res => { return { 'businesses': formatSearchData(res), 'total': res.total } })
  }
  static getDetails (id) {
    return fetchYelp(`businesses/${id}`)
      .then(res => formatBusinessDetails(res))
  }
}

export default fetchRequests
