import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TextInput,
} from 'react-native';

import {
    Header,
    IconButton,
    CartQuantityButton,
    IconLabel,
    LineDivider,
    Rating,
    StepperInput,
    TextButton
} from "../../components"
import { FONTS, SIZES, COLORS, icons, images, dummyData } from "../../constants"

//hold food info for my cart screen


const FoodDetail = ({ navigation, route }) => {


    const [selectedSize, setSelectedSize] = React.useState("")
    const [foodItem, setFoodItem] = React.useState([])
    const [qty, setQty] = React.useState(1)

    React.useEffect(() => {
        let { foodItem } = route.params
        setFoodItem(foodItem)
    }, [])

    // Render

    function renderHeader() {
        return (
            <Header
                title="DETAILS"
                containerStyle={{
                    height: 50,
                    borderBottomColor: '#757575',
                    borderBottomWidth: 1,
                    marginTop: "6%"
                }}

                leftComponent={
                    //back button style and onpress
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            marginLeft: SIZES.padding,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2,

                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2,

                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <CartQuantityButton
                        quantity={3}
                        containerStyle={{
                            marginRight: SIZES.padding,
                        }}
                        onPress={() => navigation.navigate("MyCart")}

                    />

                }

            />

        )
    }

    function renderDetails() {
        return (
            <View
                style={{
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding,

                }}
            >
                {/* Food Card */}
                <View
                    style={{
                        flex: 1,
                        paddingHorizontal: SIZES.padding,
                        height: 170,


                    }}
                >
                    {/* Calories & Favourite */}
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: SIZES.base,
                            paddingHorizontal: SIZES.radius,
                        }}
                    >
                        {/* EDIT* commented out calories and favorite */}
                        {/* Calories */}
                        {/* <View
                            style={{ flexDirection: 'row' }}
                        >
                            <Image
                                source={icons.calories}
                                style={{
                                    height: 30,
                                    width: 30
                                }}
                            />
                            <Text style={{ color: COLORS.darkGray2, ...FONTS.body4 }}>{foodItem?.calories} calories</Text>
                        </View> */}

                        {/* Favourite */}
                        {/* <Image
                            source={icons.love}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray
                            }}
                        /> */}

                    </View>

                    {/* Food Image */}
                    <Image

                        style={{
                            borderRadius: 5,
                            flex: 1,
                            width: null
                        }}
                        resizeMode="cover"
                        source={foodItem?.image}



                    />
                </View>

                {/* Food Info */}
                <View
                    style={{
                        marginTop: SIZES.padding,
                    }}
                >
                    <Text style={{
                        borderTopColor: '#757575',
                        borderTopWidth: 1,
                    }}>


                    </Text>
                    {/* Name & Description */}
                    <Text style={{ ...FONTS.h1, paddingHorizontal: SIZES.padding, color: COLORS.white }}>{foodItem?.name}</Text>

                    <Text
                        style={{
                            marginTop: SIZES.base,
                            color: COLORS.white,
                            paddingHorizontal: SIZES.padding,
                            paddingBottom: SIZES.padding,
                            ...FONTS.body3,
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{foodItem?.description}</Text>

                    </Text>

                    {/* Sizes */}
                    {/* <View
                        style={{
                            flexDirection: 'row',
                            marginTop: SIZES.padding,
                            alignItems: 'center',

                        }}
                    >
                        <Text style={{ ...FONTS.h3, paddingLeft: SIZES.padding, }}>Sizes:</Text>


                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                marginLeft: SIZES.padding,
                            }}
                        >
                            {dummyData.sizes.map((item, index) => {
                                return (
                                    <TextButton
                                        key={`Sizes-${index}`}
                                        buttonContainerStyle={{
                                            width: 55,
                                            height: 55,
                                            margin: SIZES.base,
                                            borderWidth: 1,
                                            borderRadius: SIZES.radius,
                                            borderColor: selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                                            backgroundColor: selectedSize == item.id ? COLORS.primary : null
                                        }}
                                        label={item.label}
                                        labelStyle={{
                                            color: selectedSize == item.id ? COLORS.white : COLORS.gray2,
                                            ...FONTS.body2
                                        }}
                                        onPress={() => setSelectedSize(item.id)}
                                    />
                                )
                            })}
                        </View>
                    </View> */}
                </View>
            </View>
        )
    }

    function renderInstructions() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginVertical: SIZES.padding,
                    paddingHorizontal: SIZES.padding,
                    alignItems: 'center'
                }}
            >
                <Text
                    style={{
                        marginTop: SIZES.base,
                        color: COLORS.white,
                        ...FONTS.body3,
                    }}
                >
                    Please note that special requests may result in price adjustments after your order is processed.
                </Text>
            </View >
        )
    }

    function renderInput() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                {/* Text Input */}
                <TextInput
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        ...FONTS.body3
                    }}
                    placeholder="instructions..."
                />
            </View>
        )
    }

    //Holds the renderInstructions and renderInput in a container
    function informationBlock() {
        return (
            <View
                style={{
                    height: 190,
                    backgroundColor: COLORS.black,
                }}
            >
                { renderInstructions()}
                { renderInput()}
            </View >
        )
    }
    //EDIT* commented out function call
    // function renderRestaurant() {
    //     return (
    //         <View
    //             style={{
    //                 flexDirection: 'row',
    //                 marginVertical: SIZES.padding,
    //                 paddingHorizontal: SIZES.padding,
    //                 alignItems: 'center'
    //             }}
    //         >
    //             <Text
    //                 style={{
    //                     marginTop: 25,
    //                     color: COLORS.grey,
    //                     textAlign: 'justify',
    //                     ...FONTS.body3,
    //                 }}
    //             >
    //                 Please note that special requests may result in price adjustments after your order is processed.
    //                 </Text>
    //             {/* Image */}
    //             <Image
    //                 source={images.profile}
    //                 style={{
    //                     width: 50,
    //                     height: 50,
    //                     borderRadius: SIZES.radius
    //                 }}
    //             />

    //             {/* Info */}
    //             <View
    //                 style={{
    //                     flex: 1,
    //                     marginLeft: SIZES.radius,
    //                     justifyContent: 'center'
    //                 }}
    //             >
    //                 <Text style={{ ...FONTS.h3 }}>ByProgrammers</Text>
    //                 <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>1.2 KM away from you</Text>
    //             </View>

    //             {/* Ratings */}
    //             <Rating
    //                 rating={4}
    //                 iconStyle={{
    //                     marginLeft: 3
    //                 }}
    //             />
    //         </View>
    //     )
    // }

    function renderFooter() {
        return (

            <View

                style={{
                    flexDirection: 'row',
                    height: 120,
                    alignItems: 'center',
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.radius,
                }}
            >
                <StepperInput
                    value={qty}
                    onAdd={() => setQty(qty + 1)}
                    onMinus={() => {
                        if (qty > 1) {
                            setQty(qty - 1)
                        }
                    }}
                />

                <TextButton
                    buttonContainerStyle={{
                        flex: 1,
                        flexDirection: 'row',
                        height: 60,
                        marginLeft: SIZES.radius,
                        paddingHorizontal: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary,
                        paddingLeft: "10%",
                        paddingRight: "10%"
                  
                        
                    }}
                    label="Buy Now"
                    label2= {foodItem?.price}
                    // onPress={() => {
                    //     dummyData.myCart = 
                    // }}
                    onPress={() => navigation.navigate("MyCart", foodItem)}
                    //add foodItem on press and send to MyCart
                />
            </View>
        )
    }

    // {dummyData.myCart.map((item, index) => {
    //     return (
    //         <TextButton
    //             key={`Sizes-${index}`}
    //             buttonContainerStyle={{
    //                 width: 55,
    //                 height: 55,
    //                 margin: SIZES.base,
    //                 borderWidth: 1,
    //                 borderRadius: SIZES.radius,
    //                 borderColor: selectedSize == item.id ? COLORS.primary : COLORS.gray2,
    //                 backgroundColor: selectedSize == item.id ? COLORS.primary : null
    //             }}
    //             label={item.label}
    //             labelStyle={{
    //                 color: selectedSize == item.id ? COLORS.white : COLORS.gray2,
    //                 ...FONTS.body2
    //             }}
    //             onPress={() => setSelectedSize(item.id)}
    //         />
    //     )
    // })}

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.grey

            }}
        >

            {/* Header */}
            <Text style={{
                borderBottomColor: '#757575',
                borderBottomWidth: 1,
                marginTop: "3%",
                marginBottom: "-4%",
            }}>
            </Text>
            {renderHeader()}

            <ScrollView>
                {/* Food Details */}

                {renderDetails()}


                <Text style={{
                    borderBottomColor: '#757575',
                    borderBottomWidth: 1,
                    marginTop: "-4%",
                    marginBottom: "-5%"

                }}></Text>
                {/* Instructions */}
                {informationBlock()}
            </ScrollView>

            {/* Footer */}
            { renderFooter()}
        </View >
    )
}

export default FoodDetail;