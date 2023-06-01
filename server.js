import { db } from './db.js';
import Follow from './src/models/follow.js';
import Dialog from './src/models/dialog.js';
import Message from './src/models/message.js';
import Post from './src/models/post.js';
import User from './src/models/user.js';
import app from './app.js';
import UserDialog from './src/models/User_Dialog.js';
import { getClass } from './src/utils/getClass.js';
import Comment from './src/models/comment.js';
import LikePost from './src/models/likePost.js';

const PORT = process.env.APP_PORT;

User.associate({
  Post, Follow, Comment, LikePost,
});
Post.associate({ User, Comment, LikePost });
Dialog.associate({ User, Message });
Comment.associate({ User, Post });
LikePost.associate({ User, Post });
Message.associate({ Dialog });
Follow.associate({ User });
User.belongsToMany(Dialog, { through: UserDialog });
Dialog.belongsToMany(User, { through: UserDialog });
global[getClass] = getClass;
// await db.sync({ alter: true });
app.listen(PORT, () => console.log(`Server created on port: ${PORT}`));
