<template>
    <h2>產品列表</h2>
    <!-- <user-modal :temp-product="tempProduct" :add-to-cart="addToCart" ref="userModal"></user-modal> -->
          <table class="table align-middle">
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
          </table>
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
      }

    }
  },
  methods: {
    getProducts () {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
        .then(res => {
          this.products = res.data.products
        })
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
  }
}
</script>
