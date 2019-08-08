
const actionOne = (context: any, payload: any) => {
    context.commit('PROP1_UPDATED', payload);
};

const actionTwo = (context: any, payload: any) => {
    context.commit('PROP2_UPDATED', payload);
};


const setKeyboardIsOpen = (context: any, state: boolean) => {
    context.commit('SET_KEYBOARD_STATUS', state);
};

export default {
    actionOne,
    actionTwo,
    setKeyboardIsOpen,
};