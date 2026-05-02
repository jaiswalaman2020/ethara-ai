const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
  createTask,
  getTasksForProject,
  updateTaskStatus,
  getDashboard,
} = require("../controllers/taskController");

router.use(protect);

router.post("/", createTask);
router.get("/project/:projectId", getTasksForProject);
router.patch("/:id/status", updateTaskStatus);
router.get("/dashboard", getDashboard);

module.exports = router;
