<template>
        <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 400px;">
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1550826679-1b8ba79f1c18?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1950&q=80https://images.unsplash.com/photo-1583466478015-2dce6bf2f551?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGl0aW9uYWwlMjBDaGluZXNlJTIwbWVkaWNpbmV8ZW58MHx8MHx8fDA%3D&w=1950&q=80); background-position: center center; opacity: 0.3;"></div>
      <h2 class="fw-bold">朱記中藥行</h2>
    </div>
    <div class="row justify-content-center my-auto">
      <div class="col-md-4 text-center">
        <h2>產品列表</h2>
      </div>
  </div>
    <div class="container mt-md-5 mt-3 mb-7">
      <div class="row">
        <div class="col-md-4">
          <div class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3" id="accordionExample">
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pe-1">
                  <h4 class="mb-0">
                    分類
                  </h4>
                  <i class="fas fa-chevron-down"></i>
                </div>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div class="card-body py-0">
                  <ul class="list-unstyled">
                    <li>
                        <RouterLink :to="`/products`" class="py-2 d-block text-muted">全部</RouterLink>
                    </li>
                    <li v-for="item in categories" :key="item">
                        <RouterLink :to="`/products?category=${item}`" class="py-2 d-block text-muted">{{ item }}</RouterLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6"  v-for="product in products" :key="product.key">
              <div class="card border-0 mb-4 position-relative position-relative">
                <img :src="product.imageUrl" class="card-img-top rounded-0" :alt="product.title"
                style="object-fit: cover; height: 300; cursor: pointer;"
                @click="openProductDetail(product)">
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3">{{product.title}}</h4>
                  <p v-if="product.origin_price===product.price" class="text-muted mt-3">NT$ {{ product.price }}</p>
                  <p class="card-text mb-0"><span class="text-muted "><del>NT$ {{ product.origin_price }}</del></span> NT$ {{ product.price }} </p>
                  <div class="btn-group btn-group-sm">
                    <button type="button" class="btn btn-outline-danger"
                      :disabled="status.addCartLoading === product.id"
                      @click="addToCart(product.id)">
                      <i v-if="status.addCartLoading === product.id" class="fas fa-spinner fa-pulse"></i>
                      加入購物車
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <nav class="d-flex justify-content-center">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav> -->
        </div>
      </div>
    </div>
    <!-- /////
    <user-modal :temp-product="tempProduct" :add-to-cart="addToCart" ref="userModal"></user-modal> -->
          <!-- <table class="table align-middle">
            <thead>
              <tr>
                <th>圖片</th>
                <th>商品名稱</th>
                <th>價格</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.key">
                <td style="width: 200px">
                  <div style="height: 100px; background-size: cover; background-position: center"
                  :style="{backgroundImage: `url(${product.imageUrl})`}"></div>
                </td>
                <td>
                  {{product.title}}
                </td>
                <td>
                  <div class="h5" v-if="product.origin_price===product.price">{{ product.origin_price }} 元</div>
                  <div v-else>
                    <del class="h6">原價 {{ product.origin_price }} 元</del>
                    <div class="h5">現在只要 {{ product.price }} 元</div>
                  </div>
                </td>
                <td>
                  <div class="btn-group btn-group-sm">
                    <button type="button" class="btn btn-outline-secondary"
                      :disabled="status.addCartLoading === product.id"
                      @click="openModal(product)">
                      <i v-if="status.addCartLoading === product.id" class="fas fa-spinner fa-pulse"></i>
                      查看更多
                    </button>
                    <button type="button" class="btn btn-outline-danger"
                      :disabled="status.addCartLoading === product.id"
                      @click="addToCart(product.id)">
                      <i v-if="status.addCartLoading === product.id" class="fas fa-spinner fa-pulse"></i>
                      加到購物車
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table> -->
</template>

<script>

import axios from 'axios'
// import Modal from 'bootstrap/js/dist/modal'
const { VITE_URL, VITE_PATH } = import.meta.env

// const userModal = {
//   props: ['tempProduct', 'addToCart'],
//   data () {
//     return {
//       productModal: null,
//       qty: 1
//     }
//   },
//   methods: {
//     open () {
//       this.productModal.show()
//     },
//     close () {
//       this.productModal.hide()
//     }
//   },
//   template: '#userProductModal',
//   mounted () {
//     this.productModal = new Modal(this.$refs.modal)
//   }

// }

export default {
  data () {
    return {
      products: [],
      tempProduct: {},
      status: {
        addCartLoading: '',
        cartQtyLoading: '',
        delCartLoading: ''
      },
      carts: {},
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },
      categories: ['中藥材', '藥膳包']
    }
  },
  methods: {
    getProducts () {
      const { category = '' } = this.$route.query
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products?category=${category}`)
        .then(res => {
          this.products = res.data.products
        })
    },
    openProductDetail (product) {
      this.$router.push(`/product/${product.id}`)
    },
    // openModal (product) {
    //   this.tempProduct = product
    //   this.$refs.userModal.open()
    // },
    addToCart (productId, qty = 1) {
      const order = {
        product_id: productId,
        qty
      }
      this.status.addCartLoading = productId
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data: order })
        .then(res => {
          this.status.addCartLoading = ''
          this.getCart()
          // this.$refs.userModal.close()
        })
    },
    getCart () {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
        .then(res => {
          console.log(res)
          this.carts = res.data.data
        })
    },
    changeCartQty (item, qty = 1) {
      const order = {
        product_id: item.product_id,
        qty
      }
      this.status.cartQtyLoading = item.id
      axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${item.id}`, { data: order })
        .then(res => {
          this.status.cartQtyLoading = ''
          this.getCart()
        })
    }
  },
  components: {
    // userModal
  },
  mounted () {
    this.getProducts()
    this.getCart()
  },
  watch: {
    '$route.query': {
      handler () {
        this.getProducts()
      },
      deep: true
    }
  }
}
</script>
