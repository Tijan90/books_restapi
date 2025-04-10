import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BooksModule } from "./books/books.module";
import { ConfigModule } from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
          }),
        MongooseModule.forRoot(`${process.env.MONGODB_URI}`),
        BooksModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {}