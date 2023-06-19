function updateTaskStatus(taskId, todo_list) {
    // Find the task in the array by its ID
    const task = todo_list.find(t => t.id === taskId);
  
    if (task) {
      // Toggle the 'done' property
      task.done = !task.done;
    }
  
    console.log(todo_list); // Check if the 'done' property is updated

    return todo_list;
  
    // You can save the updated array to the database or perform any other necessary operations
  
    // If you want to update the UI, you can reload the page or use AJAX to update specific elements dynamically
  }
  