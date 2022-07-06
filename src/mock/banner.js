import Mock from "mockjs";

Mock.mock("/api/banner", "get", {
    code: 0,
    msg: "",
    data: [{
            id: "2",
            midImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091109%2Ffjwdgtvdjapfjwdgtvdjap.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659630253&t=bc5fff210e6f910e8d023e0908f24104",
            bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091109%2Ffjwdgtvdjapfjwdgtvdjap.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659630253&t=bc5fff210e6f910e8d023e0908f24104",
            title: "大漠沙如雪",
            description: "燕山月似钩",
        },
        {
            id: "1",
            midImg: "https://img2.baidu.com/it/u=3867960631,2923014190&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
            bigImg: "https://img2.baidu.com/it/u=3867960631,2923014190&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
            title: "风萧萧兮易水寒",
            description: "壮士一去兮不复还",
        },
        {
            id: "3",
            midImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091216%2Fnbrexyo5pofnbrexyo5pof.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659630347&t=781b67139aefe9931dbb1771c37f6c8b",
            bigImg: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg9.51tietu.net%2Fpic%2F2019-091216%2Fnbrexyo5pofnbrexyo5pof.jpg&refer=http%3A%2F%2Fimg9.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659630347&t=781b67139aefe9931dbb1771c37f6c8b",
            title: "长风破浪会有时",
            description: "直挂云帆济沧海",
        },
    ],
});