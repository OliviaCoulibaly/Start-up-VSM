import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from '../dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async createContact(@Body() createContactDto: CreateContactDto) {
    // Validation de base
    const { name, email, message, phone } = createContactDto;
    if (!name || !email || !message) {
      throw new BadRequestException('Tous les champs sont requis.');
    }

    // Appel du service pour sauvegarder les données dans la base de données
    const contact = await this.contactService.createContact(createContactDto);
    return { message: 'Votre message a été envoyé avec succès', contact };
  }
}
