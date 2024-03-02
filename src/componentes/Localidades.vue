<script setup lang="ts">
import {computed, onMounted, ref } from 'vue'
import { getAllDatos } from '@/crudAxios/miCrud';

interface provincias {
    provincia : string,
    localidad :string
}

const ListaObjetos = ref<provincias[]>();
const ListaProvencias = ref<string[]>();
const provinciaSelecionada=ref<string>("Madrid")
const LocalidadSelect= ref<string>()



const cargarDatos = async ()  => {
    ListaObjetos.value= await getAllDatos("provincias")
    ListaProvencias.value=[...new Set(ListaObjetos.value?.map(el=>el.provincia))]
}


 const ListaLocalidades = computed(()=>{
    return ListaObjetos.value?.filter(el=>el.provincia===provinciaSelecionada.value)
                              .map(el=>el.localidad)
 })


 

onMounted(()=>{
    cargarDatos()
})




</script>

<template>
    <div>
       
        <h1>Localidades</h1>
        <select name="" id="" v-model="provinciaSelecionada">
            <option v-for="provincia in ListaProvencias" :key="provincia">{{ provincia }}</option>
        </select>
        <select name="" id="" v-model="LocalidadSelect">
            <option v-for="provincia in ListaLocalidades" :key="provincia">{{ provincia }}</option>
        </select>
        <p>  Provencia :{{ provinciaSelecionada }} </p>
        <p>  Localidad :{{ LocalidadSelect }}</p>

       
     
    </div>
</template>
<style scoped>

</style>