import axios from "axios";

const searchImages= async(term)=>{
    const response=await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization:'Client-ID lfSEHAFSIK22hreTdN_Jb7jphqrK2dpux1vRdDjVvE8',
        },
        params:{
            query:term,
        },
    });
    return response.data.results;
};
export default searchImages;