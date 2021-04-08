const productArray = [
    {
        'name': 'MICRO',
        'title': 'MICRO SINGLE MATT WHITE',
        'id': ['171230', '171229', '190418', '190417', '190416', '190415', '190414', '190413', '171231', '190419', '190420', '240875', '240876', '240877'],
        'colors': ['SINGLE MATT WHITE', 'SINGLE SATIN BLACK', 'SINGLE GLOSS BLACK', 'SINGLE GLOSS WHITE', 'SINGLE URBAN GREY', 'SINGLE CREME', 'SINGLE SKY BLUE', 'SINGLE RACE RED', 'SINGLE STAINLESS STEEL', 'SINGLE BRONZE', 'SINGLE GOLD', 'SINGLE LUXE CHROME', 'SINGLE LUXE COPPER', 'SINGLE LUXE GOLD'],
        'text': 'Последнее поколение нашего классического дизайна Micro - оригинальный и небольшой высококачественный громкоговоритель. Он оснащен 4-х дюймовым цельнометаллическим сферическим корпусом, 3-х дюймовым специально разработанным динамиком и переработанной клеммной зоной. Включает новый аксессуар Isolation2 для монтажа.',
        'link': 'https://pult.ru/product/polochnaya-akustika-gallo-acoustics-micro-matt-white',
        'priceOld': '17 990.00 р.',
        'price': '13 490.00 р.',
    }
];

function generateProduct() {
    const menu = document.querySelector('.menu');

    productArray.forEach(item => {
        const { name, id, colors, text, link, priceOld, price } = item;
        menu.insertAdjacentHTML('afterend', `
        <section class="product">
            <div class="product__card">
                <div class="product__picture">
                    <h2 class="product__picture-title">${name} ${colors[0]}</h2>
                    <img class="product__img" src="images/product/micro/${id[0]}.jpg" alt="${name} ${colors[0]}" />
                </div>
                <div class="product__description">
                    <h2 class="product__title">${name} ${colors[0]}</h2>
                    <p class="product__text">
                        ${text}
                    </p>
                    <div class="product__wrapper">
                        <a class="product__button">купить</a>
                        <div class="product__prices">
                            <p class="product__price product__price--old">${priceOld}</p>
                            <p class="product__price">${price}</p>
                        </div>
                    </div>
                </div>
                <div class="product__grid">
                    <p class="product__choice">Выбери свой цвет</p>
                    <ul class="product__colors">

                    </ul>
                </div>
            </div>
        </section>
        `);
    });
}

function generatePhoto() {
    for (let i = 0; i < productArray[0].id.length; i++) {
        const productColors = document.querySelector('.product__colors');

        productColors.insertAdjacentHTML('beforeend', `
            <li class="product__color">
                <a href="/micro/${productArray[0].id[i]}#product">
                    <img
                        alt="MICRO ${productArray[0].colors[i]}"
                        class="product__img-color"
                        src="images/product/micro/small_${productArray[0].id[i]}.jpg"
                    />
                </a>
            </li>
        `);
    }
}

menuLink.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        generateProduct();
        generatePhoto();
    });
});