export default {
  template: `
          <header class="app-header">
              <div class="logo">
                  <img src="../../css/imgs/black-horse-head-logo-templates.png" alt="">
                  <h1>Appsus</h1>
                </div>
                <nav class="nav-bar">
                    <div class='nav-btn' @click="toggleNav">
                      <i class="fa-solid fa-grip-vertical"></i>
                  </div>
                  <div class="nav-container" :class="showNavClass">
                      <router-link @click="toggleNav" to="/"><i class="fa-solid fa-house"></i></router-link> 
                      <router-link @click="toggleNav" to="/email"><i class="fa-solid fa-envelope"></i></router-link> 
                      <router-link @click="toggleNav" to="/notes"><i class="fa-solid fa-note-sticky"></i></router-link>
                   </div>
              </nav>
          </header>
      
      `,
  data() {
    return {
      showNav: false,
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
  },
  computed: {
    showNavClass() {
      return { 'open-nav': this.showNav };
    },
  },
};
