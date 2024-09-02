import { endLoading } from "./endLoading";
import { startLoading } from "./startLoading";

export async function sendRequest(request, data) {
  try {
    startLoading();
    const result = await request(data);
    endLoading();
    return result;
  } catch (error) {
    endLoading();
    return false;
  }
}
