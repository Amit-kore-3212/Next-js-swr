import useGetHook from "@/Utils/useGetHook";
import usePutHook from "@/Utils/usePutHook";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWRMutation from "swr/mutation";

export const TaskEdit = () => {
  const [tasks, setTasks] = useState({ id: "", title: "", status: "" });
  const { push } = useRouter();
  const {
    query: { id },
  } = useRouter();

  const propstoSend = {
    url: `http://localhost:3033/api/tasks/${id}`,
    method: "GET",
  };

  const { data, error } = useGetHook(propstoSend);

  const { trigger, isMutating } = useSWRMutation(
    `http://localhost:3033/api/tasks/${id}`,
    usePutHook /* options */
  );

  const handleTitleChange = (e: any) => {
    setTasks({ ...tasks, title: e.target.value });
  };

  const handleStatusChange = (e: any) => {
    setTasks({ ...tasks, status: e.target.value });
  };

  useEffect(() => {
    if (data) {
      setTasks({ ...data });
    }
  }, [data]);

  const handleAddTask = async () => {
    const dataTobeAded = { ...tasks };
    try {
      const result = await trigger({ ...dataTobeAded });
      if (result) {
        push("/tasks");
      }
    } catch (err: any) {
      console.log(err);
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
      <button onClick={handleAddTask}>Update Task</button>
    </div>
  );
};
