const express = require("express");
const cors = require("cors");
const app = express();
const port = parseInt(process.env.PORT || 9000);

var data = [
    {
        id:1,
        cohortName:"17-01-WD-DP",
        cohortCode:"g100",
        numberOfStudents:28
    },
    {
        id:2,
        cohortName:"17-01-DS-GT",
        cohortCode:"g105",
        numberOfStudents:24
    },
    {
        id:3,
        cohortName:"17-02-WD-PX",
        cohortCode:"g109",
        numberOfStudents:30
    },
    {
        id:4,
        cohortName:"17-03-WD-BD",
        cohortCode:"g110",
        numberOfStudents:29
    }
];

function findByID(id){
    return data.filter( c => c[id] == id)[0];
}

app.use(cors());

app.get("/", (request,response) => {
    response.json( 
        {"data": data });
});

app.get("/:id", (request, response) => {
    let cohort = findByID(request.params.id);
    
    cohort 
    ? response.json( {"data": cohort} )
    : response.status(404).json( {"error": {"message":"No record found!"} });
});

app.listen(port);