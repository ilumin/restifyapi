import restify from 'restify'

class App {
  constructor() {
    let port = process.env.port || 3000

    this.server = restify.createServer()
    this.server.get('/test-param/:name', function (req, res, next) {
      res.send('Hello, ' + req.params.name)
      next()
    })
    this.server.listen(port, (err) => {
      console.log('%s listening at %s', this.server.name, this.server.url);
    });
  }
}

new App()
