import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {ContactEntity} from "../entity/contact.entity";

export const getAllContacts = async (request: Request, response: Response) => {
  const contacts = await getRepository(ContactEntity).find();
  return response.json(contacts);
};

export const getOneContact = async (request: Request, response: Response) => {
  const { id } = request.params;
  const contact = await getRepository(ContactEntity).findOne(id);
  return response.json(contact);
}

export const saveContact = async (request: Request, response: Response) => {
  const contact = await getRepository(ContactEntity).save(request.body);
  return response.json(contact);
}

export const updateContact = async (request: Request, response: Response) => {
  const { id } = request.params;
  const contact = await getRepository(ContactEntity).update(id, request.body);

  if(contact.affected === 1) {
    const contactUpdated = await getRepository(ContactEntity).findOne(id);
    return response.json(contactUpdated);
  }
  return response.status(404).json({ message: 'Contact not found!'});
}

export const removeContact = async (request: Request, response: Response) => {
  const { id } = request.params;

  const contact = await getRepository(ContactEntity).delete(id);

  if(contact.affected === 1) {
    const contactUpdated = await getRepository(ContactEntity).findOne(id);
    return response.json({ message: 'Contact removed!'});
  }
  return response.status(404).json({ message: 'Contact not found!'});
}