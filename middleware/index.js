// import Firebase Admin
const admin = require('../config/firebase-config')

// JWT decoder
class DecoderFirebase {
    async decodeToken(req, res, next) {

        try {
            const token = req.headers.authorization.split(' ')[1];
            const decodeValue = await admin.auth().verifyIdToken(token);

            if (decodeValue) {
                return next();
            }
            return res.json({ message: 'Unauthorized!' })
        } catch (e) {
            return res.json({ message: `Internal Error! -> ${e}` })
        }
    }
}

module.exports = new DecoderFirebase();