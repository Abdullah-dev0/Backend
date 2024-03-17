import { Mongoose } from "mongoose";
import { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema({
  videoFile: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  owner: {
    type: Mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  duration: {
    type: String,
    required: true,
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
})

videoSchema.plugin(mongooseAggregatePaginate);

const Video = Mongoose.model('Video', videoSchema);