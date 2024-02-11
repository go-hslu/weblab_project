import bcrypt from "bcrypt";
import { AppDataSource } from "../config/data-source";
import { UserEntity } from "../entities/User.entity";

export class AuthService {

    public static async checkCredentials(email: string, password: string): Promise<boolean> {
        const user: UserEntity|null = await AppDataSource.getRepository(UserEntity).findOneBy({ email: email });

        if (!user)
            return false;

        return bcrypt.compare(password, user.passwordHash);
    }

    public static async generatePasswordHash(password: string): Promise<string> {
        return bcrypt.genSalt(5)
            .then(salt => {
                return bcrypt.hash(password, salt);
            });
    }
}
