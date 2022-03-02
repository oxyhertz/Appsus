import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    template: `
        <section class="emails-list">
            <ul >
                <li v-for="email in emails" :key="email.id" class="email-list" :class="isRead" >
                   <email-preview :email="email"  @click="select(email)" />
                   <div class="actions">
                   <i @click="remove(email.id)" class="fa-solid fa-trash-can"></i>
                   <i  class="fa-solid fa-envelope-open"></i>
                   <i class="fa-solid fa-clock"></i>
                </div>
                </li>
            </ul>
        </section>
    `,
    components:{
        emailPreview,
    },
    methods: {
        remove(id) {
            this.$emit('remove', id);
        },
        select(email) {
            email.isRead = true
            this.$router.push({
                path:`/email/${email.id}`
            })
        }
    },
    computed: {
        // isRead(){
        //     return { 'read': this.email.isRead}
        // }
    }
}