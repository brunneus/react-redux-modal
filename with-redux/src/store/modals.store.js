const initialState = {
    showYesNoModal: false
}

export function modalsStore(state = initialState, action) {
    const actions = {
        "ShowYesNoModal" : {
            ...state,
            showYesNoModal: true
        },
        "HideYesNoModal" : {
            ...state,
            showYesNoModal: false
        }
    }

    return actions[action.type] || state
}