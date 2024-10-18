import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Category } from './entities/category.entity';
import { User } from './entities/user.entity';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { Post } from './entities/post.entity';
import { Newsletter } from './entities/newsletter.entity';
import { Testimonial } from './entities/testimonial.entity';
import { Contact } from './entities/contact.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',  // Remplacez par le mot de passe root correct
      database: 'vita_cereals_db',
      entities: [
        Product,
        Category,
        User,
        Order,
        OrderItem,
        Post,
        Newsletter,
        Testimonial,
        Contact,
      ],
      synchronize: true,  // Pour synchroniser la structure de la base de données à chaque lancement
    }),
    TypeOrmModule.forFeature([
      Product,
      Category,
      User,
      Order,
      OrderItem,
      Post,
      Newsletter,
      Testimonial,
      Contact,
    ]),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
