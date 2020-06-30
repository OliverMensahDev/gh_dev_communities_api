const Community = require('../models/Community');
const asyncHandler = require('../middleware/asyncHandler');
const ErrorResponse = require('../utilities/ErrorResponse');
// @desc    Get all Communities
// @route   GET /api/v1/communities
// @access  Public
exports.getCommunities = asyncHandler(async (req, res, next) => {
  const communities = await Community.find();
  res.status(200).json({ success: true, data: communities });
});

// @desc    Get single community
// @route   GET /api/v1/communities/:id
// @access  Public
exports.getCommunity = asyncHandler(async (req, res, next) => {
  const community = await Community.findById(req.params.id);
  if (!community) {
    return next(
      new ErrorResponse(`Community not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: community });
});

// @desc    Create new Community
// @route   POST /api/v1/communities/
// @access  private
exports.createCommunity = asyncHandler(async (req, res, next) => {
  const community = await Community.create(req.body);
  res.status(200).json({ success: true, data: community });
});

// @desc    Update community
// @route   PUT /api/v1/communities/:id
// @access  private
exports.updateCommunity = asyncHandler(async (req, res, next) => {
  const community = await Community.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!community) {
    return next(
      new ErrorResponse(`Community not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: community });
});

// @desc    Delete community
// @route   DELETE /api/v1/communities/:id
// @access  private
exports.deleteCommunity = asyncHandler(async (req, res, next) => {
  const community = await Community.findByIdAndDelete(req.params.id);
  if (!community) {
    return next(
      new ErrorResponse(`Community not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: {} });
});
