import { db } from './db.js';
import Follow from './src/models/follow.js';
import Dialog from './src/models/dialog.js';
import Message from './src/models/message.js';
import Post from './src/models/post.js';
import User from './src/models/user.js';
import app from './app.js';
import UserDialog from './src/models/User_Dialog.js';

const PORT = process.env.DB_PORT;
async function startApp() {
  try {
    User.associate({ Post, Follow });
    Post.associate({ User });
    Dialog.associate({ User, Message });
    Message.associate({ Dialog });
    Follow.associate({ User });
    User.belongsToMany(Dialog, { through: UserDialog });
    Dialog.belongsToMany(User, { through: UserDialog });
    // await db.sync({ alter: true });
    app.listen(PORT, () => console.log(`Server created on port: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}
startApp();
