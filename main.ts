import { data } from "./data.js";
import { serie } from "./serie.js";

let seriesTabla: HTMLElement = document.getElementById("table")!;
let promedio: HTMLElement = document.getElementById("average")!;




llenarTabla(data);

function llenarTabla(series: serie[]) :void{
    console.log("Llenando la tabla de series");
    let num_series = 0;
    let temporadas = 0;
    series.forEach((serie)=>{
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${serie.number}</td>
                        <td>${serie.name}</td>
                        <td>${serie.channel}</td>
                        <td>${serie.seasons}</td>`;
        seriesTabla.appendChild(tr);
        
        num_series++;
        temporadas += serie.seasons;
    })
    console.log("Calculando promedio");

    promedio.innerHTML = temporadas/num_series + "";
}
