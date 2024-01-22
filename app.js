const express = require('express');
const mongoose = require('mongoose')


const app = express();

const PORT = 4000;

const db_url = "mongodb://vbuygold:v-buygold2023@docdb-2023-07-26-06-10-21.cluster-cnsbdsvnrfp8.ap-southeast-1.docdb.amazonaws.com:27017/?ssl=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false"

// mongoose
//     .connect(db_url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then((x) => {
//         console.log("Connect to DB");
//     })
//     .catch((err) => {
//         console.error("Error connecting to mongo", err);
//     });


// init()

app.listen(PORT , () => {
    console.log(`server started on port ${PORT}`)
})