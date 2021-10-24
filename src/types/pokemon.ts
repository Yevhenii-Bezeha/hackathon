import { IComment } from './index';

interface IPokemon {
  _id: string;
  name: string;
  ability: string;
  photo: string;
  comments?: IComment[];
  createdAt: string;
}

export default IPokemon;
