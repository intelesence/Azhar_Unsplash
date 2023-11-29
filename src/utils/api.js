import axios from 'axios';

const api=axios.create({

baseURL : 'https://api.unsplash.com/',
headers:{

    Authorization:`Client-ID E1IsvAucTRFiXziTVxNeXi2qLlIM8kc-9cXaHauXZs0`

},
});

export default api;