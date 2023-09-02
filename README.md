## Getting Started

1. Buat database collection bernama 'ofelos-db' di MongoDB dan realtime database di Firebase
2. Masukan config database tersebut ke file .env.sample

```javascript
DB_USERNAME = 'admin-ofelos'
DB_PASSWORD = 'oIMjh2Xfrttk8fQQ'
MONGO_URI = 'mongodb+srv://adindaaasals:4alDyL4r1GmCwx4b@cluster0.lgc3rgf.mongodb.net/ofelos-db'
TOKEN_SECRET = 'ofelos-secret'
DOMAIN = 'http://localhost:3000'


FIREBASE_API_KEY = "AIzaSyAczIZP1tvhrNIFCgkg0SU2nePW8UPhLQ0"
FIREBASE_AUTH_DOMAIN = "project-ofelos.firebaseapp.com"
FIREBASE_PROJECT_ID = "project-ofelos"
FIREBASE_STORAGE_BUCKET = "project-ofelos.appspot.com"
FIREBASE_MESSAGING_SENDER_ID = "488418278390"
FIREBASE_APP_ID = "1:488418278390:web:778cb8ca0b87a35a5ae5d7"
FIREBASE_MEASUREMENT_ID = "G-JPEKV15RVN"
FIREBASE_DATABASE_URL = "https://project-ofelos-default-rtdb.asia-southeast1.firebasedatabase.app/"
```

3. rename .env.sample menjadi .env
4. run next.js melalui terminal
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```
