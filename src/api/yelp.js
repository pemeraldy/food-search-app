import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer OSLizdXUbUMezlidjQeN7w6RecD__VRg3B2ohUlQiBN4iNpbo2ppAa4duyPL_Oc805nS_YieXD0UEG4nrvRtgePABhfD3upGHpMmJ5usFQlaO-xosmfTYEniURDJXnYx",
  },
});
