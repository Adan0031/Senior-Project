import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TextInput,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FilterModal } from "../";
import {
    Header,
    IconButton,
    CartQuantityButton,

    LineDivider,
    Rating,
    StepperInput,
    TextButton,
    HorizontalFoodCard,
    VerticalFoodCard
} from "../../components"
import { FONTS, SIZES, COLORS, icons, images, dummyData } from "../../constants"

const Section = ({ title, onPress, children }) => {
    return (
        <View>
            {/* Content */}
            {children}
        </View>
    )
}

const FoodSelection = ({ route }) => {
    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1)
    const [milkflower, setMilkflower] = React.useState([])
    const navigation = useNavigation();
    const [showFilterModal, setShowFilterModal] = React.useState(false)

    //need for menu list horizantal view
    const [menuList, setMenuList] = React.useState([])
    const [selectedMenuType, setSelectedMenuType] = React.useState(1)






    const [foodItem, setFoodItem] = React.useState([])
    React.useEffect(() => {
        let { foodItem } = route.params
        setFoodItem(foodItem)
    }, [])

    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId)
    }, [])
    function handleChangeCategory(categoryId, menuTypeId) {


        let selectedMilkflower = dummyData.menu.find(a => a.name == "Milkflower")
        setMilkflower(selectedMilkflower?.list)

        // // Find the menu based on the menuTypeId
        let selectedMenu = dummyData.menuHorizontal.find(a => a.id == menuTypeId)

        // // Set the menu based on the categoryId
        setMenuList(selectedMenu?.list)
    }


    function renderHeader() {
        return (
            <Header
                //title="DETAILS"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
                }}
                leftComponent={
                    //back button style and onpress
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
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
                    <CartQuantityButton
                        quantity={3}
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
                    paddingHorizontal: SIZES.padding,

                }}
            >
                {/* Food Card */}
                <View

                    style={{
                       
                        justifyContent: 'center',
                        height: 275,
                        borderRadius: 15,
                        backgroundColor: COLORS.grey,
                    }}
                >

                    {/* Calories & Favourite */}
                    {/* <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: SIZES.base,
                            paddingHorizontal: SIZES.radius,

                        }}
                    >
                    </View> */}

                    {/* Food Image */}
                    <Image

                        source={foodItem?.image}
                        resizeMode='contain'
                        style={{
                            marginTop: SIZES.base,
                            height: 170,
                            width: "100%",

                        }}
                    />
                    {/* Name & Description */}
                    <Text style={{ ...FONTS.h2, marginLeft: "2%", color: COLORS.white }}>{foodItem?.name}</Text>
                    <Text style={{ ...FONTS.body5, marginLeft: "2%", color: COLORS.white }}>{foodItem?.description}</Text>
                    <Text style={{ ...FONTS.body5, marginLeft: "2%", color: COLORS.white }}>{foodItem?.distance}</Text>

                </View>


            </View>
        )
    }

    //////////////////////////////////////////////////////////////////////////////
    function renderPopularSection() {
        return (
            <Section
            // title="Popular Near You"
            // onPress={() => console.log("Show all popular items")}
            >
                <FlatList
                    data={milkflower}
                    keyExtractor={item => `${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (

                        <VerticalFoodCard
                            containerStyle={{
                                marginLeft: index == 0 ? SIZES.padding : 25,
                                marginRight: index == milkflower.length - 1 ? SIZES.padding : 25,
                            }}


                            item={item}
                            onPress={() => navigation.navigate("FoodDetail", { foodItem: item })}
                        />
                    )}
                />
            </Section>
        )
    }
    //////////////////////////////////////////////////////////////////////////////////
    function renderMenuTypes() {
        return (
            <FlatList
                horizontal
                data={dummyData.menuHorizontal}
                keyExtractor={item => `${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: 30,
                    marginBottom: 20
                }}
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={{
                            marginLeft: SIZES.padding,
                            marginRight: index == dummyData.menuHorizontal.length - 1 ? SIZES.padding : 0
                        }}
                        onPress={() => {
                            setSelectedMenuType(item.id)
                            handleChangeCategory(selectedCategoryId, item.id)
                        }}
                    >
                        <Text
                            style={{
                                color: selectedMenuType == item.id ? COLORS.primary : COLORS.black,
                                ...FONTS.h3
                            }}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        )
    }

    //////////////////////////////////////////////////////////////////////////////////

    return (
        <View
            style={{
                flex: 1,
                //padding to bottom so card is not behind tab.
                marginBottom: 60,

            }}
        >

            {/* Filter */}
            {showFilterModal &&
                <FilterModal
                    isVisible={showFilterModal}
                    onClose={() => setShowFilterModal(false)}
                />
            }

            {/* List */}
            <FlatList

                data={menuList}
                keyExtractor={(item) => `${item.id}`}
                showsVerticalScrollIndicator={false}

                ListHeaderComponent={
                    <View

                    >

                        {/* Header */}
                        {renderHeader()}

                        {renderDetails()}

                        {/* Popular */}
                        {/* {renderPopularSection()} */}

                        {renderMenuTypes()}

                    </View>
                }
                renderItem={({ item, index }) => {
                    return (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 130,
                                alignItems: 'center',
                                marginHorizontal: SIZES.padding,
                                marginBottom: SIZES.radius
                            }}
                            imageStyle={{
                                marginTop: 20,
                                height: 110,
                                width: 110,
                                marginHorizontal: 10,
                                marginBottom: 15
                            }}
                            item={item}
                            onPress={() => navigation.navigate("FoodDetail", { foodItem: item })}
                        />
                    )
                }}
            // ListFooterComponent={
            //     <View style={{ height: 200 }} />
            // }
            />
        </View>
    )
}

export default FoodSelection;
