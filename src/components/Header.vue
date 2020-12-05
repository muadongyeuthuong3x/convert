<template>
  
  <header>
    <div class="wrap-main">
        <a class="logo " title="Về trang chủ Thegioididong.com" href="/" aria-label="logo">
                <i class="icontgdd-logo"></i>
        </a>

         
 


        <form id="search-site" action="/tim-kiem" method="get" autocomplete="off">






            <input class="topinput"  name="key" type="text" aria-label="Bạn tìm gì..." placeholder="Bạn tìm gì..." autocomplete="off"  maxlength="50"  v-model="search"  v-on:keyup.13="clicked"/>
          
          
          
          
          
          
          
            <button class="btntop" type="submit" aria-label="tìm kiếm"><i class="icontgdd-topsearch"></i></button>
        </form>
        <div class="menu-info">
            <a href="/gio-hang" class="a1"><i class="icontgdd-cart"></i><span>Giỏ hàng</span></a>
            <a href="/lich-su-mua-hang" class="a2">LỊCH SỬ MUA HÀNG</a>
                <a class="liveevent" href="https://www.bachhoaxanh.com/khuyen-mai?utm_source=tgdd_ttc&utm_medium=link_header&utm_campaign=tgdd" target="_blank"><span id="dot"><span class="ping"></span></span><span class="text"><img style="width:82px;display:inline-block;vertical-align:middle;" src="https://www.thegioididong.com/Content/desktop/images/V5/logo-bhx.png" /> <b style="display:inline-block;vertical-align:middle;margin-left:2px;width:100px;"><span style="font-weight:normal;">giảm</span> đến 50% +<br />5 lần FREEship</b></span></a>
            <div>
                    <a href="/tin-tuc" class="mn-new">24h CÔNG NGHỆ   </a>
                    <a href="/hoi-dap" class="mn-faq">HỎI ĐÁP</a>
                <a href="/game-app" class="mn-gameapp">GAME APP</a>
            </div>
        </div>


    </div>
    <div class="clr"></div>

    <div class="wrap-nav">
        <nav>
            <a href="/dtdd" class="mobile" title="Điện thoại di động, smartphone">
                <i class="icontgdd-mobile"></i><b>Điện thoại1</b>
            </a>
            <a href="/laptop" class="laptop" title="Máy tính xách tay, Laptop">
                <i class="icontgdd-laptop"></i><b>Laptop</b>
            </a>
            <a href="/may-tinh-bang" class="tablet" title="Máy tính bảng, tablet">
                <i class="icontgdd-tablet"></i><b>Tablet</b>
            </a>
            <a href="/phu-kien" class="phukien" title="Phụ kiện điện thoại di động, phụ kiện tablet, phụ kiện laptop">
                <i class="icontgdd-phukien"></i><b>Phụ kiện</b>
            </a>
            <a href="/dong-ho" class="fashionwatch" title="Đồng hồ thời trang">
                <i class="icontgdd-fashionwatch"></i><b>Đồng hồ thời trang</b>
            </a>
            <a href="/dong-ho-thong-minh" class="smartwatch" title="Đồng hồ thông minh">
                <i class="icontgdd-watch"></i><b>Đồng hồ thông minh</b>
            </a>
            <a href="/may-tinh-de-ban" class="pc" title="PC, Máy in">
                <i class="icontgdd-pc"></i><b>PC, Máy in</b>
            </a>
            <a href="/may-doi-tra" class="mn-maydoitra" title="Máy cũ giá rẻ">
                Máy cũ giá rẻ
            </a>
            <a href="/sim-so-dep" class="mn-sim" title="Sim, Thẻ cào">
                Sim, Thẻ cào
            </a>
            <a href="/tien-ich/thanh-toan-tra-gop" class="mn-utility" title="Trả góp, điện nước">
                Trả góp, điện nước
            </a>
        </nav>
       
    
    </div>

</header> 

    
</template>

<script>
export default {
    data(){
        return{ 
        search:" "
        }
    },
    methods:{
        clicked:function(){
            this.$emit('clicked-something', this.search)
        }
    }
     
    
}
</script>

