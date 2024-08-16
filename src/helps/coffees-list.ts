import expresso from '../assets/coffees/expresso.svg';
import american from '../assets/coffees/american.svg';
import creamyExpresso from '../assets/coffees/creamy-expresso.svg';
import icedCoffee from '../assets/coffees/iced-coffee.svg';
import coffeeWithMilk from '../assets/coffees/coffee-with-milk.svg';
import latte from '../assets/coffees/latte.svg';
import capuccino from '../assets/coffees/capuccino.svg';
import macchiato from '../assets/coffees/macchiato.svg';
import mochaccino from '../assets/coffees/mochaccino.svg';
import hotChocolate from '../assets/coffees/hot-chocolate.svg';
import cuban from '../assets/coffees/cuban.svg';
import hawaiian from '../assets/coffees/hawaiian.svg';
import arabic from '../assets/coffees/arabic.svg';
import irish from '../assets/coffees/irish.svg';

export interface CoffeeProps {
    id: string;
    name: string;
    description?: string;
    price: number;
    image: string;
    tags: string[];
}

export const Coffees: CoffeeProps[] = [
    {
        id: '01e02583-7136-45d8-89d6-5dcf23db28a4',
        name: 'Expresso Tradicional',
        image: expresso,
        price: 9.9,
        tags:['tradicional']
    },
    {
        id: 'aa3af68b-7c03-4bc9-9421-4f0f75e9dc79',
        name: 'Expresso Americano',
        image: american,
        price: 13.9,
        tags:['tradicional']
    },
    {
        id: '942c84ea-c592-4279-9063-01f22237c4fc',
        name: 'Expresso Cremoso',
        image: creamyExpresso,
        price: 11.99,
        tags:['tradicional']
    },
    {
        id: '6fc07bff-a666-43cc-9b6c-a0db97a938fc',
        name: 'Expresso Gelado',
        image: icedCoffee,
        price: 10.99,
        tags:['tradicional', 'gelado']
    },
    {
        id: 'd0a8260f-d5d7-445e-8a7b-9e2f894e56fb',
        name: 'Café com Leite',
        image: coffeeWithMilk,
        price: 9.9,
        tags:['tradicional', 'com leite']
    },
    {
        id: '1cd40a6e-d82f-4279-861a-fcefc60ffadc',
        name: 'Latte',
        image: latte,
        price: 17.99,
        tags:['tradicional', 'com leite']
    },
    {
        id: 'acdcb59f-85bf-4502-9aee-f7950d3d4387',
        name: 'Capuccino',
        image: capuccino,
        price: 16.99,
        tags:['tradicional', 'com leite']
    },
    {
        id: 'e29e55c4-bc5f-46de-bdca-b35a887b27ef',
        name: 'Macchiato',
        image: macchiato,
        price: 18.99,
        tags:['tradicional', 'com leite']
    },
    {
        id: 'c2f3fa25-eaef-40ed-b69e-1cd7c26b354b',
        name: 'Mochaccino',
        image: mochaccino,
        price: 19.99,
        tags:['tradicional', 'com leite']
    },
    {
        id: '7af723dd-8771-48c7-b2c5-362b414c0c8f',
        name: 'Chocolate Quente',
        image: hotChocolate,
        price: 13.99,
        tags:['especial', 'com leite']
    },
    {
        id: 'ce3dd684-9360-4ffc-85e2-d40dc0de0c89',
        name: 'Cubano',
        image: cuban,
        price: 17.99,
        tags:['especial', 'alcoólico', 'gelado']
    },
    {
        id: '25771c4e-c69c-493c-9ba7-bdb36975b6ab',
        name: 'Havaiano',
        image: hawaiian,
        price: 14.99,
        tags:['especial']
    },
    {
        id: 'bcd336c8-6c40-4118-9f1f-fadc2b8c5613',
        name: 'Árabe',
        image: arabic,
        price: 15.99,
        tags:['especial']
    },
    {
        id: 'ba0cfbff-42f7-472e-b2e5-2568c3d3af39',
        name: 'Irlandês',
        image: irish,
        price: 16.99,
        tags:['especial', 'alcoólico']
    }
];