// appfront/src/api/api.js
import axiosInstance from './index'

const axios = axiosInstance
const url='http://10.28.221.165:8888/'
export const getBooks = () => {return axios.get(url+`get/3`)}

export const postBook = (bookName, bookAuthor) => {return axios.post(url+`data1/`, {'siteid': bookName, 'title': bookAuthor})}

export const postUser =(phoneNumber,pwd)=>{return axios.post(url+'user/',{'account':phoneNumber,'pwd':pwd})}
export const getUser =(phoneNumber,pwd)=>{
    return axios.post(url+'login/',{'account':phoneNumber,'password':pwd}
)}