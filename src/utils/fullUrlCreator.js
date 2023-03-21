const fullUrl = (req) => `${req.protocol}://${req.get('host')}${req.originalUrl}`;
export default fullUrl;
