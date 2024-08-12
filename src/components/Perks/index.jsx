import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdCurrencyExchange } from 'react-icons/md';

const perks = [
  {
    icon: <TbTruckDelivery />,
    title: 'FREE AND FAST DELIVERY',
    description: 'Free delivery for all orders over $140',
  },
  {
    icon: <RiCustomerService2Fill />,
    title: '24/7 CUSTOMER SERVICE',
    description: 'Friendly 24/7 customer support',
  },
  {
    icon: <MdCurrencyExchange />,
    title: 'MONEY BACK GUARANTEE',
    description: 'We return money within 30 days',
  },
];

function Perks() {
  return (
    <>
      <h1 className="text-[#DB4444] border-l-8 pl-2 mt-16 rounded-t-md rounded-b-md border-l-[#DB4444] text-xl">
        Perks
      </h1>

      <h1 className="text-3xl font-semibold my-5">Our Services</h1>
      <div className="flex justify-center items-center mt-16 space-x-8">
        {perks.map((perk) => (
          <div
            key={perk.title}
            className="flex flex-col justify-center items-center text-center p-4 "
          >
            <div className="p-4 bg-slate-400 rounded-full mb-3">
              <div className="bg-[#2F2E30] rounded-full p-4">
                <span className="text-white text-3xl">{perk.icon}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-2">{perk.title}</h3>
            <p className="text-gray-600">{perk.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Perks;
