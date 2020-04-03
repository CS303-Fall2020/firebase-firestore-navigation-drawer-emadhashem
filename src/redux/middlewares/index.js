
const logger = (store) => (next) => (action) => {
    // console.warn('action type' , action.type)
    const ret = next(action);
    // console.warn('new state' , store.getState());
    return ret
}
// const root = applyMiddleware(thunk , logger);
export default logger