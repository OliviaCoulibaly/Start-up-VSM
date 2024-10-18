import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  // Obtenir tous les produits
  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  // Obtenir un produit par son id
  findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({
      where: { id },
      relations: ['user'], // Charger la relation avec l'utilisateur
    });
  }

  // Créer un nouveau produit
  create(product: Product): Promise<Product> {
    return this.productRepository.save(product);
  }

  // Supprimer un produit par son id
  async remove(id: number): Promise<void> {
    await this.productRepository.delete(id);
  }
}
