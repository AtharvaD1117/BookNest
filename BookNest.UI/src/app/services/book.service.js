"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const core_1 = require("@angular/core");
const environment_1 = require("../../environments/environment"); // adjust path
@(0, core_1.Injectable)({
    providedIn: 'root'
})
class BookService {
    http;
    apiUrl = `${environment_1.environment.apiUrl}/books`;
    constructor(http) {
        this.http = http;
    }
    getBooks() {
        return this.http.get(this.apiUrl);
    }
    getBookById(id) {
        return this.http.get(`${this.apiUrl}/${id}`);
    }
    addBook(book) {
        return this.http.post(this.apiUrl, book);
    }
    deleteBook(id) {
        return this.http.delete(`${this.apiUrl}/${id}`);
    }
}
exports.BookService = BookService;
