<template>
  <router-link
    :to="`/project/${id}`"
    class="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6"
  >
    <div class="sm:flex sm:justify-between sm:gap-4 lg:gap-6 hover:cursor-pointer">
      <div class="sm:order-last sm:shrink-0 h-20">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
          class="size-10 rounded-full object-cover sm:size-12"
        />
      </div>

      <div class="mt-4 sm:mt-0">
        <h3 class="text-lg font-medium text-pretty text-gray-900">
          {{ title }}
        </h3>

        <p class="mt-1 text-sm text-gray-700">{{ name }}</p>

        <p class="mt-4 line-clamp-2 text-sm text-pretty text-gray-700 w-50">
          {{ keyword }}
        </p>
      </div>
    </div>

    <dl class="mt-6 flex gap-4 lg:gap-6">
      <div>
        <dt class="text-sm font-medium text-gray-700">Published on</dt>

        <dd class="text-xs text-gray-700">{{ date }}</dd>
      </div>

      <div>
        <dt class="text-sm font-medium text-gray-700">Reading time</dt>

        <dd class="text-xs text-gray-700">{{ timeofread }}</dd>
      </div>
    </dl>
  </router-link>
</template>
  
  <script>
import router from '../route';

export default {
  props: {
    id:{
        type: String
    },
    date: {
      type: String,
      default: "2025/05/08",
    },
    title: {
      type: String,
      default:
        "How I built my first website with Nuxt, Tailwind CSS and Vercel",
    },
    keyword: {
      type: String,
      default: "Learning about coding",
    },
    name: {
      type: String,
      default: "Techer",
    },
    timeofread: {
      type: String,
      default: "12 mn",
    },
  },
//   methods:{
//     handlecick(){
//         this.$route.push(`/project/${this.id}`)
//     }
//   }
};
</script>