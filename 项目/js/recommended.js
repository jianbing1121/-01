Vue.component("recommended",{
    template:`
    <div class="recommended">
            <h4>编辑推荐</h4>
            <ul class="rlist">
                <li v-for="item in datas">
                    <img :src="item.picUrl">
                    <h6>{{item.name}}</h6>
                    <p class="count"><img src="../image/rj-icon.svg"><span>{{item.playCount}}万</span></p>
                    
                    
                </li>

            </ul>
        </div>
    `,
    data(){
        return{ 
            data:[
                {
                    "id": 5294509931,
                    "name": "对我说过的话也会对别人说吗.",
                    "picUrl": "../image/imgs/1.jpg",
                    "playCount": 134,
                },
                {
                    "id": 875935159,
                    "name": "“释怀吧，不要再执着于没有结果的事了”",
                    "picUrl": "../image/imgs/2.jpg",
                    "playCount": 106,
                },
                {
                    "id": 3090014660,
                    "name": "沈 永远活在自卑和负罪感中",
                    "picUrl": "../image/imgs/3.jpg",
                    "playCount": 114,
                },
                {
                    "id": 7066459351,
                    "name": "你是在听歌，还是在听自己支离破碎的情绪",
                    "picUrl": "../image/imgs/4.jpg",
                    "playCount": 69,
                },
                {
                    "id": 2454610042,
                    "name": "DJ才夏Remix （青海摇 异域风情 等等...）",
                    "picUrl": "../image/imgs/5.jpg",
                    "playCount": 60,
                },
                {
                    "id": 7451151384,
                    "name": "甜心教主??? | 甜妹的尽头是王心凌！",
                    "picUrl": "../image/imgs/6.jpg",
                    "playCount": 202,
                },
                {
                    "id": 2065854146,
                    "name": "古典清香 I 我的茶馆里住着巴赫与肖邦",
                    "picUrl": "../image/imgs/7.jpg",
                    "playCount": 214,
                },
                {
                    "id": 6948263379,
                    "name": "还是会想你，特别是晚上",
                    "picUrl": "../image/imgs/8.jpg",
                    "playCount": 20,
                },
                {
                    "id": 2420291699,
                    "name": "『硬曲』圣罗兰之花永不凋零",
                    "picUrl": "../image/imgs/9.jpg",
                    "playCount": 67,
                },
                {
                    "id": 5445314132,
                    "name": "我对月亮许愿，你要永远快乐",
                    "picUrl": "../image/imgs/10.jpg",
                    "playCount": 263,
                }
            ],
}
      
    },
    computed:{
        datas(){
            return this.data.slice(0,6);
            
        }
    }
})