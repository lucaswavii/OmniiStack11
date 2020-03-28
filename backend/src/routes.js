const express = require("express");
const OngController = require('../src/controllers/OngController');
const IncidentsController = require('../src/controllers/IncidentsController');
const ProfileController = require('../src/controllers/ProfileController');
const SessionController = require('../src/controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/profile'  , ProfileController.list        );

routes.post('/ongs' , OngController.create      );
routes.get('/ongs'  , OngController.list        );

routes.post('/incidents'        , IncidentsController.create    );
routes.get('/incidents'         , IncidentsController.list      );
routes.delete('/incidents/:id'  , IncidentsController.delete    );

module.exports = routes;