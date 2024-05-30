import admin from "firebase-admin";

const middlewares = {
    checkAuth: async (req, res, next) => {

        const appCheckToken = req.headers.authorization?.split(" ")[1];
        console.log(appCheckToken)
        if (!appCheckToken) {
            res.status(401);
            return next("Unauthorized");
        }

        try {
            const appCheckClaims = await admin.auth().verifyIdToken(appCheckToken);

            req.auth = appCheckClaims

            return next();
        } catch (err) {
            res.status(401);
            return next("Unauthorized");
        }
    }
}

export default middlewares
