import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Endpoint pour l'inscription
  @Post('register')
  async register(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    // Validation de base (assurez-vous que ces valeurs ne sont pas vides)
    if (!name || !email || !password) {
      throw new BadRequestException('Tous les champs sont requis.');
    }

    try {
      // Appel du service pour l'inscription
      const newUser = await this.authService.register(name, email, password);
      return { message: 'Inscription réussie', user: newUser };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  // Endpoint pour la connexion
  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    // Validation de base
    if (!email || !password) {
      throw new BadRequestException('Email et mot de passe sont requis.');
    }

    try {
      // Appel du service pour la connexion
      const result = await this.authService.login(email, password);
      return { message: 'Connexion réussie', ...result };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
