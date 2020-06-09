module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    indent: "off", //不校验缩进
    //空行最多不能超过100行
    "no-multiple-empty-lines": [0, { max: 50 }],
    "space-before-function-paren": 0, //这句话表示在函数后可以不加空格
    "no-regex-spaces": "error", //禁止正则表达式字面量中出现多个空格
    "eol-last": 0, //这句话表示在文件末尾可以不加回车
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
    "no-alert": 0, //禁止使用alert confirm prompt
    "no-constant-condition": 0, //禁止在条件中使用常量表达式 if(true) if(1)
    // 指定数组的元素之间要以空格隔开(,后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    "array-bracket-spacing": [2, "never"],
    // if while function 后面的{必须与if在同一行，java风格。
    "brace-style": [2, "1tbs", { allowSingleLine: true }],
    // 使用 === 替代 ==
    eqeqeq: [2, "allow-null"],
    // @fixable 必须使用 x = x + y 而不是 x += y
    // @off 没必要限制
    "operator-assignment": "off",
    // @fixable 对象字面量的键名禁止用引号括起来
    // @off 没必要限制
    "quote-props": "off",
    // 对象字面量的键名必须排好序
    // @off 没必要限制
    "sort-keys": "off",
    // 变量申明必须排好序
    // @off 没必要限制
    "sort-vars": "off",
    // 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
    // @off 没必要限制
    "no-nested-ternary": "off",
    // 禁止使用 ++ 或 --
    // @off 没必要限制
    "no-plusplus": "off",
    // @fixable 必须使用 !a 替代 a ? false : true
    // @off 后者表达的更清晰
    "no-unneeded-ternary": "off",
    // @fixable 对象字面量内的属性每行必须只有一个
    // @off 没必要限制
    "object-property-newline": "off",
    //对象字面量中冒号的前后空格
    "key-spacing": [0, { beforeColon: false, afterColon: true }],
    //引号类型 `` "" ''
    quotes: [0, "single"],
    semi: [2, "always"] //语句强制分号结尾
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
