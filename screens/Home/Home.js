import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FilterModal } from "../";
import {
    HorizontalFoodCard,
    VerticalFoodCard
} from "../../components";
import { FONTS, SIZES, COLORS, icons, dummyData } from "../../constants";
import { getPixelSizeForLayoutSize } from 'react-native/Libraries/Utilities/PixelRatio';

const Section = ({ title, onPress, children }) => {
    return (
        <View>
            {/* Header */}
            <View
                //EDIT* commented out to remove padding and show all
                // style={{
                //     flexDirection: 'row',
                //     marginHorizontal: SIZES.padding,
                //     marginTop: 30,
                //     marginBottom: 20
                // }}
            >
                {/* <Text style={{ flex: 1, ...FONTS.h3 }}>
                    {title}
                </Text>

                <TouchableOpacity
                    onPress={onPress}
                >
                    <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
                        Show All
                    </Text>
                </TouchableOpacity> */}
            </View>

            {/* Content */}
            {children}
        </View>
    )
}

const Home = ({ navigation }) => {

    

    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1)
    const [selectedMenuType, setSelectedMenuType] = React.useState(1)
    const [popular, setPopular] = React.useState([])
    const [recommends, setRecommends] = React.useState([])
    const [menuList, setMenuList] = React.useState([])

    //added new list for restaurant
    const [restaurant, setRestaurant] = React.useState([])


    //restaurant list
    const [list, setList] = React.useState([])

    const [showFilterModal, setShowFilterModal] = React.useState(false)

    // const navigation = useNavigation();

    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId, selectedMenuType)
    }, [])

    // Handler

    function handleChangeCategory(categoryId, menuTypeId) {

        // Retrieve the popular menu
        // let selectedPopular = dummyData.menu.find(a => a.name == "Popular")
        let selectedRestaurant = dummyData.restaurant.find(a => a.name == "Restaurant")
 

        // // Retrieve the recommended menu
        let selectedRecommend = dummyData.menu.find(a => a.name == "Recommended")

        // // Find the menu based on the menuTypeId
        let selectedMenu = dummyData.menuHorizontal.find(a => a.id == menuTypeId)

       

        // Set the popular menu based on the categoryId
        // setPopular(selectedPopular?.list.filter(a => a.categories.includes(categoryId)))
        setRestaurant(selectedRestaurant?.list)



        // // Set the recommended menu based on the categoryId
        setRecommends(selectedRecommend?.list)

        // // Set the menu based on the categoryId
        setMenuList(selectedMenu?.list)


        // Retrieve restaurant list
        //let selectedList = dummyData.restaurant.find(a => a.name == "List")
        //setList(selectedList?.list.filter(a => a.categories.includes(categoryId)))

    }

    // Render

    function renderSearch() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    marginVertical: SIZES.base,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray2
                }}
            >
                {/* Icon */}
                <Image
                    source={icons.search}
                    style={{
                        height: 20,
                        width: 20,
                        tintColor: COLORS.black
                    }}
                />

                {/* Text Input */}
                <TextInput
                    style={{
                        flex: 1,
                        marginLeft: SIZES.radius,
                        ...FONTS.body3
                    }}
                    placeholder="search food..."
                />

                {/* Filter Button */}
                <TouchableOpacity
                    onPress={() => setShowFilterModal(true)}
                >
                    <Image
                        source={icons.filter}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.black
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

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

    function renderRecommendedSection() {
        return (
            <Section
                title="Recommended"
                onPress={() => console.log("Show all recommended")}
            >
                <FlatList
                    data={recommends}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <HorizontalFoodCard
                            containerStyle={{
                                height: 200,
                                width: SIZES.width * 0.85,
                                marginLeft: index == 0 ? SIZES.padding : 18,
                                marginRight: index == recommends.length - 1 ? SIZES.padding : 0,
                                paddingRight: SIZES.radius,
                                alignItems: 'center'
                            }}
                            imageStyle={{
                                marginTop: 35,
                                height: 150,
                                width: 150
                            }}
                            item={item}
                            onPress={() => navigation.navigate("FoodDetail")}
                        />
                    )}
                />
            </Section>
        )
    }

    // function renderPopularSection() {
    //     return (
    //         <Section
    //             // title="Popular Near You"
    //             // onPress={() => console.log("Show all popular items")}
    //         >
    //             <FlatList
    //                 data={popular}
    //                 keyExtractor={item => `${item.id}`}
    //                 showsHorizontalScrollIndicator={false}
    //                 renderItem={({ item, index }) => (
    //                     <VerticalFoodCard
    //                         containerStyle={{
    //                             marginLeft: index == 0 ? SIZES.padding : 25,
    //                             marginRight: index == popular.length - 1 ? SIZES.padding : 25,
    //                         }}
    //                         item={item}
    //                         onPress={() => navigation.navigate("FoodSelection", { foodItem: item })}
    //                     />
    //                 )}
    //             />
    //         </Section>
    //     )
    // }

    function renderRestaurantSection() {
        return (
            <Section
                // title="Popular Near You"
                // onPress={() => console.log("Show all popular items")}
            >
                <FlatList
                    data={restaurant}
                    keyExtractor={item => `${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <VerticalFoodCard
                            containerStyle={{
                                marginLeft: index == 0 ? SIZES.padding : 25,
                                marginRight: index == popular.length - 1 ? SIZES.padding : 25,
                            }}
                            item={item}
                            onPress={() => navigation.navigate("FoodSelection", { foodItem: item })}
                        />
                    )}
                />
            </Section>
        )
    }
    

    // function renderFoodCategories() {
    //     return (
    //         <FlatList
    //             data={dummyData.categories}
    //             keyExtractor={item => `${item.id}`}
    //             horizontal
    //             showsHorizontalScrollIndicator={false}
    //             renderItem={({ item, index }) => (
    //                 <TouchableOpacity
    //                     style={{
    //                         flexDirection: 'row',
    //                         height: 55,
    //                         marginTop: SIZES.padding,
    //                         marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
    //                         marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0,
    //                         paddingHorizontal: 8,
    //                         borderRadius: SIZES.radius,
    //                         backgroundColor: selectedCategoryId == item.id ? COLORS.primary : COLORS.lightGray2
    //                     }}
    //                     onPress={() => {
    //                         setSelectedCategoryId(item.id)
    //                         handleChangeCategory(item.id, selectedMenuType)
    //                     }}
    //                 >
    //                     <Image
    //                         source={item.icon}
    //                         style={{
    //                             marginTop: 5,
    //                             height: 50,
    //                             width: 50
    //                         }}
    //                     />

    //                     <Text
    //                         style={{
    //                             alignSelf: 'center',
    //                             marginRight: SIZES.base,
    //                             color: selectedCategoryId == item.id ? COLORS.white : COLORS.darkGray,
    //                             ...FONTS.h3
    //                         }}
    //                     >
    //                         {item.name}
    //                     </Text>

    //                 </TouchableOpacity>
    //             )}
    //         />
    //     )
    // }

    // function renderDeliveryTo() {
    //     return (
    //         <View
    //             style={{
    //                 marginTop: SIZES.padding,
    //                 marginHorizontal: SIZES.padding
    //             }}
    //         >
    //             <Text
    //                 style={{
    //                     color: COLORS.primary,
    //                     ...FONTS.body3
    //                 }}
    //             >
    //                 DELIVERY TO
    //             </Text>

    //             <TouchableOpacity
    //                 style={{
    //                     flexDirection: 'row',
    //                     marginTop: SIZES.base,
    //                     alignItems: 'center'
    //                 }}
    //             >
    //                 <Text style={{ ...FONTS.h3 }}>
    //                     {dummyData?.myProfile?.address}
    //                 </Text>
    //                 <Image
    //                     source={icons.down_arrow}
    //                     style={{
    //                         marginLeft: SIZES.base,
    //                         height: 20,
    //                         width: 20
    //                     }}
    //                 />
    //             </TouchableOpacity>
    //         </View>
    //     )
    // }

    return (
        <View
            style={{
                backgroundColor: COLORS.grey,
                flex: 1,
                //padding to bottom so card is not behind tab.
                paddingBottom: "13%",
                
                
            }}
        >
            {/* Search */}
            {renderSearch()}

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
                    <View>
                        {/* Delivery To */}
                        {/* {renderDeliveryTo()} */}

                        {/* Food Categories */}
                        {/* {renderFoodCategories()} */}

                        {/* Popular */}
                        {/* {renderPopularSection()} */}


                        {renderRestaurantSection()}
                        {/* Recommended */}
                        {/* {renderRecommendedSection()} */}

                        {/* Menu Type */}
                        {/* {renderMenuTypes()} */}
                        
                    </View>
                }
                // renderItem={({ item, index }) => {
                //     return (
                //         <HorizontalFoodCard
                //             containerStyle={{
                //                 height: 130,
                //                 alignItems: 'center',
                //                 marginHorizontal: SIZES.padding,
                //                 marginBottom: SIZES.radius
                //             }}
                //             imageStyle={{
                //                 marginTop: 20,
                //                 height: 110,
                //                 width: 110,
                //                 marginHorizontal: 10,
                //                 marginBottom: 15
                //             }}
                //             item={item}
                //             onPress={() => navigation.navigate("FoodDetail", { foodItem: item })}
                //         />
                //     )
                // }}
                // ListFooterComponent={
                //     <View style={{ height: 200 }} />
                // }
            />
        </View>
    )
}

export default Home;