<template>
	<div>
		<h1>App File</h1>
		<Helloworld></Helloworld>
	</div>
</template>

<script>
	import Helloworld from './Helloworld.vue'
	export default {
		name:'App',
		components:{
			Helloworld
		},
		data(){
			return{

			}
		}
	}
</script>