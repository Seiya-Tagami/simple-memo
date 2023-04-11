import { defineStore } from "pinia";

export const useUserInterfaceStore = defineStore("UserInterface", {
  state: () => ({
    isDark: false,
    isOpen: false,
    registerModalIsShowed: false,
  }),
  actions: {
    changeTheme() {
      this.isDark = !this.isDark;
      document.querySelector("body")!.classList.toggle("bg-gray-800");
    },
    handleMenu() {
      this.isOpen = !this.isOpen;
    },
    handleRegisterModal() {
      this.registerModalIsShowed = !this.registerModalIsShowed;
      this.isOpen = false
    },
  },
});