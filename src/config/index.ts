const ENV = (import.meta as any).env.VITE_BASE_URL;
export const config = {
  baseUrl: ENV,
  openAi: "/openAi",
};
