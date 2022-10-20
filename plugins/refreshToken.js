export default ({ store }) => {
    setInterval(() => {
        const token = store.state.token;
        if(token){
            console.log("refreshToken")
            store.dispatch('refreshToken');
        }
        
    },1000*10)
  };
  