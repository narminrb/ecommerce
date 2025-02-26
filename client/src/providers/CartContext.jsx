import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carts, setCarts] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(carts));
    }, [carts]); 

    // Function to add product to cart or increase quantity
    const addToCart = (product) => {
        setCarts((prev) => {
            const existingProduct = prev.find((item) => item.id === product.id);
            if (existingProduct) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    };

    // Function to update product quantity (increase or decrease)
    const updateQuantity = (productId, action) => {
        setCarts((prev) => {
            return prev
                .map((item) => {
                    if (item.id === productId) {
                        return {
                            ...item,
                            quantity: action === "increase" ? item.quantity + 1 : item.quantity - 1
                        };
                    }
                    return item;
                })
                .filter((item) => item.quantity > 0); // Remove items with 0 quantity
        });
    };

    // Function to remove product completely from cart
    const removeFromCart = (id) => {
        setCarts((prev) => prev.filter((item) => item.id !== id));
    };

    const totalAmount = carts.reduce((acc, item) => acc + item.discountprice * item.quantity, 0);

    return (
        <CartContext.Provider value={{ carts, addToCart, updateQuantity, removeFromCart, totalAmount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartContext provider");
    }
    return context;
};
