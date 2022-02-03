import { Router, Request, Response } from 'express';

import { getAllUser, getOneUser, removeUser, saveUser, updateUser } from './controller/UserController';
import { getAllAdresses, getOneAdress, removeAdress, saveAdress, updateAdress } from './controller/AdressControler';
import { getAllContacts, getOneContact, removeContact, saveContact, updateContact } from './controller/ContactController';
import { getAllSkills, getOneSkill, removeSkill, saveSkill, updateSkill } from './controller/SkillController';

const routes = Router();

routes.get('', (request: Request, response: Response) => {
  return response.json({ message: 'Hello Wolrd!' })
})

// User Routes
routes.get('/users/', getAllUser);
routes.get('/users/:id', getOneUser);
routes.post('/users/', saveUser);
routes.put('/users/:id', updateUser);
routes.delete('/users/:id', removeUser);

// Adress Routes
routes.get('/users/adress/', getAllAdresses);
routes.get('/users/adress/:id', getOneAdress);
routes.post('/users/adress/', saveAdress);
routes.put('/users/adress/:id', updateAdress);
routes.delete('/users/adress/:id', removeAdress);

// Contact Routes
routes.get('/users/contact/', getAllContacts);
routes.get('/users/contact/:id', getOneContact);
routes.post('/users/contact/', saveContact);
routes.put('/users/contact/:id', updateContact);
routes.delete('/users/contact/:id', removeContact);

// Skill Routes
routes.get('/users/skill/', getAllSkills);
routes.get('/users/skill/:id', getOneSkill);
routes.post('/users/skill/', saveSkill);
routes.put('/users/skill/:id', updateSkill);
routes.delete('/users/skill/:id', removeSkill);

export default routes;