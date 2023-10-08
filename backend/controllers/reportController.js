import Report from "../models/report.js";

// Get all reports
const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get report by ID
const getReportById = async (req, res) => {
  const { id } = req.params;
  try {
    const report = await Report.findById(id);
    if (!report) {
      res.status(404).json({ error: "Report not found" });
    } else {
      res.json(report);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Add a new report
const addReport = async (req, res) => {
  const { content, responsiblePerson } = req.body;
  try {
    const report = new Report({
      content,
      responsiblePerson,
    });
    await report.save();
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete a report
const deleteReport = async (req, res) => {
  const { id } = req.params;
  try {
    const report = await Report.findByIdAndDelete(id);
    if (!report) {
      res.status(404).json({ error: "Report not found" });
    } else {
      res.json({ message: "Report deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Edit a report
const editReport = async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const report = await Report.findByIdAndUpdate(
      id,
      { content },
      { new: true }
    );
    if (!report) {
      res.status(404).json({ error: "Report not found" });
    } else {
      res.json(report);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllReports, getReportById, addReport, deleteReport, editReport };
