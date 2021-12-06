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
// const salad = {
//     id: 2,
//     name: "Swiss Chard Caesar",
//     description: "Pangrattato and paresan with lemon anchovy dressing",
//     categories: [1, 2],
//     price: "15.99",
//     calories: 78,
//     isFavourite: true,
//     image: require("../assets/dummyData/salad.png")
// }
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
/////Chick-fil-A Starters///////
const salad = {
    id: 7,
    name: "Side Salad",
    description: "Mixed greens, with shredded Monterey Jack and Cheddar cheeses and grape tomatoes.",
    price: "3.99",
    calories: 440,
    isFavourite: true,
    image: require("../assets/Chick-fil-a/Starters/salad.png")
}

const fries = {
    id: 8,
    name: "Waffle Potato Fries®",
    description: "Waffle-cut potatoes cooked until crispy outside and tender inside. Sprinkled with Sea Salt.",
    price: "2.09",
    calories: 420,
    isFavourite: true,
    image: require("../assets/Chick-fil-a/Starters/fries.png")
}

const fruit = {
    id: 9,
    name: "Fruit Cup",
    description: "Made with chopped pieces of red and green apples, orange segments, strawberry slices, and blueberries.",
    price: "3.39",
    calories: 60,
    isFavourite: true,
    image: require("../assets/Chick-fil-a/Starters/fruit.png")
}
/////Chick-fil-A Drinks///////
const sweetTea = {
    id: 10,
    name: "Iced Tea Sweetened",
    description: "Freshly-brewed each day from a blend of tea leaves sweetened with real cane sugar.",
    price: "1.79",
    calories: 120,
    isFavourite: true,
    image: require("../assets/Chick-fil-a/Drinks/sweettea.png")
}

const lemonade = {
    id: 11,
    name: "Lemonade",
    description: "Classic lemonade: real lemon, cane sugar, and water.",
    price: "2.19",
    calories: 220,
    isFavourite: true,
    image: require("../assets/Chick-fil-a/Drinks/lemonade.png")
}

const fantaorange = {
    id: 12,
    name: "Fanta® Orange",
    description: "Fountain beverage. A product of The Coca-Cola Company.",
    price: "1.79",
    calories: 210,
    isFavourite: true,
    image: require("../assets/Chick-fil-a/Drinks/fantaorange.png")
}



/////////Pizza Hut////////////////
////Main Dish////
const pepperoni = {
    id: 13,
    name: "Pepperoni Personal Pizza",
    description: "Pepperoni and mozzarella cheese pizza",
    price: "5.99",
    calories: 400,
    isFavourite: true,
    image: require("../assets/PizzaHut/MainDish/Pepperoni.png")
}

const meatLovers = {
    id: 14,
    name: "Meatlovers Personal Pizza",
    description: "Packed with pepperoni, Italian sausage, ham, bacon, seasoned pork and beef.",
    price: "6.99",
    calories: 700,
    isFavourite: true,
    image: require("../assets/PizzaHut/MainDish/MeatLovers.png")
}

const cheese = {
    id: 15,
    name: "Cheese Pizza",
    description: "Classic cheese pizza",
    price: "4.99",
    calories: 300,
    isFavourite: true,
    image: require("../assets/PizzaHut/MainDish/Cheese.png")
}
////Starters////
const cheesesticks = {
    id: 16,
    name: "Cheese Sticks",
    description: "Sprinkled with flavorful Italian seasoning and a cup of our delicious marinara.",
    price: "4.99",
    calories: 300,
    isFavourite: true,
    image: require("../assets/PizzaHut/Starters/cheesesticks.png")
}
const breadsticks = {
    id: 17,
    name: "Breadsticks",
    description: "Crispy-on-the-outside, soft-on-the-inside, and seasoned with garlic and parmesan.",
    price: "4.99",
    calories: 300,
    isFavourite: true,
    image: require("../assets/PizzaHut/Starters/breadsticks.png")
}
const mozzarellasticks = {
    id: 18,
    name: "Fried Mozzarella Sticks",
    description: "deep-fried to perfection and served with a tangy marinara dipping sauce.",
    price: "5.99",
    calories: 656,
    isFavourite: true,
    image: require("../assets/PizzaHut/Starters/mozzarellasticks.png")
}
////Drinks////
const pepsi = {
    id: 19,
    name: "PEPSI®",
    description: "The bold, refreshing, robust cola. 20oz",
    price: "1.99",
    calories: 250,
    isFavourite: true,
    image: require("../assets/PizzaHut/Drinks/pepsi.png")
}
const drPepper = {
    id: 40,
    name: "Dr Pepper®",
    description: "A signature blend of 23 flavors makes every sip truly unique. 20oz",
    price: "1.99",
    calories: 250,
    isFavourite: true,
    image: require("../assets/PizzaHut/Drinks/drpepper.png")
}
const rootbeer = {
    id: 41,
    name: "Mug® Root Beer",
    description: "Sweet and flavorful old-style root beer. 20oz",
    price: "1.99",
    calories: 260,
    isFavourite: true,
    image: require("../assets/PizzaHut/Drinks/rootbeer.png")
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
/////Starbucks Starters/////
const bbqChips = {
    id: 23,
    name: "Starbucks® BBQ Potato Chips",
    description: "Thick-cut kettle potato chips coated with tangy barbecue flavor.",
    categories: [1, 2],
    price: "1.99",
    calories: 270,
    isFavourite: true,
    image: require("../assets/Starbucks/Starters/BbqChips.png")
} 

const hamCroissant = {
    id: 24,
    name: "Ham & Swiss Croissant",
    description: "Hickory-smoked ham and melted Swiss cheese enveloped in a croissant.",
    categories: [1, 2],
    price: "2.99",
    calories: 320,
    isFavourite: true,
    image: require("../assets/Starbucks/Starters/HamCroissant.png")
} 

const scone = {
    id: 25,
    name: "Blueberry Scone",
    description: "Traditional scone with blueberries, buttermilk and lemon.",
    categories: [1, 2],
    price: "2.99",
    calories: 380,
    isFavourite: true,
    image: require("../assets/Starbucks/Starters/Scone.png")
} 
/////Starbucks drinks/////
const frappuccino = {
    id: 26,
    name: "Caramel Frappuccino",
    description: "Caramel syrup, milk, ice and coffee.",
    categories: [1, 2],
    price: "4.99",
    calories: 78,
    isFavourite: true,
    image: require("../assets/Starbucks/Drinks/Frappuccino.png")
}

const cappuccino = {
    id: 27,
    name: "Cappuccino",
    description: "Dark, rich espresso under a smoothed and stretched layer of thick milk foam.",
    categories: [1, 2],
    price: "5.99",
    calories: 78,
    isFavourite: true,
    image: require("../assets/Starbucks/Drinks/Cappuccino.png")
}

const coldBrew = {
    id: 28,
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
    id: 30,
    name: "Brazilian Bacon Grilled Flatbread",
    description: "Brazilian sauce, turkey bacon, olives, red peppers & cheese.",
    categories: [1, 2],
    price: "6.99",
    calories: 560,
    isFavourite: true,
    image: require("../assets/Sandella/MainDish/BrazilianFlatbread.png")
}

const turkeyPanini = {
    id: 31,
    name: "Tangy Turkey & Mozzarella Panini",
    description: "Turkey breast, mozzarella & tomatoes w/ Brazilian sauce.",
    categories: [1, 2],
    price: "6.99",
    calories: 520,
    isFavourite: true,
    image: require("../assets/Sandella/MainDish/TurkeyPanini.png")
}

const buffaloWrap = {
    id: 32,
    name: "Buffalo Chicken Wrap",
    description: "Grilled chicken, light blue cheese dressing, lettuce, tomato & buffalo wing sauce.",
    categories: [1, 2],
    price: "6.99",
    calories: 400,
    isFavourite: true,
    image: require("../assets/Sandella/MainDish/BuffaloChickenWrap.png")
}
/////////Starters///////////
const caesarSalad = {
    id: 33,
    name: "Chicken Caesar Salad",
    description: "Iceberg lettuce, grilled chicken, Parmesan cheese, croutons with light Caesar dressing.",
    categories: [1, 2],
    price: "5.99",
    calories: 320,
    isFavourite: true,
    image: require("../assets/Sandella/Starters/caesarsalad.png")
}
const quesadilla = {
    id: 34,
    name: "Cheese Quesadilla",
    description: "Mild salsa, cheddar Jack cheese and sour cream. Vegetarian.",
    categories: [1, 2],
    price: "5.99",
    calories: 450,
    isFavourite: true,
    image: require("../assets/Sandella/Starters/quesadilla.png")
}
const cheeseFlatbread = {
    id: 35,
    name: "Cheese Flatbread",
    description: "Mozzarella cheese over zesty tomato sauce.",
    categories: [1, 2],
    price: "4.99",
    calories: 370,
    isFavourite: true,
    image: require("../assets/Sandella/Starters/cheeseflatbread.png")
}
/////////Drinks///////////
const brisk = {
    id: 36,
    name: "Brisk Lemon Flavored Iced Tea",
    description: "Brisk cold-brewed iced tea sweetened with lemon flavor. 20oz",
    categories: [1, 2],
    price: "1.99",
    calories: 110,
    isFavourite: true,
    image: require("../assets/Sandella/Drinks/brisk.png")
}
const snapple = {
    id: 37,
    name: "Snapple Peach Tea",
    description: "A great-tasting combo tea blended with peach flavor.",
    categories: [1, 2],
    price: "1.99",
    calories: 120,
    isFavourite: true,
    image: require("../assets/Sandella/Drinks/snapple.png")
}
const water = {
    id: 38,
    name: "Aquafina Water",
    description: "Aquafina Purified Water. 20oz",
    categories: [1, 2],
    price: "1.85",
    calories: 0,
    isFavourite: true,
    image: require("../assets/Sandella/Drinks/water.png")
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
            salad, fries, fruit       ]
    },
    {
        id: 3,
        name: "Drinks",
        list: [
            sweetTea, lemonade, fantaorange     ]
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
            cheesesticks, breadsticks, mozzarellasticks       ]
    },
    {
        id: 3,
        name: "Drinks",
        list: [
            pepsi, drPepper, rootbeer     ]
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
            bbqChips, hamCroissant, scone       ]
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
            caesarSalad, quesadilla, cheeseFlatbread       ]
    },
    {
        id: 3,
        name: "Drinks",
        list: [
            brisk, snapple, water     ]
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
        ...hamPanini,
        qty: 1
    },
    {
        ...scone,
        qty: 1
    },
    {
        ...frappuccino,
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
        latitude: 26.306145,
        longitude: -98.174418,
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