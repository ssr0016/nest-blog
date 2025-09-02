import { IUser } from '@/src/user/types/user.types';

export interface IUserResponse {
  user: IUser & { token: string };
}
