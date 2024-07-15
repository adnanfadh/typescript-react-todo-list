// import { useState } from "react";

const TaskItem = ({
  name,
  done,
  id,
  toggleDone,
  handleDelete,
}: {
  name: string;
  done: boolean;
  id: string;
  toggleDone: (id: string, done: boolean) => void;
  handleDelete: (id: string) => void;
}) => {
  // const [done, setDone] = useState(false);
  return (
    <div className="flex justify-between rounded-sm bg-white p-1 px-3">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={done}
          onChange={() => toggleDone(id, !done)}
        />
        {name}
      </div>
      <button
        className="rounded-lg bg-green-200 p-1 px-3 hover:bg-green-300"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};
export default TaskItem;
