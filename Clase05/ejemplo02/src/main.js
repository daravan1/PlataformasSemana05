import $ from 'jquery';
import dt from 'datatables.net-dt';

$(document).ready(function () {
    const mi_tabla = $('#tabla-ejemplo').DataTable();

    $( "#obtenerInformacion" ).click(function() {
        var limite = $("#limite").val()
        var torneo = $("#torneo").val()
        // var url = "http://127.0.0.1:5984/tennis/_all_docs?include_docs=True&limit="+limite+"";
        // var url = 'http://127.0.0.1:5984/tennis/_design/uno/_view/vista001?key="ATP250"&limit='+limite+'';
        var url = 'http://127.0.0.1:5984/personas005/_design/ejemplo/_view/vista002?key="'+torneo+'"&limit='+limite+'';
        console.log(url);
        $.ajax({
            dataType: 'json',
            url: url
        }).then(function(data) {
            console.log(data.rows);
            data.rows.forEach(function (item) {
                console.log(item.value);
                mi_tabla.row.add([
                    item.value.Tournament,
                    item.value.Series,
                    item.value.Player_1,
                    item.value.Player_2,
                    item.value.Winner
                ]).draw(false);
            });

        });
    });

    $("#limpiarInformacion").click(function () {
        mi_tabla.clear().draw();

    });

});