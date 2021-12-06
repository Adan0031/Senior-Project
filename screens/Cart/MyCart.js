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
    //////test//////
    const [foodItem, setFoodItem] = React.useState([])

    React.useEffect(() => {
        // if (dummyData.myCart[0] == null) {
        //     dummyData.myCart.pop()
        // }
        let foodItem = route.params
        setFoodItem(foodItem)
        // console.log(foodItem)
        if (dummyData.myCart.id != foodItem.id) {
            dummyData.myCart.push(foodItem)
        }
        else{
            dummyData.myCart.pop()
        }
   
        console.log(dummyData.myCart)
            
    }, [])
    React.useEffect(() => {

        setMyCartList(dummyData.myCart)
    }, [])





    // Handler

    function updateQuantityHandler(newQty, id) {
        let newMyCartList = myCartList.map(cl => (
            cl.id === id ? { ...cl, qty: newQty } : cl
        ))

        setMyCartList(newMyCartList)

    }

    function removeMyCartHandler(id) {
        let newMyCartList = [...myCartList]

        let index = newMyCartList.findIndex(cart => cart.id == id)

        newMyCartList.splice(index, 1)
        dummyData.myCart.splice(index, 1)
        setMyCartList(newMyCartList)
    }

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
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <HomeButton
                        quantity={3}
                        containerStyle={{
                            marginRight: SIZES.padding,
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
                            <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>${data.item.price}</Text>
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
                        onPress={() => removeMyCartHandler(data.item.id)}
                    />
                )}
            />
        )
    }

    function renderFooter() {
        return (
            <FooterTotal
                subTotal={37.97}
                shippingFee={1.99}
                total={39.96}
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