import React from 'react';

interface BalanceCardProps {
  currentBalance: number;
  currency: string;
  currencyFlagUrl: string;
  maxAdvanceAmount: number;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  currentBalance,
  currency,
  currencyFlagUrl,
  maxAdvanceAmount,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-zinc-900">Balance</span>
          <img src={currencyFlagUrl} alt={`${currency} Flag`} className="w-4 h-4 rounded-full" />
          <span className="text-zinc-500">{currency}</span>
        </div>
        <button className="bg-zinc-200 text-zinc-700 px-4 py-2 rounded-md text-sm">Withdraw</button>
      </div>
      <div className="text-4xl font-bold text-zinc-900 mb-6">{`${currentBalance} ${currency}`}</div>
      <div className="bg-zinc-100 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-zinc-700 text-sm">Add up to {maxAdvanceAmount}{currency} with Deel Advance</span>
          <button className="bg-black text-white px-3 py-1 rounded-md text-sm m-2">Add</button>
        </div>
        <p className="text-zinc-600 text-sm">
          Get paid ahead of your next pay day, without a lengthy approval process, interest rates or late fees. <a href="#" className="text-blue-500 hover:underline">Learn more</a>
        </p>
      </div>
    </div>
  );
};

export default BalanceCard;
