<template>
    <div class="container">
      <div class="row mt-5">
        <div v-for="hotProduct in hotProducts" :key="hotProduct.id" class="col-md-4 mt-md-4">
          <div class="card border-0 mb-4">
            <img
              :src="hotProduct.imageUrl"
              class="card-img-top rounded-0"
              :alt="hotProduct.title"
            />
            <div class="card-body text-center">
              <h4>{{ hotProduct.title }}</h4>
              <div class="d-flex justify-content-between">
                <p class="card-text text-muted mb-0">
                  {{ hotProduct.promotion }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light mt-7">
      <div class="container">
        <swiper :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide>
      <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>店休公告</h3>
                  <p class="my-5">我們將於3月24日（週四）停止營業一天。
<br>
感謝您一直以來對我們店鋪的支持與信賴。如果您有任何疑問或需要幫助，請隨時聯繫我們的客服團隊，我們將盡快為您提供幫助。

再次感謝您的理解與支持！

</p>
                  <p><small>—祝您度過愉快的一天！—</small></p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
      <div class="row justify-content-center py-7">
                <div class="col-md-6 text-center">
                  <h3>專業顧問服務</h3>
                  <p class="my-5">親愛的顧客，我們很高興向您介紹我們全新的顧問服務！我們的食補團隊擁有豐富的行業經驗和專業知識，能夠為您提供最專業的顧問服務。無論您對食補有任何疑問或者需要建議，我們都能夠為您提供最合適的解決方案。</p>
                  <p><small>—食補團隊—</small></p>
                </div>
              </div>
            </swiper-slide>
  </swiper>
      </div>
    </div>
    <div class="container my-7">
      <div class="row">
        <div class="col-md-6">
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">團隊</h4>
          <p class="text-muted">我們的團隊由一群專業的營養師、中醫師和食品專家組成，他們具有豐富的知識和豐富的經驗，能夠為您提供最專業的建議和指導。無論您遇到什麼問題或需求，我們的團隊都將全力以赴，為您提供最合適的解決方案和最貼心的服務。</p>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-between mt-4">
        <div class="col-md-6">
          <img src="https://images.unsplash.com/photo-1633509907796-ece8a21bdbcb?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" class="img-fluid">
        </div>
        <div class="col-md-4 m-auto text-center">
          <h4 class="mt-4">品質</h4>
          <p class="text-muted">我們的產品在生產過程中嚴格遵循國際標準和規範，所有原材料均來自優質、可追溯的來源，並通過了專業機構的檢測和認證，確保不含有害物質和污染物。此外，我們的生產工藝和設備也經過了嚴格的檢測和認證，以確保產品的安全和衛生。

我們的每一份產品都配有完整的品質保證書，標誌著我們對品質的承諾和信心。您可以放心選購我們的產品，享受最純淨、最安全、最優質的食材，為自己和家人帶來健康與幸福。</p>
        </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
const { VITE_URL, VITE_PATH } = import.meta.env

export default {
  data  () {
    return {
      hotProducts: [],
      products: []
    }
  },
  methods: {
    getProducts () {
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products/all`)
        .then(res => {
          this.products = res.data.products
          const hotProductsData = [
            { title: '枸杞', promotion: '全天候的活力補充品：枸杞被譽為活力的象徵，是人們全天候的活力補充品，無論是在早晨、中午還是晚上，都能讓您保持活力滿滿！' },
            { title: '蓮子', promotion: '心靈寧靜的秘密：在快節奏的生活中，蓮子是您寧靜心靈的秘密武器，享受它帶來的平靜和寧靜，讓每一天都充滿愛與和平。' },
            { title: '當歸', promotion: '女性健康的首選：當歸是女性健康的聖品，深受女性朋友的喜愛，不論是調節月經、美容養顏還是增強體質，當歸都能為您帶來滿滿的好處！' }
          ]
          this.hotProducts = this.products.filter(product => {
          // 假設只有標題是 '枸杞', '當歸', '蓮子' 的是熱門產品
            return ['枸杞', '當歸', '蓮子'].includes(product.title)
          })
          this.hotProducts.forEach(product => {
            const hotProductData = hotProductsData.find(data => data.title === product.title)
            if (hotProductData) {
              product.promotion = hotProductData.promotion
            }
          })
        })
    }
  },
  mounted () {
    this.getProducts()
  },
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Navigation]
    }
  }
}
</script>
