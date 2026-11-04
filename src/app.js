import express from 'express';
import path from 'node:path';
import session from 'express-session';
import connect_pg from 'connect-pg-simple';
import passport from 'passport';
import routes from './routes/routesIndex.js';
import { pool } from './db/pool.js';
import { configurePassport } from './config/passport.js';

//configs
const __dirname = import.meta.dirname;
const PostgresStore = connect_pg(session);

//app setup
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//session
const sessionStore = new PostgresStore({
  pool: pool,
  tableName: 'session',
  createTableIfMissing: true,
});

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);

//passport
configurePassport();

app.use(passport.initialize());
app.use(passport.session());

//routes
app.use(routes);

export default app;
