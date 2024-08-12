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
    <div className="flex justify-center items-center my-10">
      {perks.map((perk) => {
        return (
          <div
            key={perk.title}
            className="flex flex-col items-center [&>*]:m-1 space-x-14"
          >
            <div className="text-3xl bg-slate-600 rounded-full p-5">
              <span className="text-white rounded-full p-3">{perk.icon}</span>
            </div>

            <h3 className="text-xl font-bold">{perk.title}</h3>
            <p>{perk.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Perks;
