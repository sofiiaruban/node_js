import fs from 'fs'

const utf = 'utf8'
const contentType = 'application/json'

export const updateHistory = (route, file) => {
  let history = {}
  try {
    if (fs.existsSync(file)) {
      history = JSON.parse(fs.readFileSync(file, utf))
    }
  } catch (err) {
    console.error('Error reading history file:', err.message)
  }

  history[route] = (history[route] || 0) + 1

  try {
    fs.writeFileSync(file, JSON.stringify(history, null, 2))
  } catch (err) {
    console.error('Error writing to history file:', err.message)
    throw err
  }
}

export const respondWithHistory = (res, file) => {
  try {
    const history = fs.readFileSync(file, utf)
    res.writeHead(200, { 'Content-Type': contentType })
    res.end(history)
  } catch (err) {
    console.error('Error reading history file:', err.message)
    res.writeHead(500, { 'Content-Type': contentType })
    res.end(JSON.stringify({ error: 'Failed to read history' }))
  }
}
