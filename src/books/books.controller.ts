import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { BooksService } from "./books.service";
import { CreateBookDto } from "./Dto/CreateBook.dto";
import mongoose from "mongoose";
import { UpdateBookDto } from "./Dto/UpdateBook.dto";

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {}

    @Post()
    @UsePipes(new ValidationPipe)
    createBook(@Body() createBookDto: CreateBookDto) {
        return this.booksService.createBook(createBookDto)

    }

    @Get()
    getBooks() {
        return this.booksService.getBooks()
    }

    @Get(':id')
    async getBookById(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id)        
        if(!isValid) throw new HttpException('Book not found', 404)

        const findBook = await this.booksService.getBookById(id)

        if(!findBook) throw new HttpException('Book not found', 404)
        return findBook
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe)
    async updateBook(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
        const isValid = mongoose.Types.ObjectId.isValid(id)        
        if(!isValid) throw new HttpException('Invalid Id', 400)
        
        const updatedBook = await this.booksService.updateBook(id, updateBookDto)
        if(!updatedBook) throw new HttpException('Book not found', 404)
        return updatedBook
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        const isValid = mongoose.Types.ObjectId.isValid(id)        
        if(!isValid) throw new HttpException('Invalid Id', 400)

        const deletedBook = await this.booksService.deleteBook(id)
        if(!deletedBook) throw new HttpException('Book not found', 404)
        return deletedBook
    }
}