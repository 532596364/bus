/******************************定位资源**************************/

// npm install -g fis-parser-less-2.x
fis.match('{less/index.less,less/reset.less}', {
    rExt: '.css', // from .less to .css
    parser: fis.plugin('less-2.x', {
        // fis-parser-less-2.x option
    }),
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});
// 添加md5戳：对 js、css、png 图片引用 URL 添加 md5 戳：
fis.match('*.{css}', {
  useHash: true
});
//将css合并
fis.match('*.{less,css}', {
  packTo: 'css/aio.css'
});
fis.match('aio.css',{
  url: 'css/aio.css'
})
//打包发布
fis.match('::package', {
  postpackager: fis.plugin('loader')
});

fis.match('*.html', {
  //fis-optimizer-html-minifier 插件进行压缩
  optimizer: fis.plugin('html-minifier')
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
});
// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});


