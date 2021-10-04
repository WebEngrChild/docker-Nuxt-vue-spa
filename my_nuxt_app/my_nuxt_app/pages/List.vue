<template>
    <div class="container">
    <Header />
        <table class="table table-hover">
          <thead class="thead-light">
                  <tr v-for="(task, index) in tasks" :key="index">
                      <th scope="row">{{ task.id }}</th>
                      <td>{{ task.title }}</td>
                      <td>{{ task.content }}</td>
                      <td>{{ task.person_in_charge }}</td>
                      <td>
                          <nuxt-link :to="`/Show/${task.id}`">
                            <button class="btn btn-primary">Show</button>
                          </nuxt-link>
                      </td>
                      <td>
                          <nuxt-link :to="`/Edit/${task.id}`">
                            <button class="btn btn-success">Edit</button>
                          </nuxt-link>
                      </td>
                      <td>
                          <button class="btn btn-danger" v-on:click="deleteTask(task.id)">Delete</button>
                      </td>
                  </tr>
              </thead>
        </table>
    </div>
</template>

<script>
    import Header from "@/components/header.vue";
    export default {
        data: function () {
            return {
                tasks: []
            }
        },

        methods: {
            async getTasks() {
              const url = '/api/tasks'
              const res = await this.$axios.$get(url)
              this.tasks = res
            },

            async deleteTask(id) {
              const url = "/api/tasks/"
              await this.$axios.$delete(url + id)
              .then((res) => {
                        this.getTasks();
                    });
            },
        },
        mounted() {
            this.getTasks();
        }
    }
</script>

