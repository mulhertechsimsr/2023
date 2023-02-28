import Home from "@/views/Principal"
import Code_Game from '@/components/Codegame'
import Workshop1 from '@/components/Workshop1'
import Workshop2 from '@/components/Workshop2'
import Inscricao from '@/components/Inscricoes'

import VueRouter from 'vue-router'
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/code_game', component: Code_Game },
  { path: '/work1', component: Workshop1 },
  { path: '/work2', component: Workshop2 },
  { path: '/inscricao', component: Inscricao },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes // short for `routes: routes`
  })
export default router