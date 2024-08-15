import React from 'react';

interface QuickAccessItemProps {
    iconUrl: string;
    title: string;
    description: string;
}

export const QuickAccessItem: React.FC<QuickAccessItemProps> = ({ iconUrl, title, description }) => (
    <div className="flex items-center p-4 bg-zinc-100 rounded-lg dark:bg-zinc-700">
        <div className="flex-shrink-0">
            <img className="h-6 w-6" src={iconUrl} alt={`${title} Icon`} />
        </div>
        <div className="flex-1 min-w-0 ml-4 mr-2">
            <p className="text-sm font-medium text-zinc-900 truncate dark:text-white">{title}</p>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
        </div>
        <span className="text-zinc-400 dark:text-zinc-500">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
        </span>
    </div>
);


