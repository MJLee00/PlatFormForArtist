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
                "description":"作品1",
                "link":"ProductDetail",
                "title":"xiaoming"
            },
              {
                "src":require("./../../assets/1.jpg"),
                "alt":"test",
                "description":"作品2",
                "link":"ProductDetail",
                "title":"xiaoming"
            },
        ],
    })
}
</script>

<style>

</style>