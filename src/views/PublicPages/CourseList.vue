<template>
    <div>
     <CardList   :listData="dataList"></CardList>
    </div>
</template>

<script>
import CardList from "./../../components/CardList"
export default {
     components:{
        CardList,
    },
    data:()=>({
         dataList:[

            {
                "src":require("./../../assets/aviater1.jpg"),
                "alt":"test",
                "description":"课程1",
                "link":"/CourseIntro",
                "title":"xiaoming"
            },
              {
                "src":require("./../../assets/1.jpg"),
                "alt":"test",
                "description":"课程2",
                "link":"/CourseIntro",
                "title":"xiaoming"
            },
        ],
    })
}
</script>

<style>

</style>