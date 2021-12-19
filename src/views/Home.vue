<template>
  <div>
    <h1 class="text-xl font-bold text-gray-600" >Bem-vindo ao organizador de palestras</h1>
    <label class="mx-auto w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-500 rounded-lg shadow-lg
      tracking-wide border border-blue-500 cursor-pointer hover:bg-blue-500
      hover:text-white mb-5 ">
        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <span class="text downcase" >{{ file_name }}</span>
        <span class="uppercase mt-2 text-base leading-normal" >{{ status }}</span>
        <input type='file' class="hidden" id="file" ref="file" accept=".txt" v-on:change="handleFileUpload()" @click="clearFileUpload()"/>
    </label>
    <Conference v-bind:conference="conference" />
  </div>
</template>

<script> 
  import api from '@/services/api/index'
  import Conference from '@/components/Conference.vue'

  export default {
    name: "Home",
    components: {
      Conference,
    },
    data() {
      return {
        conference: null,
        file: null,
        file_name: null,
        status: "Escolha um arquivo"
      }
    },
    methods: {
      fileUpload(){
        this.status = 'Carregando...'
        api.speeches.upload(this.file).then (data => {
          this.conference = data
          this.status = 'Escolha um arquivo'
        })
      },
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
        this.file_name = this.$refs.file.files[0].name;
        this.fileUpload();
      },
      clearFileUpload() {
        this.$refs.file.value = null;
      }
    }
  }
</script>

<style escoped>
  div {
    background-color: white;
    padding: 5px;
    border-radius: 10px;
    width: 75%;
    margin: auto;
  }
  div h1 {
    margin-bottom: 20px;
  }
</style>

