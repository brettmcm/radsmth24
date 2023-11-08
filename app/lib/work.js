export async function getPostIdList() {
  return [{
    params: {
      id: 'canary'
    }
  }, {
    params: {
      id: 'islanddwell'
    }
  }, {
    params: {
      id: 'apeak'
    }
  }]
}

export async function getPostDetails(postId) {

  const dataSet = {
    'canary': {
      title: "Canary Co.",
      category: "Consumer goods",
      credit: "Branding & visual identity",
      location: "Oceanside, CA",
      year: "2023",
      desc: "With no desire to join the green-washed eco-friendly aesthetic, Canary approached Radsmth with the challenge of bringing the company's subversive, punk-rock ethos to the world of plastic-free, sustainable personal & home care products.",
      images:
        [
            {
                img: "/work/canary/canary-04.png",
                caption: "Culture application"
            },
            {
                img: "/work/canary/canary-02.png",
                caption: "Scout badge"
            },
            {
                img: "/work/canary/canary-05.png",
                caption: "Kids line art direction"
            },
            {
                img: "/work/canary/canary-03.png",
                caption: "Tag"
            },
            {
                img: "/work/canary/canary-01.png",
                caption: "Primary logo"
            }
        ]
    },
    'islanddwell': {
      title: "Island Dwell",
      category: "Home staging services",
      credit: "Branding & visual identity",
      location: "Maui, HI",
      year: "2021",
      desc: "With no desire to join the green-washed eco-friendly aesthetic, Canary approached Radsmth with the challenge of bringing the company desire for a more subversive, punk-rock ethos to the world of plastic-free, sustainable personal & home care products."
    },
    'apeak': {
      title: "Apeak Invest",
      category: "Real estate development",
      credit: "Visual identity",
      location: "Maui, HI",
      year: "2021",
      desc: "With no desire to join the green-washed eco-friendly aesthetic, Canary approached Radsmth with the challenge of bringing the company desire for a more subversive, punk-rock ethos to the world of plastic-free, sustainable personal & home care products.",
      images:
        [
            {
                img: "/work/mosaic/mosaic-02.jpg",
                caption: "Culture application"
            },
            {
                img: "/work/mosaic/mosaic-04.jpg",
                caption: "Scout badge"
            },
            {
                img: "/work/mosaic/mosaic-05.jpg",
                caption: "Kids line art direction"
            },
            {
                img: "/work/mosaic/mosaic-01.jpg",
                caption: "Tag"
            },
            {
                img: "/work/mosaic/mosaic-03.jpg",
                caption: "Primary logo"
            }
        ]
    },
    'mosaic': {
      title: "Mosaic",
      category: "Restaurant",
      credit: "Visual identity",
      location: "Ocean Springs, MS",
      year: "2020",
      desc: "With no desire to join the green-washed eco-friendly aesthetic, Canary approached Radsmth with the challenge of bringing the company desire for a more subversive, punk-rock ethos to the world of plastic-free, sustainable personal & home care products.",
      images:
        [
            {
                img: "/work/mosaic/mosaic-02.jpg",
                caption: "Culture application"
            },
            {
                img: "/work/mosaic/mosaic-04.jpg",
                caption: "Scout badge"
            },
            {
                img: "/work/mosaic/mosaic-05.jpg",
                caption: "Kids line art direction"
            },
            {
                img: "/work/mosaic/mosaic-01.jpg",
                caption: "Tag"
            },
            {
                img: "/work/mosaic/mosaic-03.jpg",
                caption: "Primary logo"
            }
        ]
    }
  }

  return dataSet[postId]
    // return (
    //     <div>{dataSet[postId]}</div>
    // )

}