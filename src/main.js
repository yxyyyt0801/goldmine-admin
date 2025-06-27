import Vue from 'vue'
import App from './App.vue'

import Cookies from 'js-cookie'
import Element from 'element-ui'
import '@/assets/styles/element-variables.scss'
import VueMeta from 'vue-meta'  // 头部标签组件
import Print from 'vue-print-nb'  // 打印插件

import '@/assets/styles/index.scss' // global css
import '@/assets/styles/goldmine.scss' // goldmine.css
import '@/assets/icons'

import store from './store'
import router from './router'
import directive from './directive'
import plugins from './plugins'
import { download } from '@/utils/request'
import './permission'
import { getConfigKey } from "@/api/system/config";
import { parseTime, resetForm, addDateRange, getName, handleTree } from "@/utils/goldmine";

import Pagination from "@/components/Pagination"; // 分页组件
import RightToolbar from "@/components/RightToolbar"  // 自定义表格工具组件
import Editor from "@/components/Editor"  // 富文本组件
import FileUpload from "@/components/FileUpload"  // 文件上传组件
import ImageUpload from "@/components/ImageUpload"  // 图片上传组件
import ImagePreview from "@/components/ImagePreview"  // 图片预览组件
import DictTag from '@/components/DictTag'  // 字典标签组件
import DictData from '@/components/DictData'  // 字典数据组件
import TreeSelect from '@/components/TreeSelect'  // 树形选择组件
import UserSelect from '@/components/UserSelect'  // 会员选择组件

// 全局方法挂载
Vue.prototype.getConfigKey = getConfigKey
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.getName = getName
Vue.prototype.download = download
Vue.prototype.handleTree = handleTree

// 全局组件挂载
Vue.component('DictTag', DictTag)
Vue.component('Pagination', Pagination)
Vue.component('RightToolbar', RightToolbar)
Vue.component('Editor', Editor)
Vue.component('FileUpload', FileUpload)
Vue.component('ImageUpload', ImageUpload)
Vue.component('ImagePreview', ImagePreview)
Vue.component('TreeSelect', TreeSelect)
Vue.component('UserSelect', UserSelect)

// 全局插件挂载
Vue.use(directive)
Vue.use(plugins)
Vue.use(VueMeta)
Vue.use(Print);
DictData.install()
Vue.use(Element, {
  size: Cookies.get('size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
