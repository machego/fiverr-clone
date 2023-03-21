import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        typ: String,
        required: true,
        unique: true,
    },
    email: {
        typ: String,
        required: true,
        unique: true,
    },
    password: {
        typ: String,
        required: true,
    },
    img: {
        type: String,
        required: false,
      },
      country: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: false,
      },
      desc: {
        type: String,
        required: false,
      },
      isSeller: {
        type: Boolean,
        default:false
      },
}, {
    timestamps: true,       // to update app data
});

export default mongoose.model('User', userSchema)