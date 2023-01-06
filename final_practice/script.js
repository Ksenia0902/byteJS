const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
  { id: 1, author: "Фицджеральд", name: "Великий Гетсби", amount: 5 },
  { id: 2, author: "Толстой", name: "Анна Каренина", amount: 4 },
  { id: 3, author: "Оруел", name: "1984", amount: 1 },
  { id: 4, author: "Сервантес", name: "Дон Кихот", amount: 2 },
  { id: 5, author: "Достоевский", name: "Преступление и наказание", amount: 1 },
];

function library() {
    let action = prompt('Action?');

    if (action === null) {
        prompt('Bye!');

        return
    };

    action = action.toLowerCase().trim();
   
    switch (action) {
        case 'take':
            takeBook();
            break;
        case 'return':
            returnBook();
            break;
        case 'add':
            addBook();
            break;
        default:
            alert('No action!');
    }
};

const takeBook = () => {
    const availableBookNames = books
        .filter((book) => book.amount !== 0)
        .map((book) => `${book.author}: "${book.name}"`)
        .join('\n')
    
    let desiredBookName = prompt(`Enter book name or author: \n${availableBookNames}`);

    if (!desiredBookName) {
        alert('No book name or author');

        return;
    }

    desiredBookName = desiredBookName.trim().toLowerCase()


    let desiredBook = books
        .find((book) => {
             return book.name.toLowerCase() === desiredBookName
        })

    if (!desiredBook) {
        
        desiredBook = books
        .find((book) => {
             return book.author.toLowerCase() === desiredBookName
        })

    } else {
        alert('No available books');

        return;
    }

    if (desiredBook.amount === 0) {
        alert('Sorry, this book is reading by someone else');

        return
    }

    desiredBook.amount--;

    alert(`Thank you your book id ${desiredBook.id}`);
};

const returnBook = () => {
    const returningBookId = Number(prompt('Enter book Id'));

    if (!returningBookId) {
        alert('No book id!');

        return
    };

    const currentBook = books.find((book) => book.id === returningBookId);

    if (!currentBook) {
        alert('Invalid book id');

        return
    };

    if (currentBook.amount !== 0) {
        alert('This book is not reading now');

        return
    };

    currentBook.amount++;
    alert(`Thanks, come again! Do you like "${currentBook.name}"? `);
};

const addBook = () => {
    const name = prompt('Book name:');
    const author = prompt('Book Author');

    const newBook = {
        name,
        author,
        amount: 1,
        id: generateBookId(),
    };

    console.log(`newBook`, newBook);
    books.push(newBook);

    alert(`Book was added! Library id: ${newBook.id}`);
};

function generateBookId() {
    let isBookWithIdExists = true;
    let generatedId;

  do {
    generatedId = Math.ceil(Math.random() * 100);
    isBookWithIdExists = Boolean(books.find((book) => book.id === generatedId));
  } while (isBookWithIdExists);

  return generatedId;
};