import mongoose from 'mongoose';

export default () => {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/Meetup');
    mongoose.connection
        .once('open', () => console.log('MongoDB is running.'))
        .on('error', err => console.error(err));
}