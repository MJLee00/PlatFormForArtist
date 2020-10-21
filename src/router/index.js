import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:()=>import(/* webpackChunkName: "Home"*/"../views/Home.vue" ),
      meta:{
        title:'首页'
      }
    },
    
    {
      path:'/AdminHomePage',
      name:'AdminHomePage',
      component:()=>import(/* webpackChunkName: "AdminHomePage"*/"../views/AdminPages/HomePage.vue" ),
      meta:{
        title:'管理员主页'
      }
    },
    {
      path:'/Courses',
      name:'Courses',
      component:()=>import(/* webpackChunkName: "Courses"*/"../views/Courses.vue" ),
      meta:{
        title:'课程'
      }
    },
    {
      path:'/Teachers',
      name:'Teachers',
      component:()=>import(/* webpackChunkName: "Teachers"*/"../views/Teachers/Teachers.vue" ),
      meta:{
        title:'教师'
      }
    },
    {
      path:'/Recruits',
      name:'Recruits',
      component:()=>import(/* webpackChunkName: "Recruits"*/"../views/Teachers/Recruits.vue" ),
      meta:{
        title:'招募'
      }
    },
    {
      path:'/Login',
      name:'Login',
      component:()=>import(/* webpackChunkName: "Login"*/"../views/Login.vue" ),
      meta:{
        title:'登陆'
      }
    },
    
    {
      path:'/Register',
      name:'Register',
      component:()=>import(/* webpackChunkName: "Register"*/"../views/Register.vue" ),
      meta:{
        title:'注册'
      }
    },
    
    {
      path:'/TeacherRegister',
      name:'TeacherRegister',
      component:()=>import(/* webpackChunkName: "TeacherRegister"*/"../views/Teachers/TeacherRegister.vue" ),
      meta:{
        title:'老师入驻'
      },
      
    },
    {
      path:'/ChangePwd',
      name:'ChangePwd',
      component:()=>import(/* webpackChunkName: "ChangePwd"*/"../views/ChangePassword.vue" ),
      meta:{
        title:'忘记密码'
      },
    
    },
    {
      path:'/CourseIntro',
      name:'CourseIntro',
      component:()=>import(/* webpackChunkName: "CourseIntro"*/"../views/CourseIntro.vue" ),
      meta:{
        title:'课程简介'
      }
    }
    ,
    {
      path:'/RecruitsDetail',
      name:'RecruitsDetail',
      component:()=>import(/* webpackChunkName: "RecruitsDetail"*/"../views/RecruitsDetail.vue" ),
      meta:{
        title:'招募详情'
      }
    },
    {
      path:'/Setting',
      name:'Setting',
      component:()=>import(/* webpackChunkName: "Settings"*/"../views/Settings.vue" ),
      meta:{
        title:'设置'
      }
    }
    ,
    {
      path:'/CoursesDetail',
      name:'CoursesDetail',
      component:()=>import(/* webpackChunkName: "CoursesDetail"*/"../views/CoursesDetail.vue" ),
      meta:{
        title:'课程详情'
      },

    },
    {
      path:'/TeacherHomePage',
      name:'TeacherHomePage',
      component:()=>import(/* webpackChunkName: "TeacherHomePage"*/"../views/Teachers/HomePage.vue" ),
      meta:{
        title:'个人主页'
      },
      children:[
        {
          path:'ProductDetail',
          name:'ProductDetail',
          component:()=>import(/* webpackChunkName: "ProductDetail"*/"../views/PublicPages/ProductDetail.vue" ),
          meta:{
            title:'个人作品'
          },
          
        },
        {
          path:'ProductInsert',
          name:'ProductInsert',
          component:()=>import(/* webpackChunkName: "ProductInsert"*/"../views/PublicPages/ProductInsert.vue" ),
          meta:{
            title:'添加个人作品'
          },
          
        }
        , {
          path:'ProductList',
          name:'ProductList',
          component:()=>import(/* webpackChunkName: "ProductList"*/"../views/PublicPages/ProductList.vue" ),
          meta:{
            title:'个人作品列表'
          },
          
        }
        , {
          path:'CourseList',
          name:'CourseList',
          component:()=>import(/* webpackChunkName: "CourseList"*/"../views/PublicPages/CourseList.vue" ),
          meta:{
            title:'个人课程列表'
          },
          
        }
        , {
          path:'RecruitsList',
          name:'RecruitsList',
          component:()=>import(/* webpackChunkName: "RecruitsList"*/"../views/PublicPages/RecruitsList.vue" ),
          meta:{
            title:'个人招募列表'
          },
          
        }
        , {
          path:'PassingList',
          name:'PassingList',
          component:()=>import(/* webpackChunkName: "PassingList"*/"../views/PublicPages/PassingList.vue" ),
          meta:{
            title:'个人传承列表'
          },
          
        }
        , {
          path:'Messaging',
          name:'Messaging',
          component:()=>import(/* webpackChunkName: "Messaging"*/"../views/PublicPages/Messaging.vue" ),
          meta:{
            title:'个人消息'
          },
          children:[
                {
              path:'ApplyTeacher',
              name:'ApplyTeacher',
              component:()=>import(/* webpackChunkName: "ApplyTeacher"*/"../views/PublicPages/Messaging/ApplyTeacher.vue" ),
              meta:{
                title:'申请拜师消息'
              },
            },
            {
              path:'CommentMes',
              name:'CommentMes',
              component:()=>import(/* webpackChunkName: "CommentMes"*/"../views/PublicPages/Messaging/CommentMes.vue" ),
              meta:{
                title:'评论消息'
              },
            },
            {
              path:'ApplyTockenMes',
              name:'ApplyTockenMes',
              component:()=>import(/* webpackChunkName: "ApplyTockenMes"*/"../views/PublicPages/Messaging/ApplyTockenMes.vue" ),
              meta:{
                title:'申请令牌消息'
              },
            }
          ]
        }
        , {
          path:'CourseInsert',
          name:'CourseInsert',
          component:()=>import(/* webpackChunkName: "CourseInsert"*/"../views/PublicPages/CourseInsert.vue" ),
          meta:{
            title:'添加课程'
          },
          
        }
        , {
          path:'RecruitsInsert',
          name:'RecruitsInsert',
          component:()=>import(/* webpackChunkName: "RecruitsInsert"*/"../views/PublicPages/RecruitsInsert.vue" ),
          meta:{
            title:'添加招募'
          },
          
        } , {
          path:'PassingInsert',
          name:'PassingInsert',
          component:()=>import(/* webpackChunkName: "PassingInsert"*/"../views/PublicPages/PassingInsert.vue" ),
          meta:{
            title:'添加传承令牌'
          },
          
        }
      ]
    },
    {
      path:'/ApplyTeacher',
      name:'ApplyTeacher',
      component:()=>import(/* webpackChunkName: "ApplyTeacher"*/"../views/Students/ApplyTeacher.vue" ),
      meta:{
        title:'申请拜师'
      },
    }
    ,
    {
      path:'/StuHomePage',
      name:'StuHomePage',
      component:()=>import(/* webpackChunkName: "StuHomePage"*/"../views/Students/StuHomePage.vue" ),
      meta:{
        title:'个人主页'
      },
      children:[
        {
          path:'ProductDetail',
          name:'ProductDetail',
          component:()=>import(/* webpackChunkName: "ProductDetail"*/"../views/PublicPages/ProductDetail.vue" ),
          meta:{
            title:'个人作品'
          },
          
        },
        {
          path:'ProductInsert',
          name:'ProductInsert',
          component:()=>import(/* webpackChunkName: "ProductInsert"*/"../views/PublicPages/ProductInsert.vue" ),
          meta:{
            title:'添加个人作品'
          },
          
        }
        , {
          path:'ProductList',
          name:'ProductList',
          component:()=>import(/* webpackChunkName: "ProductList"*/"../views/PublicPages/ProductList.vue" ),
          meta:{
            title:'个人作品列表'
          },
          
        }
        , {
          path:'CourseList',
          name:'CourseList',
          component:()=>import(/* webpackChunkName: "CourseList"*/"../views/PublicPages/CourseList.vue" ),
          meta:{
            title:'个人课程列表'
          },
          
        }
      
        , {
          path:'PassingList',
          name:'PassingList',
          component:()=>import(/* webpackChunkName: "PassingList"*/"../views/PublicPages/PassingList.vue" ),
          meta:{
            title:'个人传承列表'
          },
          
        }
        , {
          path:'Messaging',
          name:'MessagingStu',
          component:()=>import(/* webpackChunkName: "Messaging"*/"../views/PublicPages/Messaging.vue" ),
          meta:{
            title:'个人消息'
          },
          children:[
                {
              path:'ApplyTeacher',
              name:'ApplyTeacher',
              component:()=>import(/* webpackChunkName: "ApplyTeacher"*/"../views/PublicPages/Messaging/ApplyTeacher.vue" ),
              meta:{
                title:'申请拜师消息'
              },
            },
            {
              path:'CommentMes',
              name:'CommentMes',
              component:()=>import(/* webpackChunkName: "CommentMes"*/"../views/PublicPages/Messaging/CommentMes.vue" ),
              meta:{
                title:'评论消息'
              },
            },
            {
              path:'ApplyTockenMes',
              name:'ApplyTockenMes',
              component:()=>import(/* webpackChunkName: "ApplyTockenMes"*/"../views/PublicPages/Messaging/ApplyTockenMes.vue" ),
              meta:{
                title:'申请令牌消息'
              },
            }
          ]
        }
      ]
    }
  ]
})
