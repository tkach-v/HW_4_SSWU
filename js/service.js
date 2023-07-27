const filters = document.querySelectorAll('.service__filter-item');
const serviceContent = document.querySelector('.service__content');

function removeSelectedInOthers(item) {
    filters.forEach(otherItem => {
        if (otherItem !== item) {
            otherItem.classList.remove('service__filter-item_selected');
        }
    });
}

// create a card
function createCard(title, text, additionalClasses = []) {
    const name = document.createElement('div');
    name.classList.add('service__card-title');
    name.innerHTML = title;
    const desc = document.createElement('div');
    desc.classList.add('service__card-desc');
    desc.innerHTML = text;

    const card = document.createElement('div');
    card.classList.add('service__card', ...additionalClasses);
    card.appendChild(name);
    card.appendChild(desc);
    return card;
}

function getData(name) {
    return fetch(`https://jsonplaceholder.typicode.com/${name}`)
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

// create and add content to many cards
async function renderCards(itemName, start, limit) {
    const data = await getData(itemName);

    let title = 'title';
    let desc = 'body';

    if (itemName === 'comments') {
        title = 'name';
    } else if (itemName === 'users') {
        title = 'username';
        desc = 'name';
    }

    const fragment = document.createDocumentFragment();
    for (let i = start; i < start + limit; i++) {
        const card = createCard(data[i][title], data[i][desc], itemName === 'comments' ? ['service__card_special'] : []);
        fragment.appendChild(card);
    }

    return fragment;
}

async function filterClickHandler(item) {
    const itemName = item.textContent.toLowerCase();
    if (itemName === 'all') {
        item.classList.add('service__filter-item_selected');
        removeSelectedInOthers(item);
        serviceContent.innerHTML = '';
        let row1 = document.createElement('div');
        row1.classList.add('service__content-row');


        filters.forEach(otherItem => {
            if (otherItem !== item) {
                renderCards(otherItem.textContent.toLowerCase(), 0, 1)
                    .then(fragment => {
                    row1.appendChild(fragment);
                });
            }
        });
        serviceContent.appendChild(row1);
    } else if (item.classList.contains('service__filter-item_selected')) {
        filters[0].click();
    } else {
        item.classList.add('service__filter-item_selected');
        removeSelectedInOthers(item);
        const fragment1 = await renderCards(itemName, 0, 3);
        const fragment2 = await renderCards(itemName, 3, 2);
        serviceContent.innerHTML = '';
        let row1 = document.createElement('div');
        row1.classList.add('service__content-row');
        let row2 = document.createElement('div');
        row2.classList.add('service__content-row');
        row1.appendChild(fragment1);
        row2.appendChild(fragment2);
        serviceContent.appendChild(row1);
        serviceContent.appendChild(row2);
    }
}

filters.forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        filterClickHandler(item);
    });
});

// show all at start
filters[0].click();
