import { Role } from "../enum";
type UserData = {
  id: number;
  username: string;
  email: string;
  password: string;
  password_confirm: string;
  role: Role.USER;
}

interface User {
  id: number;
  username: string;
  email: string;
  hashed_password: Buffer;
  role: Role;
}