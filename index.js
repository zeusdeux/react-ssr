import { resolve } from 'path'

import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import logger from 'morgan'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import PropTypes from 'prop-types'
import { StaticRouter } from 'react-router-dom'
import App from './routes/App'

const app = express()
const PORT = Number.parseInt(process.env.PORT, 10) || 3000

app.use(compression())
app.use(express.static(resolve('./public')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('*', (req, res, _next) => {
  const context = {}
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App msg="Hallo Leute! Ich lebe grade!" time={Date.now()} />
    </StaticRouter>
  )

  const html = ReactDOMServer.renderToStaticMarkup(<Index title="react-ssr" app={app} />)

  if (context.url) {
    res.redirect(301, context.url)
  } else {
    res.send(html)
  }
})

// eslint-disable-next-line no-console
app.listen(PORT, _ => console.log(`Listening on port ${PORT}`))

function Index({ title, app }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{title}</title>
        <link rel="stylesheet" href="/app.css" />
        <script defer src="/app.js" />
      </head>
      <body>
        <main dangerouslySetInnerHTML={{ __html: app }} />
      </body>
    </html>
  )
}

Index.propTypes = {
  title: PropTypes.string.isRequired,
  app: PropTypes.string.isRequired
}
