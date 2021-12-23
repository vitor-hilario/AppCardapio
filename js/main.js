const week_option = document.getElementById('week-option');
const btn = document.getElementById('btn');
const alert = document.getElementById('alert');
const icon_food = document.getElementById('icon-food');
const select = document.getElementById('slt');
const days = document.getElementById('days');
const menu = document.getElementById('menu');

// C1 - MANHÃ, C2 - ALMOÇO, C3 - TARDE \\

const c1 = document.getElementById('c1').children;
const c2 = document.getElementById('c2').children;
const c3 = document.getElementById('c3').children;

// CSS3 \\

const menu_open = () => {
    menu.style.animation = 'animar 1s';
    setTimeout(() => menu.style.animation = 'none', 1000);

    menu.style.height = '500px';
    menu.style.visibility = 'visible';

    select.style.display = 'none'
    days.style.display = 'flex';
    icon_food.style.display = 'none';
}

const menu_close = () => {

    menu.style.height = '0px';

    days.style.display = 'none';
    icon_food.style.display = 'block';
}

// MODIFICAÇÃO NO HTML \\

const post = (d) => { // d = DIA, ex: seg, sex, ter.

    days.children[d].style.color = '#ff6961';
    const URL_DATA = 'https://sheetdb.io/api/v1/h9556mgdx5ywe';

    const getPost = async () => {
        let data = await fetch(URL_DATA);
        data = await data.json()

        const content_card = [{
                day: 'Segunda-Feira',
                morning: {
                    lunch: data[0].Lanche,
                    drink: data[0].Bebida,
                    fruits: data[0].Fruta
                },
                midday: {
                    lunch: data[5].Lanche,
                    drink: data[5].Bebida,
                    fruits: data[5].Fruta
                },
                afternoon: {
                    lunch: data[10].Lanche,
                    drink: data[10].Bebida,
                    fruits: data[10].Fruta
                }
            },
            {
                day: 'Terça-Feira',
                morning: {
                    lunch: data[1].Lanche,
                    drink: data[1].Bebida,
                    fruits: data[1].Fruta
                },
                midday: {
                    lunch: data[6].Lanche,
                    drink: data[6].Bebida,
                    fruits: data[6].Fruta
                },
                afternoon: {
                    lunch: data[11].Lanche,
                    drink: data[11].Bebida,
                    fruits: data[11].Fruta
                }
            },
            {
                day: 'Quarta-Feira',
                morning: {
                    lunch: data[2].Lanche,
                    drink: data[2].Bebida,
                    fruits: data[2].Fruta
                },
                midday: {
                    lunch: data[7].Lanche,
                    drink: data[7].Bebida,
                    fruits: data[7].Fruta
                },
                afternoon: {
                    lunch: data[12].Lanche,
                    drink: data[12].Bebida,
                    fruits: data[12].Fruta
                }
            },
            {
                day: 'Quinta-Feira',
                morning: {
                    lunch: data[3].Lanche,
                    drink: data[3].Bebida,
                    fruits: data[3].Fruta
                },
                midday: {
                    lunch: data[8].Lanche,
                    drink: data[8].Bebida,
                    fruits: data[8].Fruta
                },
                afternoon: {
                    lunch: data[13].Lanche,
                    drink: data[13].Bebida,
                    fruits: data[13].Fruta
                }
            },
            {
                day: 'Sexta-Feira',
                morning: {
                    lunch: data[4].Lanche,
                    drink: data[4].Bebida,
                    fruits: data[4].Fruta
                },
                midday: {
                    lunch: data[9].Lanche,
                    drink: data[9].Bebida,
                    fruits: data[9].Fruta
                },
                afternoon: {
                    lunch: data[14].Lanche,
                    drink: data[14].Bebida,
                    fruits: data[14].Fruta
                }
            }
        ]
        c1[0].innerHTML = content_card[d].morning.lunch;
        c1[1].innerHTML = content_card[d].morning.drink;
        c1[2].innerHTML = content_card[d].morning.fruits;

        c2[0].innerHTML = content_card[d].midday.lunch;
        c2[1].innerHTML = content_card[d].midday.drink;
        c2[2].innerHTML = content_card[d].midday.fruits;

        c3[0].innerHTML = content_card[d].afternoon.lunch;
        c3[1].innerHTML = content_card[d].afternoon.drink;
        c3[2].innerHTML = content_card[d].afternoon.fruits;
    }
    getPost();
}

// VERIFICAÇÃO \\

const verify = () => {

    if (week_option.value > 0) {
        for (let i = 0; i < days.children.length; i++) {
            days.children[i].style.color = 'black';
        }
        let v = week_option.value - 1;
        select.children[0].style.color = '#403C3B';
        alert.style.display = 'none';
        post(v);
        menu_open();

    } else {
        select.children[0].style.color = '#ff6961';
        select.style.display = 'flex';
        alert.style.display = 'inline-block';
        menu_close();
    }
}

btn.addEventListener('click', () => verify());