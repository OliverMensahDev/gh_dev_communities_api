const Community = require('../models/Community');
// @desc    Get all Communities
// @route   GET /api/v1/communities
// @access  Public
exports.getCommunities = async (req, res, next) => {
  try {
    const communities = await Community.find();
    res.status(200).json({ success: true, data: communities });
  } catch (err) {
    res.status(400).json({ success: false, msg: `Error: ${err.message}` });
  }
};

// @desc    Get single community
// @route   GET /api/v1/communities/:id
// @access  Public
exports.getCommunity = async (req, res, next) => {
  try {
    const community = await Community.findById(req.params.id);
    if (!community) {
      res.status(200).json({ success: false });
    }
    res.status(200).json({ success: true, data: community });
  } catch (err) {
    res.status(400).json({ success: false, msg: `Error: ${err.message}` });
  }
};

// @desc    Create new Community
// @route   POST /api/v1/communities/
// @access  private
exports.createCommunity = (req, res, next) => {
  Community.create(req.body)
    .then((data) => {
      res.status(400).json({ success: data });
    })
    .catch((err) => {
      res.status(400).json({ success: false, msg: `Error: ${err.message}` });
    });
};

// @desc    Update community
// @route   PUT /api/v1/communities/:id
// @access  private
exports.updateCommunity = async (req, res, next) => {
  try {
    const community = await Community.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!community) {
      res.status(200).json({ success: false });
    }
    res.status(200).json({ success: true, data: community });
  } catch (err) {
    res.status(400).json({ success: false, msg: `Error: ${err.message}` });
  }
};

// @desc    Delete community
// @route   DELETE /api/v1/communities/:id
// @access  private
exports.deleteCommunity = async (req, res, next) => {
  try {
    const community = await Community.findByIdAndDelete(req.params.id);
    if (!community) {
      res.status(200).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false, msg: `Error: ${err.message}` });
  }
};
