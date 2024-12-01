import fs from 'fs'

export const readFileAndRespond = (
  filepath,
  res,
  contentType
) => {
  fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': contentType })
      res.end('Server Error')
    } else {
      res.writeHead(200, { 'Content-Type': contentType })
      res.end(data)
    }
  })
}
