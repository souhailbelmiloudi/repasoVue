import { reactive } from "vue";
import type { Alumnos } from '@/util/interfaces';
import { addDatos,getAllDatos,deleteDatos } from '@/crudAxios/miCrud';


export const storeAlumnos =reactive ({
    Cargando :<Boolean>false,
    lista:<Alumnos[]>[],

    addAlumno (datos:{id:string,nombre:string,edad:string,empresa:string,localidad:string}){
        addDatos("Alumnos",{nombre:datos.nombre,edad:datos.edad,empresa:datos.empresa,localidad:datos.localidad})
    },

    verTodos (){
        this.Cargando =true
        setTimeout(async ()=>{
            this.lista= await getAllDatos("Alumnos")
        },1)
        this.Cargando =false
    },

    borrarAlumno (id:string){
        this.verTodos()
        deleteDatos("Alumnos",id)

    }

})