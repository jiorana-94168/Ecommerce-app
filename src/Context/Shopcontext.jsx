import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

const currency = "$";
const delivery_fee = "10";

const [search, setSearch] = useState("");
const [showSearch, setshowSearch] = useState(false);
const [cartItems, setCartItems] = useState({});

const navigate = useNavigate();

// Add product to cart
const addtoCart = async (itemId, size) => {

    if (!size) {
        toast.error("Select Product Size")
    }

    let cartData = structuredClone(cartItems)

    if (cartData[itemId]) {
        if (cartData[itemId][size]) {
            cartData[itemId][size] += 1
        }
        else {
            cartData[itemId][size] = 1
        }
    }
    else {
        cartData[itemId] = {}
        cartData[itemId][size] = 1
    }

    setCartItems(cartData)
}

// Update quantity of cart item
const updateQuantity = (_id, size, quantity) => {

    let cartCopy = structuredClone(cartItems)

    cartCopy[_id][size] = quantity

    setCartItems(cartCopy)
}

// Get total cart items count
const getCartCount = () => {

    let totalCount = 0;

    for (const items in cartItems) {
        for (const item in cartItems[items]) {

            try {
                if (cartItems[items][item] > 0) {
                    totalCount += cartItems[items][item]
                }
            }
            catch (error) {

            }
        }
    }

    return totalCount;
}

// Calculate total cart amount
const getCartAmount = () => {

    let totalAmount = 0;

    for (const items in cartItems) {

        let itemInfo = products.find(
            (product) => product._id === items
        )

        for (const item in cartItems[items]) {

            if (cartItems[items][item] > 0) {
                totalAmount += itemInfo.price * cartItems[items][item]
            }
        }
    }

    return totalAmount;
}

// Check cart updates
useEffect(() => {
    console.log(cartItems)
}, [cartItems])

// Global data and functions
const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setshowSearch,
    cartItems,
    addtoCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
}

return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
)
}

export default ShopContextProvider;