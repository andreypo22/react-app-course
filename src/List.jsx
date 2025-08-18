import React from "react";

const items = [
  {
    task: "task-1",
    icon: "icon-1",
    isCompleted: false,
  },
  {
    task: "task-2",
    icon: "icon-2",
    isCompleted: true,
  },
  {
    task: "task-3",
    icon: "icon-3",
    isCompleted: false,
  },
];

const List = () => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <section key={index} className={item.isCompleted ? "completed" : ""}>
            <span>{item.icon}</span>
            <h2>{item.task}</h2>
          </section>
        );
      })}
    </div>
  );
};

export default List;
