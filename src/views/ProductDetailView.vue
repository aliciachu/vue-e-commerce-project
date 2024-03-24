<template>
    <h2>產品細節</h2>
    <div class="row align-items-center">
        <div class="col-md-7">
            <swiper :navigation="true" :modules="modules">
                <swiper-slide v-for="(image, index) in product.imagesUrl" :key="index">
                    <img :src="image" class="d-block w-100" :alt="product.title">
                </swiper-slide>
            </swiper>
        </div>
        <div class="col-md-5">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb bg-white px-0 mb-0 py-3">
                    <li class="breadcrumb-item">
                        <RouterLink class="text-muted" to="/">首頁</RouterLink>
                    </li>
                    <li class="breadcrumb-item">
                        <RouterLink class="text-muted" to="/products">產品列表</RouterLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">產品細節</li>
                </ol>
            </nav>
            <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
            <p v-if="product.origin_price != product.price" class="mb-0 text-muted text-end"><del>NT${{
                product.origin_price }}</del></p>
            <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
            <div class="row align-items-center">
                <div class="col-5">
                    <div class="input-group my-3 bg-light rounded">
                        <div class="input-group-prepend">
                            <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon1">
                                <i class="fas fa-minus"></i>
                            </button>
                        </div>
                        <input type="text" v-model="buyQty"
                            class="form-control border-0 text-center my-auto shadow-none bg-light" placeholder=""
                            aria-label="Example text with button addon" aria-describedby="button-addon1" value="1">
                        <div class="input-group-append">
                            <button class="btn btn-outline-dark border-0 py-2" type="button" id="button-addon2">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-1">{{ product.unit }}</div>
                <div class="col-6">
                    <a @click.prevent="addToCart(product.id, buyQty)"
                        class="text-nowrap btn btn-dark w-100 py-2">加入購物車</a>
                </div>
            </div>
        </div>
    </div>
    <div class="row my-5">
        <div class="col-md-4">
            <p>{{ product.content }}</p>
        </div>
        <div class="col-md-3">
            <p class="text-muted">{{ product.description }}</p>
        </div>
    </div>
    <h3 class="fw-bold">更多</h3>
    <swiper :loop="true" :autoplay="{
                delay: 2500,
                disableOnInteraction: false,
            }" :spaceBetween="10" :breakpoints="{
                767: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="text-as-image">
                穀雨推薦
                <br>
                <ul>
                    <li>枸杞：明目養肝</li>
                    <li>菊花：清熱解毒</li>
                    <li>蓮子：益氣養心</li>
                </ul>
            </div>
        </swiper-slide>
        <swiper-slide v-for="product in products" :key="product.id">
            <div class="card border-0 mb-4 position-relative position-relative">
                <img :src="product.imageUrl" class="card-img-top rounded-0" :alt="product.title"
                    style="object-fit: cover; height: 300; cursor: pointer;" @click="openProductDetail(product)">
                <div class="card-body p-0">
                    <h4 class="mb-0 mt-3">{{ product.title }}</h4>
                    <p class="card-text mb-0">NT${{ product.price }}
                        <span class="text-muted ">
                            <del v-if="product.origin_price !=product.price">NT${{product.origin_price}}</del>
                        </span>
                    </p>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>

<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
// import { RouterLink } from 'vue-router'

const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data () {
    return {
      products: [],
      product: {},
      status: {
        addCartLoading: ''
      },
      buyQty: 1
    }
  },
  methods: {
    getProducts () {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
        .then(res => {
          this.products = res.data.products
        })
    },
    openProductDetail (product) {
      console.log(product)
      this.$router.push(`/product/${product.id}`)
    },
    getProduct () {
      const { id } = this.$route.params
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
        .then(res => {
          console.log(res)
          this.product = res.data.product
        })
    },
    addToCart (productId, qty = 1) {
      const order = {
        product_id: productId,
        qty: Number(qty)
      }
      console.log(order)
      this.status.addCartLoading = productId
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data: order })
        .then(res => {
          this.status.addCartLoading = ''
          this.$router.push('/cart')
        })
    }
  },
  mounted () {
    this.getProduct()
    this.getProducts()
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Autoplay, Pagination, Navigation]
    }
  }
}
</script>

<style>
    .text-as-image {
        width: 340px;
        height: 230px;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        font-weight: bold;
        color: #333;
    }
</style>
