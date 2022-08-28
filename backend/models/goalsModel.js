const mongoose = require('mongoose')
const { Schema } = mongoose;

const goalSchema = new Schema(
    {
        title: String, // String is shorthand for {type: String}
        text: {
            type: String,
            required: [true, 'Please add a text value'],
        },
        author: String,
        body: String,
        date: { type: Date, default: Date.now },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Goal', goalSchema)