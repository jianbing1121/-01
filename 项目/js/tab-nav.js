Vue.component("tab-nav", {
	template: `
    <div class="tab-nav">
            <ul class="nav-list">
			
                <li v-bind:class="{active:linum==1}" 
				v-on:click="$emit('tabgo',1)">推荐列表</li>
                <li v-bind:class="{active:linum==2}"
                v-on:click="$emit('tabgo',2)">热歌榜</li>
            </ul>
        </div>
        `,
	// 接收数据
	props: ["linum"],
	data() {
		return {

		}
	}
})
