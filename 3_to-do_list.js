1. Insert one
JavaScript
db.tasks.insertOne({
  task_id: 1,
  title: "Complete assignment",
  description: "MongoDB practice",
  due_date: "2026-05-01",
  priority: "High",
  is_completed: false
})
2. Insert many
JavaScript
db.tasks.insertMany([
  {task_id: 2, title: "Study", description: "Exam prep", due_date: "2026-05-02", priority: "Medium", is_completed: false},
  {task_id: 3, title: "Workout", description: "Gym", due_date: "2026-05-03", priority: "Low", is_completed: true},
  {task_id: 4, title: "Shopping", description: "Groceries", due_date: "2026-05-04", priority: "Medium", is_completed: false},
  {task_id: 5, title: "Project", description: "Submit work", due_date: "2026-05-05", priority: "High", is_completed: false},
  {task_id: 6, title: "Call", description: "Friend", due_date: "2026-05-06", priority: "Low", is_completed: true}
])
3. Not completed
JavaScript
db.tasks.find({is_completed: false})
4. Show title & due_date
JavaScript
db.tasks.find({}, {title: 1, due_date: 1, _id: 0})
5. Delete
JavaScript
db.tasks.deleteOne({task_id: 3})
