<script setup lang="ts">
import {computed, onMounted, ref } from 'vue'
import { getAllDatos } from '@/crudAxios/miCrud';
import type { provincias } from '@/util/interfaces';


const ListaObjetos = ref<provincias[]>();
const ListaProvencias = ref<string[]>();
const provinciaSelecionada=ref<string>("Madrid")
const LocalidadSelect= ref<string>()

const emit = defineEmits(['changeLocalidades'])


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
       
        <label>Localidades</label>
        <select name="" id="" v-model="provinciaSelecionada" @change="emit('changeLocalidades',provinciaSelecionada)">
            <option v-for="provincia in ListaProvencias" :key="provincia">{{ provincia }}</option>
        </select>
        <select name="" id="" v-model="LocalidadSelect"  >
            <option v-for="provincia in ListaLocalidades" :key="provincia">{{ provincia }}</option>
        </select>     
    </div>
</template>
<style scoped>

</style>