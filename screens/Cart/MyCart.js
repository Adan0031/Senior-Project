import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';

import {
    Header,
    IconButton,
    CartQuantityButton,
    HomeButton,
    StepperInput,
    FooterTotal
} from "../../components"
import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants"

const MyCart = ({ navigation, route }) => {

    const [myCartList, setMyCartList] = React.useState([])
    const [total, setTotal] = React.useState(0)
    //////test//////
    const [foodItem, setFoodItem] = React.useState([])
    // Create total with useRef to update total value

    if(total !== 0){
        global.total = total
        console.log("Global" + global.total)
    }

    React.useEffect(() => {
        // If food item is undefined, set it to an empty array
        let foodItem = route.params
        if (foodItem === undefined) {
         
            // display the global cartlist
            setMyCartList(global.cartlist)
            // setTotal(global.total)
            console.log("global cartlist", global.cartlist)
        } else {
            setFoodItem(foodItem)
            let myCartList = dummyData.myCart
            console.log("-----" + dummyData.myCart)
            // if food is a duplicate, increase quantity 
            if (myCartList.length > 0) {
                for (let i = 0; i < myCartList.length; i++) {
                    if (myCartList[i].id === foodItem?.id) {
                        myCartList[i].qty += 1
                        setMyCartList(myCartList)
                        // calculate the total price
                        let totalPrice = 0
                        for (let i = 0; i < myCartList.length; i++) {
                            totalPrice += myCartList[i].qty * myCartList[i].price
                        }
                        setTotal(totalPrice)
                        return
                    }
                }
            }
            // if food is not a duplicate, add to cart
            myCartList.push(foodItem)
            setMyCartList(myCartList)
            global.cartlist = myCartList

            console.log(myCartList)
            //Calculate the total price of the cart
            let total = 0
            myCartList.forEach(item => {
                total += Number(item?.price)
            })
            setTotal(total)
        }

    }, [])

    // Handler
    function updateQuantityHandler(newQty, id) {


        let newMyCartList = myCartList.map(cl => (
            cl.id === id ? { ...cl, qty: newQty } : cl
        ))

        // Update the total price
        let total = 0;
        newMyCartList.forEach(item => {
            total += Number(item?.price) * item.qty
        })
        // global.total = total
        setTotal(total)


        setMyCartList(newMyCartList)

        myCartList.forEach(item => {
            if (item.id === id) {
                item.qty = newQty
            }
        })


    }

    // Remove cart item on pressing icon and save state
    function removeCartItemHandler(id) {
        let newMyCartList = myCartList.filter(item => item.id !== id)
        dummyData.myCart = newMyCartList;

        // Update the total price
        let total = 0
        newMyCartList.forEach(item => {
            total += Number(item?.price) * item.qty
        })

        setTotal(total)

        setMyCartList(newMyCartList)

        // myCartList.forEach(item => {
        //     if (item.id === id) {
        //         item.qty = 0
        //     }
        // })

    }
    function removeCartHandler(id) {
        let newMyCartList = [...myCartList]

        let index = newMyCartList.findIndex(cart => cart.id == id)

        newMyCartList.splice(index, 1)

        setMyCartList(newMyCartList)
    }




    // function removeMyCartHandler(id) {
    //     let newMyCartList = [...myCartList]

    //     let index = newMyCartList.findIndex(cart => cart.id == id)
    //     // total = - myCartList.price
    //     // If item removed reset the quantity to 0
    //     if (newMyCartList[index].qty > 1) {
    //         newMyCartList[index].qty -= 1
    //     } else {
    //         newMyCartList.splice(index, 1)
    //     }
    //     // when button is pressed remove the item from the cart and update the total price
    //     setMyCartList(newMyCartList)
    //     let total = 0
    //     newMyCartList.forEach(item => {
    //         total += Number(item.price) * item.qty
    //     }
    //     )
    //     setTotal(total)






    // }

    // Render

    function renderHeader() {
        return (
            <Header
                title="MY CART"
                containerStyle={{
                    height: 50,
                    marginTop: 40,
                    borderBottomColor: '#757575',
                    borderBottomWidth: 1,
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            marginLeft: SIZES.padding,

                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2,
                        }}
                        iconStyle={{


                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        // When back button is pressed save the cart to the database

                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <HomeButton
                        // quantity={3}
                        containerStyle={{
                            marginRight: SIZES.padding,
                            paddingTop: 12.49,
                        }}
                        onPress={() => navigation.navigate("Home")}

                    />
                }
            />
        )
    }

    function renderCartList() {
        return (
            <SwipeListView
                data={myCartList}
                keyExtractor={item => `${item.id}`}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding
                }}
                disableRightSwipe={true}
                rightOpenValue={-75}
                renderItem={(data, rowMap) => (
                    <View
                        style={{
                            height: 100,
                            backgroundColor: COLORS.lightGray2,
                            ...styles.cartItemContainer
                        }}
                    >
                        {/* Food Image */}
                        <View
                            style={{
                                width: 90,
                                height: 100,
                                marginLeft: "-4%"

                            }}
                        >
                            <Image
                                source={data.item.image}
                                resizeMode="cover"
                                style={{
                                    borderRadius: 10,
                                    width: "100%",
                                    height: "100%",
                                    position: 'absolute',

                                }}
                            />
                        </View>

                        {/* Food Info */}
                        <View
                            style={{
                                flex: 1,
                                marginLeft: '2%',
                            }}
                        >
                            <Text style={{ ...FONTS.body3 }}>{data.item.name}</Text>
                            <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>${data.item?.price}</Text>
                        </View>

                        {/* Quantity */}
                        <StepperInput
                            containerStyle={{
                                height: 50,
                                width: 125,
                                backgroundColor: COLORS.white
                            }}
                            value={data.item.qty}
                            onAdd={() => updateQuantityHandler(data.item.qty + 1, data.item.id)}
                            onMinus={() => {
                                if (data.item.qty > 1) {

                                    updateQuantityHandler(data.item.qty - 1, data.item.id)
                                }
                            }}
                        />
                    </View>
                )}
                renderHiddenItem={(data, rowMap) => (
                    <IconButton
                        containerStyle={{
                            flex: 1,
                            justifyContent: 'flex-end',
                            backgroundColor: COLORS.primary,
                            ...styles.cartItemContainer
                        }}
                        icon={icons.delete_icon}
                        iconStyle={{
                            marginRight: 10
                        }}
                        onPress={() => removeCartItemHandler(data.item.id)}
                    />
                )}
            />
        )
    }

    function renderFooter() {
        return (
            <FooterTotal
                subTotal={Number(global.total)}
                shippingFee={1.99}
                total={global.total + 1.99}

                // Send total to the checkout page
                onPress={() => navigation.navigate("PaymentCard")}

            />
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.grey
            }}
        >
            <Text style={{
                borderBottomColor: '#757575',
                borderBottomWidth: 1,
                marginTop: "3%",
                marginBottom: "-6.5%",
            }}></Text>
            {/* Header */}
            {renderHeader()}

            {/* Cart */}
            {renderCartList()}

            {/* Footer */}
            {renderFooter()}
        </View>
    )
}

const styles = StyleSheet.create({
    cartItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
    },
});

export default MyCart;