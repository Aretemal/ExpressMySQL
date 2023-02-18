import Post from "../models/Post.js";
import User from "../models/User.js";

class UserService{
    async create(user){
        const createdPost = await User.create(user);
        return createdPost;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('Id не указан')
        }
        const user = await User.findByPk(id);
        return user;
    }
    async getStatus(id) {
        if (!id) {
            throw new Error('Id не указан')
        }
        const user = await User.findByPk(id);
        if(!user){
            throw new Error('Пользователь не найден')
        }
        const status = user.status;
        return status;
    }
}
export default new UserService()
