export default function (state = {currentIndex: 0, direction: null}, action) {
    switch (action.type) {
        case 'GO_TO_NEXT_PAGE':
            return Object.assign({}, state, {
                currentIndex: state.currentIndex + 1,
                direction: 'next'
            });
        case 'GO_TO_PREV_PAGE':
            return Object.assign({}, state, {
                currentIndex: state.currentIndex - 1,
                direction: 'prev'
            });
        default:
            return state;
    }
}