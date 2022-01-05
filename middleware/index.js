// import Firebase Admin
const admin = require('../config/firebase-config')

// JWT decoder
class DecoderFirebase {
    async decodeToken(req, res, next) {
        const token = req.headers.authorization.split(' ')[1];
        try {
            const decodeValue = await admin.auth().verifyIdToken(token);
            console.log(decodeValue)
            if (decodeValue) {
                return next();
            }
            return res.json({ message: 'Unauthorized!' })
        } catch (e) {
            return res.json({ message: 'Internal Error!' })
        }
    }
}

module.exports = new DecoderFirebase();