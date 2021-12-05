import { useState } from "react"

const myProfile = {
    name: "UTRGV User",
    profile_image: require("../assets/images/profile.png"),
    address: "1201 W University Dr, Edinburg, TX 78539, United States"
}

const categories = [
    {
        id: 1,
        name: "Fast Food",
        icon: require("../assets/icons/burger.png")
    },
    {
        id: 2,
        name: "Fruit Item",
        icon: require("../assets/icons/cherry.png")
    },
    {
        id: 3,
        name: "Rice Item",
        icon: require("../assets/icons/rice.png")
    }
]

//////////////////////////Restaurants list///////////////////////////////
const chickFilA = {
    id: 1,
    name: "Chick-fil-A",
    description: " Chicken",
    distance: "12-15min - $1.99 Delivery",
    image: require("../assets/Chick-fil-a/chick-fil-a-logo.png")
}

const pizzaHut = {
    id: 2,
    name: "Pizza Hut",
    description: "Pizza",
    address: "1804 W University Dr",
    distance: "12-15min - $1.99 Delivery",
    image: require("../assets/PizzaHut/PizzaHutLogo.png")
}
 
const starbucks = {
    id: 3,
    name: "Starbucks",
    description: "Coffee",
    address: "1522 W University Dr",
    distance: "12-15min - $1.99 Delivery",
    image: require("../assets/Starbucks/Starbucks-Logo.png")
}

const sandella = {
    id: 4,
    name: "Sandella's Flatbread Cafe",
    description: "Flatbread",
    distance: "12-15min - $1.99 Delivery",
    image: require("../assets/Sandella/Sandella'sLogo.jpg")
}




/////////////////////////////////////menu list//////////////////////////////
const pizza = {
    id: 1,
    name: "Queen Pizza",
    description: "Tomato, mozzarella, basil, parmigiano-reggiano.",
    price: "15.99",
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/queenpizza.png")
}
const salad = {
    id: 2,
    name: "Swiss Chard Caesar",
    description: "Pangrattato and paresan with lemon anchovy dressing",
    categories: [1, 2],
    price: "15.99",
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/salad.png")
}
const drink = {
    id: 3,
    name: "Coke",
    description: "12 oz Coca-Cola",
    categories: [1, 2],
    price: "15.99",
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/drink.png")
}
//Chick-fil-A Main dish
//Original Chicken
const chickenSammich = {
    id: 4,
    name: "Chick-fil-A® Chicken Sandwich",
    description: "A boneless breaded breast of chicken seasoned to perfection.",
    price: "3.99",
    calories: 440,
    isFavourite: true,
    image: require("../assets/Chick-fil-a/MainDish/ChickenSammich.png")
}

//Spicy Chicken
const spicyChicken = {
    id: 5,
    name: "Spicy Deluxe w/ Pepper Jack",
    description: "Chicken seasoned with a spicy blend of peppers",
    price: "4.25",
    calories: 550,
    isFavourite: true,
    image: require("../assets/Chick-fil-a/MainDish/SpicyDeluxeSandwich.png")
}

const grilledChicken = {
    id: 6,
    name: "Grilled Chicken Sandwich",
    description: "Grilled boneless breast of chicken, served on a toasted multigrain bun.",
    price: "3.99",
    calories: 550,
    isFavourite: true,
    image: require("../assets/Chick-fil-a/MainDish/GrilledChickenSandwich.png")
}

/////////Pizza Hut////////////////
////Main Dish////
const pepperoni = {
    id: 15,
    name: "Pepperoni Personal Pizza",
    description: "Pepperoni and mozzarella cheese pizza",
    price: "5.99",
    calories: 400,
    isFavourite: true,
    image: require("../assets/PizzaHut/MainDish/Pepperoni.png")
}

const meatLovers = {
    id: 16,
    name: "Meatlovers Personal Pizza",
    description: "Packed with pepperoni, Italian sausage, ham, bacon, seasoned pork and beef.",
    price: "6.99",
    calories: 700,
    isFavourite: true,
    image: require("../assets/PizzaHut/MainDish/MeatLovers.png")
}

const cheese = {
    id: 17,
    name: "Cheese Pizza",
    description: "Classic cheese pizza",
    price: "4.99",
    calories: 300,
    isFavourite: true,
    image: require("../assets/PizzaHut/MainDish/Cheese.png")
}

////////////Starbucks//////////////
////Main Dish/////
const hamPanini = {
    id: 20,
    name: "Ham & Swiss Panini",
    description: "Ham and Swiss cheese meld with Dijon butter an extraordinary feel-good taste.",
    categories: [1, 2],
    price: "4.99",
    calories: 480,
    isFavourite: true,
    image: require("../assets/Starbucks/MainDish/HamPanini.png")
}

const chickenPanini = {
    id: 21,
    name: "Chicken & Bacon Panini",
    description: "Herbed chicken piled high on toasted apple brioche, topped with bacon and maple mustard.",
    categories: [1, 2],
    price: "6.99",
    calories: 600,
    isFavourite: true,
    image: require("../assets/Starbucks/MainDish/ChickenPanini.png")
}

const grilledCheese = {
    id: 22,
    name: "Grilled Cheese Sandwich",
    description: "Cheddar and mozzarella on sourdough bread, topped with a Parmesan butter.",
    categories: [1, 2],
    price: "4.99",
    calories: 520,
    isFavourite: true,
    image: require("../assets/Starbucks/MainDish/GrilledCheese.png")
}




/////Starbucks drinks/////
const frappuccino = {
    id: 24,
    name: "Caramel Frappuccino",
    description: "Caramel syrup, milk, ice and coffee.",
    categories: [1, 2],
    price: "4.99",
    calories: 78,
    isFavourite: true,
    image: require("../assets/Starbucks/Drinks/Frappuccino.png")
}

const cappuccino = {
    id: 25,
    name: "Cappuccino",
    description: "Dark, rich espresso under a smoothed and stretched layer of thick milk foam.",
    categories: [1, 2],
    price: "5.99",
    calories: 78,
    isFavourite: true,
    image: require("../assets/Starbucks/Drinks/Cappuccino.png")
}

const coldBrew = {
    id: 26,
    name: "Cold-Brew Coffee",
    description: "slow-steeped in cool water for 20 hours",
    categories: [1, 2],
    price: "3.99",
    calories: 78,
    isFavourite: true,
    image: require("../assets/Starbucks/Drinks/Cold-Brew.png")
}



////////////Sandella's Flatbread Cafe/////////
/////////Main Dish///////////
const brazilianFlatbread = {
    id: 40,
    name: "Brazilian Bacon Grilled Flatbread",
    description: "Brazilian sauce, turkey bacon, olives, red peppers & cheese.",
    categories: [1, 2],
    price: "5.99",
    calories: 560,
    isFavourite: true,
    image: require("../assets/Sandella/MainDish/BrazilianFlatbread.png")
}

const turkeyPanini = {
    id: 41,
    name: "Tangy Turkey & Mozzarella Panini",
    description: "Turkey breast, mozzarella & tomatoes w/ Brazilian sauce.",
    categories: [1, 2],
    price: "5.99",
    calories: 520,
    isFavourite: true,
    image: require("../assets/Sandella/MainDish/TurkeyPanini.png")
}

const buffaloWrap = {
    id: 42,
    name: "Buffalo Chicken Wrap",
    description: "Grilled chicken, light blue cheese dressing, lettuce, tomato & buffalo wing sauce.",
    categories: [1, 2],
    price: "4.99",
    calories: 400,
    isFavourite: true,
    image: require("../assets/Sandella/MainDish/BuffaloChickenWrap.png")
}


///////////////////////////////////////////////////////////////////////////////////////
// const menu = [
//     {
//         id: 1,
//         name: "Milkflower",
//         list: [
//             pizza, salad, drink,
//         ]
//     },
//     {
//         id: 2,
//         name: "Taco Bell",
//         list: [
//             chickFilA, burgerKing, wrapSandwich,
//         ]
//     },

// ]

///////////////////////////////////////////////////////////////////////////////////////
//Menu List based on Restaurant
// const menuHorizontal = [
//     {
//         id: 1,
//         name: "Main Dish",
//         list: [
//             pizza, salad, drink
//         ]
//     },
//     {
//         id: 2,
//         name: "Starters",
//         list: [
//             salad, drink, pizza       ]
//     },
//     {
//         id: 3,
//         name: "Drinks",
//         list: [
//             salad, drink, pizza      ]
//     },

// ]

const menuChickFilA = [
    {
        id: 1,
        name: "Main Dish",
        list: [
            chickenSammich, spicyChicken, grilledChicken
        ]
    },
    {
        id: 2,
        name: "Starters",
        list: [
            salad, drink, pizza       ]
    },
    {
        id: 3,
        name: "Drinks",
        list: [
            salad, drink, pizza     ]
    },

]

const menuPizzaHut = [
    {
        id: 1,
        name: "Main Dish",
        list: [
            pepperoni, meatLovers, cheese
        ]
    },
    {
        id: 2,
        name: "Starters",
        list: [
            salad, drink, pizza       ]
    },
    {
        id: 3,
        name: "Drinks",
        list: [
            salad, drink, pizza     ]
    },

]

const menuStarbucks = [
    {
        id: 1,
        name: "Main Dish",
        list: [
            hamPanini, chickenPanini, grilledCheese
        ]
    },
    {
        id: 2,
        name: "Starters",
        list: [
            salad, drink, pizza       ]
    },
    {
        id: 3,
        name: "Drinks",
        list: [
            frappuccino, cappuccino, coldBrew     ]
    },

]

const menuSandella = [
    {
        id: 1,
        name: "Main Dish",
        list: [
            brazilianFlatbread, turkeyPanini, buffaloWrap]
    },
    {
        id: 2,
        name: "Starters",
        list: [
            salad, drink, pizza       ]
    },
    {
        id: 3,
        name: "Drinks",
        list: [
            salad, drink, pizza     ]
    },

]
///////////////////////////////////////////////////////////////////////////////////////

const sizes = [
    {
        id: 1,
        label: '12"'
    },
    {
        id: 2,
        label: '14"'
    },
    {
        id: 3,
        label: '16"'
    },
    {
        id: 4,
        label: '18"'
    }
]

let myCart = [
    {
        ...pizza,
        qty: 1
    },
    {
        ...salad,
        qty: 1
    },
    {
        ...drink,
        qty: 1
    }
]

const myCards = [
    {
        id: 1,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
        card_no: "1234"
    },
    {
        id: 2,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
        card_no: "1234"
    },
]

const allCards = [
    {
        id: 1,
        name: "Apple Pay",
        icon: require("../assets/icons/apple.png")
    },
    {
        id: 2,
        name: "Visa",
        icon: require("../assets/icons/visa.png"),
    },
    {
        id: 3,
        name: "PayPal",
        icon: require("../assets/icons/paypal.png"),
    },
    {
        id: 4,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
    },
    {
        id: 5,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
    },
]


const fromLocs = [
    {
        latitude: 1.5347282806345879,
        longitude: 110.35632207358996,
    },
    {
        latitude: 1.556306570595712,
        longitude: 110.35504616746915,
    },
    {
        latitude: 1.5238753474714375,
        longitude: 110.34261833833622,
    },
    {
        latitude: 1.5578068150528928,
        longitude: 110.35482523764315,
    },
    {
        latitude: 1.558050496260768,
        longitude: 110.34743759630511,
    },
    {
        latitude: 1.5573478487252896,
        longitude: 110.35568783282145,
    }
]




const restaurant = [
    {
        id: 0,
        name: "Restaurant",
        list: [
            chickFilA, pizzaHut, starbucks, sandella
        ]
    },
]

export default {
    myProfile,
    categories,
    menuStarbucks,
    menuChickFilA,
    menuPizzaHut,
    menuSandella,
    restaurant,
    sizes,
    myCart,
    myCards,
    allCards,
    fromLocs,
}