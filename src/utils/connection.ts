import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://Iscodecluster:a4KQIwvAeT8gqKeF@cluster0.cf2km.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});