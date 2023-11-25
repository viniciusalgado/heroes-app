import globals from '../globals.js'

const { API_VERSION } = globals

const cors = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, SessionID')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('API-Version', API_VERSION)

  next()
}

export default cors
