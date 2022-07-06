import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.banbaowang.com%2Fuploads%2Fallimg%2F200605%2F32-200605142521.jpg&refer=http%3A%2F%2Fpic.banbaowang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658402955&t=42e343f75ccd042684e88df0077bdf12",
        siteTitle: "我的个人空间",
        github: "http://www.baidu.com",
        qq: "122549610",
        qqQrCode: "",
        weixin: "yh777bao",
        weixinQrCode: "",
        mail: "",
        icp: "京ICP备17001719号",
        githubName: "aiping",
        favicon: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.banbaowang.com%2Fuploads%2Fallimg%2F200605%2F32-200605142521.jpg&refer=http%3A%2F%2Fpic.banbaowang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1658402955&t=42e343f75ccd042684e88df0077bdf12",
    },
});