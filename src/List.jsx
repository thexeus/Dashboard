import { useState, useEffect } from "react";
import { db } from "./firebaseConfig.js";
import { collection, onSnapshot } from "firebase/firestore";

function List() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    console.log("Setting up Firestore listener...");
    
    const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
      const taskList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log("Updated task list:", taskList); // Debugging log
      setTasks(taskList);
    });

    return () => {
      console.log("Unsubscribing Firestore listener...");
      unsubscribe();
    };
  }, []);

  return (
    <div className="list-widget">
      <h2>To-Do List</h2>
      <hr />
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => <li key={task.id}>{task.name || "Unnamed Task"}</li>)
        ) : (
          <li>No tasks available</li>
        )}
      </ul>
    </div>
  );
}

export default List;
