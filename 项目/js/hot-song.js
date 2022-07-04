Vue.component("hot-song", {
    template: `
    
      <div class="hot-song">
				<div class="ban">
					<div class="pic">
						<span>更新时间 : {{time}}</span>
					</div>
				</div>

				<div class="music-list">
					<ul class="music-ul">
						<li v-for="(item,index) in musiclist" @click="$emit('play',item)">

							<div :class="{num:true,col:index<3}">
								<!-- 使用三目运算补零 要加上() -->
								{{ (index + 1) < 10 ? '0' + (index+1) : index+1}} 
							</div>
									<div class="left">
										<h5>{{item.name}}</h5>
										<!-- SQ -->
										<i v-if="item.maxbr > 320000"></i>
										<span v-for="gs in item.artists">{{gs.name}}</span>
										<span>-{{item.name}}</span>
									</div>
									<div class="right">
										<button></button>
									</div>
						</li>
					</ul>
				</div>
			</div>
    `,
    props: ["musiclist","time"],
    data() {
        return {


        }
    }
})