export.config = function() {
  return db: {
    client: 'mysql',
    connection: {
      host     : '0.0.0.0',
      user     : 'app',
      password : 'app',
      database : 'app',
    }
  };
};
