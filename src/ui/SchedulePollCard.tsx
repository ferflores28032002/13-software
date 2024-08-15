import React from "react";

interface ScheduleOption {
  id: string;
  time: string;
  votes: number;
  votePercentage: number;
}

interface SchedulePollCardProps {
  contactName: string;
  phoneNumber?: string;
  scheduleOptions: ScheduleOption[];
  currentTime: string;
  onVoteButtonClick: () => void; // Evento para el botón de votar
}

const SchedulePollCard: React.FC<SchedulePollCardProps> = ({
  contactName,
  phoneNumber = "",
  scheduleOptions,
  currentTime,
  onVoteButtonClick,
}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-4 ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{contactName}</h2>
        <span className="text-sm text-zinc-500">{phoneNumber}</span>
      </div>
      <p className="text-zinc-700 mb-4">Día miércoles: horario</p>
      <p className="text-zinc-500 mb-4">Selecciona una opción.</p>
      <div className="space-y-2">
        {scheduleOptions.map((option) => (
          <div key={option.id} className="flex items-center">
            <input
              type="radio"
              name="time"
              id={option.id}
              className="hidden peer"
            />
            <label
              htmlFor={option.id}
              className="flex items-center cursor-pointer"
            >
              <span className="w-4 h-4 inline-block mr-2 rounded-full border border-zinc-300 bg-white peer-checked:bg-green-500"></span>
              {option.time}
            </label>
            <div className="ml-auto flex items-center">
              <div className="w-24 bg-zinc-200 h-2 rounded-full overflow-hidden ">
                <div
                  className="bg-green-500 h-2"
                  style={{ width: `${option.votePercentage}%` }}
                ></div>
              </div>
              <span className="ml-2 text-zinc-700">{option.votes}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t mt-4"></div>
      <div className="text-center mt-4">
        <button
          onClick={onVoteButtonClick}
          className="text-white bg-green-500 hover:bg-green-600 font-medium py-2 px-4 rounded"
        >
          Ver votos
        </button>
      </div>
      <div className="text-right text-sm text-zinc-500 mt-2">{currentTime}</div>
    </div>
  );
};

export default SchedulePollCard;
