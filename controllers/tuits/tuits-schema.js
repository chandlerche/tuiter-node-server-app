import mongoose from 'mongoose';
const schema = mongoose.Schema({
                                   tuit: String,
                                   likes: Number,
                                   liked: Boolean,
                                   image: String,
                                   dislikes: Number,
                                   disliked: Boolean
                               }, {collection: 'tuits'});
export default schema;