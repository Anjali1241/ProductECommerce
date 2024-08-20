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
      <h1 className="mt-16 rounded-b-md rounded-t-md border-l-8 border-l-[#DB4444] pl-2 text-xl text-[#DB4444]">
        Perks
      </h1>

      <h1 className="my-5 text-3xl font-semibold">Our Services</h1>
      <div className="mt-16 flex items-center justify-center space-x-8">
        {perks.map((perk) => (
          <div
            key={perk.title}
            className="flex flex-col items-center justify-center p-4 text-center"
          >
            <div className="mb-3 rounded-full bg-slate-400 p-4">
              <div className="rounded-full bg-[#2F2E30] p-4 duration-[1000] hover:animate-ping">
                <span className="text-3xl text-white">{perk.icon}</span>
              </div>
            </div>

            <h3 className="mb-2 text-xl font-bold">{perk.title}</h3>
            <p className="text-gray-600">{perk.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Perks;
