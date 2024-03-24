<template>
    <div class="position-relative">
      <div class="position-absolute" style="top:0; bottom:0; left:0; right:0; background-image: url(https://images.unsplash.com/photo-1550826679-1b8ba79f1c18?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1950&q=80https://images.unsplash.com/photo-1583466478015-2dce6bf2f551?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGl0aW9uYWwlMjBDaGluZXNlJTIwbWVkaWNpbmV8ZW58MHx8MHx8fDA%3D&w=1950&q=80);
      background-position: center center; opacity: 0.3;"></div>
      <div class="container d-flex flex-column" style="min-height: 100vh;">
        <NavbarComponent></NavbarComponent>
        <div class="row justify-content-center my-auto">
          <div class="col-md-4 text-center">
            <h2>朱記中藥行</h2>
            <p class="text-muted mb-0">探索中藥的奧秘，尋找健康之道！</p>
            <button class="btn btn-dark rounded-0 mt-6">健康生活的夥伴</button>
          </div>
        </div>
      </div>
    </div>
    <RouterView></RouterView>
    <div class="bg-dark py-5">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
          <a class="text-white h4" href="./index.html">LOGO</a>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li><a href="#" class="text-white mx-3"><i class="fab fa-facebook"></i></a></li>
            <li><a href="#" class="text-white mx-3"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#" class="text-white ms-3"><i class="fab fa-line"></i></a></li>
          </ul>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white">
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div>
          <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
        </div>
      </div>
    </div>
</template>

<script>

import NavbarComponent from '../components/NavbarComponent.vue'

export default {
  components: {
    NavbarComponent
  }
}
</script>
