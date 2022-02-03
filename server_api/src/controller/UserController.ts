import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {UserEntity} from "../entity/user.entity";

export const getAllUser = async (request: Request, response: Response) => {
  const users = await getRepository(UserEntity).find();
  return response.json(users);
};

export const getOneUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = await getRepository(UserEntity).findOne(id);
  return response.json(user);
}

export const saveUser = async (request: Request, response: Response) => {
  const user = await getRepository(UserEntity).save(request.body);
  return response.json(user);
}

export const updateUser = async (request: Request, response: Response) => {
  const { id } = request.params;
  const user = await getRepository(UserEntity).update(id, request.body);

  if(user.affected === 1) {
    const userUpdated = await getRepository(UserEntity).findOne(id);
    return response.json(userUpdated);
  }
  return response.status(404).json({ message: 'User not found!'});
}

export const removeUser = async (request: Request, response: Response) => {
  const { id } = request.params;

  const user = await getRepository(UserEntity).delete(id);

  if(user.affected === 1) {
    const userRemove = await getRepository(UserEntity).findOne(id);
    return response.json({ message: 'User removed!'});
  }
  return response.status(404).json({ message: 'User not found!'});
}