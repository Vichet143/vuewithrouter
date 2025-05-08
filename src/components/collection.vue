<template>
  <div class="flex m-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <Productcard
      v-for="(item, index) in course"
      :key="index"
      :date="item.date"
      :name="item.name"
      :keyword="item.keyword"
      :timeofread="item.timeofread"
      :title="item.title"
      :id="item.id"
    />
  </div>
</template>

<script>
import Productcard from './Productcard.vue';
export default {
    components:{
        Productcard
    },
  data() {
    return {
      course: [
        {
          id: "123-34452",
          title:
            "How I built my first website with Nuxt, Tailwind CSS and Vercel",
          date: "2019/02/13",
          keyword: "Learning java to master",
          name: "Vichet",
          timeofread: "12 minutes",
        },
        {
          id: "984-5474",
          title:
            "How I built my first website with Nuxt, Tailwind CSS and Vercel",
          date: "2020/02/20",
          keyword: "Learning c++ to master",
          name: "Tra",
          timeofread: "50 minutes",
        },
        {
          id: "345-23343",
          title:
            "How I built my first website with Nuxt, Tailwind CSS and Vercel",
          date: "2011/04/30",
          keyword: "Learning javascript to master",
          name: "Mengkim",
          timeofread: "120 minutes",
        },
        {
          id: "567-3454",
          title:
            "How I built my first website with Nuxt, Tailwind CSS and Vercel",
          date: "2022/12/13",
          keyword: "Learning pyton to master",
          name: "Sang",
          timeofread: "34 minutes",
        },
      ],
    };
  },
};
</script>