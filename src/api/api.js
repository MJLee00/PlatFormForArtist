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
export const insertUser=(user)=>{return axios.post(url+'userRegister/',user)};

export const insertTeacher=(teacher)=>{return axios.post(url+'teacherRegister/',teacher)}

export const getCourseIntro=(start,pagesize)=>{
    return axios.get(url+'courseIntro/',{params:{'start':start,'pagesize':pagesize}});
}
export const getCourseById=(id)=>{
    return axios.get(url+'courseIntro/id/'+id);
}
export const getCourseDetailById=(id)=>{
    return axios.get(url+'courseDetail/id/'+id)
}

export const getTesting=(start,pagesize,id)=>{
    return axios.get(url+'testing/',{params:{'start':start,'pagesize':pagesize,'id':id}});
}

export const getTestingById=(id)=>{
    return axios.get(url+'testingOption/',{params:{'id':id}})
}

export const getCourseware=(start,pagesize,id)=>{
    return axios.get(url+'courseware/',{params:{'start':start,'pagesize':pagesize,'id':id}});
}