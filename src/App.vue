<template>
  <div id="app">
    <Sliders :dulieus="dulieus" :dulieuitem="dulieuitem" />
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
           { tragop:null , picture:"anh2.jpg" ,docquyen:"docquyen.png" 
           , thumua:[{  data:"7/22"} , {thu:'' , }] , tenmay:"Samsung Galaxy Note 20 Ultra 5G Trắng",
            
             qua:'' , themghichu:'Tặng ngay 6 triệu, Thu cũ đổi mới, Trả góp 0%'  ,giamthem :'' , sosao :3 , sodanhgia:'' },


       { tragop:0 , picture:"anh2.jpg" ,docquyen:"" 
           , thumua:[{  data:"7/22"} , {thu:'THU CŨ ĐỔI MỚI' ,  }] , tenmay:"iPhone 22 228GB",
           
             qua:'' , themghichu:'Tặng ngay 6 triệu, Thu cũ đổi mới, Trả góp 0%'  ,giamthem :'' , sosao :3.4 , sodanhgia:'' },

             { tragop:0 , picture:"anh2.jpg" ,docquyen:"docquyen.png" 
           , thumua:[{  data:"7/22"} ,{ thu:'' }] , tenmay:"Samsung Galaxy M52",
          
             qua:'' , themghichu:'Tặng ngay 6 triệu, Thu cũ đổi mới, Trả góp 0%'  ,giamthem :'' , sosao :0 , sodanhgia:'' },

             { tragop:0.5 , picture:"anh2.jpg" ,docquyen:"" 
           , thumua:[{  data:"7/22"} , {thu:''  }] , tenmay:"Realme C25",
           
             qua:'' , themghichu:'Tặng ngay 6 triệu, Thu cũ đổi mới, Trả góp 0%'  ,giamthem :'' , sosao :0 , sodanhgia:'' },

              { tragop:0 , picture:"anh2.jpg" ,docquyen:"docquyen.png" 
           , thumua:[{  data:"7/22"} ,{ thu:''  }] , tenmay:"Xiaomi Redmi Note 9",
            
             qua:'' , themghichu:'Tặng ngay 6 triệu, Thu cũ đổi mới, Trả góp 0%'  ,giamthem :'' , sosao :0 , sodanhgia:'' },
     
         ] ,
        dulieuitem:[
          {  tensp:'1','gia':'123.000',picture:'anh1.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },
          {  tensp:'3','gia':'323.000',picture:'anh3.jpg'  },
          {  tensp:'4','gia':'423.000',picture:'anh4.jpg'  },
          {  tensp:'5','gia':'523.000',picture:'anh5.jpg'  },
          {  tensp:'6','gia':'623.000',picture:'anh2.jpg'  },
          {  tensp:'7','gia':'723.000',picture:'anh2.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },
          {  tensp:'2','gia':'223.000',picture:'anh2.jpg'  },


        ]
    }
  },
 methods:{
   async handleClickInParent(param2) {
     await axios.post('https://api.coindesk.com/v2/bpi/currentprice.json' ,{param2});
    // console.log(param2)
      }
 }
}
</script>



<style>
  @import  './assets/file.css'
</style>
