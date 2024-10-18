import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // Obtenir tous les utilisateurs
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Obtenir un utilisateur par ID
  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  // Créer un nouvel utilisateur
  create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  // Supprimer un utilisateur par ID
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
