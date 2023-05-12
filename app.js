const categoria = document.querySelector('.categoria');
const categoria2 = document.querySelector('.categoria-2');
const categoria3 = document.querySelector('.categoria-3');
const zapato = document.querySelector('.zapato');
const pantalon = document.querySelector('.pantalon');
const nike = document.querySelector('.nike');
const adidas = document.querySelector('.adidas');
const listas = document.querySelector('.listas')

categoria.addEventListener('click',()=>{
    if(categoria.value == 'Ropa'){
        zapato.textContent = 'Zapato';
        zapato.value = 'Zapato'
        pantalon.textContent = 'Pantalon';
        pantalon.value = 'Pantalon'
    }else if(categoria.value == 'Auto'){
            zapato.textContent = 'Deportivo';
            zapato.value = 'Deportivo'
            pantalon.textContent = 'TodoTerreno';
            pantalon.value = 'TodoTerreno'
        }else{
            zapato.textContent = 'Racing';
            zapato.value = 'Racing'
            pantalon.textContent = 'Scooter';
            pantalon.value = 'Scooter'
        }
    
})
categoria2.addEventListener('click',()=>{
    if(categoria2.value == 'Zapato'){
        nike.textContent = 'Nike';
        nike.value = 'Nike';
        adidas.textContent = 'Adidas';
        adidas.value = 'Adidas';
    }else if(categoria2.value == 'Pantalon'){
        nike.textContent = 'Jeans';
        nike.value = 'Jeans';
        adidas.textContent = 'Lacoste';
        adidas.value = 'Lacoste';
    }else if(categoria2.value == 'Deportivo'){
        nike.textContent = 'Ferrari';
        nike.value = 'Ferrari';
        adidas.textContent = 'Bugatti';
        adidas.value = 'Bugatti';
    }else if(categoria2.value == 'TodoTerreno'){
        nike.textContent = 'Ford';
        nike.value = 'Ford';
        adidas.textContent = 'Mitsubishi';
        adidas.value= 'Mitsubishi';
    }else if(categoria2.value == 'Racing'){
        nike.textContent = 'Kawasaki';
        nike.value = 'kawasaki';
        adidas.textContent = 'Honda';
        adidas.value= 'Honda'
    }else {
        nike.textContent = 'Baccio';
        nike.value = 'Baccio';
        adidas.textContent = 'Yumbo';
        adidas.value = 'Yumbo'
    }
})





const zapatoNike = {
    label: "Ventas de Zapato Nike",
    data: [1000, 2000, 3000, 4500,5000, 1500, 2000, 5102,5000, 1500, 1000, 5102], 
    backgroundColor: 'rgba(250, 0, 0, 0.4)', // Color de fondo
    borderColor: 'rgba(250, 0, 0, 0.9)', // Color del borde
    borderWidth: 0.3,// Ancho del borde
};
const zapatoAdidas = {
    label: "Ventas de Zapato Adidas",
    data: [3000, 2500, 1000, 4500,8000, 1500, 2000, 1102,5000, 1500, 1000, 5102], 
    backgroundColor: 'rgba(250, 0, 0, 0.4)', // Color de fondo
    borderColor: 'rgba(250, 0, 0, 0.9)', // Color del borde
    borderWidth: 0.3,// Ancho del borde
};
const pantalonJeans = {
    label: "Ventas de Pantalon Jeans",
    data: [1000, 2000, 7000, 4500,5000, 5500, 2000, 1102,5000, 1500, 1000, 9102], 
    backgroundColor: 'rgba(250, 0, 0, 0.4)', // Color de fondo
    borderColor: 'rgba(250, 0, 0, 0.9)', // Color del borde
    borderWidth: 0.3,// Ancho del borde
};
const pantalonLacoste = {
    label: "Ventas de Pantalon Lacoste",
    data: [1000, 5000, 3000, 4500,1000, 1500, 2000, 5102,5000, 1500, 1000, 5102], 
    backgroundColor: 'rgba(250, 0, 0, 0.4)', // Color de fondo
    borderColor: 'rgba(250, 0, 0, 0.9)', // Color del borde
    borderWidth: 0.3,// Ancho del borde
};
const autoFerrari = {
    label: "Ventas de Auto Ferrari",
    data: [8000, 6000, 3500, 4500,1000, 1500, 5000, 5102,7000, 1500, 5000, 1102], 
    backgroundColor: 'rgba(250, 0, 0, 0.4)', // Color de fondo
    borderColor: 'rgba(250, 0, 0, 0.9)', // Color del borde
    borderWidth: 0.3,// Ancho del borde
};
const autoBugatti = {
    label: "Ventas de Auto Bugatti",
    data: [1050, 2700, 30, 4560,5000, 1500, 8000, 8102,4000, 1500, 1000, 5102], 
    backgroundColor: 'rgba(250, 0, 0, 0.4)', // Color de fondo
    borderColor: 'rgba(250, 0, 0, 0.9)', // Color del borde
    borderWidth: 0.3,// Ancho del borde
};
const autoFord = {
    label: "Ventas de Auto Ford",
    data: [1000, 2000, 3000, 7500,5000, 1500, 2800, 5102,5000, 5500, 1000, 6102], 
    backgroundColor: 'rgba(250, 0, 0, 0.4)', // Color de fondo
    borderColor: 'rgba(250, 0, 0, 0.9)', // Color del borde
    borderWidth: 0.3,// Ancho del borde
};
const autoMitsubishi = {
    label: "Ventas de Auto Mitsubishi",
    data: [1000, 2000, 5000, 8500,5000, 100, 2000, 1102,5000, 1500, 5000, 5102], 
    backgroundColor: 'rgba(250, 0, 0, 0.4)', // Color de fondo
    borderColor: 'rgba(250, 0, 0, 0.9)', // Color del borde
    borderWidth: 0.3,// Ancho del borde
};
const motoKawasaki = {
    label: "Ventas de moto Kawasaki",
    data: [1800, 2000, 5000, 400,9000, 1500, 9000, 5102,5000, 4500, 1000, 5102], 
    backgroundColor: 'rgba(250, 0, 0, 0.4)', // Color de fondo
    borderColor: 'rgba(250, 0, 0, 0.9)', // Color del borde
    borderWidth: 0.3,// Ancho del borde
};
const motoHonda = {
    label: "Ventas de Moto Honda",
    data: [1000, 2000, 3000, 4500,5000, 1500, 2000, 5102,5000, 1500, 1000, 5102], 
    backgroundColor: 'rgba(250, 0, 0, 0.4)', // Color de fondo
    borderColor: 'rgba(250, 0, 0, 0.9)', // Color del borde
    borderWidth: 0.3,// Ancho del borde
};
const motoBaccio = {
    label: "Ventas de Moto Baccio",
    data: [6000, 1000, 3000, 3500,5000, 5500, 7000, 1102,5900, 1500, 1000, 1102], 
    backgroundColor: 'rgba(250, 0, 0, 0.4)', // Color de fondo
    borderColor: 'rgba(250, 0, 0, 0.9)', // Color del borde
    borderWidth: 0.3,// Ancho del borde
};
const motoYumbo = {
    label: "Ventas de Moto Yumbo",
    data: [1000, 2000, 3000, 400,500, 1500, 2000, 1102,400, 3500, 6000, 5102], 
    backgroundColor: 'rgba(250, 0, 0, 0.4)', // Color de fondo
    borderColor: 'rgba(250, 0, 0, 0.9)', // Color del borde
    borderWidth: 0.3,// Ancho del borde
};

const tabla= ()=>{
    
    if(categoria3.value=='Nike'){
        producto = zapatoNike;
    }else if(categoria3.value=='Adidas'){
        producto = zapatoAdidas;
    }else if(categoria3.value=='Jeans'){
        producto = pantalonJeans;
    }else if(categoria3.value=='Lacoste'){
        producto = pantalonLacoste
    }else if(categoria3.value=='Ferrari'){
        producto = autoFerrari
    }else if(categoria3.value=='Bugatti'){
        producto = autoBugatti
    }else if(categoria3.value=='Ford'){
        producto = autoFord
    }else if(categoria3.value=='Mitsubishi'){
        producto = autoMitsubishi
    }else if(categoria3.value=='Kawasaki'){
        producto = motoKawasaki
    }else if(categoria3.value=='Honda'){
        producto = motoHonda
    }else if(categoria3.value=='Baccio'){
        producto = motoBaccio
    }else if(categoria3.value=='Yumbo'){
        producto = motoYumbo
    }return producto

}

function generarTabla(){
    // Obtener una referencia al elemento canvas del DOM
    const $grafica = document.querySelector("#grafica");
    // Las etiquetas son las que van en el eje X. 
    const etiquetas = ["Enero", "Febrero", "Marzo", "Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
    new Chart($grafica, {
        type: 'bar',// Tipo de gráfica
        data: {
            labels: etiquetas,
            datasets: [
                tabla()
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            }
        }
    });
}
    
let producto= zapatoNike;
generarTabla();
listas.addEventListener('change',()=>{
    tabla();
    generarTabla();
})
