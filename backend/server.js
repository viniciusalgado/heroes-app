const app = require('./src/app');
require('dotenv').config();

const PORT = process.env.PORT;
console.log(process.env.PORT)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
