import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import path from 'path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './routes/App'

const { resolve } = path

const app = express()
const PORT = Number.parseInt(process.env.PORT, 10) || 3000

app.use(express.static(resolve('./public')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('*', (_req, res, _next) => {
  res.send(
    index({
      title: 'react-ssr',
      app: ReactDOMServer.renderToString(
        <App msg="Hallo Leute! Ich lebe grade!" initCount={20} time={Date.now()} />
      )
    })
  )
})

// eslint-disable-next-line no-console
app.listen(PORT, _ => console.log(`Listening on port ${PORT}`))

function index({ title, app }) {
  return `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <title>${title}</title>
      <link rel="stylesheet" href="app.css" />
    </head>
    <body>
      <main>${app}</main>
      <script src="app.js"></script>
    </body>
  </html>`
}
