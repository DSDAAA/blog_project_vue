<template>
  <div>
    <header id="header-menu" class="sticky top-0 z-10 flex h-14 bg-white py-3 menu-sticky" x-data="{ open : false }">
      <div class="container mx-auto flex h-full justify-between">
        <div class="flex h-full items-center gap-6">
          <div class="mr-2 h-full">
            <a href="http://127.0.0.1:5173/" class="inline-flex h-full items-center">
              <img src="../assets/atguigu.jpg" alt="Logo" class="h-full w-auto">
            </a>
          </div>

          <ul class="hidden items-center gap-8 sm:flex">
            <li class="relative text-sm" x-data="dropdown">
              <a class="text-gray-600" href="http://127.0.0.1:5173/">首页</a>
            </li>
          </ul>
        </div>

        <div class="flex items-center">
          <a href="http://127.0.0.1:5173/#/login" title="发布博文" class="inline-flex h-full items-center">
            <img src="../assets/publish.jpg" alt="Logo" class="h-full w-auto">
            发布文章
          </a>
        </div>
      </div>
    </header>

    <section class="container mx-auto mt-6 grid grid-cols-4 gap-6">
      <div class="col-span-4 sm:col-span-3">

        <div x-data="postUpvote" class="rounded-xl bg-white p-4 dark:bg-slate-800">
          <div class="flex items-center justify-between">
            <div class="inline-flex items-center justify-start gap-2">
              <div class="flex flex-col gap-0.5">
                <a href="https://www.javadog.net/authors/hdxjhkhjc2012" title="Java程序员"
                   class="text-sm font-semibold text-gray-900 hover:text-gray-600 dark:text-slate-100 dark:hover:text-slate-200">Java程序员</a>
                <div class="flex items-center gap-2 text-xs font-light text-gray-600 dark:text-slate-100">
                  <span>发布于 {{ articleInfo.createTime }}</span>
                </div>
              </div>
            </div>

          </div>
          <h1 class="my-3 text-2xl font-medium dark:text-slate-50">{{ articleInfo.title }}</h1>

          <article id="content" class="prose prose-base mt-4 !max-w-none prose-pre:p-0 dark:prose-invert break-words">
            <h2 id="前言">前言</h2>

            <h4 id="毕业季，毕业设计分手季">毕业季，毕业设计分手季</h4>
            <h2 v-html="articleInfo.content"></h2>
          </article>
        </div>

      </div>

      <aside class="col-span-1 flex-col gap-6 sm:flex">
        <div class="bg-white p-3 shadow transition-all">
          <div class="flex flex-col items-center ">
            <div class="relative h-24 w-24">
              <img src="../assets/01.jpg" alt="Java程序员" class="h-full w-full rounded-full">
            </div>
            <div><h1 class="text-2xl">Java程序员</h1></div>

            <div class="grid grid-cols-4 gap-5">
              <div class="inline-flex flex-col items-center">
                <span class="text-xl">33</span>
                <span class="text-xs">文章数</span>
              </div>
              <div class="inline-flex flex-col items-center">
                <span class="text-xl">26</span>
                <span class="text-xs">分类数</span>
              </div>

              <div class="inline-flex flex-col items-center">
                <span class="text-xl">23403</span>
                <span class="text-xs">访问量</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white p-3 shadow">
          <h2>
            <span class="text-lg"></span>
            热门文章
          </h2>
          <div>
            <ul role="list">
              <li class="py-3">
                <div class="flex items-center">
                  <div class="flex flex-col gap-1">
                    <h3>
                      <a href="#" title="【MyBatis】MyBatis 和 Hibernate">【MyBatis】MyBatis 和 Hibernate</a>
                    </h3>
                    <p>2023-06-26 发布</p>
                  </div>
                </div>
              </li>
              <li class="py-3">
                <div class="flex items-center">
                  <div class="flex flex-col gap-1">
                    <h3>
                      <a href="#" title="【对比】Native ui 和 Element Plus">【【对比】Native ui 和 Element Plus</a>
                    </h3>
                    <p>2023-06-13 发布</p>
                  </div>
                </div>
              </li>
              <li class="py-3">
                <div class="flex items-center">
                  <div class="flex flex-col gap-1">
                    <h3>
                      <a href="#" title="【毕业季】毕业设计指南">【毕业季】毕业设计指南</a>
                    </h3>
                    <p>2023-05-23 发布</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </section>
  </div>
</template>
<script setup>
import {ref, onMounted} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {getArticle} from '../api/article';

const router = useRouter()
const route = useRoute()

// 文章详情
const props = {
  id: '',
  title: '',
  content: ''
};
const articleInfo = ref(props)

onMounted(() => {
  loadArticle()
})

/**
 * 读取文章详情
 */
const loadArticle = async () => {
  let id = route.query.id
  const {data} = await getArticle(id)
  articleInfo.value = data
}
</script>
