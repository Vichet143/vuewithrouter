<template>
  <TemplateModal modal="register-modal">
    <!-- Modal slot content (sign-in Form) -->
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          class="mx-auto h-10 w-auto"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight">
          Sign in to your account
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form
          class="space-y-6"
          :validation-schema="validateform"
          @submit="handleSubmit"
        >
          <div>
            <label for="email" class="block text-sm font-medium">Email address</label>
            <div class="mt-2">
              <Field
                type="email"
                name="email"
                id="email"
                required
                class="block w-full rounded-md px-3 py-1.5 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
              <ErrorMessage name="email" class="text-sm text-red-500 mt-1" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <Field
                type="password"
                name="password"
                id="password"
                required
                class="block w-full rounded-md px-3 py-1.5 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
              <!-- FIXED: Typo (ErrorMessages => ErrorMessage) -->
              <ErrorMessage name="password" class="text-sm text-red-500 mt-1" />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </Form>

        <p class="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
        </p>
      </div>
    </div>
  </TemplateModal>
</template>

<script>
import TemplateModal from "./templetemodal.vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  components: {
    TemplateModal,
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    return {
      validateform: yup.object({
        email: yup.string().required("Email is required").email("Invalid email"),
        password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
      }),
    };
  },
  methods: {
    handleSubmit(values) {
      // Handle form data here
      console.log("Form submitted:", values);
    },
  },
};
</script>
