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
    description: "Italian Pizza",
    distance: "12-15min - $1.99 Delivery",
    image: require("../assets/Chick-fil-a/chick-fil-a-logo.png")
}

const tacoBell = {
    id: 2,
    name: "Tacobell",
    description: "tacos",
    address: "1804 W University Dr",
    distance: "12-15min - $1.99 Delivery",
    image: require("../assets/dummyData/tacobell.png")
}
 
const Canes = {
    id: 3,
    name: "Raising Cane's Chicken Fingers",
    description: "Chicken Strips",
    address: "718 W University Dr",
    distance: "5-10min - $0.99 Delivery",
    
} 

const burgerKing = {
    id: 4,
    name: "Burger King",
    description: "burgers",
    distance: "12-15min - $1.99 Delivery",
    image: require("../assets/dummyData/burgerking.png")
}

const wrapSandwich = {
    id: 5,
    name: "Milkflower",
    description: "Italian Pizza",
    distance: "12-15min - $1.99 Delivery",
    categories: [1, 2],
    image: require("../assets/dummyData/pizza.png")
}


const Mcdonalds = {
    id: 6,
    name: "Mcdonalds",
    description: "Fast food company",
    address: "2120 W University Dr",
    distance: "12-15min - $1.99 Delivery",
}

const Starbucks = {
    id: 7,
    name: "Starbucks",
    description: "Coffee",
    address: "1522 W University Dr",
    distance: "12-15min - $1.99 Delivery",
    image: require("../assets/Starbucks/Starbucks-Logo.png")
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
const chickenSammich = {
    id: 4,
    name: "Chick-fil-A® Chicken Sandwich",
    description: "A boneless breast of chicken seasoned to perfection, and freshly breaded.",
    price: "3.99",
    calories: 440,
    isFavourite: true,
    image: require("../assets/Chick-fil-a/MainDish/ChickenSammich.png")
}

//Starbucks drinks
const frappuccino = {
    id: 5,
    name: "Caramel Frappuccino",
    description: "Caramel syrup, milk, ice and coffee.",
    categories: [1, 2],
    price: "15.99",
    calories: 78,
    isFavourite: true,
    image: require("../assets/Starbucks/Drinks/Frappuccino.png")
}

const cappuccino = {
    id: 6,
    name: "Cappuccino",
    description: "Dark, rich espresso under a smoothed and stretched layer of thick milk foam.",
    categories: [1, 2],
    price: "15.99",
    calories: 78,
    isFavourite: true,
    image: require("../assets/Starbucks/Drinks/Cappuccino.png")
}

const coldBrew = {
    id: 7,
    name: "Cold-Brew Coffee",
    description: "slow-steeped in cool water for 20 hours",
    categories: [1, 2],
    price: "15.99",
    calories: 78,
    isFavourite: true,
    image: require("../assets/Starbucks/Drinks/Cold-Brew.png")
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
            chickenSammich, salad, drink
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
            pizza, salad, drink
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
            chickFilA, tacoBell, burgerKing, Starbucks, Mcdonalds, Canes
        ]
    },
]

export default {
    myProfile,
    categories,
    menuStarbucks,
    menuChickFilA,
    restaurant,
    sizes,
    myCart,
    myCards,
    allCards,
    fromLocs,
}