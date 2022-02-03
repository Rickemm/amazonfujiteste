import {getRepository} from "typeorm";
import {Request, Response} from "express";
import {SkillEntity} from "../entity/skill.entity";

export const getAllSkills = async (request: Request, response: Response) => {
  const skills = await getRepository(SkillEntity).find();
  return response.json(skills);
};

export const getOneSkill = async (request: Request, response: Response) => {
  const { id } = request.params;
  const skill = await getRepository(SkillEntity).findOne(id);
  return response.json(skill);
}

export const saveSkill = async (request: Request, response: Response) => {
  const skill = await getRepository(SkillEntity).save(request.body);
  return response.json(skill);
}

export const updateSkill = async (request: Request, response: Response) => {
  const { id } = request.params;
  const skill = await getRepository(SkillEntity).update(id, request.body);

  if(skill.affected === 1) {
    const skillUpdated = await getRepository(SkillEntity).findOne(id);
    return response.json(skillUpdated);
  }
  return response.status(404).json({ message: 'Skill not found!'});
}

export const removeSkill = async (request: Request, response: Response) => {
  const { id } = request.params;

  const skill = await getRepository(SkillEntity).delete(id);

  if(skill.affected === 1) {
    const skillUpdated = await getRepository(SkillEntity).findOne(id);
    return response.json({ message: 'Skill removed!'});
  }
  return response.status(404).json({ message: 'Skill not found!'});
}