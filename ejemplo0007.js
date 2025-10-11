// Crear un arreglo con varios valores
const empleados = [
    { nombre: "Ana", salario: 12000 },
    { nombre: "Luis", salario: 8000 },
    { nombre: "María", salario: 15000 }
];

// Filtrar los bien pagados con filter()
const bienPagados = empleados.filter(e => e.salario > 10000);

// Crear un nuevo arreglo solo con nombres usando map()
const nombres = bienPagados.map(e => e.nombre.toUpperCase());

// Calcular la suma total de salarios
// reduce permite ejecutar un modelo mediante una función considerando
// reduce(funcion(total, valorActual, indiceActual, arrreglo), valorInicial)
const totalSalarios = empleados.reduce((acc, e) => acc + e.salario, 0);

console.log("Bien pagados:", nombres);
console.log("Total salarios:", totalSalarios);
