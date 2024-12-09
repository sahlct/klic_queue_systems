import React from 'react';

export default function Customers() {
    // Customer data array
    const customers = [
        {
            name: 'Lulu Mall Kochi',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV4klLAhcPdIw7X4mmeSYCZXXYNjLwSu_yKg&s',
        },
        {
            name: 'Chicking',
            src: 'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/022015/chicking_logo.png?itok=a4qFAbyV',
        },
        {
            name: 'Gogulam Galleria',
            src: 'https://gokulamgalleria.com/assets//front/favicon/og-image.jpg',
        },
        {
            name: 'Hilite Mall',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8nD0wHyhHiaXSxHw04rwINcYIni90qYajw&s',
        },
        {
            name: "Naga's Veg Mall",
            src: 'https://vegacitymall.com/wp-content/uploads/2021/04/Nagas.png',
        },
        {
            name: 'Polski Kebab',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BZXcj_kxZw63oNFJe5-6dENrnW3tfMMlDg&s',
        },
        {
            name: 'Fruitbea',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJNfTMZRD6rLxu3RvJiHBgv8AN39_ev2CZgA&s',
        },
        {
            name: 'The Light House',
            src: 'https://static.vecteezy.com/system/resources/previews/008/915/587/non_2x/lighthouse-searchlight-beacon-tower-island-simple-style-logo-design-free-vector.jpg',
        },
    ];

    return (
        <div className='flex flex-col gap-10 pb-14'>
            <h1 className="text-center text-3xl font-semibold mt-10">Our Trusted Customers</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-14 px-16">
                {customers.map((customer, index) => (
                    <div key={index} className="text-center bg-gray-white h-40">
                        <img
                            src={customer.src}
                            alt={customer.name}
                            className="h-full w-full object-contain"
                        />
                        {/* <p className="mt-2 text-sm font-medium">{customer.name}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
}
