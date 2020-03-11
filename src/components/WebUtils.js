const API_URL = 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD'

function parseData (d) {
  d.date = d.time
  d.high = +d.high
  d.low = +d.low
  d.open = +d.open
  d.close = +d.close
  d.volume = d.volumeto - d.volumefrom
  return d
}

function parseJSON (response) {
  if (response.status >= 400) {
    throw new Error(response)
  }
  const contentType = response.headers.get('Content-Type')
  if (contentType && contentType.includes('application/json')) {
    return response.json()
  }
  return response
}

function convertSecondsToDate (element) {
  element.time = new Date(element.time * 1000)
}

export default {
  getData: (limit, upToDate) => {
    if (!limit || limit <= 0) {
      limit = 100
    }
    if (!upToDate) {
      upToDate = Math.round(new Date().getTime() / 1000)
    }
    return fetch(`${API_URL}&limit=${limit}&toTs=${upToDate}`).then(parseJSON)
      .then(data => {
        data.Data.forEach(convertSecondsToDate)
        data.Data.map(parseData)
        return data.Data
      })
  }
}