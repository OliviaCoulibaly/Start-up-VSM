import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from '../entities/product.entity';

@Controller('products') // Route de base pour les produits
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // Obtenir tous les produits (GET /products)
  @Get()
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  // Obtenir un produit par ID (GET /products/:id)
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Product> {
    return this.productService.findOne(id);
  }

  // Créer un nouveau produit (POST /products)
  @Post()
  create(@Body() product: Product): Promise<Product> {
    return this.productService.create(product);
  }

  // Supprimer un produit par ID (DELETE /products/:id)
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.productService.remove(id);
  }
}
