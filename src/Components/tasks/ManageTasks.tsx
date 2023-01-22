import useFetcher from "@/Utils/useFetcher";
import usePostHook from "@/Utils/usePostHook";
import useSamplePosttHook from "@/Utils/useSampleDeleteHook";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import useSWRMutation from "swr/mutation";

async function sendRequest(url: any, { arg }: any) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  }).then((res) => res.json());
}

export const ManageTasks = () => {
  const uuid = Math.random().toString(36).substring(2);
  const [tasks, setTasks] = useState({ id: "", title: "", status: "" });
  const { push } = useRouter();
  //   const { trigger, isMutating } = useSWRMutation(
  //     "http://localhost:3033/api/tasks",
  //     usePostHook /* options */
  //   );

  const [dataToBePosted, triggerFunction] = useSamplePosttHook({
    url: "http://localhost:3033/api/tasks",
  });

  const handleTitleChange = (e: any) => {
    setTasks({ ...tasks, title: e.target.value });
  };

  const handleStatusChange = (e: any) => {
    setTasks({ ...tasks, status: e.target.value });
  };

  const handleAddTask = async () => {
    const dataTobeAded = { ...tasks, id: uuid };

    // try {
    //   const result = await trigger({ ...dataTobeAded });
    //   if (result) {
    //     push("/tasks");
    //   }
    // } catch (err: any) {
    //   console.log(err);
    // }

    triggerFunction({ args: dataTobeAded as any });
    if (dataToBePosted) {
      push("/tasks");
    }
  };
  return (
    <div>
      <h3>Create Tasks</h3>
      <label>Title :</label>
      <input
        placeholder="title"
        value={tasks.title}
        onChange={handleTitleChange}
      />
      <br />
      <br />
      <label>Status :</label>
      <input
        placeholder="status"
        value={tasks.status}
        onChange={handleStatusChange}
      />
      <br />
      <br />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};
