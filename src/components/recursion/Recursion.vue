<!-- @format -->

<template>
  <div class="comp recursion-comp"></div>
</template>

<script>
export default {
  name: "recursion",
  data: function() {
    return {
      generateConfig: {
        x: 3, // 每个节点的子节点数
        y: 2, // 前y个节点有子节点
        z: 2 // 这个树结构的嵌套层级数
      }, // 树结构数据的创建配置
      treeData: [] // 树结构数据
    };
  },

  mounted() {
    this.init();
  },

  methods: {
    /**
     * 初始化
     */
    init() {
      this.generateData();
      console.log(this.treeData); // 输出结果
    },

    /**
     * 创建树结构数据
     */
    generateData(currentLevel, parentKey, children) {
      const { x, y, z } = this.generateConfig;
      const level = currentLevel !== undefined ? currentLevel : z; // 当前树分支的构建层级，为0时表示已经走到叶节点
      const preKey = parentKey || "0"; // 当前层级的节点的父节点的key
      const treeNodes = children || this.treeData; // 当前层级的树结构的数据

      const childKeys = [];
      for (let i = 0; i < x; i++) {
        const key = `${preKey}-${i}`;
        treeNodes.push({ key, title: key }); // 创建节点信息，并push到当前层级的树结构中

        if (i < y) {
          // i < y 时，才给该节点创建子节点
          childKeys.push(key);
        }
      }

      if (level === 0) {
        // 当前树分支已经走到叶子节点，可以终止当前树分支的创建
        return;
      }

      childKeys.forEach((childKey, index) => {
        treeNodes[index].children = [];
        return this.generateData(
          level - 1,
          childKey,
          treeNodes[index].children
        ); // 继续创建子节点
      });
    },

    /**
     * 循环数组(类似数组的forEach函数，支持递归循环)
     * @param arr 循环的数组
     * @param callback 循环回调 这里只是定义
     * @param parent 上一级,父级的值
     * @param parentIndexes 上一级索引路径
     * @param deep 是否递归
     * @param deepKey 递归的key
     */
    forEach(
      arr = [],
      callback,
      {
        parent = {},
        parentIndexes = [],
        deep = true,
        deepKey = "children"
      } = {}
    ) {
      for (const [index, item] of arr.entries()) {
        const indexes = [].concat(parentIndexes);
        callback instanceof Function && callback(item, index, parent, indexes);

        if (
          deep &&
          item[deepKey] instanceof Array &&
          item[deepKey].length > 0
        ) {
          indexes.push(index);
          this.forEach(item[deepKey], callback, {
            parent: item,
            parentIndexes: indexes,
            deep,
            deepKey
          });
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
