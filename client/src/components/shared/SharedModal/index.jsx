import { useCartContext } from "@/providers/CartContext";
import React from "react";
import { Link } from "react-router";
import s from './style.module.scss'
import minus from '../../../assets/Minus.png'
import add from '../../../assets/Add.png'
const SharedModal = ({ onClose }) => {
     const { carts, updateQuantity, totalAmount } = useCartContext();
        const subtotal = totalAmount; 
    
        const shippingCost = subtotal > 200 ? 0 : 5; 
    
        const finalTotal = subtotal + shippingCost;
  return (
    <div className="fixed inset-0 flex justify-end z-50">
      <div 
        className="absolute inset-0 bg-black/40 transition-opacity"
        onClick={onClose} 
      ></div>

      <div className="w-[413px] h-full bg-white shadow-lg transform translate-x-0 transition-transform duration-300">
        <div className="flex items-center justify-between px-4 py-2">
          <h1 className="text-lg font-bold">Cart</h1>
          <span onClick={onClose} className="text-gray-600 cursor-pointer">
            <i className="ri-close-line"></i>
          </span>
        </div>
        <div className="p-4">
          <table className="w-full">
                                <tbody>
                                    {carts.map((el, index) => (
                                        <tr key={index} className={s.tr}>
                                        <td className="py-2">
                                          <div className="flex">
                                            <div  className={s.modalimg}>
                                              <img
                                             className="h-24 w-20 mr-4"
                                                src={`http://localhost:1337${el.image.url}`}
                                                alt="Product"
                                              />
                                            </div>
                                            <div className="flex flex-col ml-2 justify-between">
                                              <span className="font-semibold">{el.name}</span>
                                              <div className={s.modalbtns}>
                                             <button
                                              onClick={() => updateQuantity(el.id, "decrease")}
                                             >
                                             <img src={minus} alt="" />
                                             </button>
                                                <span className={s.quan}>{el.quantity}</span>
                                                   
                                                <button onClick={() => updateQuantity(el.id, "increase")}>
                                                <img src={add} alt="Decrease quantity" />
                                                </button>
                                              </div>
                                            </div>
                                          </div>
                                        </td>
                                        <td>
                                          ${el.discountprice.toFixed(2)}
                                        </td>
                                      </tr>
                                      
                                    ))}
                                </tbody>
                            </table>
        </div>
                <div className="px-4 py-3 absolute bottom-0 w-full">
        <div className="flex justify-between items-center">
            <span className={s.modaltotal}>Total:</span>
            <span className={s.totalprice}>
            ${carts.reduce((acc, el) => acc + (el.discountprice * el.quantity), 0).toFixed(2)}
            </span>
        </div>
        <button className="block w-full mt-4 bg-[#141718] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-[6px]">
            <Link to="/checkout">Checkout</Link>
        </button>
        </div>

            </div>
            </div>
  );
};

export default SharedModal;
