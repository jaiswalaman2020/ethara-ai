const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const { requireRole } = require("../middleware/roles");
const {
  createProject,
  getProjects,
  getProject,
  addMember,
} = require("../controllers/projectController");

router.use(protect);

router.post("/", createProject);
router.get("/", getProjects);
router.get("/:id", getProject);
router.post("/:id/members", requireRole(["Admin", "Member"]), addMember);

module.exports = router;
