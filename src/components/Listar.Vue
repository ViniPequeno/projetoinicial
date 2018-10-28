<template>
    
</template>

<script>
import  axios from "axios";
export default {
    created(){
        axios.get('http://localhost:4000/api/produtos').then(response =>{
            console.log(response);
        }).catch(e=>{
            console.log(e);
        })
    }
}
</script>

<style scoped>

</style>
