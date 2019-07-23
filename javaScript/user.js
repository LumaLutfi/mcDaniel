
//accessing API
    $.ajax({
      url: 'https://mcdan-coding-exercise.azurewebsites.net/api/v1/well',
      type: 'GET',
      dataType: 'json',
      success: function (products) {
        console.log(products)
        productListSuccess(products);
      },
      error: function (request, message, error) {
        handleException(request, message, error);
      }
    });
  
  function productListSuccess(products) {
    // Iterate over the collection of data
    
    $.each(products, function(index, product){
        // Add a row to the Product table
    productAddRow(product);
    })
}
function productAddRow(product) {
    
     if ($("#productTable tbody").length == 0) {
      $("#productTable").append("<tbody></tbody>");
     }
     // Append row to <table>
     $("#productTable tbody").append(
       productBuildTableRow(product));
   }
   function productBuildTableRow(product) {
    var ret =
      "<tr>" +
      "<td>" +
  "<button type='button' " +
     "onclick='productGet(this);' " +
     "class='btn btn-default' " +
     "data-id='" + product.ProductId + "'>" +
     "<span class='glyphicon glyphicon-edit' />"
   + "</button>" +
    "</td >" +
       "<td>" + product.uwid + "</td>" +
       "<td>" + product.wellName + "</td>"
        + "<td>" + product.licenseNumber + "</td>" +
        "<td>" + product.area + "</td>"+
        "<td>" + product.field + "</td>"+
        "<td>" + product.totalDepth + "</td>"+
        "<td>" + product.drillDate + "</td>"+
        "<td>" + product.status + "</td>"+
        "<td>" +
  "<button type='button' " +
     "onclick='productDelete(this);' " +
     "class='btn btn-default' " +
     "data-id='" + product.ProductId + "'>" +
     "<span class='glyphicon glyphicon-remove' />" +
  "</button>" +
"</td>" +
      "</tr>";
    return ret;
  }
function handleException(request, message,
    error) {
var msg = "";
msg += "Code: " + request.status + "\n";
msg += "Text: " + request.statusText + "\n";
if (request.responseJSON != null) {
msg += "Message" +
request.responseJSON.Message + "\n";
}
alert(msg);
}
$(document).ready(function () {
    productList();
  });

 // Handle click event on Update button
 function updateClick() {
}
// Handle click event on Add button
function addClick() {
}

function productList() {
  // Call Web API to get a list of Product
}
//set the value of each input field with the 
//appropriate property of the product object retrieved from the API call.
function productToFields(product) {
    $("#uwid").val(product.uwid);
    $("#wellName").val(product.wellName);
    $("#licenseNumber").val(product.icenseNumber);
    $("#area").val(product.area);
    $("#field").val(product.field);
    $("#totalDepth").val(product.totalDepth);
    $("#drillDate").val(product.drillDate);
    $("#status").val(product.status);

  }
  function updateClick() {
    // Build product object from inputs
    Product = new Object();

    Product.uwid = $("#uwid").val();
    Product.wellName =$("#wellName").val();
    Product.licenseNumber = $("#licenseNumber").val();
    Product.area = $("#area").val();
    Product.field =$("#field").val();
    Product.totalDepth= $("#totalDepth").val();
    Product.drillDate = $("#drillDate").val();
    Product.status = $("#status").val();

    if ($("#updateButton").text().trim() =="Add") {
      productAdd(Product);
    }
  }
  
  function productAdd(product) {
    var product = {
        id: 0,
        uwid: " ",
        wellName: " ",
        licenseNumber:" ",
        area: " ",
        field: " ",
        totalDepth: " ",
        drillDate:" ",
        status: " "
      }
    $.ajax({
      url: "https://mcdan-coding-exercise.azurewebsites.net/api/v1/well",
      type: 'POST',
      contentType: "application/json;charset=utf-8",
      data: JSON.stringify(product),
      success: function (product) {
          console.log("hi")
        productAddSuccess(product);
      },
      error: function (request, message, error) {
        handleException(request, message, error);
      }
    });
  }
  function productAddSuccess(product) {
    productAddRow(product);
    formClear();
  }
  function formClear() {
    $("uwid").val("");
    $("#wellName").val("");
    $("#icenseNumber").val("");
    $("area").val("");
    $("field").val("");
    $("totalDepth").val("");
    $("drillDate").val("");
    $("#introdate").val("");
    $("status").val("");
  }
  function addClick() {
    formClear();
  }