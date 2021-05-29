const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  // My Implementation
  const results = urls.map(async url => {
    const response = await httpGet(url)
    const status = response.status
    const message = JSON.parse(response.body).message
    const result = status === 200 ? { "Arnie Quote": message } : { "FAILURE": message }
    return result
  })
  return Promise.all(results)
}
module.exports = {
  getArnieQuotes,
};
