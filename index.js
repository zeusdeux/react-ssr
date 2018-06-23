import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import path from 'path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './routes/App'

const { resolve } = path

const app = express()
const PORT = Number.parseInt(process.env.PORT, 10) || 3000

app.use(express.static(resolve('./public')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('*', (req, res, _next) => {
  const context = {}
  const html = index({
    title: 'react-ssr',
    app: ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App msg="Hallo Leute! Ich lebe grade!" time={Date.now()} />
      </StaticRouter>
    )
  })

  if (context.url) {
    res.redirect(301, context.url)
  } else {
    res.send(html)
  }
})

// eslint-disable-next-line no-console
app.listen(PORT, _ => console.log(`Listening on port ${PORT}`))

function index({ title, app }) {
  return `<!doctype html>
  <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <title>${title}</title>
      <link rel="stylesheet" href="/app.css" />
    </head>
    <body>
      <main>${app}</main>
      <script src="/app.js"></script>
    </body>
  </html>`
}
