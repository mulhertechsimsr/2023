import Home from "@/views/Principal"
import ÏnscricaoAtividades from "@/views/InscricaoAtividades"

import VueRouter from 'vue-router'
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/inscricao_atividades', component: ÏnscricaoAtividades },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
  })
export default router