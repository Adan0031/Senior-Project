const myProfile = {
    name: "ByProgrammers",
    profile_image: require("../assets/images/profile.png"),
    address: "No. 88, Jln Padungan, Kuching"
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
    distance: "12-15min - $1.99 Delivery",
    image: require("../assets/dummyData/hot_tacos.png")
}

const burgerKing = {
    id: 3,
    name: "Burger King",
    description: "burgers",
    distance: "12-15min - $1.99 Delivery",
    image: require("../assets/dummyData/hamburger.png")
}

const wrapSandwich = {
    id: 4,
    name: "Milkflower",
    description: "Italian Pizza",
    distance: "12-15min - $1.99 Delivery",
    categories: [1, 2],
    image: require("../assets/dummyData/pizza.png")
}


/////////////////////////////////////menu list//////////////////////////////
const pizza = {
    id: 1,
    name: "Milkflower",
    price: "$15.99",
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/pizza.png")
}
const salad = {
    id: 2,
    name: "Swiss Chard Caesar",
    categories: [1, 2],
    price: "$15.99",
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/salad.png")
}
const drink = {
    id: 3,
    name: "Hamburger",
    categories: [1, 2],
    price: "$15.99",
    calories: 78,
    isFavourite: true,
    image: require("../assets/dummyData/hamburger.png")
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
    {
        id: 3,
        name: "Popular",
        list: [
            milkFlower, tacoBell, wrapSandwich,
        ]
    },
    {
        id: 4,
        name: "Newest",
        list: [
            milkFlower, tacoBell, burgerKing,
        ]
    },
    {
        id: 5,
        name: "Trending",
        list: [
            milkFlower, burgerKing, wrapSandwich,
        ]
    },
    {
        id: 6,
        name: "Recommended",
        list: [
            milkFlower, tacoBell, wrapSandwich,
        ]
    },

]

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
        ...milkFlower,
        qty: 1
    },
    {
        ...tacoBell,
        qty: 1
    },
    {
        ...burgerKing,
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



// const first = [
//     {
//         id: 0,
//         name: "Milk Flower",
//         list: [
//             pizza, salad, drink,
//         ]
//     }
// ]




const restaurant = [
    {
        id: 0,
        name: "Restaurant",
        list: [
            milkFlower, tacoBell, burgerKing,
        ]
    },
    // {
    //     id: 2,
    //     name: "Taco Bell",
    //     list: [
    //         burgerKing, tacoBell, milkFlower,
    //     ]
    // },
    // {
    //     id: 3,
    //     name: "Burger King",
    //     list: [
    //         salad, drink, pizza,
    //     ]
    // }

]



















export default {
    myProfile,
    categories,
    menu,
    restaurant,
    sizes,
    myCart,
    myCards,
    allCards,
    fromLocs,
}