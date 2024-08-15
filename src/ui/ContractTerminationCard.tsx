import React from 'react';

interface ContractTerminationCardProps {
    timeRemaining: string;
    endDate: string;
    finalPayment: string;
    itemCount: number;
}

const ContractTerminationCard: React.FC<ContractTerminationCardProps> = ({ timeRemaining, endDate, finalPayment, itemCount }) => {
    return (
        <div className="max-w-sm mx-auto bg-white dark:bg-zinc-800 rounded-lg border shadow-md p-4">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">End contract</h2>
            <div className="mt-4 p-4 bg-zinc-100 dark:bg-zinc-700 rounded-lg border border-zinc-200 dark:border-zinc-600">
                <div className="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-orange-500 dark:text-orange-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">{timeRemaining}</span>
                </div>
            </div>
            <div className="mt-4">
                <div className=" flex justify-between items-center bg-zinc-100 p-4">
                    <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">End date</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">{endDate}</div>
                </div>
                <div className="flex justify-between items-center mt-2 bg-zinc-100 p-4">
                    <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Final payment</div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">{finalPayment}</div>
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">{itemCount} Item</div>
            </div>
        </div>
    );
};

export default ContractTerminationCard;
