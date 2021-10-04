 <template>
     <div class="container-fluid bg-dark mb-3">
         <div class="container">
             <nav class="navbar navbar-dark">
                 <span class="navbar-brand mb-0 h1">Vue Laravel SPA</span>
                 <div>
                    <NuxtLink to="List">
                        <button class="btn btn-success">List</button>
                    </NuxtLink>
                    <NuxtLink to="Create">
                        <button class="btn btn-success">ADD</button>
                    </NuxtLink>
                    <button class="btn btn-danger" v-on:click="openWindow">Nuxt(SSR)</button>
                 </div>
             </nav>
         </div>
     </div>
 </template>

 <script>
     export default {
        methods: {
            openWindow: function() {
            const url = "http://localhost:2000/hello"
            window.open(url, '_blank', 'width=1024,height=768,scrollbars=yes,resizable=yes')
            }
        }
     }
 </script>
