import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entities/user.entity';

@Controller('users') // La route de base pour les utilisateurs
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Route pour obtenir tous les utilisateurs (GET /users)
  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  // Route pour obtenir un utilisateur par ID (GET /users/:id)
  @Get(':id')
  findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  // Route pour créer un utilisateur (POST /users)
  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  // Route pour supprimer un utilisateur par ID (DELETE /users/:id)
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.userService.remove(id);
  }
}
