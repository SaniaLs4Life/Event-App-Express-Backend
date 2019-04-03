import mongoose, { Schema } from "mongoose";

const GroupSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      minlength: [5, "Name must contain at least 5 characters long!"]
    },
    description: {
      type: String,
      required: true,
      minLength: [10, "Description must contain at least 10 characters long!"]
    },
    category: {
      type: String
    },
    meetups: [
      {
        type: Schema.Types.ObjectId,
        ref: "Meetup"
      }
    ]
  },
  { timestamps: true }
);

GroupSchema.statics.addMeetup = async function(id, args) {
  const Meetup = mongoose.model("Meetup");

  const group = await this.findByIdAndUpdate(id);

  const meetup = await new Meetup({ ...args, group: id });

  group.meetups = group.meetups.concat(meetup);

  const result = await Promise.all([meetup.save(), group.save()]);

  return result;
};

export default mongoose.model("Group", GroupSchema);
