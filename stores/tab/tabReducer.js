import * as tabActionTypes from "./tabActions";

// No tab is selected
const initialState = {
    selectedTab: ""
}

const tabReducer = (state = initialState, action) => {
    // To Change State based on the selected tab
    switch (action.type) {
        case tabActionTypes.SET_SELECTED_TAB:
            return {
                ...state,
                selectedTab: action.payload.selectedTab
            }
        default:
            return state
    }
}

export default tabReducer;