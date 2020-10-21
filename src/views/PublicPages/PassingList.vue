<template>
    <div>
     <CardList   :listData="dataList1"></CardList>
     <CardList   :listData="dataList2"></CardList>
    </div>
</template>

<script>
import CardList from "./../../components/CardList"
export default {
     components:{
        CardList,
    },
    data:()=>({
         dataList1:[

            {
                "src":require("./../../assets/aviater1.jpg"),
                "alt":"test",
                "description":"传承1",
                "link":"PassingList",
                "title":"xiaoming"
            },
              {
                "src":require("./../../assets/1.jpg"),
                "alt":"test",
                "description":"传承2",
                "link":"PassingList",
                "title":"xiaoming"
            },
        ],
        //传承令牌
         dataList2:[

            {
                "src":require("./../../assets/token.jpg"),
                "alt":"test",
                "description":"传承令牌1",
                "link":"",
                "title":"传承令牌1"
            },
              {
                "src":require("./../../assets/token.jpg"),
                "alt":"test",
                "description":"传承令牌2",
                "link":"",
                "title":"传承令牌2"
            },
        ],
    })
}
</script>

<style>

</style>