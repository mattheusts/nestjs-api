import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma.service';

export type CreateUserDTO = {
  name: string;
  username: string;
  email: string;
  password: string;
};

@Injectable()
export class CreateUserUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(data: CreateUserDTO) {
    const result = await this.prisma.users.findFirst({
      where: {
        OR: [
          {
            username: data.username,
          },
          {
            email: data.email,
          },
        ],
      },
    });

    if (!result) {
      throw new Error('User already exists');
    }

    const user = await this.prisma.users.create({
      data,
    });

    return user;
  }
}
