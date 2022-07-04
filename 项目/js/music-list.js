Vue.component("music-list", {
    template: `
  
    <div class="music-list">
    
    <h4>最新音乐</h4>
    <ul class="music-ul">
        <li v-for="item in musiclist" @click="$emit('play',item)">
            <div class="left">
                <h5>{{item.name}}</h5>
                <!-- SQ -->
                <i v-if="item.maxbr > 320000"></i>
                
                <span v-for="gs in item.artists">{{gs.name}}</span><span>-{{item.name}}</span>
            </div>
            <div class="right">
                <button></button>
            </div>
        </li>
    </ul>
</div>   
  `,
    props: ["musiclist"],

    data() {
        return {


        }
    }
})
