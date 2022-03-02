import emailPreview from './email-preview.cmp.js'

export default {
    props: ['emails'],
    template: `
        <section class="emails-list">
            <ul>
                <li v-for="email in emails" :key="email.id" class="email-list" >
                   <email-preview :email="email" />
                   <div class="actions">
                       <button @click="remove(email.id)">X</button>
                       <button @click="select(email)">Details</button>
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
            this.$emit('selected', email);
        }
    },
    computed: {}
}