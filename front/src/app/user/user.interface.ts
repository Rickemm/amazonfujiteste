export interface UserInterface{
  id: string;
  name: string;
  email: string;
  password: string;
  age: number;
  weight: number;
  height: number;
  adresses: AdressEntity[];
  contacts: ContactEntity[];
  skills: SkillEntity[];
}

export class UserModel{
  constructor(
    id?: string,
    name?: string,
    email?: string,
    password?: string,
    age?: number,
    weight?: number,
    height?: number,
    adresses?: AdressEntity[],
    contacts?: ContactEntity[],
    skills?: SkillEntity[],
  ){}

  id?: string;
  name?: string;
  email?: string;
  password?: string;
  age?: number;
  weight?: number;
  height?: number;
  adresses?: AdressEntity[];
  contacts?: ContactEntity[];
  skills?: SkillEntity[];
}

export interface AdressEntity{
  id: string;
  adress: string;
  district: string;
  city: string;
  state: string;
  country: string;
}

export interface ContactEntity{
  id: string;
  type: string;
  contact: string;
}

export interface SkillEntity{
  id: string;
  level: string;
  skill: string;
  expirience: number;

}
