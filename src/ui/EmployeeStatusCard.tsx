import React from 'react';

interface EmployeeStatusCardProps {
    name: string;
    status: string;
    workerType: string;
    contractType: string;
    group: string;
    role: string;
    seniorityLevel: string;
    startDate: string;
    paymentAmount: string;
    paymentFrequency: string;
}

const EmployeeStatusCard: React.FC<EmployeeStatusCardProps> = ({
    name,
    status,
    workerType,
    contractType,
    group,
    role,
    seniorityLevel,
    startDate,
    paymentAmount,
    paymentFrequency,
}) => {
    return (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <span className={`bg-green-200 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ${status === 'IN PROGRESS' ? 'dark:bg-green-200 dark:text-green-900' : ''}`}>{status}</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <p className="font-semibold">Worker Type</p>
                    <p>{workerType}</p>
                </div>
                <div>
                    <p className="font-semibold">Contract / Agreement type</p>
                    <p>{contractType}</p>
                </div>
                <div>
                    <p className="font-semibold">Group</p>
                    <p>{group}</p>
                </div>
                <div>
                    <p className="font-semibold">Role</p>
                    <p>{role}</p>
                </div>
                <div>
                    <p className="font-semibold">Seniority level</p>
                    <p>{seniorityLevel}</p>
                </div>
                <div>
                    <p className="font-semibold">Contract start date</p>
                    <p>{startDate}</p>
                </div>
                <div>
                    <p className="font-semibold">Payment</p>
                    <p>{paymentAmount}</p>
                </div>
                <div>
                    <p className="font-semibold">Payment Frequency</p>
                    <p>{paymentFrequency}</p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeStatusCard;
