<script setup lang="ts">
import { ref ,onMounted} from 'vue'
import { getAllDatos } from '@/crudAxios/miCrud';
import type { Empresas } from '@/util/interfaces';
import { storeAlumnos } from '@/stores/StoreAlumnos';
import Localidades from './Localidades.vue';

const Empresas = ref<Empresas[]>()
const nombreEmpresas = ref<string[]>()
const inputNombre = ref<string>("")
const inputEdad = ref<string>("")
const inputEmpresa = ref<string>("No tiene empresa")
const inputCheck = ref<boolean>(false)

const cargarDatos = async () => {
    Empresas.value = await getAllDatos("Empresas")
    nombreEmpresas.value =[...new Set(Empresas.value?.map(el=>el.nombre))]
}

const guardarAlumno =()=>{
    const datos ={
        nombre:inputNombre.value,
        edad:inputEdad.value,
        empresa:inputEmpresa.value
    }

    storeAlumnos.addAlumno(datos);

    inputNombre.value = ""
    inputEdad.value = ""
    inputEmpresa.value = "No tiene empresa"
}


 
onMounted(() => {
    cargarDatos()
    storeAlumnos.verTodos() 
})
</script>

<template>
    <div>
        <h1>Formulario</h1>
        <form action="" @submit.prevent="guardarAlumno">
            <input type="text"  placeholder="nombre" v-model="inputNombre">
            <input type="text"  placeholder="edad" v-model="inputEdad">
            <label for="checkbox">¿Tiene empresa asignada?</label>
            <input type="checkbox" name="" id="checkbox" v-model="inputCheck">
            <select name="Empresas" id="" v-show="inputCheck" v-model="inputEmpresa">
                <option disabled>No tiene empresa</option>
                <option v-for="empresa in nombreEmpresas" :key="empresa">{{ empresa }}</option>
            </select>
            <input type="submit" value="Graba" />
        </form>
    </div>
    <div class="ListaAlumnos">
        <h1>Lista de Alumnos</h1>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Empresa</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="alumno in storeAlumnos.lista" :key="alumno.nombre">
                    <td>{{ alumno.nombre }}</td>
                    <td>{{ alumno.edad? alumno.edad : "-" }}</td>
                    <td>{{ alumno.empresa? alumno.empresa : "No tiene empresa" }}</td>
                </tr>
            </tbody>
        </table>

    </div>
    
</template>
<style scoped>
    h1 {
        color: red;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;

    }
    input {
        padding: 10px;
        border: 1px solid #000;

    }
    input[type="submit"] {
        background-color: #000;
        color: #fff;
        cursor: pointer;
    }
    input[type="submit"]:hover {
        background-color: #333;
    }
    input[type="checkbox"] {
        width: 20px;
        height: 20px;
    }
    label {
        display: flex;
        align-items: center;
    }

    select {
        padding: 10px;
        border: 1px solid #000;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    th, td {
        border: 1px solid #000;
        padding: 10px;
    }
    th {
        background-color: #6d1515;
        color: #fff;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    tr:hover {
        background-color: #ddd;
    }
    .ListaAlumnos {
        margin-top: 20px;
    }
    


</style>