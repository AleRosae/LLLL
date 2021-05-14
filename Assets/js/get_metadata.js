$(document).ready(function () {
    $(".callmetadata").click(function () {
        var meta = this.id;
        alert(meta);
        $(".infobox .card-text").empty();

        var lista_nomi1 = [];
        var lista_nomi2 = [];
        var lista_nomi3 = [];
        $("#article1_box ."+meta).each(function () {

            if (jQuery.inArray($(this).text(), lista_nomi1) == -1) {
                lista_nomi1.push($(this).text());
            }

        });
        $("#article2_box ."+meta).each(function () {

            if (jQuery.inArray($(this).text(), lista_nomi2) == -1) {
                lista_nomi2.push($(this).text());
            }
        });
        $("#article3_box ."+meta).each(function () {

            if (jQuery.inArray($(this).text(), lista_nomi3) == -1) {
                lista_nomi3.push($(this).text());
            }
        });
        $("#infobox1 .card-text").append("<ul id=\"elencoNomi1\"></ul>");
        for (i in lista_nomi1) {
            $("#elencoNomi1").append("<li>" + lista_nomi1[i] + "</li>");
        }
        $("#infobox2 .card-text").append("<ul id=\"elencoNomi2\"></ul>");
        for (i in lista_nomi2) {
            $("#elencoNomi2").append("<li>" + lista_nomi2[i] + "</li>");
        }

        $("#infobox3 .card-text").append("<ul id=\"elencoNomi3\"></ul>");
        for (i in lista_nomi3) {
            $("#elencoNomi3").append("<li>" + lista_nomi3[i] + "</li>");
        }

    });
});