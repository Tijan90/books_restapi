import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Book } from "src/schemas/Book.schema";
import { CreateBookDto } from "./Dto/CreateBook.dto";
import { UpdateBookDto } from "./Dto/UpdateBook.dto";

@Injectable()
export class BooksService {
    constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

    createBook(createBookDto: CreateBookDto) {
        const newBook = new this.bookModel(createBookDto)
        return newBook.save()
    }

    getBooks() {
        return this.bookModel.find()
    }

    getBookById(id: string) {
        return this.bookModel.findById(id)
    }

    updateBook(id: string, updateBookDto: UpdateBookDto) {
        return this.bookModel.findByIdAndUpdate(id, updateBookDto, { new: true })
    }

    deleteBook(id: string) {
        return this.bookModel.findByIdAndDelete(id)
    }
}