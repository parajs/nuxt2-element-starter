export default function ({ store, redirect, next }) {
  // If the user is authenticated redirect to home page
  if (store.state.token) {
    return redirect('/')
  }
}
