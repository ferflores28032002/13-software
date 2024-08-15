import React from "react";

interface ContractDetails {
  name: string;
  role: string;
  amount: string;
  paymentFrequency: string;
  src: string
}

interface ContractManagerProps {
  contracts: ContractDetails[];
  onCreate: () => void;
}

const ContractManager: React.FC<ContractManagerProps> = ({
  contracts,
  onCreate,
}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-zinc-900">
            Contracts ({contracts.length})
          </h2>
          <button
            onClick={onCreate}
            className="bg-zinc-200 text-zinc-700 px-4 py-2 rounded-md text-sm"
          >
            Create A Contract
          </button>
        </div>
        {contracts.map((contract, index) => (
          <div
            key={index}
            className="mt-4 flex items-center p-5 bg-zinc-100 rounded-lg"
          >
            <img
              className="w-12 h-12 rounded-full mr-4"
              src={contract.src}
              alt="Profile Picture"
            />
            <div className="flex-grow">
              <h3 className="text-sm font-semibold text-zinc-700">
                {contract.name} - {contract.role}
              </h3>
              <div className="flex items-center justify-between">
                <div className="text-sm text-zinc-600">{contract.amount}</div>
                <div className="text-xs text-zinc-500">
                  {contract.paymentFrequency}
                </div>
              </div>
              <div className="mt-2">
                <div className="mt-2">
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                    ACTIVE
                  </span>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 ml-2">
                    FIXED
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContractManager;
