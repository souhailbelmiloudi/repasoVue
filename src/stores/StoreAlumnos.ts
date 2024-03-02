import { reactive } from "vue";
import type { Alumnos } from '@/util/interfaces';
import { addDatos,getAllDatos } from '@/crudAxios/miCrud';


export const storeAlumnos =reactive ({
    Cargando :<Boolean>false,
    lista:<Alumnos[]>[],

    addAlumno (datos:Alumnos){
        this.lista.push(datos);
        addDatos("Alumnos",datos)
    },

 verTodos (){
        this.Cargando =true
        setTimeout(async ()=>{
            this.lista= await getAllDatos("Alumnos")
        },2000)
        this.Cargando =false
    }

})