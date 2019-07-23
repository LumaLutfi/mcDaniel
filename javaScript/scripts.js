

$.getJSON('https://mcdan-coding-exercise.azurewebsites.net/api/v1/well',function(data){
console.log(data)

$.each(data, function(index, value){
    
})
drawTable(data);
})

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#wellDataTable").append(row); //this will append tr element to table... keep its reference for a while since we will add cels into it
    
    row.append($("<td>" + rowData.wellName + "</td>"));
    row.append($("<td>" + rowData.licenseNumber + "</td>"));
    row.append($("<td>" + rowData.area+ "</td>"));
    row.append($("<td>" + rowData.field+ "</td>"));
    row.append($("<td>" + rowData.totalDepth + "</td>"));
    row.append($("<td>" + rowData.drillDate + "</td>"))
    row.append($("<td>" + rowData.status + "</td>"));
}


