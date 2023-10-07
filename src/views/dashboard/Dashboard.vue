<template>
    <div class="main-panel">
        <div class="menus">
            当前用户：
            <el-button type="primary">
                {{name}}
            </el-button>
            
            <div v-for="(menu, index) in menus" @click="toPage(menu)">
                {{ menu.name }}
            </div>
            
        </div>
        <div style="padding:20px;width:80%">
            <router-view></router-view>
        </div>
    </div>
    <div class="title">后台管理系统</div>
</template>

<script setup>
import { ref, reactive, inject, onMounted, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import cookie from 'js-cookie'

const router = useRouter()
const route = useRoute()

// 分类列表
const props = [
    { name: "文章管理", href: "/dashboard/article" },
    { name: "分类管理", href: "/dashboard/category" },
    { name: "用户中心", href: "/dashboard/user" },
    { name: "退出", href: "logout" },
]
const menus = ref(props)

const name = ref(null)

onMounted(() => {
    getName()
})

const getName = ()=>{
    name.value = cookie.get('name')
    // if(!name.value) {
    //     router.push("/login")
    // }
}

const toPage = (menu) => {
    if (menu.href == 'logout') {
        router.push("/login")
    } else {
        let paths = menu.href;
        router.push(paths)
    }
}
</script>

<style lang="scss" scoped>
.main-panel {
    display: flex;
    color: #64676a;
    max-width: 100%;
}

.menus {
    line-height: 55px;
    text-align: center;
    width: 20%;
    height: 100%vh;
    border-right: 2px solid #dadada;
    cursor: pointer;
}

.title {
    font-size: 65px;
    font-weight: bold;
    text-align: right;
    position: fixed;
    color: rgba(0, 0, 0, 20%);
    right: calc((100vw - 1500px) / 2);
    bottom: 20px;
}
</style>