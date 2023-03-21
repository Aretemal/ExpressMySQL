import { db } from './db.js';
import Follow from './src/models/follow.js';
import Post from './src/models/post.js';
import User from './src/models/user.js';
import app from './app.js';

const PORT = process.env.DB_PORT;
async function startApp() {
  try {
    User.associate({ Post, Follow });
    Post.associate({ User });
    Follow.associate({ User });
    // await db.sync({ alter: true });
    app.listen(PORT, () => console.log(`Server created on port: ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}
startApp();
