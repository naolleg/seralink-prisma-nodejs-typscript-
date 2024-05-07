import jobService from "../services/job.service";

const jobController = {
  createPost: async (req, res) => {
    try {
      const {
        title,
        category,
        salary,
        experience,
        qualification,
        quantity,
        region,
        city,
        orgProfileId,
        createdDate,
        deadline,
        hirerName
      } = req.body;

      if (
        !title ||
        !category ||
        !salary ||
        !experience ||
        !qualification ||
        !quantity ||
        !city ||
        !region ||
        !orgProfileId ||
        !deadline ||
        !hirerName
      ) {
        return res.status(400).json({
          success: false,
          message: "All fields are required"
        });
      }

      const addressData = { region, city };
      const isAddressPosted = await jobService.insertAddress(addressData);

      if (!isAddressPosted) {
        return res.status(400).json({
          success: false,
          message: "Address not posted"
        });
      }

      const addressId = isAddressPosted.insertId;

      const jobData = {
        title,
        category,
        salary,
        experience,
        qualification,
        quantity,
        addressId,
        orgProfileId,
        createdDate,
        deadline,
        hirerName
      };

      const isJobPosted = await jobService.createPost(jobData);
      console.log(isJobPosted.insertId);

      if (isJobPosted) {
        return res.status(200).json({
          success: true,
          message: "Job posted successfully"
        });
      }
    } catch (error) {
      throw error;
    }
  },

  // Get all job posts
  getAllPosts: async (req, res) => {
    const result = await jobService.getAllPosts(req.body);
    return res.status(200).json({
      success: true,
      data: result
    });
  }
};

export default jobController;