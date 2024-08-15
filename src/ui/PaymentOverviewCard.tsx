import React from "react";

interface PaymentDetailProps {
  logoUrl: string;
  senderName: string;
  amount: string;
  dueIn: string;
}

const PaymentOverviewCard: React.FC<PaymentDetailProps> = ({
  logoUrl,
  senderName,
  amount,
  dueIn,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Upcoming payments</h2>
        <button className="bg-zinc-200 text-zinc-700 px-4 py-2 rounded-md text-sm">
          Get Paid Now
        </button>
      </div>
      <div className="bg-zinc-100 p-4 rounded-lg flex items-center justify-between">
        <div className="flex items-center">
          <img
            className="w-12 h-12 rounded-full mr-4"
            src={logoUrl}
            alt="Profile Picture"
          />
          <div>
            <p className="text-sm text-zinc-700 font-semibold">
              From {senderName}
            </p>
            <button className="text-blue-500 text-sm mt-1">
              Track Payment
            </button>
          </div>
        </div>
        <div className="w-56">
          <p className="text-lg font-semibold text-zinc-800">{amount}</p>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 ml-2">
          COMING IN {dueIn}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentOverviewCard;
