import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;


export default {
  getTasks: async () => {
    try {
      const result = await axios.get("https://todolist-4dry.onrender.com/items");
      return result.data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
      return [];
    }
  },

  addTask: async (name) => {
    console.log('addTask', name)
    try {
      const response = await axios.post(`https://todolist-4dry.onrender.com/items`, { name });
      return response.data;
    } catch (error) {
      console.error("Error adding task:", error);
      return {};
      // throw error;
    }
  },
  setCompleted: async (id, isComplete) => {
    try {
      const response = await axios.put(`https://todolist-4dry.onrender.com/items/${id}`, { iscomplete: isComplete });
      return response.data; // מחזיר תשובה מתאימה
    } catch (error) {
      console.error("Error updating task completion:", error);
       throw error; // טיפול בשגיאה
    }
  },
  deleteTask: async (id) => {
    try {
      await axios.delete(`https://todolist-4dry.onrender.com/items/${id}`);
      console.log(`Task with id ${id} deleted`); // הודעה על מחיקה
      return {};
    } catch (error) {
      console.error("Error deleting task:", error);
      // throw error; // טיפול בשגיאה
      return {};
    }
  },
  
};
