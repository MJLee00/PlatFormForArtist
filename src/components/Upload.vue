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
import Axios from 'axios'

const SIZE=1*1024*1024; //1M

export default {
  mounted(){
    //cdn加载spark-md5
  const plugin = document.createElement("script");
      plugin.setAttribute(
        "src",
        "https://cdn.bootcdn.net/ajax/libs/spark-md5/3.0.0/spark-md5.min.js"
      );
      plugin.async = false;
      document.head.appendChild(plugin);
    
  },
      data() {
    return {
      data:[],
      fileMd5:null,
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
    //spark计算分片MD5
    caculateMD5(file,size=SIZE){

     return new Promise((resolve,reject)=>{
        let fileReader = new FileReader(),  
        blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice,  
        chunkSize = size,  
        // read in chunks of 2MB  
        chunks = Math.ceil(file.size / chunkSize),  
        currentChunk = 0,  
        spark = new SparkMD5(); 
        fileReader.onload = function(e) {  
                spark.appendBinary(e.target.result); // append binary string  
                currentChunk++;  
          
                if (currentChunk < chunks) {  
                    loadNext();  
                }  
                else {  
                    resolve(spark.end());
                }  
            };  

        fileReader.onerror=function(e){
            reject(e)
        }
        function loadNext() {  
                let start = currentChunk * chunkSize,  
                    end = start + chunkSize >= file.size ? file.size : start + chunkSize;  
          
                fileReader.readAsBinaryString(blobSlice.call(file, start, end));  
            };  
        loadNext();  
     }) 
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
        filemergechunks(this.fileMd5,upfile.name,upfile.size,"",upfile.name.split('.')[1])
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
        // 按次序输出
      for (const textPromise of requestList) {
        console.log(await textPromise);
      }
      await this.uploadChunks(upfile);
    },
    //fisrt step
    async register(data){
       const fileChunkList = this.createFileChunk(data.file);
       //等待文件md5计算完成
      await this.caculateMD5(data.file).then(md5=>{this.fileMd5=md5});
     
      this.data = fileChunkList.map(({file},index) => ({
        file:file,
        fileMd5: this.fileMd5,
        chunk:  index // 文件名 + 数组下标
      }));
      await new Promise((resolve,reject)=>{
          console.log(this.fileMd5)
          fileregister(this.fileMd5,data.file.name,data.file.size,"",data.file.name.split('.')[1])
          .then(Response=>{resolve(Response)}).catch(error=>{reject(error)})
      }) 
       await this.checkChunk(data.file);
    },
  }
}
</script>
<style scoped>


</style>
