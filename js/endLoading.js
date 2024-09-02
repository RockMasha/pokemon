import { root } from "./root";

export function endLoading() {
  root.loading.innerHTML = "";
  root.loading.classList.remove("loading-active");
  root.body.removeAttribute("lock");
}
