<template>
  <div id="app">
    <Sliders :dulieus="dulieus" />
    <Header v-on:clicked-something="handleClickInParent"/>
    <Footer/>
  
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Sliders from './components/Sliders.vue';
import axios from 'axios';
export default {
    
   components: {
   Header,
   Footer,
   Sliders
  },
  data () {
    return  {
         dulieus: [
           { tragop:null , picture:"anh1.jpg" ,docquyen:"docquyen.png" 
           , thumua:[{  data:"7/12"} , {thu:'' , }] , tenmay:"Samsung Galaxy Note 20 Ultra 5G Trắng",
            
             qua:'' , themghichu:'Tặng ngay 6 triệu, Thu cũ đổi mới, Trả góp 0%'  ,giamthem :'' , sosao :3 , sodanhgia:'' },


       { tragop:0 , picture:"anh2.jpg" ,docquyen:"" 
           , thumua:[{  data:"7/12"} , {thu:'THU CŨ ĐỔI MỚI' ,  }] , tenmay:"iPhone 12 128GB",
           
             qua:'' , themghichu:'Tặng ngay 6 triệu, Thu cũ đổi mới, Trả góp 0%'  ,giamthem :'' , sosao :3.4 , sodanhgia:'' },

             { tragop:0 , picture:"anh1.jpg" ,docquyen:"docquyen.png" 
           , thumua:[{  data:"7/12"} ,{ thu:'' }] , tenmay:"Samsung Galaxy M51",
          
             qua:'' , themghichu:'Tặng ngay 6 triệu, Thu cũ đổi mới, Trả góp 0%'  ,giamthem :'' , sosao :0 , sodanhgia:'' },

             { tragop:0.5 , picture:"anh1.jpg" ,docquyen:"" 
           , thumua:[{  data:"7/12"} , {thu:''  }] , tenmay:"Realme C15",
           
             qua:'' , themghichu:'Tặng ngay 6 triệu, Thu cũ đổi mới, Trả góp 0%'  ,giamthem :'' , sosao :0 , sodanhgia:'' },

              { tragop:0 , picture:"anh1.jpg" ,docquyen:"docquyen.png" 
           , thumua:[{  data:"7/12"} ,{ thu:''  }] , tenmay:"Xiaomi Redmi Note 9",
            
             qua:'' , themghichu:'Tặng ngay 6 triệu, Thu cũ đổi mới, Trả góp 0%'  ,giamthem :'' , sosao :0 , sodanhgia:'' },
     
         ] ,
         thongbao:''
    }
  },
 methods:{
   async handleClickInParent(param1) {
     await axios.post('https://api.coindesk.com/v1/bpi/currentprice.json' ,{param1});
    // console.log(param1)
      }
 }
}
</script>



<style>
  @import  './assets/file.css'
</style>
