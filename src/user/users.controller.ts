// src/users/users.controller.ts
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  @Get('profile')
  @UseGuards(JwtAuthGuard) // Protège cette route avec JWT
  getProfile() {
    return { message: 'This is a protected route' }; // Réponse si l'utilisateur est authentifié
  }
}
