interface IUser {
  _id: string;
  email: string;
  avatar: string;
  token: string;
  name: string;
  type?: string;
}

export default IUser;
