$(document).ready(function () {
    //$.ajax({
    //    type: "GET",
    //    url: "https://jsonplaceholder.typicode.com/photos",
    //    dataType: "json",
    //    success: function (data) {
    //        $.each(data, function (i, item) {
    //            var row = "<tr>" +
    //                "<td>" + item.title + "</td>" +
    //                "<td>" + '<a href="' + item.url + '" target="_blank"><img src="' + item.thumbnailUrl + '"></a>' + "</td>" +
    //                "</tr>"; 

    //            $("#tabla>tbody").append(row);
    //        });
    //    }, //End of AJAX Success function  
    //});
    $.ajax({
        type: "GET",
        url: "https://dummyjson.com/quotes",
        dataType: "json",
        success: function (data) {
            $.each(data, function (i, item) {
                var row = "<tr>" +
                    "<td>" + item.quote + "</td>" +
                    "<td>" + '<h2>' + item.url + '</h2>' + "</td>" +
                    "</tr>";

                $("#tabla>tbody").append(row);
            });
        }, //End of AJAX Success function  
    });
}); 

