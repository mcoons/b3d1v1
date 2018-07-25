const express = require("express");
const cors = require("cors");
const app = express();

var data = [
    {
        "ID":1,
        "Cohort Name":"17-01-WD-DP",
        "Cohort Code":"g100",
        "Number of Students":28
    },
    {
        "ID":2,
        "Cohort Name":"17-01-DS-GT",
        "Cohort Code":"g105",
        "Number of Students":24
    },
    {
        "ID":3,
        "Cohort Name":"17-02-WD-PX",
        "Cohort Code":"g109",
        "Number of Students":30
    },
    {
        "ID":4,
        "Cohort Name":"17-03-WD-BD",
        "Cohort Code":"g110",
        "Number of Students":29
    }
];

function findByID(id){
    var retval;
    data.forEach( c => {if (c["ID"] == id) {retval = c}})
    return retval;
}

app.use(cors());

app.get("/", (request,response) => {
    response.json( 
        {"data": data });
});

app.get("/:id", (request, response) => {
    let cohort = findByID(request.params.id);
    response.json( 
        cohort 
        ? {"data": cohort} 
        : {"error": {"message":"No record found!"} }
    );
});

app.listen(9000)