import admin from 'firebase-admin'
import { initializeApp } from "firebase/app";

const jsonCredentials = {
    type: "service_account",
    project_id: "mcca-4e651",
    private_key_id: "6f4934b0e9ee8ad4878fc480c8f55db855cdb544",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDkV8V9OCK3SxSw\nbCCbNAtshQfwSUbhp2DdzEbuiN7WFEB1qq5W+HmlDkNhJEedAzcnoWE7TjG5E6a4\nP4alXqTLq6/eVfT1apSBkT7qTGllSM82RWTQodo1ACjIEaatn33bhCzn1SQJRseb\nfdafj7oJp8K2qItPdoZ9DBrAicaGxlMI8cC0QxSXUH234btKMUWo/MX8TAo4GQg/\nFkGVJMrNJsrT8c0OscJrxEkUREtz8+TnmCSuZ1QfHj2TCjNDYdR72K1oXVisPbEZ\nQro8y3RbO5wNhKdrx0Lk2BEy0EkyUV4WGCvk3tJl4d09ZGJmMVx12bd6XVFf0Fw/\n2QVuCE/VAgMBAAECggEANb3kqLaMESi2G1mviOfEYoui1S5h5N0wgrM/5IdJLwiA\nLVF5C9YaRzsmp5fS1QT7N7QXPs6GDGGwJQAqkARI8/iaAVGowBQQFLibHqjSS3jJ\n8CN/+UyGn1/EuWXSHV4C0KX4ra2v+BD1DMceutoodnpJ7RSZCSBDwe2V5Efo9jII\na5o7jxjKS5zSi/peijVsr2weEbhdZQKzoXE1/A26WqLTC8o8Lxphpx180+EQAKru\nD2diFStXo993OHDgHInrxBCU+i+0JsbwD2WUG9qLwUOuwEMJSizLBw45s7gejvMx\nGvz7ceJ67aLsmCr7M4d1XcO2oY6xtZK6eXrW/3BpxwKBgQD0J3AwLan+0nx6AAc5\nQ4V1qEmosRbgn48o+bZ4eHk6V3Ua/apJ0u/lbIJHuxd3Z3YSUUc3TbKmbOvV1qML\neKzDofCakl9wjFn/kXH2xGj4On/nbntVqBv038ORJ+zvxn+EU8V2WRE+OM8W0mgR\nrHB57et1JQ/U16NI7SqP9b64BwKBgQDva/J82DdShhCVIKgRxWmVhH2/O66qwWxx\ngSi58j6qL/Ndybo02T6vUoGDuELQHqqSk04BpExWJLsYqUX6Kw1bTjIcqkfbc/48\nF9VaPx9hqsmyUK+FRx/FScdvp2imzavb9qbhvv1F+B1mzz0FU0w1vHeTbgj6X8FT\nv7wm2GsqQwKBgQDHh9+IkBkIdo5hydodc1ADaqff4/HVWrDNhN4ZsCMqicTbbQkY\n0flZ3obOBllULMpyh9gSmz3wAr3tgT64JkPSkWqneA3lVd5LHVsslzFOA8j5ovHK\ne9t1ENWrsBxTjD40L54FbR7JYfXkKcoA/5LgIo81qjc4842vEJujEOtvSwKBgFAw\nOXEzAaR0Ho2z+FarZeecDnnERYYPboC9n6RXzEE3+izJacJVmLcjzRkO1+HYw4yA\nJbpLCv43IyrpVvSpAro4AHS1W4fW26nI2b52Mc6GYzOD7qWW4r8zLMbqrRRhAlST\n0eT+ENokdcR/WJK2CWpeCzanvf4NoDSqnRvtlEb9AoGBAMsGa1JJX2LJM6RV0Lea\nyV19rMma8zvHagXQyhngnYLanKQz6hJf68hHvxMCGgHOcRn3e28XyQTixULUXMnr\nr57DawlMk/ogt+WkGBEcR2VHBhbZ6ukjI3nPzGRrl8E93TgRdYXblWWSIMyEfNzq\nHc0bkKHTmLMn4EPzxwtEdZkf\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-czurp@mcca-4e651.iam.gserviceaccount.com",
    client_id: "110175125752601898865",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-czurp%40mcca-4e651.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
    storageBucket: "gs://mcca-4e651.appspot.com"
}

let fireStoreInstance = null

const DatabaseService = {
    initializeFireStoreInstance: () => {
        admin.initializeApp({
            credential: admin.credential.cert(jsonCredentials),
            storageBucket: jsonCredentials.storageBucket
        })
        initializeApp(jsonCredentials)
    },
    getFirestoreInstance: () => {
        if(!fireStoreInstance) {
            fireStoreInstance = admin.firestore()
        }

        return fireStoreInstance
    }
}

export default DatabaseService