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

    // Local Storage se cart load hoga
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : {};
    });

    const navigate = useNavigate();

    // Add product to cart
    const addtoCart = async (itemId, size) => {

        if (!size) {
            toast.error("Select Product Size");
            return;
        }

        let cartData = structuredClone(cartItems);

        if (cartData[itemId]) {

            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }

        } else {

            cartData[itemId] = {};
            cartData[itemId][size] = 1;

        }

        setCartItems(cartData);
        toast.success("Product Added To Cart");
    };

    // Update quantity
    const updateQuantity = (_id, size, quantity) => {

        let cartCopy = structuredClone(cartItems);

        if (quantity === 0) {
            delete cartCopy[_id][size];

            if (Object.keys(cartCopy[_id]).length === 0) {
                delete cartCopy[_id];
            }
        } else {
            cartCopy[_id][size] = quantity;
        }

        setCartItems(cartCopy);
    };

    // Total cart items
    const getCartCount = () => {

        let totalCount = 0;

        for (const items in cartItems) {
            for (const item in cartItems[items]) {

                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }

                } catch (error) {
                    console.log(error);
                }
            }
        }

        return totalCount;
    };

    // Total cart amount
    const getCartAmount = () => {

        let totalAmount = 0;

        for (const items in cartItems) {

            let itemInfo = products.find(
                (product) => product._id === items
            );

            if (!itemInfo) continue;

            for (const item in cartItems[items]) {

                if (cartItems[items][item] > 0) {
                    totalAmount += itemInfo.price * cartItems[items][item];
                }
            }
        }

        return totalAmount;
    };

    // Cart console check
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    // Local Storage Save
    useEffect(() => {
        localStorage.setItem(
            "cartItems",
            JSON.stringify(cartItems)
        );
    }, [cartItems]);

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
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;