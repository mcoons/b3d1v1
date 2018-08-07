const express = require("express");
const cors = require("cors");
const app = express();
const port = parseInt(process.env.PORT || 9001);
const cohortData = require('./cohorts');
const bodyParser = require('body-parser');

function findByID(id, data){
    return data.filter( c => c['id'] == id);
}

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request,response) => {
    response.json(cohortData);
});

app.get("/:id", (request, response) => {
    let cohort = findByID(request.params.id, cohortData);

    cohort 
    ? response.json( {"data": cohort} )
    : response.status(404).json( {"error": {"message":"No record found!"} });
});

app.listen(port, () => {console.log("Listening on port "+ port)});