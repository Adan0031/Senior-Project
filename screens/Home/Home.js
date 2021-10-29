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
            {children}
        </View>
    )
}

const Home = () => {

    

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

    const navigation = useNavigation();

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
                        {renderRestaurantSection()}
                    </View>
                }

            />
        </View>
    )
}

export default Home;