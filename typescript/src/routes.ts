import {Request, Response} from 'express';
import createUser from  './services/CreateUser';

export function hello(request: Request, response: Response){
  const user = createUser(
    {name:'Leonam',
    email: 'leo@gln.com.br',
    password: '123',
    techs:[
      'Node',
      {
        title: 'RN',
        experience: 3
      }
    ]});
  return response.json({message: 'Hi! 🌈🐶😊'})
}