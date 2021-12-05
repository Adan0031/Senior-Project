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

    VerticalFoodCard
} from "../../components"
import { FONTS, SIZES, COLORS, icons, images, dummyData } from "../../constants"

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

const FoodSelection = ({ navigation, route }) => {
    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1)
    const [popular, setPopular] = React.useState([])
    // const navigation = useNavigation();
    const [showFilterModal, setShowFilterModal] = React.useState(false)
    const [menuList, setMenuList] = React.useState([])


    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId)
    }, [])
    function handleChangeCategory(categoryId, menuTypeId) {


        let selectedPopular = dummyData.menu.find(a => a.name == "Popular")




        setPopular(selectedPopular?.list.filter(a => a.categories.includes(categoryId)))
    }

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
    //////////////////////////////////////////////////////////////////////////////
    function renderPopularSection() {
        return (
            <Section
            // title="Popular Near You"
            // onPress={() => console.log("Show all popular items")}
            >
                <FlatList
                    data={popular}
                    keyExtractor={item => `${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <VerticalFoodCard
                            containerStyle={{
                                marginLeft: index == 0 ? SIZES.padding : 25,
                                marginRight: index == popular.length - 1 ? SIZES.padding : 25,
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

    return (
        <View
            style={{
                flex: 1,
                //padding to bottom so card is not behind tab.
                marginBottom: 60

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
                    <View>

                        {/* Header */}
                        {renderHeader()}
                        {/* Popular */}
                        {renderPopularSection()}

                    </View>
                }
            />
        </View>
    )
}

export default FoodSelection;
