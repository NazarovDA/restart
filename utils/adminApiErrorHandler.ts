import { useToast } from "primevue/usetoast";

export default async function adminApiErrorHandler(error: any) {
  try {
    const status = error.status;
    if (status == 401 || (status == 422 && !localStorage.getItem("jwt"))) {
      useToast().add({
        severity: "error",
        summary: "Ошибка",
        detail: `Ошибка аутентификации.\nПеренаправление на страницу аутентификации\n${error.message}`,
        closable: true,
        life: 5000,
      });
      // @ts-ignore
      await navigateTo("/auth");
    } else {
      useToast().add({
        severity: "error",
        summary: "Ошибка",
        detail: `Непредвиденная ошибка. Сообщите о ней администратору.\n${error.message}`,
        closable: true,
        life: 5000,
      });
    }
  } catch (e) {
    useToast().add({
      severity: "error",
      summary: "Ошибка",
      detail: `Непредвиденная ошибка. Сообщите о ней администратору.\n${error.message}`,
      closable: true,
      life: 5000,
    });
  }
}
