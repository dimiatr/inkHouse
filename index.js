// header

const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');


function toggleMenu(id, menu) {
    id.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    })
}

toggleMenu(openMenu, menu);
toggleMenu(closeMenu, menu);


// main

const cards = document.getElementById('cards');
const products = document.getElementById('products');
const country = products.firstElementChild.nextElementSibling.querySelectorAll('*');
const francePicts = document.getElementById('francePicts');


const arrFrance = [
    {
        img: 'img/france1.png',
        author: 'Марсель Руссо',
        name: 'Охота Амура',
        description: 'Холст, масло (50х80)',
        price: 14500,
    },
    {
        img: 'img/france2.png',
        author: 'Анри Селин',
        name: 'Дама с собачкой',
        description: 'Акрил, бумага (50х80)',
        price: 16500,
    },
    {
        img: 'img/france3.png',
        author: 'Франсуа Дюпон',
        name: 'Процедура',
        description: 'Цветная полиграфия (40х60)',
        price: 200000,
    },
    {
        img: 'img/france4.png',
        author: 'Луи Детуш',
        name: 'Роза',
        description: 'Бумага, акрил (50х80)',
        price: 12000,
    },
    {
        img: 'img/france5.png',
        author: 'Франсуа Дюпон',
        name: 'Птичья трапеза',
        description: 'Цветная полиграфия (40х60)',
        price: 22500,
    },
    {
        img: 'img/france6.png',
        author: 'Пьер Моранж',
        name: 'Пейзаж с рыбой',
        description: 'Цветная полиграфия (40х60)',
        price: 200000,
    },
]

const arrGermany = [
    {
        img: 'img/germany1.png',
        author: 'Курт Вернер',
        name: 'Над городом',
        description: 'Цветная литография (40х60) ',
        price: 16000,
    },
    {
        img: 'img/germany2.png',
        author: 'Макс Рихтер',
        name: 'Птенцы',
        description: 'Холст, масло (50х80) ',
        price: 14500,
    },
    {
        img: 'img/germany3.png',
        author: 'Мартин Майер',
        name: 'Среди листьев',
        description: 'Цветная литография (40х60) ',
        price: 20000,
    },
    {
        img: 'img/germany4.png',
        author: 'Герман Беккер',
        name: 'Яркая птица',
        description: 'Цветная литография (40х60) ',
        price: 13000,
    },
    {
        img: 'img/germany5.png',
        author: 'Вульф Бауэр',
        name: 'Дятлы',
        description: 'Бумага, акрил (50х80) ',
        price: 20000,
    },
    {
        img: 'img/germany6.png',
        author: 'Вальтер Хартманн',
        name: 'Большие воды',
        description: 'Бумага, акрил (50х80) ',
        price: 23000,
    },
]

const arrEngland = [
    {
        img: 'img/England1.png',
        author: 'Пол Смит',
        name: 'Дикий зверь',
        description: 'Акварель, бумага (50х80) ',
        price: 19500,
    },
    {
        img: 'img/England2.png',
        author: 'Джон Уайт',
        name: 'Скалистый берег',
        description: 'Цветная литография (40х60) ',
        price: 17500,
    },
    {
        img: 'img/England3.png',
        author: 'Джим Уотсон',
        name: 'Река и горы',
        description: 'Акварель, бумага (50х80) ',
        price: 20500,
    },
    {
        img: 'img/England4.png',
        author: 'Юджин Зиллион',
        name: 'Белый попугай',
        description: 'Цветная литография (40х60) ',
        price: 15500,
    },
    {
        img: 'img/England5.png',
        author: 'Эрик Гиллман',
        name: 'Ночная рыба',
        description: 'Бумага, акрил (50х80) ',
        price: 12500,
    },
    {
        img: 'img/England6.png',
        author: 'Альфред Барр',
        name: 'Рыжий кот',
        description: 'Цветная литография (40х60) ',
        price: 21000,
    },
]

const stateDefaultBtn = ['bg-firm_focusGreen', 'text-firm_black'];
const activeStateBtn = ['bg-firm_hGreen', 'text-white'];
const btnDefault = country[0];

country.forEach(btnCountry => {

    btnCountry.id === btnDefault.id ? activeStateBtn.forEach(className => btnDefault.classList.add(className)) : stateDefaultBtn.forEach(className => btnCountry.classList.add(className));

    if (btnCountry.className.includes('text-white')) {
        arrFrance.forEach(el => {
            createCard(cards, el.img, el.author, el.name, el.description, el.price);
        })
    }

    btnCountry.addEventListener('click', (e) => {
        country.forEach(btn => {
            activeStateBtn.forEach(className => btn.classList.remove(className));
            stateDefaultBtn.forEach(className => btn.classList.add(className));
            if (e.currentTarget) {
                stateDefaultBtn.forEach(className => e.currentTarget.classList.remove(className));
                activeStateBtn.forEach(className => e.currentTarget.classList.add(className));
            }
        })
        cards.innerHTML = '';

        let howCountryBtn = e.currentTarget.id;
        openCatalog(howCountryBtn)
    })
})

function styleBtn(arg) {
    let language = document.getElementById(arg)

    country.forEach(btn => {
        activeStateBtn.forEach(el => btn.classList.remove(el));
        stateDefaultBtn.forEach(el => btn.classList.add(el));
        activeStateBtn.forEach(el => language.classList.add(el));
    })
}

francePicts.addEventListener('click', () => {
    openCatalog('fr');
    styleBtn('fr');
});


function openCatalog(howBtn) {
    cards.innerHTML = '';
    
    switch (howBtn) {
        case 'fr': {
            arrFrance.forEach(el => {
                createCard(cards, el.img, el.author, el.name, el.description, el.price);
            })
            break
        }
        case 'ge': {
            arrGermany.forEach(el => {
                createCard(cards, el.img, el.author, el.name, el.description, el.price);
            })
            break
        }
        case 'en': {
            arrEngland.forEach(el => {
                createCard(cards, el.img, el.author, el.name, el.description, el.price);
            })
            break
        }
    }
}


function createCard(arg, pathImg, author, name, description, price) {

    let article = document.createElement('article');
    let figure = document.createElement('figure');
    let img = document.createElement('img');
    let figcaption = document.createElement('figcaption');
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let h5 = document.createElement('h5');
    let p = document.createElement('p');
    let button = document.createElement('button');

    arg.append(article);
    article.classList.add('p-5', 'bg-firm_lGreen', 'flex', 'flex-col', 'gap-[10px]', 'min-w-[340px]')
    article.append(figure);
    figure.classList.add('flex', 'flex-col', 'gap-5')
    figure.append(img);
    img.src = pathImg;
    img.alt = name;
    figure.append(figcaption);
    figcaption.classList.add('text-firm_gray', 'text-lg');
    figcaption.textContent = author;

    article.append(div);
    div.classList.add('flex', 'flex-col', 'gap-2', 'text-firm_black');
    div.append(h2);
    h2.classList.add('text-[30px]');
    h2.textContent = name;
    div.append(h5);
    h5.classList.add('text-lg')
    h5.textContent = description;

    if (div.className.includes('text-firm_black')) {
        let div = document.createElement('div');

        article.append(div);
        div.classList.add('flex', 'flex-col', 'mt-5', 'gap-5', 'text-firm_hoverGreen')
        div.append(p);
        p.classList.add('text-2xl');
        let format = String(price).slice(0, 2) + ' ' + String(price).slice(2);
        p.textContent = format + 'руб';
        div.append(button);
        button.classList.add('border', 'border-firm_hoverGreen', 'rounded', 'py-5', 'text-xl', 'transition-all', 'duration-200', 'ease-linear', 'hover:bg-firm_hGreen', 'hover:text-white', 'hover:border-firm_hGreen');
        button.textContent = 'В корзину';
    }
}


// footer

const frCatalog = document.getElementById('frCatalog');
const enCatalog = document.getElementById('enCatalog');
const geCatalog = document.getElementById('geCatalog');

function moveAnchor(e, country) {
    e.preventDefault();

    openCatalog(country)
    styleBtn(country)

    const targetId = e.target.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);

    setTimeout(() => {
        targetEl.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}


frCatalog.addEventListener('click', e => moveAnchor(e, 'fr'))
enCatalog.addEventListener('click', e => moveAnchor(e, 'en'))
geCatalog.addEventListener('click', e => moveAnchor(e, 'ge'))

