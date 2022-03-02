export default {
  props: ['email'],
  template: `
     <section class="email-preview">
         <div class="preview-container ">
           <i class="fa-solid fa-star preview-star"></i>
           <div class="sender-name">{{Sender}}</div>
           <div class="email-subjuct"> {{email.subject}} - </div>
           <div class="preview-email-body">{{emailTxt}}</div>
         </div>
     </section>
    `,
  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {
      Sender(){
       return this.email.to.substring(0,[this.email.to.indexOf('@')])
      },
      emailTxt(){
        if (this.email.body.length > 80) return this.email.body.substring(0,50) + '...'
        else  return this.email.body
      },
      
  },
}
