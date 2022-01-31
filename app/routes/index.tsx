import { List, Plus } from "react-feather";
import { ActionCard } from "~/components/action-card/";
export default function Index() {
  return (
    <section className="px-6">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
        <div className="col-span-2 md:col-span-3 sm:col-span-6">
          <h1 className="text-xl font-semibold dark:text-gray-400 text-gray-700 mb-4">
            My Flow
          </h1>
          <ActionCard
            title="Task"
            icon={<List size={18} className="dark:text-gray-300 mr-4" />}
            items={[
              {
                id: "1",
                title: "Create a new project",
              },
              {
                id: "2",
                title: "Create a new task",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
