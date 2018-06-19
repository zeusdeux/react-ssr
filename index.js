import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import path from 'path'

import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './routes/App'

const { join } = path
const app = express()
const PORT = Number.parseInt(process.env.PORT, 10) || 3000

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(join(__dirname, 'public')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('*', (_req, res, _next) => {
  res.render('index', {
    title: 'react-ssr',
    app: ReactDOMServer.renderToString(<App msg="Hallo Leute! Ich lebe grade!" initCount={20} />)
  })
})

// eslint-disable-next-line no-console
app.listen(PORT, _ => console.log(`Listening on port ${PORT}`))
