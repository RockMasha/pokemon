import { root } from "./root";

export function startLoading() {
  const loadingEl = `<div class="loading-touch ">loading...</div>`;
  root.loading.innerHTML = loadingEl;
  root.loading.classList.add("loading-active");
  root.body.setAttribute("lock", "");
}
