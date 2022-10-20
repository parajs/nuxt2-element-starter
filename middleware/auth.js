export default ({ store, redirect }) => {
  if (!store.state.token) {
    redirect("/");
  } 
}
