const Task = require("../models/Task");
const Project = require("../models/Project");

exports.createTask = async (req, res) => {
  const { title, description, projectId, assignee, dueDate } = req.body;
  try {
    const project = await Project.findById(projectId);
    if (!project) return res.status(404).json({ message: "Project not found" });
    // check permission: must be owner or member or Admin
    if (
      !(
        project.owner.equals(req.user._id) ||
        project.members.includes(req.user._id) ||
        req.user.role === "Admin"
      )
    )
      return res.status(403).json({ message: "Forbidden" });
    const task = new Task({
      title,
      description,
      project: projectId,
      assignee,
      dueDate,
    });
    await task.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getTasksForProject = async (req, res) => {
  try {
    const tasks = await Task.find({ project: req.params.projectId }).populate(
      "assignee",
      "name email",
    );
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.updateTaskStatus = async (req, res) => {
  const { status } = req.body;
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    // check permission
    const project = await Project.findById(task.project);
    if (
      !(
        project.owner.equals(req.user._id) ||
        project.members.includes(req.user._id) ||
        req.user.role === "Admin"
      )
    )
      return res.status(403).json({ message: "Forbidden" });
    task.status = status;
    await task.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

exports.getDashboard = async (req, res) => {
  try {
    const projects = await Project.find({
      $or: [{ owner: req.user._id }, { members: req.user._id }],
    });
    const projectIds = projects.map((p) => p._id);
    const tasks = await Task.find({ project: { $in: projectIds } }).populate(
      "assignee",
      "name email",
    );
    const overdue = tasks.filter(
      (t) =>
        t.dueDate && new Date(t.dueDate) < new Date() && t.status !== "Done",
    );
    res.json({
      tasks,
      overdue,
      counts: {
        todo: tasks.filter((t) => t.status === "Todo").length,
        inprogress: tasks.filter((t) => t.status === "In Progress").length,
        done: tasks.filter((t) => t.status === "Done").length,
      },
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
