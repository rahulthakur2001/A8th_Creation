import React from 'react'

export const UsersContent = () => {
    const products = [
      {
        id: 1,
        name: "iPhone 14 Pro Max",
        stock: 524,
        price: "$1,099.00",
        image: "📱",
      },
      {
        id: 2,
        name: "Apple Watch S8",
        stock: 320,
        price: "$799.00",
        image: "⌚",
      },
    ];
  
    return (
      <div>
        <div className="text-3xl font-bold mb-5">Users Management</div>
        <div className="bg-[#0b1739] p-6 rounded-xl w-full max-w-4xl mx-auto">
          <h2 className="text-white text-xl font-bold mb-4">Products</h2>
          <div className="w-full">
            <div className="flex justify-between text-gray-400 mb-2 px-4">
              <span>Products</span>
              <span>Price</span>
            </div>
            <div className="divide-y divide-gray-700">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center p-4 hover:bg-gray-800 rounded-lg transition"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-900 flex items-center justify-center text-2xl rounded-lg">
                      {product.image}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{product.name}</p>
                      <p className="text-gray-400 text-sm">
                        {product.stock} in stock
                      </p>
                    </div>
                  </div>
                  <span className="text-white font-semibold">
                    {product.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
