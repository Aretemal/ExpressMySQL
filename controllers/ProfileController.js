import ProfileService from '../services/ProfileService.js'
class ProfileController{
    async getInfoAuthorizedUser(req, res){
        try {
            const user = await ProfileService.getInfoAuthorizedUser(req.user.id);
            return res.json(user);
        } catch (e){
            res.status(500).json(e)
        }
    }
    async updateStatus(req, res){
        try {
            const user = await ProfileService.updateStatus(req.body.status, req.user.id);
            return res.json({resultCode: 0});
        } catch (e){
            res.status(500).json(e)
        }
    }
}
export default new ProfileController()
