queue()
.defer(d3.csv, "data/Salaries.csv")
.await(makeGraphs);

function makeGraphs(eror, salaryData){
    
}