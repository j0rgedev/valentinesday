<script setup>
import {useField, useForm} from "vee-validate";
import {useRouter} from "vue-router";

const router = useRouter();

const {handleSubmit, resetForm} = useForm();
const {value, errorMessage} = useField('value', validateField);

function validateField(value) {
  if (!value) {
    return 'No te olvides de poner sus nombres 👀';
  }
  return true;
}

const onSubmit = handleSubmit((values) => {
  if (values.value && values.value.length > 0 && values.value.length <= 40) {
    console.log(values.value)
    router.push({name: 'valentine', params: {names: values.value}});
    resetForm();
  }
});
</script>

<template>
  <section class="p-16 w-full h-full min-h-dvh items-center justify-center flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <h1 class="text-center font-bold text-[clamp(22px,5vw,38px)]">
        SORPRENDE A TU PAREJA 💕
      </h1>
      <p class="text-center text-fuchsia-950/75">
        Solo copia el link de la siguiente página y envíaselo <br>
        a tu pareja para que vea la sorpresa 🙈
      </p>
    </div>
    <form @submit="onSubmit" class="flex flex-col gap-4 w-full h-full max-w-sm">
      <div class="flex flex-col gap-2">
        <FloatLabel>
          <InputText
              id="username"
              v-model="value"
              class="w-full"
              maxlength="40"
              :invalid="errorMessage"
          />
          <label for="username">Nombres</label>
        </FloatLabel>
        <small class="p-error" id="text-error">{{ errorMessage || '&nbsp;' }}</small>
      </div>
      <Button
          type="submit"
          label="Enviar"
      />
    </form>
  </section>
</template>

<style scoped>
section {
  background-image: url('../assets/images/mainimage.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>