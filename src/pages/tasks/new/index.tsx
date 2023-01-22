import { ManageTasks } from "@/Components/tasks/ManageTasks";
import { TasksList } from "@/Components/tasks/tasksList";
import { Users } from "@/Components/Users";
import React, { ReactElement } from "react";

function CreateNewTasks(): ReactElement {
  return (
    <div>
      <ManageTasks />
    </div>
  );
}
export default CreateNewTasks;
