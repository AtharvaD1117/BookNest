"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const http_1 = require("@angular/common/http");
const powerbi_component_1 = require("./powerbi/powerbi.component");
@(0, core_1.Component)({
    selector: 'app-root',
    standalone: true,
    imports: [common_1.CommonModule, http_1.HttpClientModule, powerbi_component_1.PowerBIComponent], // ✅ Added HttpClientModule
    templateUrl: './app.html',
    styleUrls: ['./app.css']
})
class AppComponent {
    bookService;
    books = [];
    constructor(bookService) {
        this.bookService = bookService;
    }
    ngOnInit() {
        this.loadBooks();
    }
    loadBooks() {
        this.bookService.getBooks().subscribe({
            next: (data) => (this.books = data),
            error: (err) => console.error('Error fetching books', err)
        });
    }
    deleteBook(id) {
        if (confirm('Are you sure you want to delete this book?')) {
            this.bookService.deleteBook(id).subscribe({
                next: () => {
                    this.books = this.books.filter(book => book.id !== id);
                },
                error: (err) => console.error('Error deleting book', err)
            });
        }
    }
}
exports.AppComponent = AppComponent;
