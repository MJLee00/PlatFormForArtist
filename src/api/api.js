// appfront/src/api/api.js
import axiosInstance from './index'

const axios = axiosInstance
const url='http://10.28.221.165:8888/'
export const postUser =(phoneNumber,pwd)=>{return axios.post(url+'user/',{'account':phoneNumber,'pwd':pwd})}
export const getUser =(phoneNumber,pwd)=>{
    return axios.post(url+'login/',{'account':phoneNumber,'password':pwd}
)}
export const insertUser=(user)=>{return axios.post(url+'userRegister/',user)};

export const insertTeacher=(teacher)=>{return axios.post(url+'teacherRegister/',teacher)}

export const getCourseIntro=(start,pagesize)=>{
    return axios.get(url+'courseIntro/',{params:{'start':start,'pagesize':pagesize}});
}
export const getRecruits=(start,pagesize)=>{
    return axios.get(url+'recruit/getall',{params:{'start':start,'pagesize':pagesize}});
}
export const getTeachers=(start,pagesize)=>{
    return axios.get(url+'teacher/getallteacher',{params:{'start':start,'pagesize':pagesize}});
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

export const getCoursewareByid=(id)=>{
    return axios.get(url+'courseware/'+id);
}

export const getCourseByTeacherid=(id,start,pagesize)=>{
    return axios.get(url+'courseIntro/getByTeacher',{params:{'id':id,'start':start,'pagesize':pagesize}});
}

export const getWorksByTeacherid=(id,start,pagesize)=>{
    return axios.get(url+'works/',{params:{'id':id,'start':start,'pagesize':pagesize}});
}

export const getRecruitsByTeacherid=(id,start,pagesize)=>{
    return axios.get(url+'recruit/',{params:{'id':id,'start':start,'pagesize':pagesize}});
}

export const getInheritsTokenByTeacherid=(id,start,pagesize)=>{
    return axios.get(url+'intoken/getall',{params:{'id':id,'start':start,'pagesize':pagesize}});
}

export const getStudentsByTeacherid=(id,start,pagesize)=>{
    return axios.get(url+'getStudentsByTeacher/',{params:{'id':id,'start':start,'pagesize':pagesize}});
}

export const getTeachersByStuid=(id,start,pagesize)=>{
    return axios.get(url+'getTeachersByStudentid/',{params:{'id':id,'start':start,'pagesize':pagesize}});
}
export const postApplyTeacher=(record)=>{
    return axios.post(url+'applyteacher/',{applyteacher:record});
}

export const getApplyteacher=(id)=>{
    return axios.get(url+'applyteacher/',{params:{'id':id}})
}

export const getMessage=(receivedid)=>{
    return axios.get(url+'message/getByrecid/'+receivedid);
}