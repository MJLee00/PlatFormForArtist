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
                "description":"招募1",
                "link":"/RecruitsDetail",
                "title":"xiaoming"
            },
              {
                "src":require("./../../assets/1.jpg"),
                "alt":"test",
                "description":"招募2",
                "link":"/RecruitsDetail",
                "title":"xiaoming"
            },
        ],
    })
}
</script>

<style>

</style>