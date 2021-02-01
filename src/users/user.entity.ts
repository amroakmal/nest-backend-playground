import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcryptjs';

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true
    })
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    constructor(username: string, password: string, salt: string) {
        super();
        this.username = username;
        this.password = password;
        this.salt = salt;
    }

    async validatePassword(assumedPassword: string): Promise<boolean> {
        const assumedPasswordHashed = await bcrypt.hash(assumedPassword, this.salt);
        
        return assumedPasswordHashed === this.password;
    }
}