import mongoose from "mongoose";

async function connect() {
    mongoose.connect(process.env.DB_CONNECTION);
    return mongoose.connect;
}

export default connect;
