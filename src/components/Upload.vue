<template>
<div>
   <a-upload
            :multiple="true"
            :customRequest="customRequest"
            :file-list="fileList"
            @change="handleChange"
        >
    <a-button> <a-icon type="upload" /> 上传视频 </a-button>
</a-upload>
</div>
</template>
<script>
import {fileregister,filecheckchunk,filemergechunks} from '../api/api'
import md5 from 'js-md5'
import Axios from 'axios'
const SIZE=1*1024*1024; //1M

export default {
      data() {
    return {
      data:[],
      fileList:null
    };
  },
     beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'uploadAccessory' });
  },
  methods: {
    customRequest(data){
      this.register(data);

    },
     handleChange(info) {
        let fileList = [...info.fileList];
        this.fileList=fileList
     },

    // 生成文件切片
    createFileChunk(file, size = SIZE) {
     const fileChunkList = [];
      let cur = 0;
      while (cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + size) });
        cur += size;
      }
      return fileChunkList;
    },
    //step4合并切片
    async mergeChunks(upfile){
      
      await new Promise((resolve,reject)=>{ 
        filemergechunks(md5(upfile.name),upfile.name,upfile.size,"",upfile.name.split('.')[1])
            .then(Response=>{
                  console.log(this.fileList)
                  //修改上传后的状态
                  this.fileList[0].status='done'
                  resolve(Response);
                }).catch((error)=>{reject(error)})
       })
    },
  // step3上传切片
   async uploadChunks(upfile) {
      const requestList = this.data
        .map(({ file,fileMd5,chunk }) => {

           const formData = new FormData();
            formData.append("file", file);
            formData.append("fileMd5", fileMd5);
            formData.append("chunk", chunk);
            return { formData };
          }).map(async ({formData})=>{
            await 
              Axios.post('http://www.atspssing.com/media/upload/uploadchunk/',formData,{ headers: {
                   'Content-Type': 'multipart/form-data',
               }})
        });
       // 按次序输出
      for (const textPromise of requestList) {
        console.log(await textPromise);
      }
        await this.mergeChunks(upfile);
    },
    //step2检查切片
    async checkChunk(upfile){
      if (!upfile) return;
      const requestList = this.data
        .map(async ({ fileMd5,chunk }) => {
          //异步并发
          await filecheckchunk(fileMd5,chunk)
      });
      console.log(this.data)
        // 按次序输出
      for (const textPromise of requestList) {
        console.log(await textPromise);
      }
      await this.uploadChunks(upfile);
    },
    //fisrt step
    async register(data){
       const fileChunkList = this.createFileChunk(data.file);
      const fileMd5= md5(data.file.name);
      this.data = fileChunkList.map(({file},index) => ({
        file:file,
        fileMd5: fileMd5,
        chunk:  index // 文件名 + 数组下标
      }));
      await new Promise((resolve,reject)=>{
          fileregister(fileMd5,data.file.name,data.file.size,"",data.file.name.split('.')[1])
          .then(Response=>{resolve(Response)}).catch(error=>{reject(error)})
      }) 
       await this.checkChunk(data.file);
    },
  }
}
</script>
<style scoped>


</style>
