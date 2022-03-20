<template>
<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
     <router-link
        to="/"
        tag="li"
        class="navbar-brand">
         <a class="nav-link"> Ürün Listesi</a>
        </router-link>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <router-link
        active-class="active"
        to="/product-processes"
        tag="li"
        class="nav-item">
         <a class="nav-link">Ürün İşlemleri</a>
        </router-link>
      
          <router-link
          active-class="active"
        to="/product-output"
        tag="li"
        class="nav-item">
         <a class="nav-link"> Product Sell</a>
        </router-link>

           
        </ul>
    </div>
</nav>
</template>

<script>
</script>

<style>
</style>