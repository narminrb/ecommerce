import { useCartContext } from '@/providers/CartContext';
import React from 'react';

const CheckOut = () => {
    const { carts, updateQuantity, totalAmount } = useCartContext();
    const subtotal = totalAmount; 

    const shippingCost = subtotal > 200 ? 0 : 5; 

    const finalTotal = subtotal + shippingCost;
    
    return (
        <div className="bg-gray-100 h-screen py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-3/4">
                        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                            <table className="w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left font-semibold">Product</th>
                                        <th className="text-left font-semibold">Price</th>
                                        <th className="text-left font-semibold">Quantity</th>
                                        <th className="text-left font-semibold">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map((el, index) => (
                                        <tr key={index}>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <img className="h-16 w-16 mr-4" src={`http://localhost:1337${el.image.url}`} alt="Product" />
                                                    <span className="font-semibold">{el.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4">${el.discountprice.toFixed(2)}</td>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <button
                                                        className="border rounded-md py-2 px-4 mr-2"
                                                        onClick={() => updateQuantity(el.id, "decrease")}
                                                    >-</button>
                                                    <span className="text-center w-8">{el.quantity}</span>
                                                    <button
                                                        className="border rounded-md py-2 px-4 ml-2"
                                                        onClick={() => updateQuantity(el.id, "increase")}
                                                    >+</button>
                                                </div>
                                            </td>
                                            <td className="py-4">${(el.discountprice * el.quantity).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="md:w-1/4">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-lg font-semibold mb-4">Summary</h2>
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>${totalAmount.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                    <span>Shipping</span>
                                    <span>${shippingCost.toFixed(2)}</span>
                                </div>
                            <hr className="my-2" />
                            <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">${finalTotal.toFixed(2)}</span>
                                </div>

                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
