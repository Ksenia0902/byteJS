//1

// Добавление нескольких элементов
const fruits = ["banana", "apple", "cherry", "pear"];

// const renderList = (arr) => {
//     const list = document.createElement('ul');

//     arr.forEach(item => {
//         const listItem = document.createElement('li');
//         console.log(listItem)
//         listItem.innerText = item;

//         list.append(listItem);
//     });

//     console.dir(list);
//     document.body.append(list)
// }

// renderList(fruits);

// const renderList = (arr) => {
//     const list = document.createElement('ul');

//     arr.forEach(item => {
//         list.innerHTML = `<li>${item}</li>`
//     });

//     console.dir(list);
//     document.body.append(list)
// }

// renderList(fruits)

const renderList = (arr) => {
    const list = document.createElement('ul');
    list.innerHTML = arr
        .map((item) => `<li>${item}</li>`)
        .join('');

    console.dir(list);
    document.body.append(list)
};
renderList(fruits)

// Добавление элементов в элементы, "сброка компонентов"
// Предстваим, что нам нужно отрендерить верстку,
// небольшую статью в блоге.
// Она состоит из несколькх элементов:
// - заголовка
// - подзаговка
// - несольких абзацев текста
// - все элементы должны быть завернуты в контейнер

// const createBlogArticle = (title, subtitle, text) => {
//     const blogContainer = document.createElement('div');
//     const titleElement = document.createElement('h2');
//     const subtitleElement = document.createElement('h3');
//     const textContainer = document.createElement('div');

//     titleElement.innerText = title;
//     subtitleElement.innerText = subtitle;

//     text.forEach(paragraph => {
//         const paragraphElement = document.createElement('p');
//         paragraphElement.innerText = paragraph;

//         textContainer.append(paragraphElement);
//     });

//     blogContainer.append(titleElement, subtitleElement, textContainer);
//     console.log(blogContainer)

//     return blogContainer;
// };

// const blogItemElement = createBlogArticle(
//     'Hello Word!',
//     'My first article!',
//     [
//         'a',
//         'b',
//     ]
// );
// document.body.append(blogItemElement)


const createBlogArticle = (title, subtitle, text) => {
    const blogContainer = document.createElement('div');

    const articleHTML = `
    <h2>${title}</h2>
    <h3>${subtitle}</h3>
    <div>
    ${text
        .map((textItem) => `<p>${textItem}</p>`)
        .join('')
    }
    </div>
    `
    blogContainer.innerHTML = articleHTML

    return blogContainer;
};

const blogItemElement = createBlogArticle(
    'Hello Word!',
    'My first article!',
    [
        'a',
        'b',
    ]
);
document.body.append(blogItemElement)
