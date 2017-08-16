<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <input type="text" v-model='message' placeholder="按回车键添加" v-on:keyup.enter='AddList'>
    <div class="box">
      <ol>
      <li v-for='item in items' v-bind:class="{ 'erline' : item.isplusminus }"><b v-on:click='toggleClass(item)'>{{ item.item }}</b> <span v-on:click="removelist(item.item)"></span></li>
    </ol>
    </div>
    
    <loading></loading>
  </div>
</template>

<script>
import Storage from '../js/localstorage'
export default {
  name: 'hello',
  data () {
    return {
      title: 'Welcome to Your VueApp',
      message: '',
      items: Storage.getStorage()
    }
  },
  methods: {
    AddList: function () {
      this.items.push({
        item: this.message,
        isplusminus: false
      })
      this.message = ''
    },
    toggleClass: function (item) {
      item.isplusminus = !item.isplusminus
    },
    removelist: function (msg) {
      Storage.removeStorage(msg)
      this.items = Storage.getStorage()
    }
  },
  watch: {
    items:{
      handler: function (val) {
        Storage.storage(val)
      },
      deep: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: #3743B1;
}
.erline {
  text-decoration: underline;
}
.box{
  margin: 0 auto;margin-top: 20px;
  padding: 0;width: 250px
}
ol {
}
li {
  text-align: left;
  line-height: 32px;
  padding-right: 15px;
}
ol li span {
  display: inline-block;float: right;
  transition: transform .5s;
  width: 32px;height: 32px;cursor: pointer;
  background: url(../assets/remove.png) no-repeat 0 0;
}
ol li span:hover {
  transform:rotate(360deg);
}
ol li b{
  padding-left: 20px;
}
input {
  border-radius: 3px;
  border:  1px solid #ddd;
  width: 200px;height: 25px;
  padding-left: 8px;line-height: 30px;
  font-size: 12px;
}
a {
  color: #42b983;
}
</style>
