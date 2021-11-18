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
const milkFlower = {
    id: 1,
    name: "Milkflower",
    description: "Italian Pizza",
    distance: "12-15min - $1.99 Delivery",
    image: require("../assets/dummyData/milkFlower.png")
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

const Dominos = {
    id: 7,
    name: "Dominos",
    description: "Pizza",
    address: "1522 W University Dr",
    distance: "12-15min - $1.99 Delivery",
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

///////////////////////////////////////////////////////////////////////////////////////
const menu = [
    {
        id: 1,
        name: "Milkflower",
        list: [
            pizza, salad, drink,
        ]
    },
    // {
    //     id: 1,
    //     name: "Restaurant",
    //     list: [
    //         milkFlower, tacoBell, burgerKing,
    //     ]
    // },
    {
        id: 2,
        name: "Taco Bell",
        list: [
            milkFlower, burgerKing, wrapSandwich,
        ]
    },
    // {
    //     id: 3,
    //     name: "Popular",
    //     list: [
    //         milkFlower, tacoBell, wrapSandwich,
    //     ]
    // },
    // {
    //     id: 4,
    //     name: "Newest",
    //     list: [
    //         milkFlower, tacoBell, burgerKing,
    //     ]
    // },
    // {
    //     id: 5,
    //     name: "Trending",
    //     list: [
    //         milkFlower, burgerKing, wrapSandwich,
    //     ]
    // },
    // {
    //     id: 6,
    //     name: "Recommended",
    //     list: [
    //         milkFlower, tacoBell, wrapSandwich,
    //     ]
    // },

]

///////////////////////////////////////////////////////////////////////////////////////

const menuHorizontal = [
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
            drink, pizza, salad     ]
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

const myCart = [
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
            milkFlower, tacoBell, burgerKing, Dominos, Mcdonalds, Canes
        ]
    },
]

export default {
    myProfile,
    categories,
    menu,
    menuHorizontal,
    restaurant,
    sizes,
    myCart,
    myCards,
    allCards,
    fromLocs,
}