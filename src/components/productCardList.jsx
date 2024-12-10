import React from 'react';

export default function ProductCardList() {
  const products = [
    {
      id: 1,
      name: "Wireless Queue Calling Display",
      description: "Large LED display for queue numbers with wireless connectivity.",
      price: 199.99,
      image: "https://image.made-in-china.com/2f0j00FVUqyTzBhQkc/Wireless-Queue-Calling-System-Restaurant-Bank-Hospital-Customer-Queuing-Management-3-Digits-Display-Broadcast-Waiting-Number-for-Waiter-to-Call-The-Guest.webp",
      category: "Queue Displays",
    },
    {
      id: 2,
      name: "Handheld Pager",
      description: "Compact, rechargeable pager for customer notifications.",
      price: 49.99,
      image: "https://image.made-in-china.com/2f0j00aUDerzEhogkt/Consumer-Electronics-Handheld-Pager-System-for-Service-Wieless-Waiter-Calling-in-Restaurant-Hotel-Cafe.webp",
      category: "Pagers",
    },
    {
      id: 3,
      name: "Queue Management Kiosk",
      description: "Touchscreen kiosk for ticket issuance and queue management.",
      price: 799.99,
      image: "https://moreze.com/assets/images/product/Queue/img2.jpg",
      category: "Kiosks",
    },
    {
      id: 4,
      name: "Wireless Queue Calling Display",
      description: "Large LED display for queue numbers with wireless connectivity.",
      price: 199.99,
      image: "https://image.made-in-china.com/2f0j00FVUqyTzBhQkc/Wireless-Queue-Calling-System-Restaurant-Bank-Hospital-Customer-Queuing-Management-3-Digits-Display-Broadcast-Waiting-Number-for-Waiter-to-Call-The-Guest.webp",
      category: "Queue Displays",
    },
    {
      id: 5,
      name: "Handheld Pager",
      description: "Compact, rechargeable pager for customer notifications.",
      price: 49.99,
      image: "https://image.made-in-china.com/2f0j00aUDerzEhogkt/Consumer-Electronics-Handheld-Pager-System-for-Service-Wieless-Waiter-Calling-in-Restaurant-Hotel-Cafe.webp",
      category: "Pagers",
    },
    {
      id: 6,
      name: "Queue Management Kiosk",
      description: "Touchscreen kiosk for ticket issuance and queue management.",
      price: 799.99,
      image: "https://moreze.com/assets/images/product/Queue/img2.jpg",
      category: "Kiosks",
    },
    {
      id: 7,
      name: "Wireless Queue Calling Display",
      description: "Large LED display for queue numbers with wireless connectivity.",
      price: 199.99,
      image: "https://image.made-in-china.com/2f0j00FVUqyTzBhQkc/Wireless-Queue-Calling-System-Restaurant-Bank-Hospital-Customer-Queuing-Management-3-Digits-Display-Broadcast-Waiting-Number-for-Waiter-to-Call-The-Guest.webp",
      category: "Queue Displays",
    },
    {
      id: 8,
      name: "Handheld Pager",
      description: "Compact, rechargeable pager for customer notifications.",
      price: 49.99,
      image: "https://image.made-in-china.com/2f0j00aUDerzEhogkt/Consumer-Electronics-Handheld-Pager-System-for-Service-Wieless-Waiter-Calling-in-Restaurant-Hotel-Cafe.webp",
      category: "Pagers",
    },
    {
      id: 9,
      name: "Queue Management Kiosk",
      description: "Touchscreen kiosk for ticket issuance and queue management.",
      price: 799.99,
      image: "https://moreze.com/assets/images/product/Queue/img2.jpg",
      category: "Kiosks",
    },
    // {
    //   id: 4,
    //   name: "Table Call Button",
    //   description: "Wireless call button for tables, ideal for restaurants.",
    //   price: 29.99,
    //   image: "https://catel.cn/static/upload/image/20220627/1656309661927392.jpg",
    //   category: "Buttons",
    // },
    // {
    //   id: 5,
    //   name: "Customer Notification Screen",
    //   description: "Small screen displaying queue status for customers.",
    //   price: 149.99,
    //   image: "https://ae01.alicdn.com/kf/Hced638b889c347c69676634e0c0e2370f.jpg_640x640q90.jpg",
    //   category: "Displays",
    // },
    // {
    //   id: 6,
    //   name: "Queue Calling Software",
    //   description: "Comprehensive software for managing and monitoring queues.",
    //   price: 399.99,
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJwH6iYn5DWoCm3WmFeUiWPxplFo_Twgk8A&s",
    //   category: "Software",
    // },
    // {
    //   id: 7,
    //   name: "Wireless Ticket Dispenser",
    //   description: "Automatic ticket dispenser with wireless integration.",
    //   price: 599.99,
    //   image: "https://image.made-in-china.com/202f0j00TQnGEsgPvMbi/Wireless-17inch-Touch-Screen-Queue-Management-System-Ticket-Dispenser.jpg",
    //   category: "Dispensers",
    // },
    // {
    //   id: 8,
    //   name: "Service Counter Display",
    //   description: "Counter-mounted display to show current serving numbers.",
    //   price: 99.99,
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQucJTuhFxDhygMyeQGySq20et15nEg7CEkzblAVAE8bVPD-H9i4hkHpOeU4a4QQJy7msA&usqp=CAU",
    //   category: "Displays",
    // },
    // {
    //   id: 9,
    //   name: "Queue System Controller",
    //   description: "Centralized controller to manage all queue devices.",
    //   price: 499.99,
    //   image: "https://m.media-amazon.com/images/I/71ov1SqwUSL.jpg",
    // //   image: "https://via.placeholder.com/150",
    //   category: "Controllers",
    // },
  ];

  return (
    <div className="p-6 bg-gray-100 font-parkinsans md:py-10 md:pb-20">
      <h1 className="text-2xl sm:text-3xl font-light text-center mb-6 md:py-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-16 gap-8 md:px-20 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-normal">{product.name}</h2>
              <p className="text-gray-500 text-sm font-light mb-4">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#0a2140] font-bold">${product.price.toFixed(2)}</span>
                <button className="bg-[#0a2140] text-white px-4 py-2 rounded hover:bg-[#1b457e]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

