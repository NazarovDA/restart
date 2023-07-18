<script setup lang="ts">
import { Product } from "types/product";
// import cuid from "cuid";

import InputText from "primevue/inputtext";
// import TreeSelect from "primevue/treeselect";
import FileUpload from "primevue/fileupload";
import Image from "primevue/image";
import Dropdown from "primevue/dropdown";
import Button from "primevue/button";
import BlockUI from "primevue/blockui";

import { FileUploadRemoveUploadedFile } from "primevue/fileupload";
// import { TreeNode } from "primevue/tree";

try {
  if (!checkRules(readJWT(localStorage.getItem("jwt")!), "Product.Edit")) {
    await navigateTo("/auth");
  }
} catch (e) {
  await navigateTo("/auth");
}

const layout = "admin";

const router = useRouter();
const route = useRoute();
const id = route.params.id as string;

const state = reactive<{
  isLoading: boolean;
  product: Product;
  newImageBase64: null | string;
  types: string[];
  units: string[];
}>({
  isLoading: true,
  product:
    id == "new"
      ? {
          type: "",
          name: "Новая позиция",
          qualification: "",
          unit: "",
          price1: "0",
          price2: "0",
          price3: "0",
          shortDescription: "",
          longDescription: "",
        }
      : await $fetch(`/api/products/${id}`),
  newImageBase64: null,
  types: (await $fetch("/api/types")).types,
  units: (await $fetch("/api/units")).units, // TODO: fix this(at) red warning!
});
// console.log(state);

async function customBase64Uploader(event: FileUploadRemoveUploadedFile) {
  const file = event.files[0];
  const reader = new FileReader();
  const objectURL = URL.createObjectURL(file);
  let blob = await fetch(objectURL).then((r) => r.blob()); //blob:url
  reader.readAsDataURL(blob);
  reader.onloadend = function () {
    const base64data = reader.result as string;
    state.newImageBase64 = base64data;
  };
}

async function onSave() {
  state.isLoading = true;
  let imageUploadingResult;
  if (state.newImageBase64) {
    imageUploadingResult = await $fetch("/api/admin/img", {
      method: "POST",
      body: {
        jwtToken: localStorage.getItem("jwt"),
        image: state.newImageBase64,
      },
    });

    if (!imageUploadingResult || !imageUploadingResult.hash) {
      // warn
      console.error(imageUploadingResult);
      state.isLoading = false;
      return;
    }
  }

  const productResult = await $fetch("/api/admin/product", {
    method: "POST",
    body: {
      jwtToken: localStorage.getItem("jwt"),
      newProduct: {
        ...state.product,
        hashImage: imageUploadingResult?.hash || state.product.hashImage,
      } as Product,
    },
  });

  await navigateTo("/admin/product/list");
  // state.isLoading = false;
}

state.isLoading = false;
</script>

<template>
  <ClientOnly>
    <NuxtLayout :name="layout">
      <BlockUI :blocked="state.isLoading">
        <div class="content-wall">
          <table>
            <tr>
              <td>
                <Image
                  :src="'/pictures/' + state.product.hashImage"
                  height="107"
                />
              </td>
              <td>
                <FileUpload
                  auto
                  mode="basic"
                  name="demo[]"
                  accept="image/*"
                  customUpload
                  @uploader="customBase64Uploader"
                />
              </td>
            </tr>
            <tr>
              <td>Наименование</td>
              <td>
                <InputText
                  placeholder="Наименование"
                  v-model="state.product.name"
                />
              </td>
            </tr>
            <tr>
              <td>Тип продукции</td>
              <td>
                <Dropdown v-model="state.product.type" :options="state.types" />
              </td>
            </tr>
            <tr>
              <td>Единицы измерения</td>
              <td>
                <Dropdown v-model="state.product.unit" :options="state.units" />
              </td>
            </tr>
            <tr>
              <td>Цена</td>
              <td>
                <table>
                  <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                  </tr>
                  <tr>
                    <td>
                      <InputText v-model="state.product.price1" />
                    </td>
                    <td>
                      <InputText v-model="state.product.price2" class="p-invalid"/>
                    </td>
                    <td>
                      <InputText v-model="state.product.price3" class="p-invalid"/>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td>Короткое описание</td>
              <td><Editor v-model="state.product.shortDescription" /></td>
            </tr>
            <tr>
              <td>Длинное описание</td>
              <td><Editor v-model="state.product.longDescription" /></td>
            </tr>
            <tr>
              <td colspan="2">
                <Button
                  label="Сохранить"
                  icon="pi pi-check"
                  @click="onSave"
                  :disabled="state.isLoading"
                />
              </td>
            </tr>
          </table>
        </div>
      </BlockUI>
    </NuxtLayout>
  </ClientOnly>
</template>
