export default {
  props: ['email'],
  template: `
     <section class="email-preview">
         <div class="preview-container">
           <i class="fa-solid fa-star" style="color:gold"></i>
           <div class="sender-name">{{Sender}}</div>
           <div>{{email.subject}}  -  <div>{{email.body}}</div></div>
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
      }
  },
}
