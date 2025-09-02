import { UserEntity } from '@/src/user/dto/user.entity';

export type IUser = Omit<UserEntity, 'hashPassword'>;
