import { createAction } from '@reduxjs/toolkit';
interface IPokemon {
  id: string;
  name: string;
  ability: string;
  photo: string;
  createdAt: string;
}

export default IPokemon;
