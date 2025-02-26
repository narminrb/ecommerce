import React from "react";
import { Link } from "react-router";

const SharedModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-end z-50">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/40 transition-opacity"
        onClick={onClose} 
      ></div>

      {/* Side Drawer */}
      <div className="w-[300px] h-full bg-white shadow-lg transform translate-x-0 transition-transform duration-300">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-lg font-bold">Cart</h1>
          <span onClick={onClose} className="text-gray-600 cursor-pointer">
            <i className="ri-close-line"></i>
          </span>
        </div>
        <div className="p-4">
          {/* Cart Items */}
          <div className="flex items-center mb-4">
            <img className="h-16 w-16 object-contain rounded-lg mr-4" src="https://picsum.photos/200/200" alt="Product"/>
            <div className="flex-1">
              <h2 className="text-lg font-bold">Product Title</h2>
              <span className="text-gray-600">$29.99</span>
            </div>
            <button className="text-gray-600 hover:text-red-500">
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 13H5v-2h14v2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-200 absolute bottom-0 w-full">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">Total:</span>
            <span className="font-bold text-lg">$29.99</span>
          </div>
          <button className="block w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            <Link to="/checkout">Checkout</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharedModal;
