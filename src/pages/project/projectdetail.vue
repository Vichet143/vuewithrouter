<template>
  <section>

      <div class="mt-8 sm:flex sm:items-center sm:justify-between flex m-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="block sm:hidden">
          <button
            class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
          >
            <span class="text-sm font-medium"> Filters & Sorting </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-4 rtl:rotate-180"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>

        <div class="hidden sm:flex sm:gap-4">
          <div class="relative">
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
              >
                <span class="text-sm font-medium"> Availability </span>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div
                class="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
              >
                <div class="w-96 rounded-sm border border-gray-200 bg-white">
                  <header class="flex items-center justify-between p-4">
                    <span class="text-sm text-gray-700"> 0 Selected </span>

                    <button
                      type="button"
                      class="text-sm text-gray-900 underline underline-offset-4"
                    >
                      Reset
                    </button>
                  </header>

                  <ul class="space-y-1 border-t border-gray-200 p-4">
                    <li>
                      <label
                        for="FilterInStock"
                        class="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterInStock"
                          class="size-5 rounded-sm border-gray-300 shadow-sm"
                        />

                        <span class="text-sm font-medium text-gray-700">
                          In Stock (5+)
                        </span>
                      </label>
                    </li>

                    <li>
                      <label
                        for="FilterPreOrder"
                        class="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterPreOrder"
                          class="size-5 rounded-sm border-gray-300 shadow-sm"
                        />

                        <span class="text-sm font-medium text-gray-700">
                          Pre Order (3+)
                        </span>
                      </label>
                    </li>

                    <li>
                      <label
                        for="FilterOutOfStock"
                        class="inline-flex items-center gap-2"
                      >
                        <input
                          type="checkbox"
                          id="FilterOutOfStock"
                          class="size-5 rounded-sm border-gray-300 shadow-sm"
                        />

                        <span class="text-sm font-medium text-gray-700">
                          Out of Stock (10+)
                        </span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </details>
          </div>

          <div class="relative">
            <details class="group [&_summary::-webkit-details-marker]:hidden">
              <summary
                class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
              >
                <span class="text-sm font-medium"> Price </span>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div
                class="z-50 group-open:absolute group-open:top-auto group-open:mt-2 ltr:group-open:start-0"
              >
                <div class="w-96 rounded-sm border border-gray-200 bg-white">
                  <header class="flex items-center justify-between p-4">
                    <span class="text-sm text-gray-700">
                      The highest price is $600
                    </span>

                    <button
                      type="button"
                      class="text-sm text-gray-900 underline underline-offset-4"
                    >
                      Reset
                    </button>
                  </header>

                  <div class="border-t border-gray-200 p-4">
                    <div class="flex justify-between gap-4">
                      <label
                        for="FilterPriceFrom"
                        class="flex items-center gap-2"
                      >
                        <span class="text-sm text-gray-600">$</span>

                        <input
                          type="number"
                          id="FilterPriceFrom"
                          placeholder="From"
                          class="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                        />
                      </label>

                      <label
                        for="FilterPriceTo"
                        class="flex items-center gap-2"
                      >
                        <span class="text-sm text-gray-600">$</span>

                        <input
                          type="number"
                          id="FilterPriceTo"
                          placeholder="To"
                          class="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </div>

        <div class="hidden sm:block">
          <label for="SortBy" class="sr-only">SortBy</label>

          <select id="SortBy" class="h-10 rounded-sm border-gray-300 text-sm">
            <option>Sort By</option>
            <option value="Title, DESC">Title, DESC</option>
            <option value="Title, ASC">Title, ASC</option>
            <option value="Price, DESC">Price, DESC</option>
            <option value="Price, ASC">Price, ASC</option>
          </select>
        </div>
      </div>

      <ul class="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <li>
          <a href="#" class="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative bg-white pt-3">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                Basic Tee
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>

                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative bg-white pt-3">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                Basic Tee
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>

                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative bg-white pt-3">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                Basic Tee
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>

                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
              </p>
            </div>
          </a>
        </li>

        <li>
          <a href="#" class="group block overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt=""
              class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div class="relative bg-white pt-3">
              <h3
                class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
              >
                Basic Tee
              </h3>

              <p class="mt-2">
                <span class="sr-only"> Regular Price </span>

                <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
    export default{
        mounted(){
            const id = this.$route.params.id
            console.log(id);
            
        }
    }
</script>