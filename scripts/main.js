import { data } from "./data.js";
var seriesTabla = document.getElementById("table");
var promedio = document.getElementById("average");
llenarTabla(data);
function llenarTabla(series) {
    console.log("Llenando la tabla de series");
    var num_series = 0;
    var temporadas = 0;
    series.forEach(function (serie) {
        var tr = document.createElement("tr");
        tr.innerHTML = "<td>".concat(serie.number, "</td>\n                        <td>").concat(serie.name, "</td>\n                        <td>").concat(serie.channel, "</td>\n                        <td>").concat(serie.seasons, "</td>");
        seriesTabla.appendChild(tr);
        num_series++;
        temporadas += serie.seasons;
    });
    console.log("Calculando promedio");
    promedio.innerHTML = temporadas / num_series + "";
}
