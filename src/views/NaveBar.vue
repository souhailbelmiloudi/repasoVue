
<script setup lang="ts">

</script>
<template>
    <div class="navBar">
        <div class="links">
            <ul>
                <router-link to="/" ><li>formulario</li></router-link>
                <router-link to="/lista"><li>Lista de tareas</li></router-link>
                <router-link to="/localidades"><li>Localidades</li></router-link>
            </ul>
        </div>
        <div class="links">
           <input type="text">
           <button>Buscar</button>
        </div>
    </div>

</template>
<style scoped>
.navBar{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;  
    background-color: #f1f1f1;
    box-shadow: 0 0 10px rgba(0,0,0,0.1); 
}
.navBar .links ul{
    display: grid; 
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    list-style: none;
    padding: 0;
    margin: 0;
}

.navBar .links ul li{
    text-align: center;
    padding: 10px;
    border: 1px solid #c92424;
    border-radius: 5px;
    cursor: pointer;
}

</style>