const mongoose = require('mongoose');
const slugify = require('slugify');

const CommunitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters'],
  },
  slug: String,
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters'],
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS',
    ],
  },
  forum: {
    type: String,
    required: true,
    enum: [
      'Facebook Group',
      'WhatsApp Group',
      'Telegram Group',
      'Slack',
      'LinkedIn Group',
    ],
  },
  forum_link: {
    type: String,
    required: [true, 'Please add a link to your online forum'],
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS',
    ],
  },
  type: {
    type: String,
    required: true,
    enum: ['Organization-led', 'Individual'],
  },
  photo: {
    type: String,
    default: 'no-photo.jpg',
  },
});

// Create bootcamp slug from the name
CommunitySchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model('Community', CommunitySchema);
