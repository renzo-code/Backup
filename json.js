const listarMascotas = async () =>{
try{
  const dataAnimales = await axios.get('http://localhost:3000/mascotas/')
 // console.log(dataAnimales)
  const subTabla = document.getElementById('subCabecera')
  let contenedor = ''
  dataAnimales.data.forEach((item,index)=>{
    contenedor +=
    `
    <tr>
      <td onClick='mostrarMascota(${JSON.stringify(item)},${index})'>${item.id}</td>
      <td>${item.tipo}</td>
      <td>${item.nombre}</td>
      <td>${item.propietario}</td>
      <td onClick="eliminarMascota(${item.id})">
        <img src="img/delete.png">
      </td>
    </tr>
    `
  })
  subTabla.innerHTML = contenedor
}
catch(error){
  console.error('No funciona',error)
}
}
listarMascotas()

const btnCrearMascota = document.getElementById('crear')

const crearMascota = async () =>{
  try{
    const numero = document.getElementById('numero').value
    const tipo = document.getElementById('tipo').value
    const nombre = document.getElementById('nombre').value
    const propietario = document.getElementById('propietario').value
    
    const nuevaMascota = {
      id : parseInt(numero),
      tipo : tipo,
      nombre: nombre,
      propietario: propietario
    }
    const dataAnimales = await axios.post('http://localhost:3000/mascotas/', nuevaMascota)
    console.log('data',dataAnimales)
  }
  catch(error){
    console.error('Intento Fallido')
  }
  listarMascotas()
  limpiarInput()
}
btnCrearMascota.addEventListener('click',crearMascota)

const limpiarInput = () =>{
  document.getElementById('numero').value = ''
  document.getElementById('tipo').value = ''
  document.getElementById('nombre').value = ''
}


const eliminarMascota = async (id) =>{
  try{
    const dataAnimales = await axios.delete(`http://localhost:3000/mascotas/${id}`)
    console.log('data animales datos', dataAnimales.data)
    listarMascotas()
  }
  catch(error){
    console.error('No funciona Eliminar')
  }
}
btnActualizar = document.getElementById('actualizar')

const mostrarMascota = (item) =>{
  document.getElementById('numero').value = item.id
  document.getElementById('tipo').value = item.tipo
  document.getElementById('nombre').value = item.nombre
  document.getElementById('propietario').value = item.propietario
  idParaActualizar = item.id
}
let idParaActualizar = ''
const actualizarMascota = async () =>{
  idParaActualizar
  console.log(idParaActualizar)
  try{
    const mascotaActualizada = {
      tipo: document.getElementById('tipo').value,
      nombre: document.getElementById('nombre').value,
      propietario: document.getElementById('propietario').value
    }
    const dataAnimales = await axios.put(`http://localhost:3000/mascotas/${idParaActualizar}`,mascotaActualizada)
  }
  catch(error){
    console.error('No está actualizando Persona')
  }
  listarMascotas()
}
btnActualizar.addEventListener('click',actualizarMascota)


// async function getPets () {
  //   try {
    //     const value = await axios.get('http://localhost:3000/mascotas')
    //     console.log('value', value.data)
    //   } catch (error) {
      //     console.log(error.response)
      //   }
      // }
      
      /*
      Quiero obtener todas las mascotas que tengan el mismo tipo que las de el id 2
      */
    
    const buscarPetNombre = async (idMascota) =>{
      try{
        const animal = await axios.get(`http://localhost:3000/mascotas/${idMascota}`)
    console.log('mascota id', animal)
    const nombreAnimal = await axios.get(`http://localhost:3000/mascotas/?nombre=${animal.data.nombre}`)
    console.log('buscando por nombre', nombreAnimal)
  }
  catch(error){
    console.error(XXXXXXXXXXXX)
  }
}
//buscarPetNombre(1591919863635)


const buscarPetPropietario = async (n) =>{
  try{
    const pet = await axios.get(`http://localhost:3000/mascotas/${n}`)
    console.log('mascotita', pet)
    const propietario = await axios.get(`http://localhost:3000/mascotas/?propietario=${pet.data.propietario}`)
    console.log('buscando por dueño :',propietario)
  }
  catch(error){
    console.error(XXXXX)
  }
}
//buscarPetPropietario(6)

const buscarPetId = async (id) => {
  try{
    const mascota = await axios.get(`http://localhost:3000/mascotas/${id}`)
    console.log('mascotas ', mascota)
    const tipos = await axios.get(`http://localhost:3000/mascotas?tipo=${mascota.data.tipo}`)
    console.log('buscar por tipos',tipos)
  }
  catch(x){
    console.error(X)
  }
}
//buscarPetId(1)

async function buscarPetTipo () {
  console.log('me ejecuté')
  try{
    const gatos = await axios.get('http://localhost:3000/mascotas?tipo=gato')
    console.log('gatos', gatos)
  }
  catch (error){
    console.log(error)
  }
}
//buscarPetTipo()



const nuevaMascota = async () => {
  try{
    const creandoMascota = {
      "id": new Date().getTime(),
      "tipo": "loro",
      "nombre": "Lorenzo",
      "Propietario": "Antonio Nuñez"
    }
    const datos = await axios.post('http://localhost:3000/mascotas/', creandoMascota)
    console.log('valor', datos.data)
  }
  catch(error){
    console.error(XXXX)
  }
}
// nuevaMascota()

const eliminarPet = async (idEliminar) =>{
  try{
    let petidEliminar = await axios.delete(`http://localhost:3000/mascotas/${idEliminar}`)
    console.log('id de pet para eliminar',petidEliminar)
  }
  catch(error){
    console.error('No funciona')
  }
}

const newPet = async (e) => {
  console.log('e', e, 'this', this)
  e.preventDefault()
  try {
    // e.stopPropagation()
    const request = {
      "id": new Date().getTime(),
      "tipo": "gato",
      "nombre": "Chato",
      "propietario": "Renzo"
    }
    const response = await axios.post('http://localhost:3000/mascotas', request)
    console.log('value', response.data)
    // alert('sd')
  } 
  catch (error) {
    console.log(error)
  }
}
// getPets()

