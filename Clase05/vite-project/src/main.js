import $ from 'jquery';
import dt from 'datatables.net-dt';

$(document).ready(function () {
    const mi_tabla = $('#tabla-ejemplo').DataTable();

    $( "#obtenerInformacion" ).click(function() {
        var limite = $("#limite").val()
        var url = "http://127.0.0.1:5984/personas005/_all_docs?include_docs=True&limit="+limite+"";
        console.log(url);
        $.ajax({
            dataType: 'json',
            url: url
        }).then(function(data) {
            console.log(data.rows);
            data.rows.forEach(function (item) {
                console.log(item.doc);
                mi_tabla.row.add([
                    item.doc.Tournament,
                    item.doc.Series,
                    item.doc.Round,
                    item.doc.Player_1,
                    item.doc.Player_2,
                    item.doc.Winner
                ]).draw(false);
            });

        });
    });

    $("#limpiarInformacion").click(function () {
        mi_tabla.clear().draw();

    });

});