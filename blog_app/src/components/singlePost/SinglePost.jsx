import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAACsCAMAAADlsyHfAAAA0lBMVEXkQF/z9PTm5uZmZmaAgICzs7PMzMzkN1nlPl7lkJ3m7OvdVm2wuLfz9/f0+vnkM1bvzdLz7/DqlqTls7rkRGPK0tHhXHLr6+vpOVyccHddaGbjLVJhYWH86u398PJcXFzVRmD1wcn////hF0bpZn14eHjtiJnU1NTpb4T3zdTg4OCOjo7iJE29vb1qamqWlpanp6fmUWz63OHwoK2fn5/xqrXre47shZb0t8H64OSSkpLxp7P1vcbDw8PpbYK9lZtQUFBqdHJ7iIdSamfQNlPfADWJ39q5AAAMyUlEQVR4nO2dDX+qOBaHFcWk2/Wm47IyOwFcLIigqKCitLazb/P9v9ImIArIq+0dUfj/7u2bUMLDOScnJ6lptRo1atSoUaNGjRo1ehhBeOsWVF/QchpKeYKKjG7dhsqrgVRADaQCaiAVUAMpUEb/lQ2pRh0f/ATpr2VBggr3M9pTSSF5kEopCxLkxJ/ToCoKtsTUvDoLEtZ36Sb4cAKDfRqJDEhQcfHPalEVhcVhiillQEJu2kmPKTi1U4wiHRJ4kmtlSDS8OCnhxZqmmAsQuVoZEh3si2lmkUIC7de1yzLL3jOhWjtGpb0n3T8fWWByEaEhEQCAfoofDR17/ic1rFJCtnVmAQHCiBtOp7vdzpkqVgsjEEaFXurV/Z8V3DZAYDiQbUm0dV2WZV23XUnU9w6H0IlM3Xq2qACGE11y9xMFYox8YYw5Z62L4n6KUa3peALI0SXZAYh4V+QFEp0Q4ga2JH/iGkbskAAciLYDU40FAswNXHcC6osJ4LUkWzl2QjgpurSuqTVB7Eg6VyTiQGzJ0gTXMDYB7sVVit44xEPbfX7UjDsVAnbG6zK2AfFu/J56wl0bGdwlh1yIZNEqaRgA6K6V/NuwY5VvW2UEtqKT8Pgh5x5A6acP8WTsJJBFlh7O3e9P3g3EgzOwpMFV5TPwLK3jIziA9okP4p4E8ad4aEW8BCiJBlHotwE3Wp2E+Okh0gOIBuIgZExAkZSr7woiPUSJPAH3wD1GpwdaB3EaeMSXGFEuuhx4HGrpxbOIygsiy9b9Ugd4Hg+/5h34ZEukV5g/CiIqkuZ49X3ISdOvRhBk+4Vfbg3vPxhF5Xf5SJx8OYRAIPmV3EdDdBTW998wdQat8V3nRdlCA/tbuiIwcR+jS0sQsYBvKsJifXs/lOjcRnFhkhr7X7VKnRdScOJcGqJyJ96OkfNURgfxaeCrtRtcJ3A88Ul2S1366XaU0N/+Ukbj9o+juJcfV6mNgxP7436pa99uqQWBxBRXu98OxL2cvy6jX/D5xHGJSzN3A2l8vtlvgcTfIyTNyGxn+Ga/A1IpU6oKJJ7VMtsZMqRvgpRjSkZPY4JDKgPJ9CCltbwdxvItkNr9HEjqqLMxKgPJ7PGBJaXaU9iQvgnSOBsSYyw6wsKoCiRmplET4sk/c5VsSvzPgNTOhsSzQkdQ+apAYmaMsZrNTEbbpLhbxNu+CVKuKWmjTmdk8lWBxGiLkSCMuqkhKWJIfxYkg0ASZtWBpAodotEyBRL/cyDl9G89AqmjMlWAxBN5zaGU6DcJTY96Wwakfr/v/S8EqZ8dlPgleXJCtwqWZLwtl9pHAIkxl8tNAqSo0iD1DXOznC03ppH8egxStr/xH9S6hWUVIBWypKi3pUDqa2+q2qVS1ZmWdERxSKQVrB8BvJTk5pA8+TFJSItJhSCtfEK+1FURSKlBaTlb+Iw21UkBeE0gGqkpvRtfBNIyzIhQevsKJNrbkod2ZFQJSPyKMTbdGctoZmKzC0Dqs1FG1JYuDiKQfozp7xr7sT0rcpsztbvUjs2pACR+Rdj4GffmI4lSAUhGnBGhZFxAQr9v/NfeVh8G6QYzIEWiYwUgmex57LZMGrvlQ+pvLhh1u5v4Ub/8+o8zQpVY7jgdUkQVgORFomMVIPmp5kLiLw2JiM+ARDktmWT3riQkD0RGPSkfkpYESe1lQ+q+Gf/qakUwVQVSVmUyF1LfTITExg67hERGjGwuJZ6vDKSsVuZCWiV520VQikPaeOP8t5yLG+zbv399BEjLREhvRSCR4VnWpXuz0Uj47YEhLXMgsf5wKJ0Sb8xoUtm5B0i5w5LrIKmmPz47DvUTGJmCf8BjQEpKk/IhaUvhOLBOHDTym+O4u2KQ+F5ilxy72aKBOz4wiUNiukcInVFCpn9mVC1IfG80SsoE8opulyM3D0JOCqC2OyctshhVCxKzSI4PueXbXiKkj9hRMUhL5oxBiE9B8Ob5xUpB8gqmo6TsLg9Swvg2YYQbhaSapnDmIMQs2Oh0KgmJ96u4QsL4JHciIDEmxQ+KQWK6YUjRGT/+TagmpOPDO04IhlucO+/WZwuEpLi7tUMOFY9KWphRhSDxs6BDjk/jmkbuDG5SPSk+fxCDxPYikCIdHL+sJqRQpBxF8gB+OermQhpfZEqXhhSFpJ4eytGAI7lShF91IIUNPGz6NFKNVu28pTd8HNLs8pgIpCUfBdFZ8JFrVhESH4mioadqLDzbyoPUj2cBF8XbWGVSWwlRSKEMjd8IVYTEr1IChO8Ugpq7iCs6NElwtpgltTsxjXrJT6w6kJhYs44Lg06RarTKXTMZid1qvHQbg6T2zJi3HReQ+FpEX6oIJJONUgpmvIzgp6PQ1HUypPEsBGmZcEDEkvpxQwpnSkbMEysBie+xLBvubISZX/I+270wO5tSCqSwv8ULADFIqhY3JOE0E8n4i24qB8lgqVZdgdZvyAd1Rb41opEqFLuTIUVmTNSkxQBnSG+RRFIQFt23zYo1P3qawVcVEhtoSV1mufK+NumSk7N1hWJ3Yu9mhL2NKD5VEoakhrsvodNdsWeZGsNX0N34DzZRPd4M++DoI6CUAInZXExzz7Q0SCobMhXi2XFpFQzcWjIjXyFKQpolMVqv11t1I+7WXZGfEedJtKTxCYKwWCVc9KN6KUAWIxKpVL/QTEIVO76ExBuUkCdzNfPwkGx7ZQY/7IU4HSGpzCmPFLopV+1Wa+yW5mwhTDN1sVC7S5Y9DuHOkPgTIU9a74OqF/spE4GkmidnS2UUo3RzSJnOFlcUUgxRhvgQpFk/cDZBzbiUKlQHklGGEevH7iMkviiigJIHSW2fyiCLzGstqgPJLAWJNcZnSCUY9XoBJLV3KiMJm8xLhbKEG0Mq5WxUtEbpQzJKQTKOkDbnNDI9IPk6h6XbQirnbFTmOIBUOCB50nxIavuUUwhJnX9Yq2pA4ks6G1Vv/BVIvXM5Tc29VLcSkHrlGbEsM25dCwn93j8xyolIVKeodFNIf71KP4beH2Ubfy8l+jfcQPrPbycVuFJw6H9vBwlaz1dpJ1oK0bCcyBnP+8P//nlSgSudjr3he5vA64T3h/k15wFFAlde8naMrha67l2UrjztTgWJSZQ/C23rtScHcbjS9wuH15C9ZwExbXuSVGG3TjspUYFp6r4laWcMXmrlbFTYnpSyCwge+T3KUgSHYilI6HBHb771bcJ2mV2BoSXVkFEL7PQStw3eU3eEe2jBMj06rtneboGwXjwLgFwdt5tqUQ96L2xK5XzzgQSnxW8crLc1SySPglbx9x1Fh3JZ1cMIciUgyWXyhYeSW9g6sK3UFBJsIOULFE+UsFi/gZsvVHgX6ZoOSqhofbKYfWD7hu/we2PhvV1oJ4T5Nm3/5ToI76Vh7p4aAB0e943cCwgOJTF7GzwI0E5061kBOAoq9nwt6Q7GAFzMjdFdJzG3lmzFSd34vQ4ikDCYO7pkbyeKBU67l9L9S1vW9EkWpb2F0eW2wnUShUQ3yIHKWtZFbx/co1xJcvXDzqI74SbsvVwn+ZBaXuhBGHCWMnWoFMXiEA62fW0ghfv2lMl7sGsgZbwMAY3dz3pNi0m+aO8WXjVyFKKuRnzNcgZ7XRTHcp0Z0Tzpc3rWZLd7Ggy224Nsu64rktC9HUy5V9mpNaQWeBrrZ8myvN/vB4Odo1gWB4k90fSpxgU3XxCKrygiz9+CyO3tYj6vuyW1OPFyzZsXlUg6ibkhCUq2KEqlV6A8lGBL4iyOynq2LGuo0ETpafB+kHWb5JO2vp8o8LXeeVILui6N0VS2LxKa9tvBxPkccuj1dY45Z6vX25Kg4v7xeqE5Sb2nu6f1XndFUdTX9rTWhtRqhYZrOjUk2vOTYZuty/v3ydRqofm89ikA5CQlyJI+6WJty2oBAsYTRiSdXB9IbKrrVIkvCMQ/5ichAu35+XO6m6y3vq+J+vtkWPvArUthESo0dMuH7Zr4GkTz13lruNtKdVtRGhEJ3K/4rPkxcM/puG06We9lVxLtg/v1vXPvWSQkyfrel+zV2lzqZPSDqx/eB84zIIH7UKe/A0gQofQ58fTkkDRyOhw+c5xX3PZDd2vorHXJrev0rS8SuF+DvgzT6QAybCPZt+IQXzvo1Nn07c5aH2rtb2A/FkPyUm/6ST+QrHv6DDEtBMztQZ39DSrRvwvwRrfIq7mBYJIJcPWedqMLIT6zZ3Ah3kmDGs9xUwFFkjmUjglxumjV2o6oIFpLByvFmgDYEjOqdc92FGi9Sy9TdLkIB6CJdODqHLJDomsiXGlr4ei+7CQY6flLTmokgK2tJL7vJift1uJLgygmYk7KVg5p3yBKEp0ZCc2aNIgaNWrUqFGjRo0aPYL+D/v67qC55IVbAAAAAElFTkSuQmCC" 
                alt="" 
                className="singlePostImg"
            />
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-regular fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author</span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus maiores vitae distinctio est culpa, at sint earum quos pariatur praesentium,
                minima ipsam incidunt fuga perferendis, amet optio expedita sequi aliquam?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus maiores vitae distinctio est culpa, at sint earum quos pariatur praesentium,
                minima ipsam incidunt fuga perferendis, amet optio expedita sequi aliquam?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus maiores vitae distinctio est culpa, at sint earum quos pariatur praesentium,
                minima ipsam incidunt fuga perferendis, amet optio expedita sequi aliquam?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus maiores vitae distinctio est culpa, at sint earum quos pariatur praesentium,
                minima ipsam incidunt fuga perferendis, amet optio expedita sequi aliquam?
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus maiores vitae distinctio est culpa, at sint earum quos pariatur praesentium,
                minima ipsam incidunt fuga perferendis, amet optio expedita sequi aliquam?
            </p>
        </div>
    </div>
  )
}
