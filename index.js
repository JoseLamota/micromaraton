/*
Se tiene información de varios estudiantes, incluyendo su nombre, semestre y nota. 
La nota máxima es 20 y los estudiantes aprueban con un mínimo de 10. 
Toda esta información se carga en un arreglo.

Se necesita una función que retorne los estudiantes de un semestre dado.

La estructura de un objeto estudiante es, por ejemplo: 
{ nombre: 'Luis', semestre: 5, nota: 14 }

Función: estudiantesSemestre
Parámetros: 
  - estudiantes (array de objetos estudiante)
  - semestre (número)

Retorno: 
  - array de objetos estudiante que pertenecen al semestre indicado.

  Datos de Pruraba:
  -Mostrar al estudiante con mejor nota
  -Mostrar al estudiante con peor nota
  */




// index.js
function estudiantesSemestre(estudiantes, semestre) {
    // Filtra los estudiantes que pertenecen al semestre dado.
    return estudiantes.filter(
      (estudiante) => estudiante.semestre === semestre
    );
  }
  
  function mejorNota(estudiantes) {
    let mejorNota = estudiantes[0];
    for (let i = 1; i < estudiantes.length; i++) {
      if (estudiantes[i].nota > mejorNota.nota) {
        mejorNota = estudiantes[i];
      }
    }
    return mejorNota;
  }
  
  function peorNota(estudiantes) {
    let peorNota = estudiantes[0];
    for (let i = 1; i < estudiantes.length; i++) {
      if (estudiantes[i].nota < peorNota.nota) {
        peorNota = estudiantes[i];
      }
    }
    return peorNota;
  }
  
  // Datos de prueba
  const estudiantes = [
    { nombre: "Juan", semestre: 1, nota: 15 },
    { nombre: "Pedro", semestre: 2, nota: 18 },
    { nombre: "Maria", semestre: 1, nota: 12 },
    { nombre: "Ana", semestre: 2, nota: 10 },
    { nombre: "Luis", semestre: 1, nota: 19 },
    { nombre: "Sofia", semestre: 2, nota: 16 },
    { nombre: "Carlos", semestre: 1, nota: 14 },
  ];
  
  // Filtrar estudiantes del semestre 1
  const estudiantesDelSemestre1 = estudiantesSemestre(estudiantes, 1);
  
  // Mostrar estudiantes en la lista
  const estudiantesList = document.getElementById("estudiantes-list");
  estudiantesDelSemestre1.forEach((estudiante) => {
    const li = document.createElement("li");
    li.textContent = `${estudiante.nombre} - Nota: ${estudiante.nota}`;
    estudiantesList.appendChild(li);
  });
  
  // Encontrar el estudiante con mejor nota del semestre 1
  const mejorNotaEstudiante = mejorNota(estudiantesDelSemestre1);
  document.getElementById("mejor-nota").textContent = `${mejorNotaEstudiante.nombre} (${mejorNotaEstudiante.nota})`;
  
  // Encontrar el estudiante con peor nota del semestre 1
  const peorNotaEstudiante = peorNota(estudiantesDelSemestre1);
  document.getElementById("peor-nota").textContent = `${peorNotaEstudiante.nombre} (${peorNotaEstudiante.nota})`;