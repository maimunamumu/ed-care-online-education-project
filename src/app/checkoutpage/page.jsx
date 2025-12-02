"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Redux/CartSlice";
import { useRouter } from "next/navigation";

const page = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your order of ${totalPrice} ৳ has been placed.`);
    dispatch(clearCart());
    router.push("/");
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-5 lg:px-20 py-14">
        <p className="text-xl text-gray-600">Your cart is empty. Add items before checkout.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-5 lg:px-20 py-14">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      
        <form onSubmit={handleSubmit} className="space-y-6 border rounded-xl p-6 shadow border-gray-300 border-gray-300">
          <h2 className="text-xl font-semibold">Billing Details</h2>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded-lg border-gray-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded-lg border-gray-300"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Address</label>
            <textarea
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="border p-2 rounded-lg border-gray-300"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
          >
            Place Order ({totalPrice} ৳)
          </button>
        </form>

      
        <div className="border border-gray-300 rounded-xl p-6 shadow space-y-4">
          <h2 className="text-xl font-semibold">Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>{item.title} x {item.quantity}</span>
              <span>{Number(item.price) * item.quantity} ৳</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-lg border-t pt-2 mt-2 border-gray-300">
            <span>Total:</span>
            <span>{totalPrice} ৳</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;