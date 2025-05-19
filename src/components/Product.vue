<template>
  <div class="px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header class="m-auto w-100">
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
        Product Collection. {{ count }}
      </h2>
      <button
        class="inline-block rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
        @click="increment"
      >
        increment
      </button>

      <p class="mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p>
    </header>
  </div>
  <router-view />
</template>

<script>
import Collection from "./collection.vue";
import Productcard from "./Productcard.vue";
import userStoreCounter from "../stores/counter";
import { mapActions, mapState } from "pinia";

export default {
  components: {
    Productcard,
    Collection,
  },
  computed: {
    ...mapState(userStoreCounter, ["count"]),
  },
  methods: {
    ...mapActions(userStoreCounter, ["increment"]),
  },
};
</script>