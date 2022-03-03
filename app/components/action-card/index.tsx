import React from "react";
import { Plus, ChevronRight, MoreVertical, CheckCircle } from "react-feather";
import clsx from "clsx";

type ActionCardProp = {
  title: string;
  icon: React.ReactNode;
  items: Array<{
    id: string;
    title: string;
  }>;
};

function ActionCard({ title, icon, items }: ActionCardProp) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [state, setState] = React.useState({
    selectedId: "",
    input: "",
  });
  const [addTask, setAddTask] = React.useState({
    isAdding: false,
    input: "",
  });

  function toggleIsOpen() {
    setIsOpen((prev) => !prev);
    if (addTask.isAdding) {
      setAddTask({
        isAdding: false,
        input: "",
      });
    }
  }

  function toggleAddingTask() {
    setAddTask((prev) => ({ ...prev, isAdding: !prev.isAdding }));

    if (!isOpen) {
      setIsOpen(true);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setState({
      ...state,
      input: e.target.value,
    });
  }
  function handleAddTaskInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAddTask({
      ...addTask,
      input: e.target.value,
    });
  }

  // function handleInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
  //   if (e.key === "Enter") {
  //     e.preventDefault();
  //     if (input.input.length > 0) {
  //       setInput({
  //         ...input,
  //         input: "",
  //         selectedId: "",
  //       });
  //     }
  //   }
  // }

  function handleItemClick(id: string, input: string) {
    setState({
      input,
      selectedId: id,
    });
  }
  return (
    <div>
      {/* Main card functionality*/}
      <div className="mb-4 flex justify-between w-full ">
        <div className="flex items-center">
          {icon}
          <h2 className="dark:text-gray-300 text-gray-700 text-lg">{title}</h2>
        </div>
        <div className="flex items-center">
          <button className="dark:text-gray-300 dark:hover:bg-gray-600 hover:bg-gray-100 transition duration-300 rounded-sm p-1">
            <Plus size={18} onClick={toggleAddingTask} />
          </button>
          {items && (
            <button
              onClick={toggleIsOpen}
              className="ml-2 dark:text-gray-300 dark:hover:bg-gray-600 hover:bg-gray-100 transition duration-300 rounded-sm p-1"
            >
              <ChevronRight
                size={18}
                className={clsx(
                  isOpen ? "rotate-90" : "",
                  "transition duration-300"
                )}
              />
            </button>
          )}
        </div>
      </div>
      <div className="space-y-2">
        {/* Task Added & Can Be Edited */}
        {isOpen &&
          items.map((item) => (
            <div
              onClick={() => handleItemClick(item.id, item.title)}
              className={clsx(
                state.selectedId === item.id
                  ? "border-blue-900"
                  : "border-transparent",
                "flex justify-between rounded-md border border-gray-200 bg-white shadow-md p-3 dark:border-gray-700 dark:bg-gray-800 transition duration-150"
              )}
            >
              <div className="flex items-center">
                <CheckCircle
                  size={14}
                  className={clsx(
                    false ? "text-blue-900" : "text-gray-400",
                    "mr-2 hover:text-blue-900 transition duration-300 cursor-pointer"
                  )}
                />
                <div>
                  {state.selectedId !== item.id ? (
                    <h2 className="dark:text-gray-300 text-gray-700 text-md">
                      {item.title}
                    </h2>
                  ) : (
                    <input
                      className="w-full bg-transparent h-full dark:text-gray-300 text-gray-700 focus:outline-none text-md"
                      value={state.input}
                      onChange={handleInputChange}
                      // onKeyDown={handleInputKeyDown}
                    />
                  )}
                </div>
              </div>
              <div className="flex items-center">
                <button className="dark:text-gray-300 dark:hover:bg-gray-600 hover:bg-gray-100 transition duration-300 rounded-sm p-1">
                  <MoreVertical size={18} />
                </button>
              </div>
            </div>
          ))}
        {/* New Task Being Added */}
        {addTask.isAdding && (
          <div className="rounded-md border border-gray-400 bg-white shadow-md px-3 py-4 dark:bg-gray-800 transition duration-150 w-full">
            <div className="flex items-center">
              <input
                className="w-full bg-transparent h-full dark:text-gray-300 text-gray-700 focus:outline-none text-sm"
                value={addTask.input}
                onChange={handleAddTaskInputChange}
                // onKeyDown={handleInputKeyDown}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export { ActionCard };
