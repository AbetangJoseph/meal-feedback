import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import './models/connection';
import graphQLHTTP from 'express-graphql';
import schema from './typeDefs/schema';
import usersRouter from './routes';
import mealRouter from './routes';
import cors from 'cors';

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', usersRouter);
app.use('/api/meal', mealRouter);

app.use(
  '/graphql',
  graphQLHTTP({
    schema,
    graphiql: true
  })
);

// catch 404 and forward to error handler
app.use(function(_req, _res, next) {
  next(createError(404));
});

// error handler
app.use(function(
  err: any,
  req: express.Request,
  res: express.Response,
  _next: express.NextFunction
) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
