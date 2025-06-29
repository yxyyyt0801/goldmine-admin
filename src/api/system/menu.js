import request from '@/utils/request'

// 查询菜单列表
export function listMenu(query) {
  return request({
    url: 'backendApi/source/list',
    method: 'get',
    params: query
  })
}

// 查询菜单详细
export function getMenu(menuId) {
  return request({
    url: 'backendApi/source/info/' + menuId,
    method: 'get'
  })
}

// 查询菜单下拉树结构
export function treeselect() {
  return request({
    url: 'backendApi/source/treeselect',
    method: 'get'
  })
}

// 根据角色ID查询菜单下拉树结构
export function roleMenuTreeselect(roleId) {
  return request({
    url: 'backendApi/source/roleMenuTreeselect/' + roleId,
    method: 'get'
  })
}

// 新增菜单
export function addMenu(data) {
  return request({
    url: 'backendApi/source/add',
    method: 'post',
    data: data
  })
}

// 修改菜单
export function updateMenu(data) {
  return request({
    url: 'backendApi/source/update',
    method: 'post',
    data: data
  })
}

// 删除菜单
export function delMenu(menuId) {
  return request({
    url: 'backendApi/source/delete/' + menuId,
    method: 'get'
  })
}
