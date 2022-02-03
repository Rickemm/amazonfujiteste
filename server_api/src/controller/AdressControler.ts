import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {AdressEntity} from "../entity/adress.entity";

export const getAllAdresses = async (request: Request, response: Response) => {
  const adresses = await getRepository(AdressEntity).find();
  return response.json(adresses);
};

export const getOneAdress = async (request: Request, response: Response) => {
  const { id } = request.params;
  const adress = await getRepository(AdressEntity).findOne(id);
  return response.json(adress);
}

export const saveAdress = async (request: Request, response: Response) => {
  const adress = await getRepository(AdressEntity).save(request.body);
  return response.json(adress);
}

export const updateAdress = async (request: Request, response: Response) => {
  const { id } = request.params;
  const adress = await getRepository(AdressEntity).update(id, request.body);

  if(adress.affected === 1) {
    const adressUpdated = await getRepository(AdressEntity).findOne(id);
    return response.json(adressUpdated);
  }
  return response.status(404).json({ message: 'User not found!'});
}

export const removeAdress = async (request: Request, response: Response) => {
  const { id } = request.params;

  const adressUpdated = await getRepository(AdressEntity).delete(id);

  if(adressUpdated.affected === 1) {
    const adressRemove = await getRepository(AdressEntity).findOne(id);
    return response.json({ message: 'User removed!'});
  }
  return response.status(404).json({ message: 'User not found!'});
}