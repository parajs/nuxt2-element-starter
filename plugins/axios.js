export default function ({ $axios, store, redirect, $cookies }) {
  const token = store.state.token;
  // Request拦截器，设置token
  $axios.onRequest((config) => {
    if (token) config.headers.Authorization = `Bearer ${token}`;
  });
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 400) {
      redirect("/400");
    }
  });

  $axios.onResponse((response) => {
    return response.data;
  });
}
