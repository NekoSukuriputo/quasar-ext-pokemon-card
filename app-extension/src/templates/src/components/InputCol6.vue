<template>
  <div>
    <div class="row q-col-gutter-x-md">
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 q-mb-sm">
        <div class="row items-center">
          <div
            :class="`col-lg-4 col-md-4 col-sm-4 col-xs-12 text-bold ${labelAlign}`"
          >
            {{ label }}
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
            <span class="custom-input-32">
              <q-input
                v-model="model"
                name="model"
                filled
                outlined
                dense
                :disable="disable"
                hide-bottom-space
                @update:model-value="(value) => emit('update:model', value)"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { QInput } from "quasar";
defineProps({
  labelAlign: {
    required: false,
    type: String,
  },
  label: {
    required: false,
    type: String,
  },
  label: {
    required: false,
    type: String,
  },
  model: {
    required: true,
    type: String,
  },
  disable: {
    required: false,
    type: Boolean,
  },
});
const emit = defineEmits(["update:model"]);
</script>

<style lang="scss" scoped>
</style>