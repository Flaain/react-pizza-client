import { ProductSelectorState } from "@/shared/model/interfaces";
import { ProductSelectorTypes, Action } from "./interfaces";

const productSelectorReducer = (state: ProductSelectorState, { type, payload }: Action) => {
    switch (type) {
        case ProductSelectorTypes.SET_TYPE:
            return { ...state, type: payload.type };
        case ProductSelectorTypes.SET_SIZE:
            return { ...state, size: payload.size, price: payload.price };
        case ProductSelectorTypes.SET_COUNT:
            return { ...state, count: state.count + payload.count };
        case ProductSelectorTypes.SET_ADD_TO_CART:
            return { ...state, count: state.count + payload.count, loading: payload.loading };
        case ProductSelectorTypes.SET_ADD_TO_CART_LOADING:
            return { ...state, loading: payload };
        case ProductSelectorTypes.UPDATE:
            return { ...state, ...payload };
        default:
            return state;
    }
};

export default productSelectorReducer;