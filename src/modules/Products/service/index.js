import apiClient from "../../../apiClient";
export const findItem = async (data) => {
  return apiClient({
    data,
    endpoint: "shop/finditem2.php",
    type: "post",
  });
};
export const fetchStores = async (data) => {
  return apiClient({
    data,
    endpoint: "shop/storelocator2.php",
    type: "post",
  });
};

export const tempRes = {
  2066: [
    {
      selected: 0,
      items: [
        {
          description:
            "Wonder Bread Classic Extra Soft White Bread Hamburger Buns, 15 oz, 8 Count",
          image:
            "https://i5.walmartimages.com/asr/0659ebd2-edc1-4174-bb18-6c22c4ba2c20.c5e38d2940a542ce61b6faa79fc4294b.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "2.58",
          itemid: "3630869602",
          aisle: " ",
        },
        {
          description: "Great Value White Sandwich Bread, 20 oz",
          image:
            "https://i5.walmartimages.com/asr/b4aa6d9c-8f48-4a2f-8921-e72a0b705bbe.83404c5ce0b6334ef0762a2ff072dd25.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "1.46",
          itemid: "10315752",
          aisle: " ",
        },
        {
          description: "Nature's Own Butterbread White Bread Loaf, 20 oz",
          image:
            "https://i5.walmartimages.com/asr/905a72ca-3ad7-4ac6-a1d4-d6d92b1c3d49.77d036c6c794ea7cc777e0df0c626e31.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "3.13",
          itemid: "10450012",
          aisle: " ",
        },
        {
          description:
            "Wonder Bread Classic White Sandwich Bread, Sliced White Bread Loaf, 20 oz",
          image:
            "https://i5.walmartimages.com/asr/2e5ae7d6-549c-4ec3-bfb0-11a4caaaf52a.bb1a93afc1a7d799b567a955b2ca5fc2.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "2.86",
          itemid: "37858875",
          aisle: " ",
        },
      ],
    },
    {
      selected: 0,
      items: [
        {
          description: "Great Value Cage Free Large AA White Eggs, 12 Count",
          image:
            "https://i5.walmartimages.com/asr/22b4f531-750e-41ed-9057-079dc022c618.62b239344db5102e607637e1048a53b9.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "3.97",
          itemid: "421705528",
          aisle: " ",
        },
        {
          description: "Marketside Large Cage Free Brown Eggs, 12 Count",
          image:
            "https://i5.walmartimages.com/asr/cdcff1ce-65a6-434f-92c2-f8b46efaf9aa.0c696ab1cb1c7a99a1c53db327567439.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "2.67",
          itemid: "49463949",
          aisle: " ",
        },
        {
          description: "Great Value Cage Free Large AA White Eggs, 36 Count",
          image:
            "https://i5.walmartimages.com/asr/891dc6e0-4303-4035-9f12-687a18425884.d22f6f769e4f95e8fa7eff07037038ee.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "11.67",
          itemid: "605434510",
          aisle: " ",
        },
        {
          description: "Great Value Cage Free Large AA White Eggs, 60 Count",
          image:
            "https://i5.walmartimages.com/asr/02d0f8fe-42ca-41a4-92f6-d64c8e627c0c.83b1a4bbf20ff9758a844c94c1af7b3e.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "19.24",
          itemid: "328101981",
          aisle: " ",
        },
        {
          description: "Marketside Cage Free Large Brown Eggs, 18 Count",
          image:
            "https://i5.walmartimages.com/asr/9a3384fb-00af-4e90-b5a6-46a059334d4f.459fb7ccc45c005be744279f4193a048.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "3.94",
          itemid: "48319449",
          aisle: " ",
        },
      ],
    },
  ],
  3584: [
    {
      selected: 0,
      items: [
        {
          description:
            "Wonder Bread Classic Extra Soft White Bread Hamburger Buns, 15 oz, 8 Count",
          image:
            "https://i5.walmartimages.com/asr/0659ebd2-edc1-4174-bb18-6c22c4ba2c20.c5e38d2940a542ce61b6faa79fc4294b.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "2.58",
          itemid: "3630869602",
          aisle: " ",
        },
        {
          description: "Great Value White Sandwich Bread, 20 oz",
          image:
            "https://i5.walmartimages.com/asr/b4aa6d9c-8f48-4a2f-8921-e72a0b705bbe.83404c5ce0b6334ef0762a2ff072dd25.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "1.46",
          itemid: "10315752",
          aisle: " ",
        },
        {
          description: "Nature's Own Butterbread White Bread Loaf, 20 oz",
          image:
            "https://i5.walmartimages.com/asr/905a72ca-3ad7-4ac6-a1d4-d6d92b1c3d49.77d036c6c794ea7cc777e0df0c626e31.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "3.13",
          itemid: "10450012",
          aisle: " ",
        },
        {
          description:
            "Wonder Bread Classic White Sandwich Bread, Sliced White Bread Loaf, 20 oz",
          image:
            "https://i5.walmartimages.com/asr/2e5ae7d6-549c-4ec3-bfb0-11a4caaaf52a.bb1a93afc1a7d799b567a955b2ca5fc2.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "2.86",
          itemid: "37858875",
          aisle: " ",
        },
      ],
    },
    {
      selected: 0,
      items: [
        {
          description: "Great Value Cage Free Large AA White Eggs, 12 Count",
          image:
            "https://i5.walmartimages.com/asr/22b4f531-750e-41ed-9057-079dc022c618.62b239344db5102e607637e1048a53b9.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "3.97",
          itemid: "421705528",
          aisle: " ",
        },
        {
          description: "Marketside Large Cage Free Brown Eggs, 12 Count",
          image:
            "https://i5.walmartimages.com/asr/cdcff1ce-65a6-434f-92c2-f8b46efaf9aa.0c696ab1cb1c7a99a1c53db327567439.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "2.67",
          itemid: "49463949",
          aisle: " ",
        },
        {
          description: "Great Value Cage Free Large AA White Eggs, 36 Count",
          image:
            "https://i5.walmartimages.com/asr/891dc6e0-4303-4035-9f12-687a18425884.d22f6f769e4f95e8fa7eff07037038ee.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "11.67",
          itemid: "605434510",
          aisle: " ",
        },
        {
          description: "Great Value Cage Free Large AA White Eggs, 60 Count",
          image:
            "https://i5.walmartimages.com/asr/02d0f8fe-42ca-41a4-92f6-d64c8e627c0c.83b1a4bbf20ff9758a844c94c1af7b3e.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "19.24",
          itemid: "328101981",
          aisle: " ",
        },
        {
          description: "Marketside Cage Free Large Brown Eggs, 18 Count",
          image:
            "https://i5.walmartimages.com/asr/9a3384fb-00af-4e90-b5a6-46a059334d4f.459fb7ccc45c005be744279f4193a048.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
          price: "3.94",
          itemid: "48319449",
          aisle: " ",
        },
      ],
    },
  ],
};
