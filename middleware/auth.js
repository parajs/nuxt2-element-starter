export default ({ store, redirect, error }) => {
  if (!store.state.token) {
    error({
      message: "暂无权限访问",
      statusCode: 403,
    });
    redirect("/user/login");
  }
};
