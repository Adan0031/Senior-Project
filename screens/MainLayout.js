// This Screen Hosts our Header and our bottom tabs
import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image,
    FlatList,
    Platform
} from 'react-native';

// Importing hooks from teh React Native Animated Library 
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";

import {
    Home,
    // Search,
    CartTab,
    // Favourite,
    Notification,
    Account
} from "../screens";
import { Header } from "../components";
import {
    COLORS,
    FONTS,
    SIZES,
    icons,
    constants,
    dummyData
} from "../constants";

const TabButton = ({ label, icon, isFocused, outerContainerStyle, innerContainerStyle, onPress }) => {
    return (
        // Elements that respond to press shoudl have visual feedback when touched
        <TouchableWithoutFeedback
            onPress={onPress}
        >
            <Animated.View
                style={[
                    {
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    outerContainerStyle
                ]}
            >
                <Animated.View
                    style={[
                        {
                            flexDirection: 'row',
                            width: "80%",
                            height: 50,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25
                        },
                        innerContainerStyle
                    ]}
                >
                    <Image
                        source={icon}
                        style={{
                            width: 20,
                            height: 20,
                            tintColor: isFocused ? COLORS.white : COLORS.gray
                        }}
                    />
                    {/* Necesarry to render */}
                    {isFocused &&
                        <Text
                            numberOfLines={1}
                            style={{
                                marginLeft: SIZES.base,
                                color: COLORS.white,
                                ...FONTS.h3
                            }}
                        >
                            {label}
                        </Text>
                    }
                </Animated.View>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}

const MainLayout = ({ drawerAnimationStyle, navigation, selectedTab, setSelectedTab }) => {

    const flatListRef = React.useRef()

    // Reanimated Shared Value

    // Not neede for our application
    const homeTabFlex = useSharedValue(1)
    const homeTabColor = useSharedValue(COLORS.white)
    // const searchTabFlex = useSharedValue(1)
    // const searchTabColor = useSharedValue(COLORS.white)
    const cartTabFlex = useSharedValue(1)
    const cartTabColor = useSharedValue(COLORS.white)
    // const favouriteTabFlex = useSharedValue(1)
    // const favouriteTabColor = useSharedValue(COLORS.white)
    const notificationTabFlex = useSharedValue(1)
    const notificationTabColor = useSharedValue(COLORS.white)

    // Reanimated Animated Style

    const homeFlexStyle = useAnimatedStyle(() => {
        return {
            flex: homeTabFlex.value
        }
    })

    const homeColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: homeTabColor.value
        }
    })

    // const searchFlexStyle = useAnimatedStyle(() => {
    //     return {
    //         flex: searchTabFlex.value
    //     }
    // })

    // const searchColorStyle = useAnimatedStyle(() => {
    //     return {
    //         backgroundColor: searchTabColor.value
    //     }
    // })

    const cartFlexStyle = useAnimatedStyle(() => {
        return {
            flex: cartTabFlex.value
        }
    })

    const cartColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: cartTabColor.value
        }
    })

    // const favouriteFlexStyle = useAnimatedStyle(() => {
    //     return {
    //         flex: favouriteTabFlex.value
    //     }
    // })

    // const favouriteColorStyle = useAnimatedStyle(() => {
    //     return {
    //         backgroundColor: favouriteTabColor.value
    //     }
    // })

    const notificationFlexStyle = useAnimatedStyle(() => {
        return {
            flex: notificationTabFlex.value
        }
    })

    const notificationColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: notificationTabColor.value
        }
    })

    React.useEffect(() => {
        setSelectedTab(constants.screens.home)
    }, [])
    // Fix use effect when we get rid of bottom tabs
    // Have Also to fix indexes to not go out of bounds
    React.useEffect(() => {
        if (selectedTab == constants.screens.home) {
            flatListRef?.current?.scrollToIndex({
                index: 0,
                animated: false
            })

            homeTabFlex.value = withTiming(4, { duration: 500 })
            homeTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        } else {
            homeTabFlex.value = withTiming(1, { duration: 500 })
            homeTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }

        // if (selectedTab == constants.screens.search) {
        //     flatListRef?.current?.scrollToIndex({
        //         index: 1,
        //         animated: false
        //     })

        //     searchTabFlex.value = withTiming(4, { duration: 500 })
        //     searchTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        // } else {
        //     searchTabFlex.value = withTiming(1, { duration: 500 })
        //     searchTabColor.value = withTiming(COLORS.white, { duration: 500 })
        // }

        if (selectedTab == constants.screens.cart) {
            flatListRef?.current?.scrollToIndex({
                //  index: 2,
                index: 1,
                animated: false
            })

            cartTabFlex.value = withTiming(4, { duration: 500 })
            cartTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        } else {
            cartTabFlex.value = withTiming(1, { duration: 500 })
            cartTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }

        // if (selectedTab == constants.screens.favourite) {
        //     flatListRef?.current?.scrollToIndex({
        //         index: 2,
        //         animated: false
        //     })

        //     favouriteTabFlex.value = withTiming(4, { duration: 500 })
        //     favouriteTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        // } else {
        //     favouriteTabFlex.value = withTiming(1, { duration: 500 })
        //     favouriteTabColor.value = withTiming(COLORS.white, { duration: 500 })
        // }

        if (selectedTab == constants.screens.notification) {
            flatListRef?.current?.scrollToIndex({
                // If we change ID in screens we need to change index here as well
                index: 2,
                animated: false
            })

            notificationTabFlex.value = withTiming(4, { duration: 500 })
            notificationTabColor.value = withTiming(COLORS.primary, { duration: 500 })
        } else {
            notificationTabFlex.value = withTiming(1, { duration: 500 })
            notificationTabColor.value = withTiming(COLORS.white, { duration: 500 })
        }
        // Added this to State when adding the Account Screen
        if (selectedTab == constants.screens.account) {
            flatListRef?.current?.scrollToIndex({
                // If we change ID in screens we need to change index here as well
                index: 3,
                animated: false
            })
        } 
    }, [selectedTab])

    return (
        <Animated.View
            style={{
                flex: 1,
                backgroundColor: COLORS.grey,
                // ...drawerAnimationStyle
            }}
        >
            {/* This is where the header is implemented */}
            {/* Header */}
            <Header
                containerStyle={{
                    height: 50,
                    paddingHorizontal: SIZES.padding,
                    marginTop: 40,
                    alignItems: 'center'
                }}
                // Will udpate Header Title to the selected tab based on state we are in
                title={selectedTab.toUpperCase()}
                // Commented Out the Drawer Button on the left Hand Side, had to restyle header
                // leftComponent={
                //     <TouchableOpacity
                //         style={{
                //             width: 40,
                //             height: 40,
                //             alignItems: 'center',
                //             justifyContent: 'center',
                //             borderWidth: 1,
                //             borderColor: COLORS.gray2,
                //             borderRadius: SIZES.radius
                //         }}
                //         onPress={() => navigation.openDrawer()}
                //     >
                //         <Image
                //             source={icons.menu}
                //         />
                //     </TouchableOpacity>
                // }
                // rightComponent={
                //     <TouchableOpacity
                //         style={{
                //             borderRadius: SIZES.radius,
                //             alignItems: 'center',
                //             justifyContent: 'center'
                //         }}
                //     >
                //         <Image
                //             source={dummyData?.myProfile?.profile_image}
                //             style={{
                //                 width: 40,
                //                 height: 40,
                //                 borderRadius: SIZES.radius
                //             }}
                //         />
                //     </TouchableOpacity>
                // }
            />

            {/* Content */}
            <View
                style={{
                    flex: 1
                }}
            >
                <FlatList
                    ref={flatListRef}
                    horizontal
                    scrollEnabled={false}
                    pagingEnabled
                    snapToAlignment="center"
                    snapToInterval={SIZES.width}
                    showsHorizontalScrollIndicator={false}
                    data={constants.bottom_tabs}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item, index }) => {
                        return (
                            <View
                                style={{
                                    height: SIZES.height,
                                    width: SIZES.width
                                }}
                            >
                                {item.label == constants.screens.home && <Home />}
                                {/* {item.label == constants.screens.search && <Search />} */}
                                {item.label == constants.screens.cart && <CartTab />}
                                {/* {item.label == constants.screens.favourite && <Favourite />} */}
                                {item.label == constants.screens.notification && <Notification />}
                                {item.label == constants.screens.account && <Account />}
                            </View>
                        )
                    }}
                />
            </View>
            {/* This is where the bottom tabs are placed and animations*/}
            {/* Footer */}
            <View
                style={{
                    height: 100,
                    justifyContent: 'flex-end'
                }}
            >
                {/* Shadow */}
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    colors={[COLORS.transparent, COLORS.lightGray1]}
                    style={{
                        position: 'absolute',
                        top: -15,
                        left: 0,
                        right: 0,
                        height: Platform.OS === 'ios' ? 200 : 50,
                        borderTopLeftRadius: 15,
                        borderTopRightRadius: 15
                    }}
                />

                {/* Tabs */}
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        paddingHorizontal: SIZES.radius,
                        paddingBottom: 10,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: COLORS.primary
                    }}
                >
                    <TabButton
                        // label={constants.screens.home}
                        icon={icons.home}
                        isFocused={selectedTab == constants.screens.home}
                        // Animations for Tabs next two lines
                        // outerContainerStyle={homeFlexStyle}
                        // innerContainerStyle={homeColorStyle}
                        onPress={() => setSelectedTab(constants.screens.home)}
                    />
                    {/* First Remove Functionality and then Remove from UI */}
                    {/* <TabButton
                        label={constants.screens.search}
                        icon={icons.search}
                        isFocused={selectedTab == constants.screens.search}
                        outerContainerStyle={searchFlexStyle}
                        innerContainerStyle={searchColorStyle}
                        onPress={() => setSelectedTab(constants.screens.search)}
                    /> */}

                    <TabButton
                        // label={constants.screens.cart}
                        icon={icons.cart}
                        isFocused={selectedTab == constants.screens.cart}
                        // outerContainerStyle={cartFlexStyle}
                        // innerContainerStyle={cartColorStyle}
                        onPress={() => setSelectedTab(constants.screens.cart)}
                    />

                    {/* <TabButton
                        // label={constants.screens.favourite}
                        icon={icons.favourite}
                        isFocused={selectedTab == constants.screens.favourite}
                        // outerContainerStyle={favouriteFlexStyle}
                        // innerContainerStyle={favouriteColorStyle}
                        onPress={() => setSelectedTab(constants.screens.favourite)}
                    /> */}

                    <TabButton
                        // label={constants.screens.notification}
                        icon={icons.notification}
                        isFocused={selectedTab == constants.screens.notification}
                        // outerContainerStyle={notificationFlexStyle}
                        // innerContainerStyle={notificationColorStyle}
                        onPress={() => setSelectedTab(constants.screens.notification)}
                    />

                    <TabButton
                        // label={constants.screens.my_account}
                        icon={icons.user}
                        isFocused={selectedTab == constants.screens.account}
                        onPress={() => setSelectedTab(constants.screens.account)}
                    />      
                </View>
            </View>
        </Animated.View>
    )
}
// More Boiler Plate code (Redux) to connect our main layout screen to our redux
function mapStateToProps(state) {
    return {
        selectedTab: state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab: (selectedTab) => { return dispatch(setSelectedTab(selectedTab)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)