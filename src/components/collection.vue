<template>
  <div class="grid grid-cols-4 gap-1 m-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <Productcard
      v-for="(item, index) in repository"
      :key="index"
      :date="item.created_at"
      :keyword="item.topics"
      :title="item.full_name"
      :id="item.name"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import Productcard from "./Productcard.vue";
import userRepositystor from "../stores/repositry";
export default {
  components: {
    Productcard,
  },
  async mounted() {
    await this.fetchRepository();
  },
  computed: {
    ...mapState(userRepositystor, ['repository']),
  },
  methods: {
    ...mapActions(userRepositystor, ['fetchRepository']),
  },
};
</script>