const usersRouter = require('./usersRouter');
module.exports = (app) => {
  app.use('/api/user', usersRouter);
};