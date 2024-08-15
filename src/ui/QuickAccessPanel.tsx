import { QuickAccessItem } from "./QuickAccessItem";

const QuickAccessPanel: React.FC = () => (
  <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md dark:bg-zinc-800 w-[540px]">
    <div className="p-5">
      <h3 className="text-lg font-semibold text-zinc-700 dark:text-white">
        Quick Access
      </h3>
      <div className="mt-4 flex flex-col gap-4">
        <QuickAccessItem
          iconUrl="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
          title="Update personal details"
          description="Update your personal info"
        />
        <QuickAccessItem
          iconUrl="https://static.vecteezy.com/system/resources/previews/018/765/757/original/user-profile-icon-in-flat-style-member-avatar-illustration-on-isolated-background-human-permission-sign-business-concept-vector.jpg"
          title="Expenses"
          description="Add Expenses or other payment items"
        />
      </div>
    </div>
  </div>
);

export default QuickAccessPanel;
