"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import { remove, clearCart, incrementQuantity, decrementQuantity } from "../Redux/CartSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";
import CheckoutPage from "../checkoutpage/page";

const page = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const router = useRouter();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  return (
    <div className="container mx-auto px-5 lg:px-20 py-14">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-xl text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 border border-gray-200 p-4 rounded-lg shadow">
                <div className="w-32 h-20 relative">
                  <Image src={item.image} alt={item.title} fill className="object-cover rounded" />
                </div>
                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-600 mt-1">
                    Price: {item.price} × {item.quantity} ={" "}
                    {Number(item.price) * item.quantity} ৳
                  </p>

              
                  <div className="flex items-center mt-2 gap-2">
                    <button
                      onClick={() => dispatch(decrementQuantity(item))}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => dispatch(incrementQuantity(item))}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(remove(item))}
                  className="text-red-600 font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              onClick={() => dispatch(clearCart())}
              className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition mt-4"
            >
              Clear Cart
            </button>
          </div>

          
          <div className="border border-gray-300 rounded-xl p-6 shadow space-y-4">
            <h2 className="text-xl font-bold">Cart Summary</h2>
            <div className="flex justify-between">
              <span>Total Items:</span>
              <span>{cartItems.reduce((acc, i) => acc + i.quantity, 0)}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total Price:</span>
              <span>{totalPrice} ৳</span>
            </div>
          <Link href="checkoutpage">
            <button
              onClick={() => router.push("/checkout")}
              className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
            >
              Proceed to Checkout
            </button>
          </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
