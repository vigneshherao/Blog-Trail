const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname, "public")))
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended:true}));

let posts = [
    {
        id: uuidv4(),
        username : "vignesh",
        content : "hey am vignesh dsffdsafafs",
    },
    {
        id:uuidv4(),
        username : "vignesh",
        content : "hey am vignesh",
    }
    ,    {
        id:uuidv4(),
        username : "vignesh",
        content : "hey am vignesh",
    }
]


app.listen(port,()=>{
    console.log("listening to port 3000");
})


app.get("/",(req,res)=>{
    res.render("home.ejs",{posts});
})  


app.get("/posts",(req,res)=>{
    res.render("form.ejs")
})

app.get("/restaurent",(req,res)=>{
    res.send(
    {
      "statusCode": 0,
      "data": {
        "statusMessage": "done successfully",
        "pageOffset": {
          "nextOffset": "COVCELQ4KIDI4vj98pm3YzCnEzgE",
          "widgetOffset": {
            "NewListingView_category_bar_chicletranking_TwoRows": "",
            "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
            "Restaurant_Group_WebView_PB_Theme": "",
            "Restaurant_Group_WebView_SEO_PB_Theme": "",
            "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "10",
            "inlineFacetFilter": "",
            "restaurantCountWidget": ""
          }
        },
        "cards": [
          {
            "card": {
              "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                "header": {
                  "title": "What's on your mind?",
                  "headerStyling": {
                    "padding": {
                      "left": 16,
                      "top": 16,
                      "bottom": 4
                    }
                  }
                },
                "layout": {
                  "rows": 1,
                  "columns": 10,
                  "horizontalScrollEnabled": true,
                  "itemSpacing": 24,
                  "widgetPadding": {
                    
                  },
                  "containerStyle": {
                    "containerPadding": {
                      "left": 8,
                      "top": 8,
                      "right": 12,
                      "bottom": 4
                    }
                  },
                  "scrollBar": {
                    
                  },
                  "widgetTheme": {
                    "defaultMode": {
                      "backgroundColour": "#FFFFFF",
                      "theme": "THEME_TYPE_LIGHT"
                    },
                    "darkMode": {
                      "theme": "THEME_TYPE_DARK"
                    }
                  }
                },
                "imageGridCards": {
                  "info": [
                    {
                      "id": "750597",
                      "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
                        "text": "Ice Cream",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurants curated for icecream",
                        "altTextCta": "open"
                      },
                      "entityId": "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "750592",
                      "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                        "text": "Biryani",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurants curated for biryani",
                        "altTextCta": "open"
                      },
                      "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&search_context=biryani",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "762797",
                      "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                        "text": "Burgers",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurants curated for burger",
                        "altTextCta": "open"
                      },
                      "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "750223",
                      "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                        "text": "Rolls",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurants curated for roll",
                        "altTextCta": "open"
                      },
                      "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "750582",
                      "imageId": "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/83645?collection_id=83645&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
                        "text": "North Indian",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurants curated for north indian",
                        "altTextCta": "open"
                      },
                      "entityId": "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian&search_context=northindian",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "750588",
                      "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                        "text": "Chinese",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurant curated for chinese",
                        "altTextCta": "open"
                      },
                      "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "750580",
                      "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/83644?collection_id=83644&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                        "text": "pizzas",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurants curated for pizza",
                        "altTextCta": "open"
                      },
                      "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza&search_context=pizza",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "750207",
                      "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                        "text": "Pasta",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurant curated for pasta",
                        "altTextCta": "open"
                      },
                      "entityId": "80480",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "750249",
                      "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                        "text": "Shawarma",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurant curated for shawarma",
                        "altTextCta": "open"
                      },
                      "entityId": "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "750584",
                      "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/83646?collection_id=83646&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
                        "text": "South Indian",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurants curated for south indian",
                        "altTextCta": "open"
                      },
                      "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian&search_context=southindian",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "749874",
                      "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                        "text": "Cakes",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurant curated for cakes",
                        "altTextCta": "open"
                      },
                      "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "749769",
                      "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
                        "text": "Momos",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurant curated for momos",
                        "altTextCta": "open"
                      },
                      "entityId": "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "750636",
                      "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/80452?collection_id=80452&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
                        "text": "Kebabs",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurant curated for kebabs",
                        "altTextCta": "open"
                      },
                      "entityId": "80452",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "749774",
                      "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                        "text": "Noodles",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurant curated for noodles",
                        "altTextCta": "open"
                      },
                      "entityId": "80464",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "750205",
                      "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/80478?collection_id=80478&tags=layout_BAU_Contextual%2Cparotta&type=rcv2",
                        "text": "Parotta",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurant curated for parotta",
                        "altTextCta": "open"
                      },
                      "entityId": "80478",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "750203",
                      "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                        "text": "Paratha",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurants curated for paratha",
                        "altTextCta": "open"
                      },
                      "entityId": "80476",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "750572",
                      "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
                        "text": "Pure Veg",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurants curated for veg",
                        "altTextCta": "open"
                      },
                      "entityId": "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "749761",
                      "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                        "text": "Khichdi",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurants curated for khicdhi",
                        "altTextCta": "open"
                      },
                      "entityId": "80456",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "750235",
                      "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                        "text": "Sandwich",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurants curated for sandwich",
                        "altTextCta": "open"
                      },
                      "entityId": "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                      "frequencyCapping": {
                        
                      }
                    },
                    {
                      "id": "750239",
                      "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                      "action": {
                        "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                        "text": "Shake",
                        "type": "WEBLINK"
                      },
                      "entityType": "BANNER",
                      "accessibility": {
                        "altText": "restaurant curated for shakes",
                        "altTextCta": "open"
                      },
                      "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                      "frequencyCapping": {
                        
                      }
                    }
                  ],
                  "style": {
                    "width": {
                      "type": "TYPE_RELATIVE",
                      "value": 0.2941,
                      "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                    },
                    "height": {
                      "type": "TYPE_RELATIVE",
                      "value": 1.2444,
                      "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                    }
                  }
                },
                "id": "whats_on_your_mind",
                "gridElements": {
                  "infoWithStyle": {
                    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                    "info": [
                      {
                        "id": "750597",
                        "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Ice_Creams.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/83650?collection_id=83650&tags=layout_CCS_IceCreams&type=rcv2",
                          "text": "Ice Cream",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurants curated for icecream",
                          "altTextCta": "open"
                        },
                        "entityId": "swiggy://collectionV2?collection_id=83650&tags=layout_CCS_IceCreams",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "750592",
                        "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/83649?collection_id=83649&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
                          "text": "Biryani",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurants curated for biryani",
                          "altTextCta": "open"
                        },
                        "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&search_context=biryani",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "762797",
                        "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
                          "text": "Burgers",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurants curated for burger",
                          "altTextCta": "open"
                        },
                        "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger&search_context=burger",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "750223",
                        "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                          "text": "Rolls",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurants curated for roll",
                          "altTextCta": "open"
                        },
                        "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "750582",
                        "imageId": "v1675667625/PC_Creative%20refresh/North_Indian_4.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/83645?collection_id=83645&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
                          "text": "North Indian",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurants curated for north indian",
                          "altTextCta": "open"
                        },
                        "entityId": "swiggy://collectionV2?collection_id=83645&tags=layout_CCS_NorthIndian&search_context=northindian",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "750588",
                        "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                          "text": "Chinese",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurant curated for chinese",
                          "altTextCta": "open"
                        },
                        "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "750580",
                        "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/83644?collection_id=83644&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
                          "text": "pizzas",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurants curated for pizza",
                          "altTextCta": "open"
                        },
                        "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza&search_context=pizza",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "750207",
                        "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                          "text": "Pasta",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurant curated for pasta",
                          "altTextCta": "open"
                        },
                        "entityId": "80480",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "750249",
                        "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                          "text": "Shawarma",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurant curated for shawarma",
                          "altTextCta": "open"
                        },
                        "entityId": "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "750584",
                        "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/83646?collection_id=83646&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
                          "text": "South Indian",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurants curated for south indian",
                          "altTextCta": "open"
                        },
                        "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian&search_context=southindian",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "749874",
                        "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                          "text": "Cakes",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurant curated for cakes",
                          "altTextCta": "open"
                        },
                        "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "749769",
                        "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
                          "text": "Momos",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurant curated for momos",
                          "altTextCta": "open"
                        },
                        "entityId": "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "750636",
                        "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/80452?collection_id=80452&tags=layout_BAU_Contextual%2Ckebab%2Cads_pc_kebab&type=rcv2",
                          "text": "Kebabs",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurant curated for kebabs",
                          "altTextCta": "open"
                        },
                        "entityId": "80452",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "749774",
                        "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                          "text": "Noodles",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurant curated for noodles",
                          "altTextCta": "open"
                        },
                        "entityId": "80464",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "750205",
                        "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Parotta.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/80478?collection_id=80478&tags=layout_BAU_Contextual%2Cparotta&type=rcv2",
                          "text": "Parotta",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurant curated for parotta",
                          "altTextCta": "open"
                        },
                        "entityId": "80478",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "750203",
                        "imageId": "v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Paratha.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/80476?collection_id=80476&tags=layout_BAU_Contextual%2Cparatha%2Cads_pc_paratha&type=rcv2",
                          "text": "Paratha",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurants curated for paratha",
                          "altTextCta": "open"
                        },
                        "entityId": "80476",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "750572",
                        "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Pure_Veg.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/80439?collection_id=80439&tags=layout_CCS_PureVeg&type=rcv2",
                          "text": "Pure Veg",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurants curated for veg",
                          "altTextCta": "open"
                        },
                        "entityId": "swiggy://collectionV2?collection_id=80439&tags=layout_CCS_PureVeg",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "749761",
                        "imageId": "v1674029851/PC_Creative%20refresh/3D_bau/banners_new/Khichdi.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/80456?collection_id=80456&tags=layout_BAU_Contextual%2Ckhichdi&type=rcv2",
                          "text": "Khichdi",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurants curated for khicdhi",
                          "altTextCta": "open"
                        },
                        "entityId": "80456",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "750235",
                        "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                          "text": "Sandwich",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurants curated for sandwich",
                          "altTextCta": "open"
                        },
                        "entityId": "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                        "frequencyCapping": {
                          
                        }
                      },
                      {
                        "id": "750239",
                        "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                        "action": {
                          "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                          "text": "Shake",
                          "type": "WEBLINK"
                        },
                        "entityType": "BANNER",
                        "accessibility": {
                          "altText": "restaurant curated for shakes",
                          "altTextCta": "open"
                        },
                        "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                        "frequencyCapping": {
                          
                        }
                      }
                    ],
                    "style": {
                      "width": {
                        "type": "TYPE_RELATIVE",
                        "value": 0.2941,
                        "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                      },
                      "height": {
                        "type": "TYPE_RELATIVE",
                        "value": 1.2444,
                        "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                      }
                    }
                  }
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                "header": {
                  "title": "Top restaurant chains in Mangaluru",
                  "action": {
                    
                  },
                  "headerStyling": {
                    "padding": {
                      "left": 16,
                      "top": 28,
                      "bottom": 18
                    }
                  }
                },
                "layout": {
                  "rows": 1,
                  "columns": 20,
                  "horizontalScrollEnabled": true,
                  "itemSpacing": 32,
                  "widgetPadding": {
                    
                  },
                  "containerStyle": {
                    "containerPadding": {
                      "left": 16,
                      "right": 12,
                      "bottom": 12
                    }
                  },
                  "scrollBar": {
                    "scrollThumbColor": "#E46D47",
                    "scrollTrackColor": "#02060C",
                    "width": 54,
                    "height": 4,
                    "scrollStyling": {
                      "padding": {
                        "top": 6,
                        "bottom": 24
                      }
                    }
                  },
                  "widgetTheme": {
                    "defaultMode": {
                      "backgroundColour": "#1B3028",
                      "theme": "THEME_TYPE_DARK"
                    },
                    "darkMode": {
                      "backgroundColour": "#1B3028",
                      "theme": "THEME_TYPE_DARK"
                    }
                  }
                },
                "id": "top_brands_for_you",
                "gridElements": {
                  "infoWithStyle": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                    "restaurants": [
                      {
                        "info": {
                          "id": "99437",
                          "name": "UBQ by Barbeque Nation",
                          "cloudinaryImageId": "s9hciu1do1noedahaztr",
                          "locality": "Father Mullers road",
                          "areaName": "Kankanady",
                          "costForTwo": "₹300 for two",
                          "cuisines": [
                            "North Indian",
                            "Barbecue",
                            "Biryani",
                            "Kebabs",
                            "Mughlai",
                            "Desserts"
                          ],
                          "avgRating": 4.2,
                          "parentId": "10804",
                          "avgRatingString": "4.2",
                          "totalRatingsString": "1K+",
                          "sla": {
                            "deliveryTime": 37,
                            "lastMileTravel": 7.2,
                            "serviceability": "SERVICEABLE",
                            "slaString": "35-40 mins",
                            "lastMileTravelString": "7.2 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-23 23:30:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "50% OFF",
                            "subHeader": "UPTO ₹100"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-father-mullers-road-kankanady-mangaluru-99437",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "302695",
                          "name": "Barbeque Nation",
                          "cloudinaryImageId": "t5c6quo7mpag8ucmfjsm",
                          "locality": "Father Mullers road",
                          "areaName": "Kankanady",
                          "costForTwo": "₹600 for two",
                          "cuisines": [
                            "North Indian",
                            "Barbecue",
                            "Biryani",
                            "Kebabs",
                            "Mughlai",
                            "Desserts"
                          ],
                          "avgRating": 4.3,
                          "parentId": "2438",
                          "avgRatingString": "4.3",
                          "totalRatingsString": "1K+",
                          "sla": {
                            "deliveryTime": 33,
                            "lastMileTravel": 7.2,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30-35 mins",
                            "lastMileTravelString": "7.2 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-23 23:30:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "50% OFF",
                            "subHeader": "UPTO ₹100"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/barbeque-nation-father-mullers-road-kankanady-mangaluru-302695",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "746188",
                          "name": "The Pasta Co.",
                          "cloudinaryImageId": "0aece17895a79c80558e3c2946f741f4",
                          "locality": "Kadri Village",
                          "areaName": "Lalbagh",
                          "costForTwo": "₹400 for two",
                          "cuisines": [
                            "Pastas",
                            "American",
                            "Continental",
                            "Italian"
                          ],
                          "avgRating": 4.5,
                          "parentId": "443282",
                          "avgRatingString": "4.5",
                          "totalRatingsString": "1K+",
                          "sla": {
                            "deliveryTime": 35,
                            "lastMileTravel": 6.8,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30-35 mins",
                            "lastMileTravelString": "6.8 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-24 01:00:00",
                            "opened": true
                          },
                          "badges": {
                            "imageBadges": [
                              {
                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                "description": "OnlyOnSwiggy"
                              }
                            ]
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                "badgeObject": [
                                  {
                                    "attributes": {
                                      "description": "OnlyOnSwiggy",
                                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                    }
                                  }
                                ]
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "60% OFF",
                            "subHeader": "UPTO ₹100"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/the-pasta-co-kadri-village-lalbagh-mangaluru-746188",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "98668",
                          "name": "The Leela's kitchen",
                          "cloudinaryImageId": "p7crtx9ydfwkwqrbkbj8",
                          "locality": "Derebail",
                          "areaName": "Lalbagh",
                          "costForTwo": "₹250 for two",
                          "cuisines": [
                            "Chinese",
                            "North Indian",
                            "South Indian",
                            "Ice Cream",
                            "Biryani"
                          ],
                          "avgRating": 4.2,
                          "parentId": "15779",
                          "avgRatingString": "4.2",
                          "totalRatingsString": "10K+",
                          "sla": {
                            "deliveryTime": 29,
                            "lastMileTravel": 3,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "3.0 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-23 23:45:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "₹125 OFF",
                            "subHeader": "ABOVE ₹199",
                            "discountTag": "FLAT DEAL"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/the-leelas-kitchen-derebail-lalbagh-mangaluru-98668",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "364949",
                          "name": "The Good Bowl",
                          "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
                          "locality": "Balmatta road",
                          "areaName": "Balmatta",
                          "costForTwo": "₹400 for two",
                          "cuisines": [
                            "Biryani",
                            "North Indian",
                            "Pastas",
                            "Punjabi",
                            "Desserts",
                            "Beverages"
                          ],
                          "avgRating": 4.4,
                          "parentId": "7918",
                          "avgRatingString": "4.4",
                          "totalRatingsString": "1K+",
                          "sla": {
                            "deliveryTime": 36,
                            "lastMileTravel": 7.9,
                            "serviceability": "SERVICEABLE",
                            "slaString": "35-40 mins",
                            "lastMileTravelString": "7.9 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-23 23:59:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "60% OFF",
                            "subHeader": "UPTO ₹110"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/the-good-bowl-road-balmatta-mangaluru-364949",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "82858",
                          "name": "Bombay Lucky Restaurant",
                          "cloudinaryImageId": "j5p3aiqci22sqrpgg9sx",
                          "locality": "Mohammed Ali Road",
                          "areaName": "Bunder",
                          "costForTwo": "₹300 for two",
                          "cuisines": [
                            "Chinese",
                            "North Indian",
                            "South Indian",
                            "Ice Cream",
                            "Biryani"
                          ],
                          "avgRating": 4.3,
                          "parentId": "12804",
                          "avgRatingString": "4.3",
                          "totalRatingsString": "5K+",
                          "sla": {
                            "deliveryTime": 31,
                            "lastMileTravel": 8.4,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30-35 mins",
                            "lastMileTravelString": "8.4 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-24 00:00:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "aggregatedDiscountInfoV2": {
                            
                          },
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/bombay-lucky-restaurant-mohammed-ali-road-bunder-mangaluru-82858",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "99531",
                          "name": "The Belgian Waffle Co.",
                          "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
                          "locality": "Light House Hill Road",
                          "areaName": "KS Rao Nagar",
                          "costForTwo": "₹200 for two",
                          "cuisines": [
                            "Waffle",
                            "Desserts",
                            "Ice Cream",
                            "Beverages"
                          ],
                          "avgRating": 4.7,
                          "veg": true,
                          "parentId": "2233",
                          "avgRatingString": "4.7",
                          "totalRatingsString": "5K+",
                          "sla": {
                            "deliveryTime": 33,
                            "lastMileTravel": 6.9,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30-35 mins",
                            "lastMileTravelString": "6.9 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-24 00:30:00",
                            "opened": true
                          },
                          "badges": {
                            "imageBadges": [
                              {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                              }
                            ]
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                "badgeObject": [
                                  {
                                    "attributes": {
                                      "description": "pureveg",
                                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                  }
                                ]
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "20% OFF",
                            "subHeader": "UPTO ₹50"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-light-house-hill-road-ks-rao-nagar-mangaluru-99531",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "364948",
                          "name": "LunchBox - Meals and Thalis",
                          "cloudinaryImageId": "rtlfg1csfrg2691e56wt",
                          "locality": "Balmatta road",
                          "areaName": "Hampankatta",
                          "costForTwo": "₹200 for two",
                          "cuisines": [
                            "Biryani",
                            "North Indian",
                            "Punjabi",
                            "Healthy Food",
                            "Desserts",
                            "Beverages"
                          ],
                          "avgRating": 4.4,
                          "parentId": "4925",
                          "avgRatingString": "4.4",
                          "totalRatingsString": "5K+",
                          "sla": {
                            "deliveryTime": 35,
                            "lastMileTravel": 7.9,
                            "serviceability": "SERVICEABLE",
                            "slaString": "35-40 mins",
                            "lastMileTravelString": "7.9 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-23 23:59:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "ITEMS",
                            "subHeader": "AT ₹159"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-balmatta-road-hampankatta-mangaluru-364948",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "364943",
                          "name": "Faasos - Wraps, Rolls & Shawarma",
                          "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
                          "locality": "Balmatta road",
                          "areaName": "Hampankatta",
                          "costForTwo": "₹200 for two",
                          "cuisines": [
                            "Kebabs",
                            "Fast Food",
                            "Snacks",
                            "American",
                            "Healthy Food",
                            "Desserts",
                            "Beverages"
                          ],
                          "avgRating": 4.4,
                          "parentId": "21809",
                          "avgRatingString": "4.4",
                          "totalRatingsString": "1K+",
                          "sla": {
                            "deliveryTime": 36,
                            "lastMileTravel": 7.9,
                            "serviceability": "SERVICEABLE",
                            "slaString": "35-40 mins",
                            "lastMileTravelString": "7.9 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-23 23:59:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "₹125 OFF",
                            "subHeader": "ABOVE ₹199",
                            "discountTag": "FLAT DEAL"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-balmatta-road-hampankatta-mangaluru-364943",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "443322",
                          "name": "Polar Bear",
                          "cloudinaryImageId": "57262fe3839f0bff174f3d7e7cc8a2b4",
                          "locality": "Mannagudda",
                          "areaName": "Kodailbail",
                          "costForTwo": "₹350 for two",
                          "cuisines": [
                            "Ice Cream",
                            "Desserts"
                          ],
                          "avgRating": 4.6,
                          "veg": true,
                          "parentId": "726",
                          "avgRatingString": "4.6",
                          "totalRatingsString": "1K+",
                          "sla": {
                            "deliveryTime": 25,
                            "lastMileTravel": 6.1,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "6.1 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-23 23:45:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "aggregatedDiscountInfoV2": {
                            
                          },
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/polar-bear-mannagudda-kodailbail-mangaluru-443322",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "364947",
                          "name": "Sweet Truth - Cake and Desserts",
                          "cloudinaryImageId": "81cf6bfe2760a45a0caf2e28716ca4d7",
                          "locality": "Balmatta road",
                          "areaName": "Balmatta",
                          "costForTwo": "₹450 for two",
                          "cuisines": [
                            "Snacks",
                            "Bakery",
                            "Desserts",
                            "Beverages"
                          ],
                          "avgRating": 4.3,
                          "parentId": "4444",
                          "avgRatingString": "4.3",
                          "totalRatingsString": "500+",
                          "sla": {
                            "deliveryTime": 29,
                            "lastMileTravel": 7.9,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "7.9 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-23 23:59:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "60% OFF",
                            "subHeader": "UPTO ₹110"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-road-balmatta-mangaluru-364947",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "210245",
                          "name": "Pizza Hut",
                          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                          "locality": "Shiv Baug",
                          "areaName": "Kadri",
                          "costForTwo": "₹400 for two",
                          "cuisines": [
                            "Pizzas"
                          ],
                          "avgRating": 4.4,
                          "parentId": "721",
                          "avgRatingString": "4.4",
                          "totalRatingsString": "1K+",
                          "sla": {
                            "deliveryTime": 31,
                            "lastMileTravel": 5,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30-35 mins",
                            "lastMileTravelString": "5.0 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-24 02:00:00",
                            "opened": true
                          },
                          "badges": {
                            "imageBadges": [
                              {
                                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                                "description": "Delivery!"
                              }
                            ]
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                "badgeObject": [
                                  {
                                    "attributes": {
                                      "description": "Delivery!",
                                      "imageId": "Rxawards/_CATEGORY-Pizza.png"
                                    }
                                  }
                                ]
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "ITEMS",
                            "subHeader": "AT ₹179"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/pizza-hut-shiv-baug-kadri-mangaluru-210245",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "74568",
                          "name": "KFC",
                          "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                          "locality": "Kadri Main Road",
                          "areaName": "Kadri",
                          "costForTwo": "₹400 for two",
                          "cuisines": [
                            "Burgers",
                            "Biryani",
                            "American",
                            "Snacks",
                            "Fast Food"
                          ],
                          "avgRating": 4.4,
                          "parentId": "547",
                          "avgRatingString": "4.4",
                          "totalRatingsString": "10K+",
                          "sla": {
                            "deliveryTime": 29,
                            "lastMileTravel": 5,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "5.0 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-24 00:00:00",
                            "opened": true
                          },
                          "badges": {
                            "imageBadges": [
                              {
                                "imageId": "Rxawards/_CATEGORY-Burger.png",
                                "description": "Delivery!"
                              }
                            ]
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                "badgeObject": [
                                  {
                                    "attributes": {
                                      "description": "Delivery!",
                                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                                    }
                                  }
                                ]
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "30% OFF",
                            "subHeader": "UPTO ₹75"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/kfc-main-road-kadri-mangaluru-74568",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "78656",
                          "name": "McDonald's",
                          "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
                          "locality": "City Center Mall",
                          "areaName": "Hampankatta",
                          "costForTwo": "₹400 for two",
                          "cuisines": [
                            "Burgers",
                            "Beverages",
                            "Cafe",
                            "Desserts"
                          ],
                          "avgRating": 4.5,
                          "parentId": "630",
                          "avgRatingString": "4.5",
                          "totalRatingsString": "10K+",
                          "sla": {
                            "deliveryTime": 30,
                            "lastMileTravel": 7.1,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30-35 mins",
                            "lastMileTravelString": "7.1 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-23 23:45:00",
                            "opened": true
                          },
                          "badges": {
                            "imageBadges": [
                              {
                                "imageId": "Rxawards/_CATEGORY-Burger.png",
                                "description": "Delivery!"
                              }
                            ]
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                "badgeObject": [
                                  {
                                    "attributes": {
                                      "description": "Delivery!",
                                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                                    }
                                  }
                                ]
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "FREE ITEM"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/mcdonalds-city-center-mall-hampankatta-mangaluru-78656",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "711016",
                          "name": "Subway",
                          "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
                          "locality": "Lalbagh",
                          "areaName": "Chilimbi MNG",
                          "costForTwo": "₹400 for two",
                          "cuisines": [
                            "Healthy Food",
                            "Salads",
                            "Snacks",
                            "Desserts",
                            "Beverages"
                          ],
                          "avgRating": 4.2,
                          "parentId": "2",
                          "avgRatingString": "4.2",
                          "totalRatingsString": "500+",
                          "sla": {
                            "deliveryTime": 26,
                            "lastMileTravel": 4.6,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "4.6 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-24 02:00:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "40% OFF",
                            "subHeader": "UPTO ₹80"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/subway-lalbagh-chilimbi-mng-mangaluru-711016",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "764841",
                          "name": "Netmeal",
                          "cloudinaryImageId": "b8d2d79f6d4243d7d2de29a2da7129fa",
                          "locality": "Maroli",
                          "areaName": "Lalbagh",
                          "costForTwo": "₹350 for two",
                          "cuisines": [
                            "Chinese"
                          ],
                          "avgRating": 4.4,
                          "parentId": "452208",
                          "avgRatingString": "4.4",
                          "totalRatingsString": "500+",
                          "sla": {
                            "deliveryTime": 33,
                            "lastMileTravel": 7.5,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30-35 mins",
                            "lastMileTravelString": "7.5 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-23 23:59:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "50% OFF",
                            "subHeader": "UPTO ₹100"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/netmeal-maroli-lalbagh-mangaluru-764841",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "651142",
                          "name": "Istah Shawarmas",
                          "cloudinaryImageId": "b7721df64a214adb6ca5930c3e4bb7e1",
                          "locality": "Kadri Road",
                          "areaName": "Lalbagh",
                          "costForTwo": "₹300 for two",
                          "cuisines": [
                            "Mediterranean",
                            "Snacks",
                            "Biryani",
                            "Grill",
                            "Kebabs",
                            "Arabian",
                            "Lebanese",
                            "Beverages",
                            "Desserts",
                            "Italian",
                            "Turkish"
                          ],
                          "avgRating": 4.3,
                          "parentId": "468195",
                          "avgRatingString": "4.3",
                          "totalRatingsString": "1K+",
                          "sla": {
                            "deliveryTime": 35,
                            "lastMileTravel": 6.8,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30-35 mins",
                            "lastMileTravelString": "6.8 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-24 01:00:00",
                            "opened": true
                          },
                          "badges": {
                            "imageBadges": [
                              {
                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                "description": "OnlyOnSwiggy"
                              }
                            ]
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                "badgeObject": [
                                  {
                                    "attributes": {
                                      "description": "OnlyOnSwiggy",
                                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                    }
                                  }
                                ]
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "60% OFF",
                            "subHeader": "UPTO ₹100"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/istah-shawarmas-kadri-road-lalbagh-mangaluru-651142",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "80757",
                          "name": "Chicken Fantasy Hot & Spicy",
                          "cloudinaryImageId": "ggdgxq8ewmlxn0nnbxmi",
                          "locality": "Kapikad Road",
                          "areaName": "Lalbagh",
                          "costForTwo": "₹200 for two",
                          "cuisines": [
                            "Chinese",
                            "North Indian",
                            "Biryani"
                          ],
                          "avgRating": 4.4,
                          "parentId": "12805",
                          "avgRatingString": "4.4",
                          "totalRatingsString": "5K+",
                          "sla": {
                            "deliveryTime": 24,
                            "lastMileTravel": 5,
                            "serviceability": "SERVICEABLE",
                            "slaString": "20-25 mins",
                            "lastMileTravelString": "5.0 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-23 23:30:00",
                            "opened": true
                          },
                          "badges": {
                            "imageBadges": [
                              {
                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                "description": "OnlyOnSwiggy"
                              }
                            ]
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                "badgeObject": [
                                  {
                                    "attributes": {
                                      "description": "OnlyOnSwiggy",
                                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                    }
                                  }
                                ]
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "₹125 OFF",
                            "subHeader": "ABOVE ₹249",
                            "discountTag": "FLAT DEAL"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/chicken-fantasy-hot-and-spicy-kapikad-road-lalbagh-mangaluru-80757",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "623971",
                          "name": "Keventers - Milkshakes & Desserts",
                          "cloudinaryImageId": "1c8517dc925655dfff4d3617bd2191a5",
                          "locality": "Bunts Hostel Road",
                          "areaName": "Balmatta",
                          "costForTwo": "₹200 for two",
                          "cuisines": [
                            "Beverages",
                            "Ice Cream",
                            "Desserts",
                            "Healthy Food"
                          ],
                          "avgRating": 4.4,
                          "veg": true,
                          "parentId": "268997",
                          "avgRatingString": "4.4",
                          "totalRatingsString": "100+",
                          "sla": {
                            "deliveryTime": 28,
                            "lastMileTravel": 7.7,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "7.7 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-24 01:00:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "50% OFF",
                            "subHeader": "UPTO ₹100"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-bunts-hostel-road-balmatta-mangaluru-623971",
                          "type": "WEBLINK"
                        }
                      },
                      {
                        "info": {
                          "id": "87878",
                          "name": "Hunger Lust",
                          "cloudinaryImageId": "nacrvuzetxexfz7nrero",
                          "locality": "Mangaladevi Road",
                          "areaName": "Marnamikatte",
                          "costForTwo": "₹200 for two",
                          "cuisines": [
                            "Pastas",
                            "Chinese",
                            "North Indian",
                            "Burgers",
                            "Ice Cream",
                            "Biryani"
                          ],
                          "avgRating": 4.2,
                          "parentId": "12801",
                          "avgRatingString": "4.2",
                          "totalRatingsString": "1K+",
                          "sla": {
                            "deliveryTime": 34,
                            "lastMileTravel": 9.2,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30-35 mins",
                            "lastMileTravelString": "9.2 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-24 03:22:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "50% OFF",
                            "subHeader": "UPTO ₹100"
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/hunger-lust-mangaladevi-road-marnamikatte-mangaluru-87878",
                          "type": "WEBLINK"
                        }
                      }
                    ],
                    "theme": "Restaurant_Group_WebView_SEO_PB_Theme",
                    "widgetType": "WIDGET_TYPE_POPULAR_BRANDS",
                    "style": {
                      "width": {
                        "type": "TYPE_RELATIVE",
                        "value": 0.41111112,
                        "reference": "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH"
                      },
                      "height": {
                        "type": "TYPE_RELATIVE",
                        "value": 0.7027027,
                        "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                      },
                      "layoutAlignment": "LAYOUT_ALIGNMENT_LEFT"
                    },
                    "collectionId": "84124"
                  }
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
                "title": "Restaurants with online food delivery in Mangaluru",
                "id": "popular_restaurants_title"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
                "sortConfigs": [
                  {
                    "key": "relevance",
                    "title": "Relevance (Default)",
                    "selected": true,
                    "defaultSelection": true
                  },
                  {
                    "key": "deliveryTimeAsc",
                    "title": "Delivery Time"
                  },
                  {
                    "key": "modelBasedRatingDesc",
                    "title": "Rating"
                  },
                  {
                    "key": "costForTwoAsc",
                    "title": "Cost: Low to High"
                  },
                  {
                    "key": "costForTwoDesc",
                    "title": "Cost: High to Low"
                  }
                ],
                "restaurantCount": 723,
                "facetList": [
                  {
                    "label": "Delivery Time",
                    "id": "deliveryTime",
                    "selection": "SELECT_TYPE_MULTISELECT",
                    "facetInfo": [
                      {
                        "label": "Fast Delivery",
                        "id": "deliveryTimefacetquery1",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      }
                    ],
                    "viewType": "VIEW_TYPE_HALF_CARD",
                    "subLabel": "Filter by"
                  },
                  {
                    "label": "Cuisines",
                    "id": "catalog_cuisines",
                    "selection": "SELECT_TYPE_MULTISELECT",
                    "facetInfo": [
                      {
                        "label": "American",
                        "id": "query_american",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Andhra",
                        "id": "query_andhra",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Arabian",
                        "id": "query_arabian",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Asian",
                        "id": "query_asian",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Bakery",
                        "id": "query_bakery",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Barbecue",
                        "id": "query_barbecue",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Bengali",
                        "id": "query_bengali",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Beverages",
                        "id": "query_beverages",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Biryani",
                        "id": "query_biryani",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Burgers",
                        "id": "query_burgers",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Cafe",
                        "id": "query_cafe",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Cakes and Pastries",
                        "id": "query_cakes_and_pastries",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Chaat",
                        "id": "query_chaat",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Chinese",
                        "id": "query_chinese",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Coastal",
                        "id": "query_coastal",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Continental",
                        "id": "query_continental",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Desserts",
                        "id": "query_desserts",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "European",
                        "id": "query_european",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Fast Food",
                        "id": "query_fast_food",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Fast food",
                        "id": "query_fast_food",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "German",
                        "id": "query_german",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Goan",
                        "id": "query_goan",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Grill",
                        "id": "query_grill",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Gujarati",
                        "id": "query_gujarati",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Healthy Food",
                        "id": "query_healthy_food",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Home Food",
                        "id": "query_home_food",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Hyderabadi",
                        "id": "query_hyderabadi",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Ice Cream",
                        "id": "query_ice_cream",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Ice Cream Cakes",
                        "id": "query_ice_cream_cakes",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Indian",
                        "id": "query_indian",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Italian",
                        "id": "query_italian",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Italian-American",
                        "id": "query_italian-american",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Japanese",
                        "id": "query_japanese",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Juices",
                        "id": "query_juices",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Kebabs",
                        "id": "query_kebabs",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Kerala",
                        "id": "query_kerala",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Korean",
                        "id": "query_korean",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Lebanese",
                        "id": "query_lebanese",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Lucknowi",
                        "id": "query_lucknowi",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Malaysian",
                        "id": "query_malaysian",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Mangalorean",
                        "id": "query_mangalorean",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Mediterranean",
                        "id": "query_mediterranean",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Mexican",
                        "id": "query_mexican",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Middle Eastern",
                        "id": "query_middle_eastern",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Momos",
                        "id": "query_momos",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Mughlai",
                        "id": "query_mughlai",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "North Eastern",
                        "id": "query_north_eastern",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "North Indian",
                        "id": "query_north_indian",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Oriental",
                        "id": "query_oriental",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Pan-Asian",
                        "id": "query_pan-asian",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Pastas",
                        "id": "query_pastas",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Pizzas",
                        "id": "query_pizzas",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Popular Brand Store",
                        "id": "query_popular_brand_store",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Punjabi",
                        "id": "query_punjabi",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Raja",
                        "id": "query_raja",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Rajasthani",
                        "id": "query_rajasthani",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Rolls & Wraps",
                        "id": "query_rolls_&_wraps",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Salads",
                        "id": "query_salads",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Seafood",
                        "id": "query_seafood",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Singaporean",
                        "id": "query_singaporean",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Snacks",
                        "id": "query_snacks",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "South Indian",
                        "id": "query_south_indian",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Street Food",
                        "id": "query_street_food",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Sweets",
                        "id": "query_sweets",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Tandoor",
                        "id": "query_tandoor",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Thai",
                        "id": "query_thai",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Thalis",
                        "id": "query_thalis",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Tibetan",
                        "id": "query_tibetan",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Turkish",
                        "id": "query_turkish",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Waffle",
                        "id": "query_waffle",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "rolls",
                        "id": "query_rolls",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      }
                    ],
                    "viewType": "VIEW_TYPE_HALF_CARD",
                    "canSearch": true,
                    "subLabel": "Filter by cuisine",
                    "openFilter": true
                  },
                  {
                    "label": "Explore",
                    "id": "explore",
                    "selection": "SELECT_TYPE_MULTISELECT",
                    "facetInfo": [
                      {
                        "label": "New on Swiggy",
                        "id": "newfacetquery1",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      }
                    ],
                    "viewType": "VIEW_TYPE_HALF_CARD"
                  },
                  {
                    "label": "Ratings",
                    "id": "rating",
                    "selection": "SELECT_TYPE_MULTISELECT",
                    "facetInfo": [
                      {
                        "label": "Ratings 4.5+",
                        "id": "ratingfacetquery3",
                        "analytics": {
                          
                        }
                      },
                      {
                        "label": "Ratings 4.0+",
                        "id": "ratingfacetquery4",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Ratings 3.5+",
                        "id": "ratingfacetquery5",
                        "analytics": {
                          
                        }
                      }
                    ],
                    "viewType": "VIEW_TYPE_HALF_CARD",
                    "subLabel": "Filter by"
                  },
                  {
                    "label": "Veg/Non-Veg",
                    "id": "isVeg",
                    "selection": "SELECT_TYPE_SINGLESELECT",
                    "facetInfo": [
                      {
                        "label": "Pure Veg",
                        "id": "isVegfacetquery2",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Non Veg",
                        "id": "isVegfacetquery3",
                        "analytics": {
                          
                        }
                      }
                    ],
                    "viewType": "VIEW_TYPE_FLATTENED",
                    "subLabel": "Filter by"
                  },
                  {
                    "label": "Offers",
                    "id": "restaurantOfferMultiTd",
                    "selection": "SELECT_TYPE_SINGLESELECT",
                    "facetInfo": [
                      {
                        "label": "Offers",
                        "id": "restaurantOfferMultiTdfacetquery3",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      }
                    ],
                    "viewType": "VIEW_TYPE_FLATTENED",
                    "subLabel": "Restaurants with"
                  },
                  {
                    "label": "Cost for two",
                    "id": "costForTwo",
                    "selection": "SELECT_TYPE_MULTISELECT",
                    "facetInfo": [
                      {
                        "label": "Rs. 300-Rs. 600",
                        "id": "costForTwofacetquery3",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      },
                      {
                        "label": "Greater than Rs. 600",
                        "id": "costForTwofacetquery4",
                        "analytics": {
                          
                        }
                      },
                      {
                        "label": "Less than Rs. 300",
                        "id": "costForTwofacetquery5",
                        "analytics": {
                          
                        },
                        "openFilter": true
                      }
                    ],
                    "viewType": "VIEW_TYPE_HALF_CARD",
                    "subLabel": "Filter by"
                  }
                ]
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                "layout": {
                  "columns": 4
                },
                "id": "restaurant_grid_listing",
                "gridElements": {
                  "infoWithStyle": {
                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                    "restaurants": [
                      {
                        "info": {
                          "id": "99437",
                          "name": "UBQ by Barbeque Nation",
                          "cloudinaryImageId": "s9hciu1do1noedahaztr",
                          "locality": "Father Mullers road",
                          "areaName": "Kankanady",
                          "costForTwo": "₹300 for two",
                          "cuisines": [
                            "North Indian",
                            "Barbecue",
                            "Biryani",
                            "Kebabs",
                            "Mughlai",
                            "Desserts"
                          ],
                          "avgRating": 4.2,
                          "parentId": "10804",
                          "avgRatingString": "4.2",
                          "totalRatingsString": "1K+",
                          "sla": {
                            "deliveryTime": 37,
                            "lastMileTravel": 7.2,
                            "serviceability": "SERVICEABLE",
                            "slaString": "35-40 mins",
                            "lastMileTravelString": "7.2 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-23 23:30:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "50% OFF",
                            "subHeader": "UPTO ₹100"
                          },
                          "orderabilityCommunication": {
                            "title": {
                              
                            },
                            "subTitle": {
                              
                            },
                            "message": {
                              
                            },
                            "customIcon": {
                              
                            }
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          "context": "seo-data-c9430281-2cea-4a0b-8b42-9b190a674fc9"
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-father-mullers-road-kankanady-mangaluru-99437",
                          "text": "RESTAURANT_MENU",
                          "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                      },
                      {
                        "info": {
                          "id": "302695",
                          "name": "Barbeque Nation",
                          "cloudinaryImageId": "t5c6quo7mpag8ucmfjsm",
                          "locality": "Father Mullers road",
                          "areaName": "Kankanady",
                          "costForTwo": "₹600 for two",
                          "cuisines": [
                            "North Indian",
                            "Barbecue",
                            "Biryani",
                            "Kebabs",
                            "Mughlai",
                            "Desserts"
                          ],
                          "avgRating": 4.3,
                          "parentId": "2438",
                          "avgRatingString": "4.3",
                          "totalRatingsString": "1K+",
                          "sla": {
                            "deliveryTime": 33,
                            "lastMileTravel": 7.2,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30-35 mins",
                            "lastMileTravelString": "7.2 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-23 23:30:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "50% OFF",
                            "subHeader": "UPTO ₹100"
                          },
                          "orderabilityCommunication": {
                            "title": {
                              
                            },
                            "subTitle": {
                              
                            },
                            "message": {
                              
                            },
                            "customIcon": {
                              
                            }
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          "context": "seo-data-c9430281-2cea-4a0b-8b42-9b190a674fc9"
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/barbeque-nation-father-mullers-road-kankanady-mangaluru-302695",
                          "text": "RESTAURANT_MENU",
                          "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                      },
                      {
                        "info": {
                          "id": "746188",
                          "name": "The Pasta Co.",
                          "cloudinaryImageId": "0aece17895a79c80558e3c2946f741f4",
                          "locality": "Kadri Village",
                          "areaName": "Lalbagh",
                          "costForTwo": "₹400 for two",
                          "cuisines": [
                            "Pastas",
                            "American",
                            "Continental",
                            "Italian"
                          ],
                          "avgRating": 4.5,
                          "parentId": "443282",
                          "avgRatingString": "4.5",
                          "totalRatingsString": "1K+",
                          "sla": {
                            "deliveryTime": 35,
                            "lastMileTravel": 6.8,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30-35 mins",
                            "lastMileTravelString": "6.8 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-24 01:00:00",
                            "opened": true
                          },
                          "badges": {
                            "imageBadges": [
                              {
                                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                                "description": "OnlyOnSwiggy"
                              }
                            ]
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                "badgeObject": [
                                  {
                                    "attributes": {
                                      "description": "OnlyOnSwiggy",
                                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                    }
                                  }
                                ]
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "60% OFF",
                            "subHeader": "UPTO ₹100"
                          },
                          "orderabilityCommunication": {
                            "title": {
                              
                            },
                            "subTitle": {
                              
                            },
                            "message": {
                              
                            },
                            "customIcon": {
                              
                            }
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          "context": "seo-data-c9430281-2cea-4a0b-8b42-9b190a674fc9"
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/the-pasta-co-kadri-village-lalbagh-mangaluru-746188",
                          "text": "RESTAURANT_MENU",
                          "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                      },
                      {
                        "info": {
                          "id": "98668",
                          "name": "The Leela's kitchen",
                          "cloudinaryImageId": "p7crtx9ydfwkwqrbkbj8",
                          "locality": "Derebail",
                          "areaName": "Lalbagh",
                          "costForTwo": "₹250 for two",
                          "cuisines": [
                            "Chinese",
                            "North Indian",
                            "South Indian",
                            "Ice Cream",
                            "Biryani"
                          ],
                          "avgRating": 4.2,
                          "parentId": "15779",
                          "avgRatingString": "4.2",
                          "totalRatingsString": "10K+",
                          "sla": {
                            "deliveryTime": 29,
                            "lastMileTravel": 3,
                            "serviceability": "SERVICEABLE",
                            "slaString": "25-30 mins",
                            "lastMileTravelString": "3.0 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-23 23:45:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "₹125 OFF",
                            "subHeader": "ABOVE ₹199",
                            "discountTag": "FLAT DEAL"
                          },
                          "orderabilityCommunication": {
                            "title": {
                              
                            },
                            "subTitle": {
                              
                            },
                            "message": {
                              
                            },
                            "customIcon": {
                              
                            }
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          "context": "seo-data-c9430281-2cea-4a0b-8b42-9b190a674fc9"
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/the-leelas-kitchen-derebail-lalbagh-mangaluru-98668",
                          "text": "RESTAURANT_MENU",
                          "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                      },
                      {
                        "info": {
                          "id": "364949",
                          "name": "The Good Bowl",
                          "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
                          "locality": "Balmatta road",
                          "areaName": "Balmatta",
                          "costForTwo": "₹400 for two",
                          "cuisines": [
                            "Biryani",
                            "North Indian",
                            "Pastas",
                            "Punjabi",
                            "Desserts",
                            "Beverages"
                          ],
                          "avgRating": 4.4,
                          "parentId": "7918",
                          "avgRatingString": "4.4",
                          "totalRatingsString": "1K+",
                          "sla": {
                            "deliveryTime": 36,
                            "lastMileTravel": 7.9,
                            "serviceability": "SERVICEABLE",
                            "slaString": "35-40 mins",
                            "lastMileTravelString": "7.9 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-23 23:59:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "60% OFF",
                            "subHeader": "UPTO ₹110"
                          },
                          "orderabilityCommunication": {
                            "title": {
                              
                            },
                            "subTitle": {
                              
                            },
                            "message": {
                              
                            },
                            "customIcon": {
                              
                            }
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          "context": "seo-data-c9430281-2cea-4a0b-8b42-9b190a674fc9"
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/the-good-bowl-road-balmatta-mangaluru-364949",
                          "text": "RESTAURANT_MENU",
                          "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                      },
                      {
                        "info": {
                          "id": "82858",
                          "name": "Bombay Lucky Restaurant",
                          "cloudinaryImageId": "j5p3aiqci22sqrpgg9sx",
                          "locality": "Mohammed Ali Road",
                          "areaName": "Bunder",
                          "costForTwo": "₹300 for two",
                          "cuisines": [
                            "Chinese",
                            "North Indian",
                            "South Indian",
                            "Ice Cream",
                            "Biryani"
                          ],
                          "avgRating": 4.3,
                          "parentId": "12804",
                          "avgRatingString": "4.3",
                          "totalRatingsString": "5K+",
                          "sla": {
                            "deliveryTime": 31,
                            "lastMileTravel": 8.4,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30-35 mins",
                            "lastMileTravelString": "8.4 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-24 00:00:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "aggregatedDiscountInfoV2": {
                            
                          },
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "orderabilityCommunication": {
                            "title": {
                              
                            },
                            "subTitle": {
                              
                            },
                            "message": {
                              
                            },
                            "customIcon": {
                              
                            }
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          "context": "seo-data-c9430281-2cea-4a0b-8b42-9b190a674fc9"
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/bombay-lucky-restaurant-mohammed-ali-road-bunder-mangaluru-82858",
                          "text": "RESTAURANT_MENU",
                          "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                      },
                      {
                        "info": {
                          "id": "769989",
                          "name": "the menu kitchen",
                          "cloudinaryImageId": "71f95af64cc899103d040aa28bc1d44c",
                          "locality": "Don Bosco Hall Cross Road",
                          "areaName": "Lalbagh",
                          "costForTwo": "₹250 for two",
                          "cuisines": [
                            "Biryani",
                            "Chinese",
                            "Snacks"
                          ],
                          "avgRating": 4.4,
                          "parentId": "461697",
                          "avgRatingString": "4.4",
                          "totalRatingsString": "500+",
                          "sla": {
                            "deliveryTime": 35,
                            "lastMileTravel": 8.2,
                            "serviceability": "SERVICEABLE",
                            "slaString": "35-40 mins",
                            "lastMileTravelString": "8.2 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-24 04:00:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "60% OFF",
                            "subHeader": "UPTO ₹120"
                          },
                          "orderabilityCommunication": {
                            "title": {
                              
                            },
                            "subTitle": {
                              
                            },
                            "message": {
                              
                            },
                            "customIcon": {
                              
                            }
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "isNewlyOnboarded": true,
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          "context": "seo-data-c9430281-2cea-4a0b-8b42-9b190a674fc9"
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/the-menu-kitchen-don-bosco-hall-cross-road-lalbagh-mangaluru-769989",
                          "text": "RESTAURANT_MENU",
                          "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                      },
                      {
                        "info": {
                          "id": "99531",
                          "name": "The Belgian Waffle Co.",
                          "cloudinaryImageId": "5116a385bac0548e06c33c08350fbf11",
                          "locality": "Light House Hill Road",
                          "areaName": "KS Rao Nagar",
                          "costForTwo": "₹200 for two",
                          "cuisines": [
                            "Waffle",
                            "Desserts",
                            "Ice Cream",
                            "Beverages"
                          ],
                          "avgRating": 4.7,
                          "veg": true,
                          "parentId": "2233",
                          "avgRatingString": "4.7",
                          "totalRatingsString": "5K+",
                          "sla": {
                            "deliveryTime": 33,
                            "lastMileTravel": 6.9,
                            "serviceability": "SERVICEABLE",
                            "slaString": "30-35 mins",
                            "lastMileTravelString": "6.9 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-24 00:30:00",
                            "opened": true
                          },
                          "badges": {
                            "imageBadges": [
                              {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                              }
                            ]
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                "badgeObject": [
                                  {
                                    "attributes": {
                                      "description": "pureveg",
                                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                  }
                                ]
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "20% OFF",
                            "subHeader": "UPTO ₹50"
                          },
                          "orderabilityCommunication": {
                            "title": {
                              
                            },
                            "subTitle": {
                              
                            },
                            "message": {
                              
                            },
                            "customIcon": {
                              
                            }
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          "context": "seo-data-c9430281-2cea-4a0b-8b42-9b190a674fc9"
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/the-belgian-waffle-co-light-house-hill-road-ks-rao-nagar-mangaluru-99531",
                          "text": "RESTAURANT_MENU",
                          "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                      },
                      {
                        "info": {
                          "id": "364948",
                          "name": "LunchBox - Meals and Thalis",
                          "cloudinaryImageId": "rtlfg1csfrg2691e56wt",
                          "locality": "Balmatta road",
                          "areaName": "Hampankatta",
                          "costForTwo": "₹200 for two",
                          "cuisines": [
                            "Biryani",
                            "North Indian",
                            "Punjabi",
                            "Healthy Food",
                            "Desserts",
                            "Beverages"
                          ],
                          "avgRating": 4.4,
                          "parentId": "4925",
                          "avgRatingString": "4.4",
                          "totalRatingsString": "5K+",
                          "sla": {
                            "deliveryTime": 35,
                            "lastMileTravel": 7.9,
                            "serviceability": "SERVICEABLE",
                            "slaString": "35-40 mins",
                            "lastMileTravelString": "7.9 km",
                            "iconType": "ICON_TYPE_EMPTY"
                          },
                          "availability": {
                            "nextCloseTime": "2024-03-23 23:59:00",
                            "opened": true
                          },
                          "badges": {
                            
                          },
                          "isOpen": true,
                          "type": "F",
                          "badgesV2": {
                            "entityBadges": {
                              "imageBased": {
                                
                              },
                              "textBased": {
                                
                              },
                              "textExtendedBadges": {
                                
                              }
                            }
                          },
                          "aggregatedDiscountInfoV3": {
                            "header": "ITEMS",
                            "subHeader": "AT ₹159"
                          },
                          "orderabilityCommunication": {
                            "title": {
                              
                            },
                            "subTitle": {
                              
                            },
                            "message": {
                              
                            },
                            "customIcon": {
                              
                            }
                          },
                          "differentiatedUi": {
                            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                            "differentiatedUiMediaDetails": {
                              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                              "lottie": {
                                
                              },
                              "video": {
                                
                              }
                            }
                          },
                          "reviewsSummary": {
                            
                          },
                          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                          "restaurantOfferPresentationInfo": {
                            
                          }
                        },
                        "analytics": {
                          "context": "seo-data-c9430281-2cea-4a0b-8b42-9b190a674fc9"
                        },
                        "cta": {
                          "link": "https://www.swiggy.com/restaurants/lunchbox-meals-and-thalis-balmatta-road-hampankatta-mangaluru-364948",
                          "text": "RESTAURANT_MENU",
                          "type": "WEBLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                      }
                    ],
                    "theme": "SeoRestaurantListingGridWidget"
                  }
                }
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "type.googleapis.com/swiggy.seo.widgets.v1.ShowMoreButton",
                "message": "Show More",
                "id": "show_more_button"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
                "title": "Best Places to Eat Across Cities",
                "brands": [
                  {
                    "text": "Best Restaurants in Bangalore",
                    "link": "https://www.swiggy.com/city/bangalore/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Pune",
                    "link": "https://www.swiggy.com/city/pune/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Mumbai",
                    "link": "https://www.swiggy.com/city/mumbai/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Delhi",
                    "link": "https://www.swiggy.com/city/delhi/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Hyderabad",
                    "link": "https://www.swiggy.com/city/hyderabad/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Kolkata",
                    "link": "https://www.swiggy.com/city/kolkata/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Chennai",
                    "link": "https://www.swiggy.com/city/chennai/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Chandigarh",
                    "link": "https://www.swiggy.com/city/chandigarh/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Ahmedabad",
                    "link": "https://www.swiggy.com/city/ahmedabad/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Jaipur",
                    "link": "https://www.swiggy.com/city/jaipur/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Nagpur",
                    "link": "https://www.swiggy.com/city/nagpur/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Bhubaneswar",
                    "link": "https://www.swiggy.com/city/bhubaneswar/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Kochi",
                    "link": "https://www.swiggy.com/city/kochi/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Surat",
                    "link": "https://www.swiggy.com/city/surat/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Dehradun",
                    "link": "https://www.swiggy.com/city/dehradun/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Ludhiana",
                    "link": "https://www.swiggy.com/city/ludhiana/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Patna",
                    "link": "https://www.swiggy.com/city/patna/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Mangaluru",
                    "link": "https://www.swiggy.com/city/mangaluru/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Bhopal",
                    "link": "https://www.swiggy.com/city/bhopal/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Gurgaon",
                    "link": "https://www.swiggy.com/city/gurgaon/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Coimbatore",
                    "link": "https://www.swiggy.com/city/coimbatore/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Agra",
                    "link": "https://www.swiggy.com/city/agra/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Noida",
                    "link": "https://www.swiggy.com/city/noida/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Vijayawada",
                    "link": "https://www.swiggy.com/city/vijayawada/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Guwahati",
                    "link": "https://www.swiggy.com/city/guwahati/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Mysore",
                    "link": "https://www.swiggy.com/city/mysore/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Pondicherry",
                    "link": "https://www.swiggy.com/city/pondicherry/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Thiruvananthapuram",
                    "link": "https://www.swiggy.com/city/thiruvananthapuram/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Ranchi",
                    "link": "https://www.swiggy.com/city/ranchi/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Vizag",
                    "link": "https://www.swiggy.com/city/vizag/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Udaipur",
                    "link": "https://www.swiggy.com/city/udaipur/best-restaurants"
                  },
                  {
                    "text": "Best Restaurants in Vadodara",
                    "link": "https://www.swiggy.com/city/vadodara/best-restaurants"
                  }
                ],
                "id": "restaurant_near_me_links"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
                "title": "Best Cuisines Near Me",
                "brands": [
                  {
                    "text": "Chinese Restaurant Near Me",
                    "link": "https://www.swiggy.com/chinese-restaurants-near-me"
                  },
                  {
                    "text": "South Indian Restaurant Near Me",
                    "link": "https://www.swiggy.com/south-indian-restaurants-near-me"
                  },
                  {
                    "text": "Indian Restaurant Near Me",
                    "link": "https://www.swiggy.com/indian-restaurants-near-me"
                  },
                  {
                    "text": "Kerala Restaurant Near Me",
                    "link": "https://www.swiggy.com/kerala-restaurants-near-me"
                  },
                  {
                    "text": "Korean Restaurant Near Me",
                    "link": "https://www.swiggy.com/korean-restaurants-near-me"
                  },
                  {
                    "text": "North Indian Restaurant Near Me",
                    "link": "https://www.swiggy.com/north-indian-restaurants-near-me"
                  },
                  {
                    "text": "Seafood Restaurant Near Me",
                    "link": "https://www.swiggy.com/seafood-restaurants-near-me"
                  },
                  {
                    "text": "Bengali Restaurant Near Me",
                    "link": "https://www.swiggy.com/bengali-restaurants-near-me"
                  },
                  {
                    "text": "Punjabi Restaurant Near Me",
                    "link": "https://www.swiggy.com/punjabi-restaurants-near-me"
                  },
                  {
                    "text": "Italian Restaurant Near Me",
                    "link": "https://www.swiggy.com/italian-restaurants-near-me"
                  },
                  {
                    "text": "Andhra Restaurant Near Me",
                    "link": "https://www.swiggy.com/andhra-restaurants-near-me"
                  },
                  {
                    "text": "Biryani Restaurant Near Me",
                    "link": "https://www.swiggy.com/biryani-restaurants-near-me"
                  },
                  {
                    "text": "Japanese Restaurant Near Me",
                    "link": "https://www.swiggy.com/japanese-restaurants-near-me"
                  },
                  {
                    "text": "Arabian Restaurant Near Me",
                    "link": "https://www.swiggy.com/arabian-restaurants-near-me"
                  },
                  {
                    "text": "Fast Food Restaurant Near Me",
                    "link": "https://www.swiggy.com/fast-food-restaurants-near-me"
                  },
                  {
                    "text": "Jain Restaurant Near Me",
                    "link": "https://www.swiggy.com/jain-restaurants-near-me"
                  },
                  {
                    "text": "Gujarati Restaurant Near Me",
                    "link": "https://www.swiggy.com/gujarati-restaurants-near-me"
                  },
                  {
                    "text": "Thai Restaurant Near Me",
                    "link": "https://www.swiggy.com/thai-restaurants-near-me"
                  },
                  {
                    "text": "Pizzas Restaurant Near Me",
                    "link": "https://www.swiggy.com/pizzas-restaurants-near-me"
                  },
                  {
                    "text": "Asian Restaurant Near Me",
                    "link": "https://www.swiggy.com/asian-restaurants-near-me"
                  },
                  {
                    "text": "Cafe Restaurant Near Me",
                    "link": "https://www.swiggy.com/cafe-restaurants-near-me"
                  },
                  {
                    "text": "Continental Restaurant Near Me",
                    "link": "https://www.swiggy.com/continental-restaurants-near-me"
                  },
                  {
                    "text": "Mexican Restaurant Near Me",
                    "link": "https://www.swiggy.com/mexican-restaurants-near-me"
                  },
                  {
                    "text": "Mughlai Restaurant Near Me",
                    "link": "https://www.swiggy.com/mughlai-restaurants-near-me"
                  },
                  {
                    "text": "Sushi Restaurant Near Me",
                    "link": "https://www.swiggy.com/sushi-restaurants-near-me"
                  },
                  {
                    "text": "Mangalorean Restaurant Near Me",
                    "link": "https://www.swiggy.com/mangalorean-restaurants-near-me"
                  },
                  {
                    "text": "Tibetan Restaurant Near Me",
                    "link": "https://www.swiggy.com/tibetan-restaurants-near-me"
                  },
                  {
                    "text": "Barbecue Restaurant Near Me",
                    "link": "https://www.swiggy.com/barbecue-restaurants-near-me"
                  },
                  {
                    "text": "Maharashtrian Restaurant Near Me",
                    "link": "https://www.swiggy.com/maharashtrian-restaurants-near-me"
                  },
                  {
                    "text": "Nepalese Restaurant Near Me",
                    "link": "https://www.swiggy.com/nepalese-restaurants-near-me"
                  },
                  {
                    "text": "Rajasthani Restaurant Near Me",
                    "link": "https://www.swiggy.com/rajasthani-restaurants-near-me"
                  },
                  {
                    "text": "Turkish Restaurant Near Me",
                    "link": "https://www.swiggy.com/turkish-restaurants-near-me"
                  }
                ],
                "id": "restaurant_near_me_links"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BrandsContent",
                "title": "Explore Every Restaurants Near Me",
                "brands": [
                  {
                    "text": "Explore Restaurants Near Me",
                    "link": "https://www.swiggy.com/restaurants-near-me"
                  },
                  {
                    "text": "Explore Top Rated Restaurants Near Me",
                    "link": "https://www.swiggy.com/best-restaurants-near-me"
                  }
                ],
                "id": "restaurant_near_me_links"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "type.googleapis.com/swiggy.seo.widgets.v1.AppInstallLinks",
                "title": "For better experience,download the Swiggy app now",
                "androidAppImage": "portal/m/play_store.png",
                "androidAppLink": "https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader",
                "iosAppImage": "portal/m/app_store.png",
                "iosAppLink": "https://itunes.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage",
                "id": "app_install_links"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "type.googleapis.com/swiggy.seo.widgets.v1.FooterContent",
                "cities": [
                  {
                    "text": "Bangalore",
                    "link": "https://www.swiggy.com/city/bangalore"
                  },
                  {
                    "text": "Gurgaon",
                    "link": "https://www.swiggy.com/city/gurgaon"
                  },
                  {
                    "text": "Hyderabad",
                    "link": "https://www.swiggy.com/city/hyderabad"
                  },
                  {
                    "text": "Delhi",
                    "link": "https://www.swiggy.com/city/delhi"
                  },
                  {
                    "text": "Mumbai",
                    "link": "https://www.swiggy.com/city/mumbai"
                  },
                  {
                    "text": "Pune",
                    "link": "https://www.swiggy.com/city/pune"
                  },
                  {
                    "text": "Kolkata",
                    "link": "https://www.swiggy.com/city/kolkata"
                  },
                  {
                    "text": "Chennai",
                    "link": "https://www.swiggy.com/city/chennai"
                  },
                  {
                    "text": "Ahmedabad",
                    "link": "https://www.swiggy.com/city/ahmedabad"
                  },
                  {
                    "text": "Chandigarh",
                    "link": "https://www.swiggy.com/city/chandigarh"
                  },
                  {
                    "text": "Jaipur",
                    "link": "https://www.swiggy.com/city/jaipur"
                  },
                  {
                    "text": "Kochi",
                    "link": "https://www.swiggy.com/city/kochi"
                  },
                  {
                    "text": "Coimbatore",
                    "link": "https://www.swiggy.com/city/coimbatore"
                  },
                  {
                    "text": "Lucknow",
                    "link": "https://www.swiggy.com/city/lucknow"
                  },
                  {
                    "text": "Nagpur",
                    "link": "https://www.swiggy.com/city/nagpur"
                  },
                  {
                    "text": "Vadodara",
                    "link": "https://www.swiggy.com/city/vadodara"
                  },
                  {
                    "text": "Indore",
                    "link": "https://www.swiggy.com/city/indore"
                  },
                  {
                    "text": "Guwahati",
                    "link": "https://www.swiggy.com/city/guwahati"
                  },
                  {
                    "text": "Vizag",
                    "link": "https://www.swiggy.com/city/vizag"
                  },
                  {
                    "text": "Surat",
                    "link": "https://www.swiggy.com/city/surat"
                  },
                  {
                    "text": "Dehradun",
                    "link": "https://www.swiggy.com/city/dehradun"
                  },
                  {
                    "text": "Noida",
                    "link": "https://www.swiggy.com/city/noida"
                  },
                  {
                    "text": "Ludhiana",
                    "link": "https://www.swiggy.com/city/ludhiana"
                  },
                  {
                    "text": "Trichy",
                    "link": "https://www.swiggy.com/city/trichy"
                  },
                  {
                    "text": "Vijayawada",
                    "link": "https://www.swiggy.com/city/vijayawada"
                  },
                  {
                    "text": "Kanpur",
                    "link": "https://www.swiggy.com/city/kanpur"
                  },
                  {
                    "text": "Mysore",
                    "link": "https://www.swiggy.com/city/mysore"
                  },
                  {
                    "text": "Nashik",
                    "link": "https://www.swiggy.com/city/nashik"
                  },
                  {
                    "text": "Udaipur",
                    "link": "https://www.swiggy.com/city/udaipur"
                  },
                  {
                    "text": "Pondicherry",
                    "link": "https://www.swiggy.com/city/pondicherry"
                  },
                  {
                    "text": "Agra",
                    "link": "https://www.swiggy.com/city/agra"
                  },
                  {
                    "text": "Aurangabad",
                    "link": "https://www.swiggy.com/city/aurangabad"
                  },
                  {
                    "text": "Jalandhar",
                    "link": "https://www.swiggy.com/city/jalandhar"
                  },
                  {
                    "text": "Kota",
                    "link": "https://www.swiggy.com/city/kota"
                  },
                  {
                    "text": "Madurai",
                    "link": "https://www.swiggy.com/city/madurai"
                  },
                  {
                    "text": "Allahabad",
                    "link": "https://www.swiggy.com/city/allahabad"
                  },
                  {
                    "text": "Manipal",
                    "link": "https://www.swiggy.com/city/manipal"
                  },
                  {
                    "text": "Amritsar",
                    "link": "https://www.swiggy.com/city/amritsar"
                  },
                  {
                    "text": "Bareilly",
                    "link": "https://www.swiggy.com/city/bareilly"
                  },
                  {
                    "text": "Meerut",
                    "link": "https://www.swiggy.com/city/meerut"
                  },
                  {
                    "text": "Bhopal",
                    "link": "https://www.swiggy.com/city/bhopal"
                  },
                  {
                    "text": "Ooty",
                    "link": "https://www.swiggy.com/city/ooty"
                  },
                  {
                    "text": "Bhubaneswar",
                    "link": "https://www.swiggy.com/city/bhubaneswar"
                  },
                  {
                    "text": "Raipur",
                    "link": "https://www.swiggy.com/city/raipur"
                  },
                  {
                    "text": "Bikaner",
                    "link": "https://www.swiggy.com/city/bikaner"
                  },
                  {
                    "text": "Rajkot",
                    "link": "https://www.swiggy.com/city/rajkot"
                  },
                  {
                    "text": "Kozhikode",
                    "link": "https://www.swiggy.com/city/kozhikode"
                  },
                  {
                    "text": "Central Goa",
                    "link": "https://www.swiggy.com/city/central-goa"
                  },
                  {
                    "text": "Sirsa",
                    "link": "https://www.swiggy.com/city/sirsa"
                  },
                  {
                    "text": "Gwalior",
                    "link": "https://www.swiggy.com/city/gwalior"
                  },
                  {
                    "text": "Thrissur",
                    "link": "https://www.swiggy.com/city/thrissur"
                  },
                  {
                    "text": "Kharagpur",
                    "link": "https://www.swiggy.com/city/kharagpur"
                  },
                  {
                    "text": "Tirupati",
                    "link": "https://www.swiggy.com/city/tirupati"
                  },
                  {
                    "text": "Tirupur",
                    "link": "https://www.swiggy.com/city/tirupur"
                  },
                  {
                    "text": "Vellore",
                    "link": "https://www.swiggy.com/city/vellore"
                  },
                  {
                    "text": "Thiruvananthapuram",
                    "link": "https://www.swiggy.com/city/thiruvananthapuram"
                  },
                  {
                    "text": "Warangal",
                    "link": "https://www.swiggy.com/city/warangal"
                  },
                  {
                    "text": "Varanasi",
                    "link": "https://www.swiggy.com/city/varanasi"
                  },
                  {
                    "text": "Mangaluru",
                    "link": "https://www.swiggy.com/city/mangaluru"
                  },
                  {
                    "text": "Patna",
                    "link": "https://www.swiggy.com/city/patna"
                  },
                  {
                    "text": "Ranchi",
                    "link": "https://www.swiggy.com/city/ranchi"
                  },
                  {
                    "text": "Faridabad",
                    "link": "https://www.swiggy.com/city/faridabad"
                  },
                  {
                    "text": "Guntur",
                    "link": "https://www.swiggy.com/city/guntur"
                  },
                  {
                    "text": "Ujjain",
                    "link": "https://www.swiggy.com/city/ujjain"
                  },
                  {
                    "text": "Patiala",
                    "link": "https://www.swiggy.com/city/patiala"
                  },
                  {
                    "text": "Karnal",
                    "link": "https://www.swiggy.com/city/karnal"
                  },
                  {
                    "text": "Kakinada",
                    "link": "https://www.swiggy.com/city/kakinada"
                  },
                  {
                    "text": "Rajahmundry",
                    "link": "https://www.swiggy.com/city/rajahmundry"
                  },
                  {
                    "text": "Bilaspur",
                    "link": "https://www.swiggy.com/city/bilaspur"
                  },
                  {
                    "text": "Bhilai",
                    "link": "https://www.swiggy.com/city/bhilai"
                  },
                  {
                    "text": "Anand",
                    "link": "https://www.swiggy.com/city/anand"
                  },
                  {
                    "text": "Bhavnagar",
                    "link": "https://www.swiggy.com/city/bhavnagar"
                  },
                  {
                    "text": "Jammu",
                    "link": "https://www.swiggy.com/city/jammu"
                  },
                  {
                    "text": "Muktsar",
                    "link": "https://www.swiggy.com/city/muktsar"
                  },
                  {
                    "text": "Panipat",
                    "link": "https://www.swiggy.com/city/panipat"
                  },
                  {
                    "text": "Dhanbad",
                    "link": "https://www.swiggy.com/city/dhanbad"
                  },
                  {
                    "text": "Hubli",
                    "link": "https://www.swiggy.com/city/hubli"
                  },
                  {
                    "text": "Belgaum",
                    "link": "https://www.swiggy.com/city/belgaum"
                  },
                  {
                    "text": "Jabalpur",
                    "link": "https://www.swiggy.com/city/jabalpur"
                  },
                  {
                    "text": "Kolhapur",
                    "link": "https://www.swiggy.com/city/kolhapur"
                  },
                  {
                    "text": "Solapur",
                    "link": "https://www.swiggy.com/city/solapur"
                  },
                  {
                    "text": "Shillong",
                    "link": "https://www.swiggy.com/city/shillong"
                  },
                  {
                    "text": "Cuttack",
                    "link": "https://www.swiggy.com/city/cuttack"
                  },
                  {
                    "text": "Aligarh",
                    "link": "https://www.swiggy.com/city/aligarh"
                  },
                  {
                    "text": "Salem",
                    "link": "https://www.swiggy.com/city/salem"
                  },
                  {
                    "text": "Jodhpur",
                    "link": "https://www.swiggy.com/city/jodhpur"
                  },
                  {
                    "text": "Ajmer",
                    "link": "https://www.swiggy.com/city/ajmer"
                  },
                  {
                    "text": "Jhansi",
                    "link": "https://www.swiggy.com/city/jhansi"
                  },
                  {
                    "text": "Gorakhpur",
                    "link": "https://www.swiggy.com/city/gorakhpur"
                  },
                  {
                    "text": "Thanjavur",
                    "link": "https://www.swiggy.com/city/thanjavur"
                  },
                  {
                    "text": "Erode",
                    "link": "https://www.swiggy.com/city/erode"
                  },
                  {
                    "text": "Nellore",
                    "link": "https://www.swiggy.com/city/nellore"
                  },
                  {
                    "text": "Rourkela",
                    "link": "https://www.swiggy.com/city/rourkela"
                  },
                  {
                    "text": "Anantapur",
                    "link": "https://www.swiggy.com/city/anantapur"
                  },
                  {
                    "text": "Kurnool",
                    "link": "https://www.swiggy.com/city/kurnool"
                  },
                  {
                    "text": "Ahmednagar",
                    "link": "https://www.swiggy.com/city/ahmednagar"
                  },
                  {
                    "text": "Phagwara",
                    "link": "https://www.swiggy.com/city/phagwara"
                  },
                  {
                    "text": "Ambala",
                    "link": "https://www.swiggy.com/city/ambala"
                  },
                  {
                    "text": "Ballari",
                    "link": "https://www.swiggy.com/city/ballari"
                  },
                  {
                    "text": "Saharanpur",
                    "link": "https://www.swiggy.com/city/saharanpur"
                  },
                  {
                    "text": "Tirunelveli",
                    "link": "https://www.swiggy.com/city/tirunelveli"
                  },
                  {
                    "text": "Bathinda",
                    "link": "https://www.swiggy.com/city/bathinda"
                  },
                  {
                    "text": "Mathura",
                    "link": "https://www.swiggy.com/city/mathura"
                  },
                  {
                    "text": "Haridwar",
                    "link": "https://www.swiggy.com/city/haridwar"
                  },
                  {
                    "text": "Ratnagiri",
                    "link": "https://www.swiggy.com/city/ratnagiri"
                  },
                  {
                    "text": "Sangli",
                    "link": "https://www.swiggy.com/city/sangli"
                  },
                  {
                    "text": "Amravati",
                    "link": "https://www.swiggy.com/city/amravati"
                  },
                  {
                    "text": "Rishikesh",
                    "link": "https://www.swiggy.com/city/rishikesh"
                  },
                  {
                    "text": "Nagercoil",
                    "link": "https://www.swiggy.com/city/nagercoil"
                  },
                  {
                    "text": "KanyaKumari",
                    "link": "https://www.swiggy.com/city/kanyakumari"
                  },
                  {
                    "text": "Kadapa",
                    "link": "https://www.swiggy.com/city/kadapa"
                  },
                  {
                    "text": "Nizamabad",
                    "link": "https://www.swiggy.com/city/nizamabad"
                  },
                  {
                    "text": "Shivamogga",
                    "link": "https://www.swiggy.com/city/shivamogga"
                  },
                  {
                    "text": "Davanagere",
                    "link": "https://www.swiggy.com/city/davanagere"
                  },
                  {
                    "text": "Roorkee",
                    "link": "https://www.swiggy.com/city/roorkee"
                  },
                  {
                    "text": "Nanded",
                    "link": "https://www.swiggy.com/city/nanded"
                  },
                  {
                    "text": "Rewa",
                    "link": "https://www.swiggy.com/city/rewa"
                  },
                  {
                    "text": "Satna",
                    "link": "https://www.swiggy.com/city/satna"
                  },
                  {
                    "text": "Muzaffarpur",
                    "link": "https://www.swiggy.com/city/muzaffarpur"
                  },
                  {
                    "text": "Valsad",
                    "link": "https://www.swiggy.com/city/valsad"
                  },
                  {
                    "text": "Vapi",
                    "link": "https://www.swiggy.com/city/vapi"
                  },
                  {
                    "text": "Chhapra",
                    "link": "https://www.swiggy.com/city/chhapra"
                  },
                  {
                    "text": "Dharamshala",
                    "link": "https://www.swiggy.com/city/dharamshala"
                  },
                  {
                    "text": "Kollam",
                    "link": "https://www.swiggy.com/city/kollam"
                  },
                  {
                    "text": "Silchar",
                    "link": "https://www.swiggy.com/city/silchar"
                  },
                  {
                    "text": "Alappuzha",
                    "link": "https://www.swiggy.com/city/alappuzha"
                  },
                  {
                    "text": "Sonipat",
                    "link": "https://www.swiggy.com/city/sonipat"
                  },
                  {
                    "text": "Rohtak",
                    "link": "https://www.swiggy.com/city/rohtak"
                  },
                  {
                    "text": "Mehsana",
                    "link": "https://www.swiggy.com/city/mehsana"
                  },
                  {
                    "text": "Kullu",
                    "link": "https://www.swiggy.com/city/kullu"
                  },
                  {
                    "text": "Dhule",
                    "link": "https://www.swiggy.com/city/dhule"
                  },
                  {
                    "text": "Dharwad",
                    "link": "https://www.swiggy.com/city/dharwad"
                  },
                  {
                    "text": "Latur",
                    "link": "https://www.swiggy.com/city/latur"
                  },
                  {
                    "text": "Vizianagaram",
                    "link": "https://www.swiggy.com/city/vizianagaram"
                  },
                  {
                    "text": "Khammam",
                    "link": "https://www.swiggy.com/city/khammam"
                  },
                  {
                    "text": "Hampi",
                    "link": "https://www.swiggy.com/city/hampi"
                  },
                  {
                    "text": "Nainital",
                    "link": "https://www.swiggy.com/city/nainital"
                  },
                  {
                    "text": "Akola",
                    "link": "https://www.swiggy.com/city/akola"
                  },
                  {
                    "text": "Kalaburagi",
                    "link": "https://www.swiggy.com/city/kalaburagi"
                  },
                  {
                    "text": "Gaya",
                    "link": "https://www.swiggy.com/city/gaya"
                  },
                  {
                    "text": "Muzaffarnagar",
                    "link": "https://www.swiggy.com/city/muzaffarnagar"
                  },
                  {
                    "text": "Dewas",
                    "link": "https://www.swiggy.com/city/dewas"
                  },
                  {
                    "text": "Korba",
                    "link": "https://www.swiggy.com/city/korba"
                  },
                  {
                    "text": "Mussoorie",
                    "link": "https://www.swiggy.com/city/mussoorie"
                  },
                  {
                    "text": "Jalgaon",
                    "link": "https://www.swiggy.com/city/jalgaon"
                  },
                  {
                    "text": "Yamuna Nagar",
                    "link": "https://www.swiggy.com/city/yamuna-nagar"
                  },
                  {
                    "text": "Bhagalpur",
                    "link": "https://www.swiggy.com/city/bhagalpur"
                  },
                  {
                    "text": "Hapur",
                    "link": "https://www.swiggy.com/city/hapur"
                  },
                  {
                    "text": "Morena",
                    "link": "https://www.swiggy.com/city/morena"
                  },
                  {
                    "text": "Hassan",
                    "link": "https://www.swiggy.com/city/hassan"
                  },
                  {
                    "text": "Hisar",
                    "link": "https://www.swiggy.com/city/hisar"
                  },
                  {
                    "text": "Godhra",
                    "link": "https://www.swiggy.com/city/godhra"
                  },
                  {
                    "text": "Kolar ",
                    "link": "https://www.swiggy.com/city/kolar"
                  },
                  {
                    "text": "Rampur",
                    "link": "https://www.swiggy.com/city/rampur"
                  },
                  {
                    "text": "Sitapur",
                    "link": "https://www.swiggy.com/city/sitapur"
                  },
                  {
                    "text": "Etawah",
                    "link": "https://www.swiggy.com/city/etawah"
                  },
                  {
                    "text": "Porbandar",
                    "link": "https://www.swiggy.com/city/porbandar"
                  },
                  {
                    "text": "Nadiad",
                    "link": "https://www.swiggy.com/city/nadiad"
                  },
                  {
                    "text": "Sagar",
                    "link": "https://www.swiggy.com/city/sagar"
                  },
                  {
                    "text": "Morbi",
                    "link": "https://www.swiggy.com/city/morbi"
                  },
                  {
                    "text": "Chhindwara",
                    "link": "https://www.swiggy.com/city/chhindwara"
                  },
                  {
                    "text": "Tumakuru",
                    "link": "https://www.swiggy.com/city/tumakuru"
                  },
                  {
                    "text": "Singrauli",
                    "link": "https://www.swiggy.com/city/singrauli"
                  },
                  {
                    "text": "Thoothukudi",
                    "link": "https://www.swiggy.com/city/thoothukudi"
                  },
                  {
                    "text": "Katni",
                    "link": "https://www.swiggy.com/city/katni"
                  },
                  {
                    "text": "Khandwa",
                    "link": "https://www.swiggy.com/city/khandwa"
                  },
                  {
                    "text": "Eluru",
                    "link": "https://www.swiggy.com/city/eluru"
                  },
                  {
                    "text": "Malappuram",
                    "link": "https://www.swiggy.com/city/malappuram"
                  },
                  {
                    "text": "Dibrugarh",
                    "link": "https://www.swiggy.com/city/dibrugarh"
                  },
                  {
                    "text": "Deoghar",
                    "link": "https://www.swiggy.com/city/deoghar"
                  },
                  {
                    "text": "Khanna",
                    "link": "https://www.swiggy.com/city/khanna"
                  },
                  {
                    "text": "Bidar",
                    "link": "https://www.swiggy.com/city/bidar"
                  },
                  {
                    "text": "Madikeri",
                    "link": "https://www.swiggy.com/city/madikeri"
                  },
                  {
                    "text": "Haldwani",
                    "link": "https://www.swiggy.com/city/haldwani"
                  },
                  {
                    "text": "Farrukhabad",
                    "link": "https://www.swiggy.com/city/farrukhabad"
                  },
                  {
                    "text": "Malegaon",
                    "link": "https://www.swiggy.com/city/malegaon"
                  },
                  {
                    "text": "Dindigul",
                    "link": "https://www.swiggy.com/city/dindigul"
                  },
                  {
                    "text": "Shahjahanpur",
                    "link": "https://www.swiggy.com/city/shahjahanpur"
                  },
                  {
                    "text": "Beed",
                    "link": "https://www.swiggy.com/city/beed"
                  },
                  {
                    "text": "Junagadh",
                    "link": "https://www.swiggy.com/city/junagadh"
                  },
                  {
                    "text": "Asansol",
                    "link": "https://www.swiggy.com/city/asansol"
                  },
                  {
                    "text": "Beawar",
                    "link": "https://www.swiggy.com/city/beawar"
                  },
                  {
                    "text": "Kishangarh",
                    "link": "https://www.swiggy.com/city/kishangarh"
                  },
                  {
                    "text": "Parbhani",
                    "link": "https://www.swiggy.com/city/parbhani"
                  },
                  {
                    "text": "Gondia",
                    "link": "https://www.swiggy.com/city/gondia"
                  },
                  {
                    "text": "Ichalkaranji",
                    "link": "https://www.swiggy.com/city/ichalkaranji"
                  },
                  {
                    "text": "Jalna",
                    "link": "https://www.swiggy.com/city/jalna"
                  },
                  {
                    "text": "Yavatmal",
                    "link": "https://www.swiggy.com/city/yavatmal"
                  },
                  {
                    "text": "Shivpuri",
                    "link": "https://www.swiggy.com/city/shivpuri"
                  },
                  {
                    "text": "Moga",
                    "link": "https://www.swiggy.com/city/moga"
                  },
                  {
                    "text": "Abohar",
                    "link": "https://www.swiggy.com/city/abohar"
                  },
                  {
                    "text": "Adoni",
                    "link": "https://www.swiggy.com/city/adoni"
                  },
                  {
                    "text": "Madanapalle",
                    "link": "https://www.swiggy.com/city/madanapalle"
                  },
                  {
                    "text": "Tiruvannamalai",
                    "link": "https://www.swiggy.com/city/tiruvannamalai"
                  },
                  {
                    "text": "Satara",
                    "link": "https://www.swiggy.com/city/satara"
                  },
                  {
                    "text": "Ambur",
                    "link": "https://www.swiggy.com/city/ambur"
                  },
                  {
                    "text": "Karimnagar",
                    "link": "https://www.swiggy.com/city/karimnagar"
                  },
                  {
                    "text": "Ratlam",
                    "link": "https://www.swiggy.com/city/ratlam"
                  },
                  {
                    "text": "Moradabad",
                    "link": "https://www.swiggy.com/city/moradabad"
                  },
                  {
                    "text": "Machilipatnam",
                    "link": "https://www.swiggy.com/city/machilipatnam"
                  },
                  {
                    "text": "Ongole",
                    "link": "https://www.swiggy.com/city/ongole"
                  },
                  {
                    "text": "Kottayam",
                    "link": "https://www.swiggy.com/city/kottayam"
                  },
                  {
                    "text": "Darbhanga",
                    "link": "https://www.swiggy.com/city/darbhanga"
                  },
                  {
                    "text": "Kurukshetra",
                    "link": "https://www.swiggy.com/city/kurukshetra"
                  },
                  {
                    "text": "Unnao",
                    "link": "https://www.swiggy.com/city/unnao"
                  },
                  {
                    "text": "Bulandshahr",
                    "link": "https://www.swiggy.com/city/bulandshahr"
                  },
                  {
                    "text": "Durgapur",
                    "link": "https://www.swiggy.com/city/durgapur"
                  },
                  {
                    "text": "Siliguri",
                    "link": "https://www.swiggy.com/city/siliguri"
                  },
                  {
                    "text": "Pali",
                    "link": "https://www.swiggy.com/city/pali"
                  },
                  {
                    "text": "Tadepalligudem",
                    "link": "https://www.swiggy.com/city/tadepalligudem"
                  },
                  {
                    "text": "Ramagundam",
                    "link": "https://www.swiggy.com/city/ramagundam"
                  },
                  {
                    "text": "Mahbubnagar",
                    "link": "https://www.swiggy.com/city/mahbubnagar"
                  },
                  {
                    "text": "Bhiwani",
                    "link": "https://www.swiggy.com/city/bhiwani"
                  },
                  {
                    "text": "Cuddalore",
                    "link": "https://www.swiggy.com/city/cuddalore"
                  },
                  {
                    "text": "Kaithal",
                    "link": "https://www.swiggy.com/city/kaithal"
                  },
                  {
                    "text": "Jagtial",
                    "link": "https://www.swiggy.com/city/jagtial"
                  },
                  {
                    "text": "Palakkad",
                    "link": "https://www.swiggy.com/city/palakkad"
                  },
                  {
                    "text": "Guna",
                    "link": "https://www.swiggy.com/city/guna"
                  },
                  {
                    "text": "Kumbakonam",
                    "link": "https://www.swiggy.com/city/kumbakonam"
                  },
                  {
                    "text": "Maunath Bhanjan",
                    "link": "https://www.swiggy.com/city/maunath-bhanjan"
                  },
                  {
                    "text": "Baripada",
                    "link": "https://www.swiggy.com/city/baripada"
                  },
                  {
                    "text": "Orai",
                    "link": "https://www.swiggy.com/city/orai"
                  },
                  {
                    "text": "Bhadrak",
                    "link": "https://www.swiggy.com/city/bhadrak"
                  },
                  {
                    "text": "Batala",
                    "link": "https://www.swiggy.com/city/batala"
                  },
                  {
                    "text": "Firozpur",
                    "link": "https://www.swiggy.com/city/firozpur"
                  },
                  {
                    "text": "Barnala",
                    "link": "https://www.swiggy.com/city/barnala"
                  },
                  {
                    "text": "Raigarh",
                    "link": "https://www.swiggy.com/city/raigarh"
                  },
                  {
                    "text": "Nagaon",
                    "link": "https://www.swiggy.com/city/nagaon"
                  },
                  {
                    "text": "Mainpuri",
                    "link": "https://www.swiggy.com/city/mainpuri"
                  },
                  {
                    "text": "Balurghat",
                    "link": "https://www.swiggy.com/city/balurghat"
                  },
                  {
                    "text": "Giridih",
                    "link": "https://www.swiggy.com/city/giridih"
                  },
                  {
                    "text": "Ghazipur",
                    "link": "https://www.swiggy.com/city/ghazipur"
                  },
                  {
                    "text": "Jagdalpur",
                    "link": "https://www.swiggy.com/city/jagdalpur"
                  },
                  {
                    "text": "Vidisha",
                    "link": "https://www.swiggy.com/city/vidisha"
                  },
                  {
                    "text": "Dimapur",
                    "link": "https://www.swiggy.com/city/dimapur"
                  },
                  {
                    "text": "Shikohabad",
                    "link": "https://www.swiggy.com/city/shikohabad"
                  },
                  {
                    "text": "Imphal",
                    "link": "https://www.swiggy.com/city/imphal"
                  },
                  {
                    "text": "Lakhimpur",
                    "link": "https://www.swiggy.com/city/lakhimpur"
                  },
                  {
                    "text": "Rudrapur",
                    "link": "https://www.swiggy.com/city/rudrapur"
                  },
                  {
                    "text": "Ambikapur",
                    "link": "https://www.swiggy.com/city/ambikapur"
                  },
                  {
                    "text": "Rae Bareli",
                    "link": "https://www.swiggy.com/city/rae-bareli"
                  },
                  {
                    "text": "Tinsukia",
                    "link": "https://www.swiggy.com/city/tinsukia"
                  },
                  {
                    "text": "Rajapalayam",
                    "link": "https://www.swiggy.com/city/rajapalayam"
                  },
                  {
                    "text": "Rajnandgaon",
                    "link": "https://www.swiggy.com/city/rajnandgaon"
                  },
                  {
                    "text": "Kashipur",
                    "link": "https://www.swiggy.com/city/kashipur"
                  },
                  {
                    "text": "Ranibennur",
                    "link": "https://www.swiggy.com/city/ranibennur"
                  },
                  {
                    "text": "Burhanpur",
                    "link": "https://www.swiggy.com/city/burhanpur"
                  },
                  {
                    "text": "Bhadravati",
                    "link": "https://www.swiggy.com/city/bhadravati"
                  },
                  {
                    "text": "Chittoor",
                    "link": "https://www.swiggy.com/city/chittoor"
                  },
                  {
                    "text": "Pudukkottai",
                    "link": "https://www.swiggy.com/city/pudukkottai"
                  },
                  {
                    "text": "Hardoi",
                    "link": "https://www.swiggy.com/city/hardoi"
                  },
                  {
                    "text": "Basti",
                    "link": "https://www.swiggy.com/city/basti"
                  },
                  {
                    "text": "Karaikkudi",
                    "link": "https://www.swiggy.com/city/karaikkudi"
                  },
                  {
                    "text": "Lalitpur",
                    "link": "https://www.swiggy.com/city/lalitpur"
                  },
                  {
                    "text": "Hospet",
                    "link": "https://www.swiggy.com/city/hospet"
                  },
                  {
                    "text": "Budaun",
                    "link": "https://www.swiggy.com/city/budaun"
                  },
                  {
                    "text": "Neemuch",
                    "link": "https://www.swiggy.com/city/neemuch"
                  },
                  {
                    "text": "Pilibhit",
                    "link": "https://www.swiggy.com/city/pilibhit"
                  },
                  {
                    "text": "Barshi",
                    "link": "https://www.swiggy.com/city/barshi"
                  },
                  {
                    "text": "Sri Ganganagar",
                    "link": "https://www.swiggy.com/city/sri-ganganagar"
                  },
                  {
                    "text": "Wardha",
                    "link": "https://www.swiggy.com/city/wardha"
                  },
                  {
                    "text": "Sehore",
                    "link": "https://www.swiggy.com/city/sehore"
                  },
                  {
                    "text": "Bhimavaram",
                    "link": "https://www.swiggy.com/city/bhimavaram"
                  },
                  {
                    "text": "Hanumangarh",
                    "link": "https://www.swiggy.com/city/hanumangarh"
                  },
                  {
                    "text": "Pathankot",
                    "link": "https://www.swiggy.com/city/pathankot"
                  },
                  {
                    "text": "Puri",
                    "link": "https://www.swiggy.com/city/puri"
                  },
                  {
                    "text": "Fatehpur",
                    "link": "https://www.swiggy.com/city/fatehpur"
                  },
                  {
                    "text": "Surendranagar Dudhrej",
                    "link": "https://www.swiggy.com/city/surendranagar-dudhrej"
                  },
                  {
                    "text": "Jamnagar",
                    "link": "https://www.swiggy.com/city/jamnagar"
                  },
                  {
                    "text": "Bhuj",
                    "link": "https://www.swiggy.com/city/bhuj"
                  },
                  {
                    "text": "Gandhidham",
                    "link": "https://www.swiggy.com/city/gandhidham"
                  },
                  {
                    "text": "Bharuch",
                    "link": "https://www.swiggy.com/city/bharuch"
                  },
                  {
                    "text": "Navsari",
                    "link": "https://www.swiggy.com/city/navsari"
                  },
                  {
                    "text": "Amreli",
                    "link": "https://www.swiggy.com/city/amreli"
                  },
                  {
                    "text": "Palanpur",
                    "link": "https://www.swiggy.com/city/palanpur"
                  },
                  {
                    "text": "Bhilwara",
                    "link": "https://www.swiggy.com/city/bhilwara"
                  },
                  {
                    "text": "Suratgarh",
                    "link": "https://www.swiggy.com/city/suratgarh"
                  },
                  {
                    "text": "Sikar",
                    "link": "https://www.swiggy.com/city/sikar"
                  },
                  {
                    "text": "Churu",
                    "link": "https://www.swiggy.com/city/churu"
                  },
                  {
                    "text": "Alwar",
                    "link": "https://www.swiggy.com/city/alwar"
                  },
                  {
                    "text": "Bhiwadi",
                    "link": "https://www.swiggy.com/city/bhiwadi"
                  },
                  {
                    "text": "Bharatpur",
                    "link": "https://www.swiggy.com/city/bharatpur"
                  },
                  {
                    "text": "Mount Abu",
                    "link": "https://www.swiggy.com/city/mount-abu"
                  },
                  {
                    "text": "Bundi",
                    "link": "https://www.swiggy.com/city/bundi"
                  },
                  {
                    "text": "Sawai Madhopur",
                    "link": "https://www.swiggy.com/city/sawai-madhopur"
                  },
                  {
                    "text": "Purulia",
                    "link": "https://www.swiggy.com/city/purulia"
                  },
                  {
                    "text": "Bardhaman",
                    "link": "https://www.swiggy.com/city/bardhaman"
                  },
                  {
                    "text": "Raniganj",
                    "link": "https://www.swiggy.com/city/raniganj"
                  },
                  {
                    "text": "Darjeeling",
                    "link": "https://www.swiggy.com/city/darjeeling"
                  },
                  {
                    "text": "Jalpaiguri",
                    "link": "https://www.swiggy.com/city/jalpaiguri"
                  },
                  {
                    "text": "Chittorgarh",
                    "link": "https://www.swiggy.com/city/chittorgarh"
                  },
                  {
                    "text": "Dholpur",
                    "link": "https://www.swiggy.com/city/dholpur"
                  },
                  {
                    "text": "Uluberia",
                    "link": "https://www.swiggy.com/city/uluberia"
                  },
                  {
                    "text": "Nabadwip",
                    "link": "https://www.swiggy.com/city/nabadwip"
                  },
                  {
                    "text": "Bongaon",
                    "link": "https://www.swiggy.com/city/bongaon"
                  },
                  {
                    "text": "Kanchrapara",
                    "link": "https://www.swiggy.com/city/kanchrapara"
                  },
                  {
                    "text": "Habra",
                    "link": "https://www.swiggy.com/city/habra"
                  },
                  {
                    "text": "Firozabad",
                    "link": "https://www.swiggy.com/city/firozabad"
                  },
                  {
                    "text": "Nalgonda",
                    "link": "https://www.swiggy.com/city/nalgonda"
                  },
                  {
                    "text": "Chandrapur",
                    "link": "https://www.swiggy.com/city/chandrapur"
                  },
                  {
                    "text": "Bijapur",
                    "link": "https://www.swiggy.com/city/bijapur"
                  },
                  {
                    "text": "Bhusawal",
                    "link": "https://www.swiggy.com/city/bhusawal"
                  },
                  {
                    "text": "Raichur",
                    "link": "https://www.swiggy.com/city/raichur"
                  },
                  {
                    "text": "Bahraich",
                    "link": "https://www.swiggy.com/city/bahraich"
                  },
                  {
                    "text": "Azamgarh",
                    "link": "https://www.swiggy.com/city/azamgarh"
                  },
                  {
                    "text": "Bahadurgarh",
                    "link": "https://www.swiggy.com/city/bahadurgarh"
                  },
                  {
                    "text": "Jind",
                    "link": "https://www.swiggy.com/city/jind"
                  },
                  {
                    "text": "Rewari",
                    "link": "https://www.swiggy.com/city/rewari"
                  },
                  {
                    "text": "Palwal",
                    "link": "https://www.swiggy.com/city/palwal"
                  },
                  {
                    "text": "Hathras",
                    "link": "https://www.swiggy.com/city/hathras"
                  },
                  {
                    "text": "Sambalpur",
                    "link": "https://www.swiggy.com/city/sambalpur"
                  },
                  {
                    "text": "Banda",
                    "link": "https://www.swiggy.com/city/banda"
                  },
                  {
                    "text": "Hoshiarpur",
                    "link": "https://www.swiggy.com/city/hoshiarpur"
                  },
                  {
                    "text": "Faridkot",
                    "link": "https://www.swiggy.com/city/faridkot"
                  },
                  {
                    "text": "Mandsaur",
                    "link": "https://www.swiggy.com/city/mandsaur"
                  },
                  {
                    "text": "Suryapet",
                    "link": "https://www.swiggy.com/city/suryapet"
                  },
                  {
                    "text": "Adilabad",
                    "link": "https://www.swiggy.com/city/adilabad"
                  },
                  {
                    "text": "Narasaraopet",
                    "link": "https://www.swiggy.com/city/narasaraopet"
                  },
                  {
                    "text": "Faizabad",
                    "link": "https://www.swiggy.com/city/faizabad"
                  },
                  {
                    "text": "Tadpatri",
                    "link": "https://www.swiggy.com/city/tadpatri"
                  },
                  {
                    "text": "Gonda",
                    "link": "https://www.swiggy.com/city/gonda"
                  },
                  {
                    "text": "Mughalsarai",
                    "link": "https://www.swiggy.com/city/mughalsarai"
                  },
                  {
                    "text": "Medinipur",
                    "link": "https://www.swiggy.com/city/medinipur"
                  },
                  {
                    "text": "Nagda",
                    "link": "https://www.swiggy.com/city/nagda"
                  },
                  {
                    "text": "Raiganj",
                    "link": "https://www.swiggy.com/city/raiganj"
                  },
                  {
                    "text": "Deoria City",
                    "link": "https://www.swiggy.com/city/deoria-city"
                  },
                  {
                    "text": "Sultanpur",
                    "link": "https://www.swiggy.com/city/sultanpur"
                  },
                  {
                    "text": "Shamli",
                    "link": "https://www.swiggy.com/city/shamli"
                  },
                  {
                    "text": "Krishnanagar",
                    "link": "https://www.swiggy.com/city/krishnanagar"
                  },
                  {
                    "text": "Ballia",
                    "link": "https://www.swiggy.com/city/ballia"
                  },
                  {
                    "text": "Guntakal",
                    "link": "https://www.swiggy.com/city/guntakal"
                  },
                  {
                    "text": "Miryalaguda",
                    "link": "https://www.swiggy.com/city/miryalaguda"
                  },
                  {
                    "text": "Etah",
                    "link": "https://www.swiggy.com/city/etah"
                  },
                  {
                    "text": "Berhampore",
                    "link": "https://www.swiggy.com/city/berhampore"
                  },
                  {
                    "text": "Gudivada",
                    "link": "https://www.swiggy.com/city/gudivada"
                  },
                  {
                    "text": "Haldia",
                    "link": "https://www.swiggy.com/city/haldia"
                  },
                  {
                    "text": "Santipur",
                    "link": "https://www.swiggy.com/city/santipur"
                  },
                  {
                    "text": "Basirhat",
                    "link": "https://www.swiggy.com/city/basirhat"
                  },
                  {
                    "text": "Udgir",
                    "link": "https://www.swiggy.com/city/udgir"
                  },
                  {
                    "text": "Proddatur",
                    "link": "https://www.swiggy.com/city/proddatur"
                  },
                  {
                    "text": "Nagapattinam",
                    "link": "https://www.swiggy.com/city/nagapattinam"
                  },
                  {
                    "text": "Chikmagalur",
                    "link": "https://www.swiggy.com/city/chikmagalur"
                  },
                  {
                    "text": "Chandausi",
                    "link": "https://www.swiggy.com/city/chandausi"
                  },
                  {
                    "text": "Bhind",
                    "link": "https://www.swiggy.com/city/bhind"
                  },
                  {
                    "text": "Mandya",
                    "link": "https://www.swiggy.com/city/mandya"
                  },
                  {
                    "text": "Bagalkot",
                    "link": "https://www.swiggy.com/city/bagalkot"
                  },
                  {
                    "text": "Nandurbar",
                    "link": "https://www.swiggy.com/city/nandurbar"
                  },
                  {
                    "text": "Chitradurga",
                    "link": "https://www.swiggy.com/city/chitradurga"
                  },
                  {
                    "text": "Osmanabad",
                    "link": "https://www.swiggy.com/city/osmanabad"
                  },
                  {
                    "text": "Modinagar",
                    "link": "https://www.swiggy.com/city/modinagar"
                  },
                  {
                    "text": "Gadag-Betigeri",
                    "link": "https://www.swiggy.com/city/gadag-betigeri"
                  },
                  {
                    "text": "Hoshangabad",
                    "link": "https://www.swiggy.com/city/hoshangabad"
                  },
                  {
                    "text": "Jaunpur",
                    "link": "https://www.swiggy.com/city/jaunpur"
                  },
                  {
                    "text": "Port Blair",
                    "link": "https://www.swiggy.com/city/port-blair"
                  },
                  {
                    "text": "Jorhat",
                    "link": "https://www.swiggy.com/city/jorhat"
                  },
                  {
                    "text": "Nandyal",
                    "link": "https://www.swiggy.com/city/nandyal"
                  },
                  {
                    "text": "Biharsharif",
                    "link": "https://www.swiggy.com/city/biharsharif"
                  },
                  {
                    "text": "Buxar",
                    "link": "https://www.swiggy.com/city/buxar"
                  },
                  {
                    "text": "Siwan",
                    "link": "https://www.swiggy.com/city/siwan"
                  },
                  {
                    "text": "Dehri",
                    "link": "https://www.swiggy.com/city/dehri"
                  },
                  {
                    "text": "Bettiah",
                    "link": "https://www.swiggy.com/city/bettiah"
                  },
                  {
                    "text": "Kishanganj",
                    "link": "https://www.swiggy.com/city/kishanganj"
                  },
                  {
                    "text": "Saharsa",
                    "link": "https://www.swiggy.com/city/saharsa"
                  },
                  {
                    "text": "Hajipur",
                    "link": "https://www.swiggy.com/city/hajipur"
                  },
                  {
                    "text": "Motihari",
                    "link": "https://www.swiggy.com/city/motihari"
                  },
                  {
                    "text": "Sasaram",
                    "link": "https://www.swiggy.com/city/sasaram"
                  },
                  {
                    "text": "Munger",
                    "link": "https://www.swiggy.com/city/munger"
                  },
                  {
                    "text": "Katihar",
                    "link": "https://www.swiggy.com/city/katihar"
                  },
                  {
                    "text": "Arrah",
                    "link": "https://www.swiggy.com/city/arrah"
                  },
                  {
                    "text": "Srikakulam",
                    "link": "https://www.swiggy.com/city/srikakulam"
                  },
                  {
                    "text": "Begusarai",
                    "link": "https://www.swiggy.com/city/begusarai"
                  },
                  {
                    "text": "Neyveli",
                    "link": "https://www.swiggy.com/city/neyveli"
                  },
                  {
                    "text": "Waidhan",
                    "link": "https://www.swiggy.com/city/waidhan"
                  },
                  {
                    "text": "Markapur",
                    "link": "https://www.swiggy.com/city/markapur"
                  },
                  {
                    "text": "Chikkaballapur",
                    "link": "https://www.swiggy.com/city/chikkaballapur"
                  },
                  {
                    "text": "Bhatkal",
                    "link": "https://www.swiggy.com/city/bhatkal"
                  },
                  {
                    "text": "Gokak",
                    "link": "https://www.swiggy.com/city/gokak"
                  },
                  {
                    "text": "Itarsi",
                    "link": "https://www.swiggy.com/city/itarsi"
                  },
                  {
                    "text": "Dhar",
                    "link": "https://www.swiggy.com/city/dhar"
                  },
                  {
                    "text": "Chalisgaon",
                    "link": "https://www.swiggy.com/city/chalisgaon"
                  },
                  {
                    "text": "Thiruvallur",
                    "link": "https://www.swiggy.com/city/thiruvallur"
                  },
                  {
                    "text": "Namakkal",
                    "link": "https://www.swiggy.com/city/namakkal"
                  },
                  {
                    "text": "Dharmapuri",
                    "link": "https://www.swiggy.com/city/dharmapuri"
                  },
                  {
                    "text": "Bhandara",
                    "link": "https://www.swiggy.com/city/bhandara"
                  },
                  {
                    "text": "Virudhunagar",
                    "link": "https://www.swiggy.com/city/virudhunagar"
                  },
                  {
                    "text": "Siddipet",
                    "link": "https://www.swiggy.com/city/siddipet"
                  },
                  {
                    "text": "Gadwal",
                    "link": "https://www.swiggy.com/city/gadwal"
                  },
                  {
                    "text": "Bodhan-Rural",
                    "link": "https://www.swiggy.com/city/bodhan-rural"
                  },
                  {
                    "text": "Kamareddy",
                    "link": "https://www.swiggy.com/city/kamareddy"
                  },
                  {
                    "text": "Jhunjhunu",
                    "link": "https://www.swiggy.com/city/jhunjhunu"
                  },
                  {
                    "text": "Kapurthala",
                    "link": "https://www.swiggy.com/city/kapurthala"
                  },
                  {
                    "text": "Sangrur",
                    "link": "https://www.swiggy.com/city/sangrur"
                  },
                  {
                    "text": "Gurdaspur",
                    "link": "https://www.swiggy.com/city/gurdaspur"
                  },
                  {
                    "text": "Ramgarh",
                    "link": "https://www.swiggy.com/city/ramgarh"
                  },
                  {
                    "text": "Bantwal",
                    "link": "https://www.swiggy.com/city/bantwal"
                  },
                  {
                    "text": "Doddaballapura",
                    "link": "https://www.swiggy.com/city/doddaballapura"
                  },
                  {
                    "text": "Buldana",
                    "link": "https://www.swiggy.com/city/buldana"
                  },
                  {
                    "text": "Karad",
                    "link": "https://www.swiggy.com/city/karad"
                  },
                  {
                    "text": "Krishnagiri",
                    "link": "https://www.swiggy.com/city/krishnagiri"
                  },
                  {
                    "text": "Tiptur",
                    "link": "https://www.swiggy.com/city/tiptur"
                  },
                  {
                    "text": "Bhadrachalam",
                    "link": "https://www.swiggy.com/city/bhadrachalam"
                  },
                  {
                    "text": "Mancherial",
                    "link": "https://www.swiggy.com/city/mancherial"
                  },
                  {
                    "text": "Balrampur",
                    "link": "https://www.swiggy.com/city/balrampur"
                  },
                  {
                    "text": "Bharabanki",
                    "link": "https://www.swiggy.com/city/bharabanki"
                  },
                  {
                    "text": "Malout",
                    "link": "https://www.swiggy.com/city/malout"
                  },
                  {
                    "text": "Fatehgarh Sahib",
                    "link": "https://www.swiggy.com/city/fatehgarh-sahib"
                  },
                  {
                    "text": "Ropar",
                    "link": "https://www.swiggy.com/city/ropar"
                  },
                  {
                    "text": "Nangal",
                    "link": "https://www.swiggy.com/city/nangal"
                  },
                  {
                    "text": "Narnaul",
                    "link": "https://www.swiggy.com/city/narnaul"
                  },
                  {
                    "text": "Naraingarh",
                    "link": "https://www.swiggy.com/city/naraingarh"
                  },
                  {
                    "text": "Himmatnagar",
                    "link": "https://www.swiggy.com/city/himmatnagar"
                  },
                  {
                    "text": "Dausa",
                    "link": "https://www.swiggy.com/city/dausa"
                  },
                  {
                    "text": "Jahanabad",
                    "link": "https://www.swiggy.com/city/jahanabad"
                  },
                  {
                    "text": "Samastipur",
                    "link": "https://www.swiggy.com/city/samastipur"
                  },
                  {
                    "text": "Purnea",
                    "link": "https://www.swiggy.com/city/purnea"
                  },
                  {
                    "text": "Berhampur",
                    "link": "https://www.swiggy.com/city/berhampur"
                  },
                  {
                    "text": "Malda",
                    "link": "https://www.swiggy.com/city/malda"
                  },
                  {
                    "text": "Tuni",
                    "link": "https://www.swiggy.com/city/tuni"
                  },
                  {
                    "text": "Puttur",
                    "link": "https://www.swiggy.com/city/puttur"
                  },
                  {
                    "text": "Rayachoty",
                    "link": "https://www.swiggy.com/city/rayachoty"
                  },
                  {
                    "text": "Nirmal",
                    "link": "https://www.swiggy.com/city/nirmal"
                  },
                  {
                    "text": "Mirzapur",
                    "link": "https://www.swiggy.com/city/mirzapur"
                  },
                  {
                    "text": "Tanuku",
                    "link": "https://www.swiggy.com/city/tanuku"
                  },
                  {
                    "text": "Dahod",
                    "link": "https://www.swiggy.com/city/dahod"
                  },
                  {
                    "text": "Barmer",
                    "link": "https://www.swiggy.com/city/barmer"
                  },
                  {
                    "text": "Gangapur City",
                    "link": "https://www.swiggy.com/city/gangapur-city"
                  },
                  {
                    "text": "Mandi Gobindgarh",
                    "link": "https://www.swiggy.com/city/mandi-gobindgarh"
                  },
                  {
                    "text": "Tarn Taran Sahib",
                    "link": "https://www.swiggy.com/city/tarn-taran-sahib"
                  },
                  {
                    "text": "Nakodar",
                    "link": "https://www.swiggy.com/city/nakodar"
                  },
                  {
                    "text": "Ankleshwar",
                    "link": "https://www.swiggy.com/city/ankleshwar"
                  },
                  {
                    "text": "Vyara",
                    "link": "https://www.swiggy.com/city/vyara"
                  },
                  {
                    "text": "Bardoli",
                    "link": "https://www.swiggy.com/city/bardoli"
                  },
                  {
                    "text": "Halol",
                    "link": "https://www.swiggy.com/city/halol"
                  },
                  {
                    "text": "Bijnor",
                    "link": "https://www.swiggy.com/city/bijnor"
                  },
                  {
                    "text": "Sangamner",
                    "link": "https://www.swiggy.com/city/sangamner"
                  },
                  {
                    "text": "Baramati",
                    "link": "https://www.swiggy.com/city/baramati"
                  },
                  {
                    "text": "Betul",
                    "link": "https://www.swiggy.com/city/betul"
                  },
                  {
                    "text": "Chhatarpur",
                    "link": "https://www.swiggy.com/city/chhatarpur"
                  },
                  {
                    "text": "Balaghat",
                    "link": "https://www.swiggy.com/city/balaghat"
                  },
                  {
                    "text": "Sivakasi",
                    "link": "https://www.swiggy.com/city/sivakasi"
                  },
                  {
                    "text": "Viluppuram",
                    "link": "https://www.swiggy.com/city/viluppuram"
                  },
                  {
                    "text": "Ramanathapuram",
                    "link": "https://www.swiggy.com/city/ramanathapuram"
                  },
                  {
                    "text": "Sirsi",
                    "link": "https://www.swiggy.com/city/sirsi"
                  },
                  {
                    "text": "Theni",
                    "link": "https://www.swiggy.com/city/theni"
                  },
                  {
                    "text": "Karur",
                    "link": "https://www.swiggy.com/city/karur"
                  },
                  {
                    "text": "Karwar",
                    "link": "https://www.swiggy.com/city/karwar"
                  },
                  {
                    "text": "Sindhanur",
                    "link": "https://www.swiggy.com/city/sindhanur"
                  },
                  {
                    "text": "Kannur",
                    "link": "https://www.swiggy.com/city/kannur"
                  },
                  {
                    "text": "Noida 1",
                    "link": "https://www.swiggy.com/city/noida-1"
                  },
                  {
                    "text": "Thiruvalla",
                    "link": "https://www.swiggy.com/city/thiruvalla"
                  },
                  {
                    "text": "Thodupuzha",
                    "link": "https://www.swiggy.com/city/thodupuzha"
                  },
                  {
                    "text": "Kadiri",
                    "link": "https://www.swiggy.com/city/kadiri"
                  },
                  {
                    "text": "Kavali",
                    "link": "https://www.swiggy.com/city/kavali"
                  },
                  {
                    "text": "Tezpur",
                    "link": "https://www.swiggy.com/city/tezpur"
                  },
                  {
                    "text": "Kayamkulam",
                    "link": "https://www.swiggy.com/city/kayamkulam"
                  },
                  {
                    "text": "Kottarakkara",
                    "link": "https://www.swiggy.com/city/kottarakkara"
                  },
                  {
                    "text": "Mandi Dabwali",
                    "link": "https://www.swiggy.com/city/mandi-dabwali"
                  },
                  {
                    "text": "Fatehabad",
                    "link": "https://www.swiggy.com/city/fatehabad"
                  },
                  {
                    "text": "Jagraon",
                    "link": "https://www.swiggy.com/city/jagraon"
                  },
                  {
                    "text": "Mansa",
                    "link": "https://www.swiggy.com/city/mansa"
                  },
                  {
                    "text": "Pinjore City",
                    "link": "https://www.swiggy.com/city/pinjore-city"
                  },
                  {
                    "text": "Fazilka",
                    "link": "https://www.swiggy.com/city/fazilka"
                  },
                  {
                    "text": "Baddi",
                    "link": "https://www.swiggy.com/city/baddi"
                  },
                  {
                    "text": "Solan",
                    "link": "https://www.swiggy.com/city/solan"
                  },
                  {
                    "text": "Daltonganj",
                    "link": "https://www.swiggy.com/city/daltonganj"
                  },
                  {
                    "text": "Balangir",
                    "link": "https://www.swiggy.com/city/balangir"
                  },
                  {
                    "text": "Kothagudem",
                    "link": "https://www.swiggy.com/city/kothagudem"
                  },
                  {
                    "text": "Hansi",
                    "link": "https://www.swiggy.com/city/hansi"
                  },
                  {
                    "text": "Aurangabad_Bihar",
                    "link": "https://www.swiggy.com/city/aurangabadbihar"
                  },
                  {
                    "text": "Gopalganj",
                    "link": "https://www.swiggy.com/city/gopalganj"
                  },
                  {
                    "text": "Jharsuguda",
                    "link": "https://www.swiggy.com/city/jharsuguda"
                  },
                  {
                    "text": "Tohana",
                    "link": "https://www.swiggy.com/city/tohana"
                  },
                  {
                    "text": "Jhalawar",
                    "link": "https://www.swiggy.com/city/jhalawar"
                  },
                  {
                    "text": "Sivasagar",
                    "link": "https://www.swiggy.com/city/sivasagar"
                  },
                  {
                    "text": "Bagdogra",
                    "link": "https://www.swiggy.com/city/bagdogra"
                  },
                  {
                    "text": "Kendrapada",
                    "link": "https://www.swiggy.com/city/kendrapada"
                  },
                  {
                    "text": "Mallapuram (Do not Use)",
                    "link": "https://www.swiggy.com/city/mallapuram-do-not-use"
                  },
                  {
                    "text": "Veraval",
                    "link": "https://www.swiggy.com/city/veraval"
                  },
                  {
                    "text": "Daman",
                    "link": "https://www.swiggy.com/city/daman"
                  },
                  {
                    "text": "Chiplun",
                    "link": "https://www.swiggy.com/city/chiplun"
                  },
                  {
                    "text": "Silvassa",
                    "link": "https://www.swiggy.com/city/silvassa"
                  },
                  {
                    "text": "Lonavla",
                    "link": "https://www.swiggy.com/city/lonavla"
                  },
                  {
                    "text": "Bongaigaon",
                    "link": "https://www.swiggy.com/city/bongaigaon"
                  },
                  {
                    "text": "Golaghat",
                    "link": "https://www.swiggy.com/city/golaghat"
                  },
                  {
                    "text": "Duliajan",
                    "link": "https://www.swiggy.com/city/duliajan"
                  },
                  {
                    "text": "Bolpur",
                    "link": "https://www.swiggy.com/city/bolpur"
                  },
                  {
                    "text": "Madhubani",
                    "link": "https://www.swiggy.com/city/madhubani"
                  },
                  {
                    "text": "Balasore",
                    "link": "https://www.swiggy.com/city/balasore"
                  },
                  {
                    "text": "Palampur",
                    "link": "https://www.swiggy.com/city/palampur"
                  },
                  {
                    "text": "Kotdwar",
                    "link": "https://www.swiggy.com/city/kotdwar"
                  },
                  {
                    "text": "Koppal",
                    "link": "https://www.swiggy.com/city/koppal"
                  },
                  {
                    "text": "Chikhli",
                    "link": "https://www.swiggy.com/city/chikhli"
                  },
                  {
                    "text": "Dahanu",
                    "link": "https://www.swiggy.com/city/dahanu"
                  },
                  {
                    "text": "Itanagar",
                    "link": "https://www.swiggy.com/city/itanagar"
                  },
                  {
                    "text": "Rangpo",
                    "link": "https://www.swiggy.com/city/rangpo"
                  },
                  {
                    "text": "Aizawl",
                    "link": "https://www.swiggy.com/city/aizawl"
                  },
                  {
                    "text": "Gangtok",
                    "link": "https://www.swiggy.com/city/gangtok"
                  },
                  {
                    "text": "Mayiladuthurai",
                    "link": "https://www.swiggy.com/city/mayiladuthurai"
                  },
                  {
                    "text": "Kannauj",
                    "link": "https://www.swiggy.com/city/kannauj"
                  },
                  {
                    "text": "Cooch Behar",
                    "link": "https://www.swiggy.com/city/cooch-behar"
                  },
                  {
                    "text": "Palani",
                    "link": "https://www.swiggy.com/city/palani"
                  },
                  {
                    "text": "Bilimora",
                    "link": "https://www.swiggy.com/city/bilimora"
                  },
                  {
                    "text": "Boisar",
                    "link": "https://www.swiggy.com/city/boisar"
                  },
                  {
                    "text": "Kohima",
                    "link": "https://www.swiggy.com/city/kohima"
                  },
                  {
                    "text": "Naharlagun",
                    "link": "https://www.swiggy.com/city/naharlagun"
                  },
                  {
                    "text": "Dumka",
                    "link": "https://www.swiggy.com/city/dumka"
                  },
                  {
                    "text": "Rajsamand",
                    "link": "https://www.swiggy.com/city/rajsamand"
                  },
                  {
                    "text": "Gauriganj",
                    "link": "https://www.swiggy.com/city/gauriganj"
                  },
                  {
                    "text": "Bodinayakanur",
                    "link": "https://www.swiggy.com/city/bodinayakanur"
                  },
                  {
                    "text": "Bhawanipatna",
                    "link": "https://www.swiggy.com/city/bhawanipatna"
                  },
                  {
                    "text": "Baran",
                    "link": "https://www.swiggy.com/city/baran"
                  },
                  {
                    "text": "Narsinghpur",
                    "link": "https://www.swiggy.com/city/narsinghpur"
                  },
                  {
                    "text": "Kovilpatti",
                    "link": "https://www.swiggy.com/city/kovilpatti"
                  },
                  {
                    "text": "Pusad",
                    "link": "https://www.swiggy.com/city/pusad"
                  },
                  {
                    "text": "Kendujhar",
                    "link": "https://www.swiggy.com/city/kendujhar"
                  },
                  {
                    "text": "Manali",
                    "link": "https://www.swiggy.com/city/manali"
                  },
                  {
                    "text": "Diu",
                    "link": "https://www.swiggy.com/city/diu"
                  },
                  {
                    "text": "Khamgaon",
                    "link": "https://www.swiggy.com/city/khamgaon"
                  },
                  {
                    "text": "Ramanagara",
                    "link": "https://www.swiggy.com/city/ramanagara"
                  },
                  {
                    "text": "Alipurduar",
                    "link": "https://www.swiggy.com/city/alipurduar"
                  },
                  {
                    "text": "Almora",
                    "link": "https://www.swiggy.com/city/almora"
                  },
                  {
                    "text": "Jhargram",
                    "link": "https://www.swiggy.com/city/jhargram"
                  },
                  {
                    "text": "Arambagh",
                    "link": "https://www.swiggy.com/city/arambagh"
                  },
                  {
                    "text": "Bhadohi",
                    "link": "https://www.swiggy.com/city/bhadohi"
                  },
                  {
                    "text": "Tenkasi",
                    "link": "https://www.swiggy.com/city/tenkasi"
                  },
                  {
                    "text": "Srivilliputhur",
                    "link": "https://www.swiggy.com/city/srivilliputhur"
                  },
                  {
                    "text": "Chidambaram",
                    "link": "https://www.swiggy.com/city/chidambaram"
                  },
                  {
                    "text": "Rajgarh",
                    "link": "https://www.swiggy.com/city/rajgarh"
                  },
                  {
                    "text": "Pratapgarh",
                    "link": "https://www.swiggy.com/city/pratapgarh"
                  },
                  {
                    "text": "Washim",
                    "link": "https://www.swiggy.com/city/washim"
                  },
                  {
                    "text": "Raghunathpur",
                    "link": "https://www.swiggy.com/city/raghunathpur"
                  },
                  {
                    "text": "Suri",
                    "link": "https://www.swiggy.com/city/suri"
                  },
                  {
                    "text": "Kadayanallur",
                    "link": "https://www.swiggy.com/city/kadayanallur"
                  },
                  {
                    "text": "Thiruvarur",
                    "link": "https://www.swiggy.com/city/thiruvarur"
                  },
                  {
                    "text": "Ranaghat-WB",
                    "link": "https://www.swiggy.com/city/ranaghat-wb"
                  },
                  {
                    "text": "Wayanad",
                    "link": "https://www.swiggy.com/city/wayanad"
                  },
                  {
                    "text": "Perambalur",
                    "link": "https://www.swiggy.com/city/perambalur"
                  },
                  {
                    "text": "Paramakudi",
                    "link": "https://www.swiggy.com/city/paramakudi"
                  },
                  {
                    "text": "Bela Pratapgarh",
                    "link": "https://www.swiggy.com/city/bela-pratapgarh"
                  },
                  {
                    "text": "Mahoba",
                    "link": "https://www.swiggy.com/city/mahoba"
                  },
                  {
                    "text": "Sitamarhi",
                    "link": "https://www.swiggy.com/city/sitamarhi"
                  },
                  {
                    "text": "Chakdaha",
                    "link": "https://www.swiggy.com/city/chakdaha"
                  },
                  {
                    "text": "Khalilabad",
                    "link": "https://www.swiggy.com/city/khalilabad"
                  },
                  {
                    "text": "Pattukkottai",
                    "link": "https://www.swiggy.com/city/pattukkottai"
                  },
                  {
                    "text": "Tindivanam",
                    "link": "https://www.swiggy.com/city/tindivanam"
                  },
                  {
                    "text": "Tiruttani",
                    "link": "https://www.swiggy.com/city/tiruttani"
                  },
                  {
                    "text": "Gangarampur",
                    "link": "https://www.swiggy.com/city/gangarampur"
                  },
                  {
                    "text": "Dharapuram",
                    "link": "https://www.swiggy.com/city/dharapuram"
                  },
                  {
                    "text": "Arakkonam",
                    "link": "https://www.swiggy.com/city/arakkonam"
                  },
                  {
                    "text": "Sirkali",
                    "link": "https://www.swiggy.com/city/sirkali"
                  },
                  {
                    "text": "Mettupalayam",
                    "link": "https://www.swiggy.com/city/mettupalayam"
                  },
                  {
                    "text": "Digboi",
                    "link": "https://www.swiggy.com/city/digboi"
                  },
                  {
                    "text": "Biswanath Chariali",
                    "link": "https://www.swiggy.com/city/biswanath-chariali"
                  },
                  {
                    "text": "Nalbari",
                    "link": "https://www.swiggy.com/city/nalbari"
                  },
                  {
                    "text": "Shirdi city",
                    "link": "https://www.swiggy.com/city/shirdi-city"
                  },
                  {
                    "text": "Mukerian",
                    "link": "https://www.swiggy.com/city/mukerian"
                  },
                  {
                    "text": "Hosur",
                    "link": "https://www.swiggy.com/city/hosur"
                  },
                  {
                    "text": "Palakollu",
                    "link": "https://www.swiggy.com/city/palakollu"
                  },
                  {
                    "text": "Ravulapalem",
                    "link": "https://www.swiggy.com/city/ravulapalem"
                  },
                  {
                    "text": "Barh",
                    "link": "https://www.swiggy.com/city/barh"
                  },
                  {
                    "text": "Palghar",
                    "link": "https://www.swiggy.com/city/palghar"
                  },
                  {
                    "text": "Kushalnagar",
                    "link": "https://www.swiggy.com/city/kushalnagar"
                  },
                  {
                    "text": "Dungarpur",
                    "link": "https://www.swiggy.com/city/dungarpur"
                  },
                  {
                    "text": "Chaibasa",
                    "link": "https://www.swiggy.com/city/chaibasa"
                  },
                  {
                    "text": "Haveri",
                    "link": "https://www.swiggy.com/city/haveri"
                  },
                  {
                    "text": "Karaikal",
                    "link": "https://www.swiggy.com/city/karaikal"
                  },
                  {
                    "text": "Jjajjar",
                    "link": "https://www.swiggy.com/city/jjajjar"
                  },
                  {
                    "text": "Kokrajhar",
                    "link": "https://www.swiggy.com/city/kokrajhar"
                  },
                  {
                    "text": "Rangia",
                    "link": "https://www.swiggy.com/city/rangia"
                  },
                  {
                    "text": "Hamirpur",
                    "link": "https://www.swiggy.com/city/hamirpur"
                  },
                  {
                    "text": "Una",
                    "link": "https://www.swiggy.com/city/una"
                  },
                  {
                    "text": "Sulthan Bathery",
                    "link": "https://www.swiggy.com/city/sulthan-bathery"
                  },
                  {
                    "text": "Rayagada",
                    "link": "https://www.swiggy.com/city/rayagada"
                  },
                  {
                    "text": "Paradeep",
                    "link": "https://www.swiggy.com/city/paradeep"
                  },
                  {
                    "text": "Mandapeta",
                    "link": "https://www.swiggy.com/city/mandapeta"
                  },
                  {
                    "text": "Jamui",
                    "link": "https://www.swiggy.com/city/jamui"
                  },
                  {
                    "text": "Pilkhuwa",
                    "link": "https://www.swiggy.com/city/pilkhuwa"
                  },
                  {
                    "text": "Parvathipuram",
                    "link": "https://www.swiggy.com/city/parvathipuram"
                  },
                  {
                    "text": "Ambajogai",
                    "link": "https://www.swiggy.com/city/ambajogai"
                  },
                  {
                    "text": "Araria",
                    "link": "https://www.swiggy.com/city/araria"
                  },
                  {
                    "text": "North Lakhimpur",
                    "link": "https://www.swiggy.com/city/north-lakhimpur"
                  },
                  {
                    "text": "Rajampet",
                    "link": "https://www.swiggy.com/city/rajampet"
                  },
                  {
                    "text": "Udumalaipettai",
                    "link": "https://www.swiggy.com/city/udumalaipettai"
                  },
                  {
                    "text": "Tirupattur",
                    "link": "https://www.swiggy.com/city/tirupattur"
                  },
                  {
                    "text": "Hojai",
                    "link": "https://www.swiggy.com/city/hojai"
                  },
                  {
                    "text": "Khagaria",
                    "link": "https://www.swiggy.com/city/khagaria"
                  },
                  {
                    "text": "Dasuya",
                    "link": "https://www.swiggy.com/city/dasuya"
                  },
                  {
                    "text": "Gudur",
                    "link": "https://www.swiggy.com/city/gudur"
                  },
                  {
                    "text": "Sullurpeta",
                    "link": "https://www.swiggy.com/city/sullurpeta"
                  },
                  {
                    "text": "Piler",
                    "link": "https://www.swiggy.com/city/piler"
                  },
                  {
                    "text": "SankaranKoil",
                    "link": "https://www.swiggy.com/city/sankarankoil"
                  },
                  {
                    "text": "Nabha",
                    "link": "https://www.swiggy.com/city/nabha"
                  },
                  {
                    "text": "LPU - Phagwara",
                    "link": "https://www.swiggy.com/city/lpu-phagwara"
                  },
                  {
                    "text": "Jangipur",
                    "link": "https://www.swiggy.com/city/jangipur"
                  },
                  {
                    "text": "Roha",
                    "link": "https://www.swiggy.com/city/roha"
                  }
                ],
                "id": "footer_content"
              }
            }
          },
          {
            "card": {
              "card": {
                "@type": "type.googleapis.com/swiggy.seo.widgets.v1.MetaContext",
                "citySlug": "mangaluru",
                "lat": "12.91870",
                "lng": "74.85980",
                "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
                "gandalfRequest": "{\"sortAttribute\":\"relevance\",\"isFiltered\":false,\"queryId\":\"seo-data-c9430281-2cea-4a0b-8b42-9b190a674fc9\",\"seoParams\":{\"apiName\":\"FoodHomePage\",\"brandId\":\"\",\"seoUrl\":\"www.swiggy.com\",\"pageType\":\"FOOD_HOME_PAGE\"}}",
                "id": "meta_data",
                "metaInfo": {
                  "pageType": "FOOD_HOME_PAGE",
                  "pageTitle": "Order Food Online from India's Best Food Delivery Service | Swiggy",
                  "pageMetaDescription": "Order food online from restaurants and get it delivered. Serving in Bangalore, Hyderabad, Delhi and more. Order Pizzas, Biryanis, from Swiggy.",
                  "pageKeywords": "Food delivery, Online food order, Online food dleivery"
                },
                "screenType": "filteredCollection",
                "seoParams": {
                  "apiName": "FoodHomePage",
                  "seoUrl": "www.swiggy.com",
                  "pageType": "FOOD_HOME_PAGE"
                }
              }
            }
          }
        ],
        "firstOffsetRequest": true,
        "cacheExpiryTime": 240,
        "nextFetch": 1
      },
      "tid": "8211c7e7-faa5-4905-918d-db93284316c1",
      "sid": "cva47421-43c5-4967-b765-7bef3f4044c5",
      "deviceId": "c49814f7-c69e-36dc-f914-8a2b8d1cf4a8",
      "csrfToken": "CTBYQI0kRkQC-G7vjKlHOIdoDL_8LhiSkj5_ZClo"
    })
})


app.get("/menu/menulist",(req,res)=>{
  res.send({
    "statusCode": 0,
    "data": {
      "statusMessage": "done successfully",
      "cards": [
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
              "info": {
                "id": "78656",
                "name": "McDonald's",
                "city": "Mangaluru",
                "slugs": {
                  "restaurant": "mcdonalds-city-central-mall-hampankatta",
                  "city": "mangaluru"
                },
                "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
                "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
                "locality": "City Center Mall",
                "areaName": "Hampankatta",
                "costForTwo": "40000",
                "costForTwoMessage": "₹400 for two",
                "cuisines": [
                  "Burgers",
                  "Beverages"
                ],
                "avgRating": 4.5,
                "feeDetails": {
                  
                },
                "parentId": "630",
                "avgRatingString": "4.5",
                "totalRatingsString": "10K+ ratings",
                "sla": {
                  "restaurantId": "78656",
                  "lastMileTravel": 726,
                  "serviceability": "NON_SERVICEABLE",
                  "rainMode": "RAIN_MODE_NONE",
                  "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                  "lastMileTravelString": "726.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                  "nextCloseMessage": "Closes soon",
                  "nextCloseTime": "2024-03-23 23:45:00",
                  "visibility": true,
                  "opened": true,
                  "restaurantClosedMeta": {
                    
                  }
                },
                "aggregatedDiscountInfo": {
                  "header": "Free Fries (Medium)",
                  "shortDescriptionList": [
                    {
                      "meta": "Free Fries (Medium) on orders above ₹199",
                      "discountType": "Freebie",
                      "operationType": "RESTAURANT"
                    },
                    {
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "Free Fries (Medium) on orders above ₹199",
                      "discountType": "Freebie",
                      "operationType": "RESTAURANT"
                    },
                    {
                      "meta": "NO CODE REQUIRED | ABOVE ₹399",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "visible": true
                },
                "badges": {
                  
                },
                "slugString": "mcdonalds-city-central-mall-hampankatta",
                "multiOutlet": true,
                "isOpen": true,
                "labels": [
                  {
                    "title": "Timings",
                    "message": "null"
                  },
                  {
                    "title": "Address",
                    "message": "Hardcastle Restaurants Pvt Ltd, McDonalds Family Restaurants, City Central Mall,KS Rao Road,Hampankatta, Mangalore-01,Karnataka"
                  },
                  {
                    "title": "Cuisines",
                    "message": "Burgers,Beverages"
                  }
                ],
                "logo": "ygzpacvdpquemhj77imr",
                "totalRatings": 10000,
                "aggregatedDiscountInfoV2": {
                  "header": "Free Fries (Medium)",
                  "shortDescriptionList": [
                    {
                      "meta": "Free Fries (Medium) on orders above ₹199",
                      "discountType": "Freebie",
                      "operationType": "RESTAURANT"
                    },
                    {
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "Free Fries (Medium) on orders above ₹199",
                      "discountType": "Freebie",
                      "operationType": "RESTAURANT"
                    },
                    {
                      "meta": "NO CODE REQUIRED | ABOVE ₹399",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ]
                },
                "type": "F",
                "headerBanner": {
                  "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/78656"
                },
                "generalPurposeInfoListV2": [
                  {
                    "cta": {
                      "info": {
                        "recordings": {
                          
                        }
                      },
                      "linkCta": {
                        
                      }
                    }
                  }
                ],
                "ratingSlab": "RATING_SLAB_5",
                "availabilityServiceabilityMessage": "Does not deliver to your location",
                "orderabilityCommunication": {
                  "title": {
                    "text": "Wish you were"
                  },
                  "subTitle": {
                    "text": "CLOSER!"
                  },
                  "message": {
                    "text": "This location is outside the outlet's delivery area",
                    "textColour": "negative"
                  },
                  "customIcon": {
                    "bgGradientColorStart": "#F64C41",
                    "bgGradientColorEnd": "#E53554"
                  }
                },
                "nearestOutletNudge": {
                  "nearestOutletInfo": {
                    "siblingOutlet": {
                      "id": "23703",
                      "city": "0",
                      "slugs": {
                        
                      },
                      "areaName": "Mahakali",
                      "costForTwo": "0",
                      "feeDetails": {
                        
                      },
                      "sla": {
                        "deliveryTime": 17,
                        "lastMileTravel": 1.2,
                        "slaString": "17 MINS",
                        "lastMileTravelString": "1.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "restaurantClosedMeta": {
                          
                        }
                      },
                      "aggregatedDiscountInfo": {
                        "visible": true
                      },
                      "badges": {
                        
                      },
                      "aggregatedDiscountInfoV2": {
                        "visible": true
                      },
                      "availabilityServiceabilityMessage": "Temporarily closed for delivery",
                      "cartOrderabilityNudgeBanner": {
                        "parameters": {
                          
                        },
                        "presentation": {
                          
                        }
                      }
                    }
                  },
                  "nearestOutletComms": {
                    "title": {
                      "text": "Don't worry! Try our outlet that's delivering"
                    },
                    "subTitle": {
                      "text": "Switch to the fastest alternate"
                    }
                  }
                },
                "cartOrderabilityNudgeBanner": {
                  "parameters": {
                    
                  },
                  "presentation": {
                    
                  }
                },
                "latLong": "12.87104621,74.8423428",
                "backgroundImageOverlayInfo": {
                  
                }
              },
              "analytics": {
                
              }
            },
            "relevance": {
              "type": "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
              "sectionId": "POP_UP_CROUTON_MENU"
            }
          }
        },
        {
          "card": {
            "card": {
              "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
              "layout": {
                "rows": 1,
                "columns": 5,
                "horizontalScrollEnabled": true,
                "itemSpacing": 12,
                "lineSpacing": 10,
                "widgetPadding": {
                  
                },
                "containerStyle": {
                  "containerPadding": {
                    "left": 10,
                    "right": 10,
                    "bottom": 16
                  }
                },
                "scrollBar": {
                  
                }
              },
              "id": "offerCollectionWidget_UX4",
              "gridElements": {
                "infoWithStyle": {
                  "@type": "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                  "offers": [
                    {
                      "info": {
                        "header": "Free Fries (Medium)",
                        "offerTagColor": "#E46D47",
                        "offerIds": [
                          "191a247c-7875-452d-ba16-a6b7ee51bae1"
                        ],
                        "expiryTime": "1970-01-01T00:00:00Z",
                        "couponCode": "NO CODE REQUIRED",
                        "description": "ABOVE ₹199",
                        "offerType": "offers",
                        "restId": "78656",
                        "offerLogo": "offers/generic",
                        "descriptionTextColor": "#7302060C"
                      },
                      "cta": {
                        "type": "OFFER_HALF_CARD"
                      }
                    },
                    {
                      "info": {
                        "header": "FLAT ₹75 OFF",
                        "offerTagColor": "#E46D47",
                        "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2024/3/15/feb15168-4b05-43bc-bddc-c153b28a29c0_YESBankMenuLogo2.jpg",
                        "offerIds": [
                          "ea6fa756-9716-43d3-8355-99c10e733e91"
                        ],
                        "expiryTime": "1970-01-01T00:00:00Z",
                        "couponCode": "NO CODE REQUIRED",
                        "description": "ABOVE ₹399",
                        "offerType": "offers",
                        "restId": "78656",
                        "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2024/3/15/feb15168-4b05-43bc-bddc-c153b28a29c0_YESBankMenuLogo2.jpg",
                        "descriptionTextColor": "#7302060C"
                      },
                      "cta": {
                        "type": "OFFER_HALF_CARD"
                      }
                    },
                    {
                      "info": {
                        "header": "20% OFF UPTO ₹125",
                        "offerTagColor": "#E46D47",
                        "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2024/3/22/15adebf6-6636-42b6-8667-98a79ccf23d5_AMEX.png",
                        "offerIds": [
                          "888b15ac-5736-43ca-abe4-4583b8421b19"
                        ],
                        "expiryTime": "1970-01-01T00:00:00Z",
                        "couponCode": "USE AMEXMATCHDAY",
                        "description": "ABOVE ₹549",
                        "offerType": "offers",
                        "restId": "78656",
                        "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2024/3/22/15adebf6-6636-42b6-8667-98a79ccf23d5_AMEX.png",
                        "descriptionTextColor": "#7302060C"
                      },
                      "cta": {
                        "type": "OFFER_HALF_CARD"
                      }
                    },
                    {
                      "info": {
                        "header": "15% OFF UPTO ₹300",
                        "offerTagColor": "#E46D47",
                        "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2024/2/29/312fbf04-dafc-41e0-a06d-3ef2e3955703_Citi.png",
                        "offerIds": [
                          "e54dc8b9-ae0f-4c65-93db-abe39edcfa11"
                        ],
                        "expiryTime": "1970-01-01T00:00:00Z",
                        "couponCode": "USE CITIFOODIE",
                        "description": "ABOVE ₹1200",
                        "offerType": "offers",
                        "restId": "78656",
                        "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2024/2/29/312fbf04-dafc-41e0-a06d-3ef2e3955703_Citi.png",
                        "descriptionTextColor": "#7302060C"
                      },
                      "cta": {
                        "type": "OFFER_HALF_CARD"
                      }
                    },
                    {
                      "info": {
                        "header": "FLAT ₹30 OFF",
                        "offerTagColor": "#E46D47",
                        "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2024/2/29/7a464ef1-4018-4e4b-84b0-752e720c6604_SimplMenuLogo.png",
                        "offerIds": [
                          "0293bf7c-7c05-4161-8b5e-4816e0c5b90f"
                        ],
                        "expiryTime": "1970-01-01T00:00:00Z",
                        "couponCode": "USE SIMPL30",
                        "description": "ABOVE ₹300",
                        "offerType": "offers",
                        "restId": "78656",
                        "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2024/2/29/7a464ef1-4018-4e4b-84b0-752e720c6604_SimplMenuLogo.png",
                        "descriptionTextColor": "#7302060C"
                      },
                      "cta": {
                        "type": "OFFER_HALF_CARD"
                      }
                    }
                  ],
                  "habitMilestoneInfo": {
                    "callout": {
                      
                    }
                  },
                  "loyaltyDiscoverPresentationInfo": {
                    "logoCtx": {
                      
                    }
                  }
                }
              }
            }
          }
        },
        {
          "groupedCard": {
            "cardGroupMap": {
              "REGULAR": {
                "cards": [
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                        "badges": {
                          
                        },
                        "vegOnlyDetails": {
                          "imageId": "AutoVegOnly_qkjowj",
                          "title": "Showing only vegetarian options.",
                          "description": "Tap on the VEG ONLY button to turn off the setting"
                        },
                        "topRatedFilter": {
                          
                        },
                        "kidsCategoryFilter": {
                          "attributes": {
                            "displayText": "Kids Favourites",
                            "tooltip": {
                              "enabled": true,
                              "displayText": "Kids Favourites Filter applied. Remove this filter to see the full Menu."
                            }
                          }
                        },
                        "vegFilter": {
                          "attributes": {
                            "displayText": "VEG"
                          }
                        },
                        "nonvegFilter": {
                          "attributes": {
                            "displayText": "NONVEG"
                          }
                        }
                      },
                      "relevance": {
                        "type": "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                        "sectionId": "MENU_FILTER_TOGGLE"
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Match Time Sharing Combos",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "52432250",
                                "name": "2 McAloo Tikki Burger + 2 Fries (L)",
                                "category": "Match Time Sharing Combos",
                                "description": "Stay home, stay safe and share a combo- 2 McAloo Tikki Burgers + 2 Fries (L)",
                                "imageId": "ea7ba594c7d77cb752de9a730fbcb3bf",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 32984,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "2.7",
                                    "ratingCount": "64 ratings",
                                    "ratingCountV2": "64"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "63149655",
                                "name": "6 Pc Chicken Nuggets + McChicken Burger + Coke",
                                "category": "Match Time Sharing Combos",
                                "description": "Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite. Served with 6 Pc Nuggets and Coke.",
                                "imageId": "934194567f9c231dc46dccf2d4e6d415",
                                "inStock": 1,
                                "price": 32953,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "99941264",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "102193474",
                                    "groupName": "Choose an option for Mustard Sauce",
                                    "choices": [
                                      {
                                        "id": "94834283",
                                        "name": "Barbeque Sauce",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "329 ratings",
                                    "ratingCountV2": "329"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "102106124",
                                "name": "McSpicy Chicken Burger + McChicken Burger + Fries (M)",
                                "category": "Match Time Sharing Combos",
                                "description": "Flat 15% Off on McSpicy Chicken Burger + McChicken Burger + Fries (M)",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/bb26b40f-6ddc-4c1d-bd9b-f6f11233f56f_1752474f-0b3f-4172-87b0-f51a5e1a316c.png",
                                "inStock": 1,
                                "price": 37524,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "40 ratings",
                                    "ratingCountV2": "40"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "112713700",
                                "name": "Corn & Cheese Burger +McVeggie Burger+Fries (M)",
                                "category": "Match Time Sharing Combos",
                                "description": "Flat 15% Off on Corn & Cheese Burger +McVeggie Burger+Fries (M)",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/15/08e9bc73-6774-41cf-96bb-ca817c4e23d3_e00ec89e-86f8-4531-956a-646082dc294c.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 33238,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.4",
                                    "ratingCount": "16 ratings",
                                    "ratingCountV2": "16"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "117966439",
                                "name": "Burger Combo for 2: McChicken Burger with Pizza McPuff",
                                "category": "Match Time Sharing Combos",
                                "description": "Save big on your favourite sharing combo - 2 McChicken Burger + 2 Fries (M) + Veg Pizza McPuff",
                                "imageId": "b57153898abed2127d7217c2ee3e9e4b",
                                "inStock": 1,
                                "price": 38762,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "5.0",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "117966440",
                                "name": "Burger Combo for 2: McSpicy Chicken Burger with Pizza McPuff",
                                "category": "Match Time Sharing Combos",
                                "description": "Save big on your favourite sharing combo- 2 McSpicy Chicken Burger + 2 Fries (M) + Veg Pizza McPuff",
                                "imageId": "e62aea3ba1cd5585a76004f59cd991e5",
                                "inStock": 1,
                                "price": 49048,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "117966442",
                                "name": "Burger Combo for 2: McVeggie Burger with Pizza McPuff",
                                "category": "Match Time Sharing Combos",
                                "description": "Save big on your favourite sharing combo - 2 McVeggie Burger + 2 Fries (M) + Veg Pizza McPuff",
                                "imageId": "1ff73fc5aa656a10da5801469da3327a",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 38762,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "117966447",
                                "name": "McSpicy Paneer Burger + 2 Fries M + McAloo Tikki + Veg Pizza McPuff",
                                "category": "Match Time Sharing Combos",
                                "description": "Get the best value in your meal for 2. Save big on your favourite sharing meal - McSpicy Paneer Burger  + 2 Fries (M) + McAloo Tikki Burger + Veg Pizza McPuff",
                                "imageId": "0ea8a2fddbbc17bc6239a9104963a3e8",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 38762,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "117966448",
                                "name": "McVeggie Burger + 2 Fries (M) + McAloo Tikki+ Veg Pizza McPuff",
                                "category": "Match Time Sharing Combos",
                                "description": "Get the best value in your meal for 2. Save big on your favourite sharing meal - McVeggie Burger + 2 Fries (M) + McAloo Tikki Burger + Veg Pizza McPuff",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/2ff18412-ef23-4d71-a645-95d12dcf7933_dee9553b-5c71-4487-aaaa-9f01bd1d736d.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 30571,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "12 ratings",
                                    "ratingCountV2": "12"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "118094672",
                                "name": "Burger Combo for 2: McChicken Burger ",
                                "category": "Match Time Sharing Combos",
                                "description": "Save big on your favourite sharing combo - 2 McChicken Burger + Fries (L) + 2 Coke",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/ecb1cc16-8f97-4322-8359-0acad29ede85_a03665c2-bbcc-43af-bc1f-4de7ce55ee4d.png",
                                "inStock": 1,
                                "price": 38762,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "130980362",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "20 ratings",
                                    "ratingCountV2": "20"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "118094673",
                                "name": "Burger Combo for 2: McSpicy Chicken Burger ",
                                "category": "Match Time Sharing Combos",
                                "description": "Save big on your favourite sharing combo - 2 McSpicy Chicken Burger + Fries (L) + 2 Coke",
                                "imageId": "98afaf26d81b15bec74cc356fe60cc13",
                                "inStock": 1,
                                "price": 48953,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "130980443",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "5.0",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "118094674",
                                "name": "Burger Combo for 2: McVeggie Burger ",
                                "category": "Match Time Sharing Combos",
                                "description": "Save big on your favourite sharing combo - 2 McVeggie Burger + Fries (L) + 2 Coke",
                                "imageId": "09b3cb6130cfae15d486223c313fb6c6",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 38762,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "130980417",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "5.0",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "118094676",
                                "name": "McSpicy Paneer Burger + McAloo Tikki Burger + Fries (L) + 2 Coke",
                                "category": "Match Time Sharing Combos",
                                "description": "Get the best value in your meal for 2. Save big on your favourite sharing meal - McSpicy Paneer Burger + Fries (L) + 2 Coke + McAloo Tikki Burger",
                                "imageId": "642ae100416c13ce1c4c2d61c44026a1",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 38858,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "130980377",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "118094677",
                                "name": "McVeggie Burger + McAloo Tikki Burger + Fries (L) + 2 Coke",
                                "category": "Match Time Sharing Combos",
                                "description": "Get the best value in your meal for 2. Save big on your favourite sharing meal - McVeggie Burger + Fries (L) + 2 Coke + McAloo Tikki Burger",
                                "imageId": "d2381b84780fb273c2e7b868410a22cc",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 33715,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "130980419",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "123194973",
                                "name": "2 Chicken Maharaja Mac Burger + 2 Coke + Fries (L) + McFlurry Oreo (M)",
                                "category": "Match Time Sharing Combos",
                                "description": "Enjoy 2 of the tallest burgers innovated by us. Created with chunky juicy grilled chicken patty paired along with fresh ingredients like jalapeno, onion, slice of cheese, tomatoes & crunchy lettuce dressed with the classical Habanero sauce. Served with Coke, Large Fries and a medium McFlurry Oreo",
                                "imageId": "65c9c9b82c4d1f77a05dc4d89c9ead1d",
                                "inStock": 1,
                                "price": 59334,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "130980352",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125284551",
                                "name": "Burger Combo for 2: Corn & Cheese Burger",
                                "category": "Match Time Sharing Combos",
                                "description": "Save big on your favourite sharing combo - 2 Corn and Cheese Burger + Fries (L) + 2 Coke",
                                "imageId": "847b562672e71c2352d92b797c0b0a4e",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 41905,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "130980405",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125284552",
                                "name": "Burger Combo for 2: Grilled Chicken & Cheese",
                                "category": "Match Time Sharing Combos",
                                "description": "Save big on your favourite sharing combo - 2 Grilled Chicken and Cheese Burger + Fries (L) + 2 Coke",
                                "imageId": "1166a8baa3066342affb829ef0c428dd",
                                "inStock": 1,
                                "price": 46953,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "130980424",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136747957",
                                "name": "Burger Combo for 2: McSpicy Deluxe Chicken Burger",
                                "category": "Match Time Sharing Combos",
                                "description": "Save upto 24% off on your favorite sharing combo of 2 McSpicy Deluxe Chicken Burger + Fries (L) + 2 Coke (Serves 2)",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/a7aa30c4-da8c-4155-9152-78dda1f86d78_1c8693d2-38fb-4699-b1b6-6b1ccb555a4f.png",
                                "inStock": 1,
                                "price": 49901,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "144255009",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136747958",
                                "name": "Burger Combo for 2: McSpicy Deluxe Paneer Burger",
                                "category": "Match Time Sharing Combos",
                                "description": "Save upto 24% off on your favorite sharing combo of 2 McSpicy Deluxe Paneer Burger + Fries (L) + 2 Coke (Serves 2)",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/67f01168-b4a0-4f99-aa13-4da0b492b913_67d42161-a5ad-4249-ade7-6169a184f534.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 49901,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "144255015",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "McSpicy Combos with Sprite",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136747955",
                                "name": "Big Spicy Chicken Wrap + Sprite + Fries (R)",
                                "category": "McSpicy Combos with Sprite",
                                "description": "Enjoy a deliciously filling combo of Big Spicy Paneer Wrap + Sprite + Fries (R)",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/dd775029-7f4d-4dbe-bc91-e4df292899b7_47e8257e-d890-407b-a6cd-185d10c39050.png",
                                "inStock": 1,
                                "price": 31904,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "144254998",
                                    "groupName": "Choose an option for Sprite",
                                    "choices": [
                                      {
                                        "id": "115680450",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "115680449",
                                        "name": "Coke",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136747956",
                                "name": "Big Spicy Paneer Wrap + Sprite + Fries (R)",
                                "category": "McSpicy Combos with Sprite",
                                "description": "Enjoy a deliciously filling combo of Big Spicy Paneer Wrap + Sprite + Fries (R)",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/37dea52e-22f5-40b4-ace3-c733ed1b6b23_ce5455fd-1b9a-4834-97b8-35bc7b004378.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 31933,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "144255004",
                                    "groupName": "Choose an option for Sprite",
                                    "choices": [
                                      {
                                        "id": "115680450",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "115680449",
                                        "name": "Coke",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136747974",
                                "name": "McSpicy Chicken + Sprite + Fries (R)",
                                "category": "McSpicy Combos with Sprite",
                                "description": "Enjoy a deliciously indulgent combo of McSpicy Chicken Burger + Sprite + Fries (R)",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/08a2c6f5-c36e-4987-8e6f-255664617faa_6ce226c4-363b-4542-b16f-a790741fc357.png",
                                "inStock": 1,
                                "price": 29895,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "144255035",
                                    "groupName": "Choose an option for Sprite",
                                    "choices": [
                                      {
                                        "id": "115680450",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "115680449",
                                        "name": "Coke",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136747986",
                                "name": "McSpicy Deluxe Chicken Burger + Sprite + Fries (R)",
                                "category": "McSpicy Combos with Sprite",
                                "description": "Enjoy a deliciously indulgent combo of McSpicy Deluxe Chicken Burger + Sprite + Fries (R)",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/4168ca8a-9dcc-44d3-99e5-edcf51050e09_34f8853d-255b-49f3-b60b-73b1e4456868.png",
                                "inStock": 1,
                                "price": 29933,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "144255055",
                                    "groupName": "Choose an option for Sprite",
                                    "choices": [
                                      {
                                        "id": "115680450",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "115680449",
                                        "name": "Coke",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136747989",
                                "name": "McSpicy Deluxe Paneer Burger + Sprite + Fries (R)",
                                "category": "McSpicy Combos with Sprite",
                                "description": "Enjoy a deliciously indulgent combo of McSpicy Deluxe Paneer Burger + Sprite + Fries (R)",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/bc5437f7-ec45-425f-b29e-4b9cbef69879_20b8cd0e-e83d-415a-9da1-73832c156a41.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29884,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "144255060",
                                    "groupName": "Choose an option for Sprite",
                                    "choices": [
                                      {
                                        "id": "115680450",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "115680449",
                                        "name": "Coke",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136747997",
                                "name": "McSpicy Paneer + Sprite + Fries (R)",
                                "category": "McSpicy Combos with Sprite",
                                "description": "Enjoy a deliciously indulgent combo of McSpicy Paneer Burger + Sprite + Fries (R)",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/5e9c5574-2d99-43ac-8bca-8f41d98a1da9_de8aa300-d905-4518-ae9e-aebd1b5d1c95.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29898,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "144255067",
                                    "groupName": "Choose an option for Sprite",
                                    "choices": [
                                      {
                                        "id": "115680450",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "115680449",
                                        "name": "Coke",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Fried Chicken & Wings",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125972808",
                                "name": "4 pcs McSpicy Fried chicken Bucket + 1 Coke",
                                "category": "Fried Chicken & Wings",
                                "description": "Enjoy 4 pcs of juicy, spicy and crunchy McSpicy Fried Chicken in a Bucket that's perfect for sharing + 1 Coke. Serves 1-2",
                                "imageId": "77ce9851cf897e3d82779977a4848c08",
                                "inStock": 1,
                                "price": 47619,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115733474",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Burgers & Wraps",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "53521881",
                                "name": "McSpicy Chicken Double Patty Burger",
                                "category": "Burgers & Wraps",
                                "description": "Indulge in our signature tender double chicken patty, coated in spicy, crispy batter, topped with creamy sauce, and crispy lettuce.",
                                "imageId": "314b5b5786f73746de4880602723a913",
                                "inStock": 1,
                                "price": 27143,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "73 ratings",
                                    "ratingCountV2": "73"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "53521891",
                                "name": "McChicken Double Patty Burger",
                                "category": "Burgers & Wraps",
                                "description": "Enjoy the classic, tender double chicken patty with creamy mayonnaise and lettuce in every bite",
                                "imageId": "af88f46a82ef5e6a0feece86c349bb00",
                                "inStock": 1,
                                "price": 17238,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.9",
                                    "ratingCount": "41 ratings",
                                    "ratingCountV2": "41"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "53521892",
                                "name": "McVeggie Double Patty Burger",
                                "category": "Burgers & Wraps",
                                "description": "Savour your favorite spiced double veggie patty, lettuce, mayo, between toasted sesame buns in every bite",
                                "imageId": "2d5062832f4d36c90e7dfe61ef48e85a",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 18762,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "42 ratings",
                                    "ratingCountV2": "42"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378393",
                                "name": "Mexican McAloo Tikki Double Patty Burger",
                                "category": "Burgers & Wraps",
                                "description": "A fusion of International taste combined with your favourite aloo tikki now with two patties",
                                "imageId": "cda0e2d51420a95fad28ad728914b6de",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9333,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "63 ratings",
                                    "ratingCountV2": "63"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "53521900",
                                "name": "McAloo Tikki Double Patty Burger",
                                "category": "Burgers & Wraps",
                                "description": "The World's favourite Indian burger! A crispy double Aloo patty, tomato mayo sauce & onions",
                                "imageId": "ef569f74786e6344883a1decdd193229",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8857,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "45 ratings",
                                    "ratingCountV2": "45"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378202",
                                "name": "Big Spicy Paneer Wrap",
                                "category": "Burgers & Wraps",
                                "description": "Experience indulgence in every bite with a wrap made of crispy, spicy paneer patty, tomato mayo, lettuce, onions, tomatoes & cheese.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/198c3d14-3ce8-4105-8280-21577c26e944_779c4353-2f85-4515-94d2-208e90b830eb.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 23905,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "486 ratings",
                                    "ratingCountV2": "486"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378205",
                                "name": "Chicken Maharaja Mac Burger",
                                "category": "Burgers & Wraps",
                                "description": "Savor our filling 11 layer burger! Double the indulgence with 2 juicy grilled chicken patties, along with jalape?os, onion, cheese, tomatoes, lettuce, and zesty Habanero sauce. ",
                                "imageId": "aaaecb696882cdb7ebaad35464b26d94",
                                "inStock": 1,
                                "price": 25429,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "548 ratings",
                                    "ratingCountV2": "548"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378208",
                                "name": "McSpicy Chicken Burger",
                                "category": "Burgers & Wraps",
                                "description": "Indulge in our signature tender chicken patty, coated in spicy, crispy batter, topped with creamy sauce, and crispy lettuce.",
                                "imageId": "12b045b7fd1d82b15ebde45b778e22b8",
                                "inStock": 1,
                                "price": 21471,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "1489 ratings",
                                    "ratingCountV2": "1489"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378231",
                                "name": "McVeggie Burger",
                                "category": "Burgers & Wraps",
                                "description": "Savour your favorite spiced veggie patty, lettuce, mayo, between toasted sesame buns in every bite",
                                "imageId": "a25f25f74a6a6068e55fcbced1580084",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 14914,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "774 ratings",
                                    "ratingCountV2": "774"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378246",
                                "name": "McSpicy Paneer Burger",
                                "category": "Burgers & Wraps",
                                "description": "Indulge in rich & filling spicy paneer patty served with creamy sauce, and crispy lettuce?irresistibly satisfying!",
                                "imageId": "ad20daa26b978ebff5d08572cb6cca7f",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 21471,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "513 ratings",
                                    "ratingCountV2": "513"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378249",
                                "name": "Veg Maharaja Mac Burger",
                                "category": "Burgers & Wraps",
                                "description": "Savor our filling 11 layer burger! Double the indulgence with 2 corn & cheese patties, along with jalape?os, onion, cheese, tomatoes, lettuce, and spicy Cocktail sauce. ",
                                "imageId": "7a248018e36c112eb3fb0b877b4b06f2",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 23562,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "219 ratings",
                                    "ratingCountV2": "219"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378264",
                                "name": "McChicken Burger",
                                "category": "Burgers & Wraps",
                                "description": "Enjoy the classic, tender chicken patty with creamy mayonnaise and lettuce in every bite",
                                "imageId": "51352086abd3efaaef530188aec16631",
                                "inStock": 1,
                                "price": 14165,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "1628 ratings",
                                    "ratingCountV2": "1628"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378272",
                                "name": "Mexican McAloo Tikki Burger",
                                "category": "Burgers & Wraps",
                                "description": "Your favourite McAloo Tikki with a fusion spin with a Chipotle sauce & onions",
                                "imageId": "167aeccf27bab14940fa646c8328b1b4",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 7238,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "882 ratings",
                                    "ratingCountV2": "882"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378280",
                                "name": "McAloo Tikki Burger",
                                "category": "Burgers & Wraps",
                                "description": "The World's favourite Indian burger! A crispy Aloo patty, tomato mayo sauce & onions",
                                "imageId": "b13811eeee71e578bc6ca89eca0ec87f",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 6952,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "788 ratings",
                                    "ratingCountV2": "788"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378414",
                                "name": "Grilled Chicken & Cheese Burger",
                                "category": "Burgers & Wraps",
                                "description": "A grilled chicken patty, topped with sliced cheese, spicy Habanero sauce, with some heat from jalapenos & crunch from onions",
                                "imageId": "3730f0236ea8c484d5fb8a3918085f81",
                                "inStock": 1,
                                "price": 16857,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "602 ratings",
                                    "ratingCountV2": "602"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378435",
                                "name": "Corn & Cheese Burger",
                                "category": "Burgers & Wraps",
                                "description": "A juicy corn and cheese patty, topped with extra cheese, Cocktail sauce, with some heat from jalapenos & crunch from onions",
                                "imageId": "28d4d94291cf9d70f5f559d1dfa46252",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 16327,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "421 ratings",
                                    "ratingCountV2": "421"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378438",
                                "name": "Chicken Kebab Burger",
                                "category": "Burgers & Wraps",
                                "description": "A flavourful Chicken Kebab patty topped with a tangy rassam sauce & crunchy onions",
                                "imageId": "f8287bf0bd1f1dacc6504b799dc84029",
                                "inStock": 1,
                                "price": 11238,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "413 ratings",
                                    "ratingCountV2": "413"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378497",
                                "name": "Big Spicy Chicken Wrap",
                                "category": "Burgers & Wraps",
                                "description": "Savour a delicious wrap made with a spicy, crispy chicken patty, creamy sauce, cheese lettuce, onions, tomatoes & seasoning.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/e1fa4587-23ac-4613-af61-de659b066d19_14205d12-ea39-4894-aa85-59035020cecd.png",
                                "inStock": 1,
                                "price": 22952,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "772 ratings",
                                    "ratingCountV2": "772"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "67554635",
                                "name": "Masala McEgg Burger",
                                "category": "Burgers & Wraps",
                                "description": "A steamed egg, spicy Habanero sauce, & onions on toasted buns, a protein packed delight!",
                                "imageId": "265c57f68b1a52f1cc4b63acf082d611",
                                "inStock": 1,
                                "price": 6952,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "101 ratings",
                                    "ratingCountV2": "101"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "80627087",
                                "name": "McCheese Burger Chicken",
                                "category": "Burgers & Wraps",
                                "description": "Double the indulgence with a sinfully oozing cheesy patty & flame-grilled chicken patty, along with chipotle sauce, shredded onion, jalapenos & lettuce.",
                                "imageId": "4615bebe734c2fe0de8126ab84138750",
                                "inStock": 1,
                                "price": 28095,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "74 ratings",
                                    "ratingCountV2": "74"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "80627089",
                                "name": "McCheese Burger Veg",
                                "category": "Burgers & Wraps",
                                "description": "Find pure indulgence in our Veg McCheese Burger, featuring a sinfully oozing cheesy veg patty, roasted chipotle sauce, jalapenos & lettuce.",
                                "imageId": "a2bd9588c189a6e47f67b8f43732cbe2",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 26190,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.7",
                                    "ratingCount": "53 ratings",
                                    "ratingCountV2": "53"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "80627093",
                                "name": "McSpicy Premium Chicken Burger",
                                "category": "Burgers & Wraps",
                                "description": "A wholesome Spicy Chicken patty, Lettuce topped with Jalapenos and Cheese slice, Spicy Cocktail sauce & Cheese sauce",
                                "imageId": "5d71415c768b5ff868684a6818bf7242",
                                "inStock": 1,
                                "price": 26000,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "67 ratings",
                                    "ratingCountV2": "67"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "80627097",
                                "name": "McSpicy Premium Veg Burger",
                                "category": "Burgers & Wraps",
                                "description": "A wholesome Spicy Paneer patty, Lettuce topped with Jalapenos and Cheese slice, Spicy Cocktail sauce & Cheese sauce",
                                "imageId": "82609174cf229436f977e6f73f964e6d",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 24857,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "46 ratings",
                                    "ratingCountV2": "46"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "132406107",
                                "name": "McSpicy Deluxe Chicken Burger",
                                "category": "Burgers & Wraps",
                                "description": "Indulge in a burger made with a spicy and crispy Chicken Patty, Chipotle Sauce, Tomatos, Lettuce & Jalapenos.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/15/4155af6e-6440-4fb1-b466-0747d4fac7f4_f13413da-3d90-4615-9043-52dbae05ecae.png",
                                "inStock": 1,
                                "price": 23334,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "5.0",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "132406108",
                                "name": "McSpicy Deluxe Paneer Burger",
                                "category": "Burgers & Wraps",
                                "description": "Indulge in a burger made with a spicy and crispy Paneer Patty, Chipotle Sauce, Tomatos, Lettuce & Cheese.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/15/bc20f4ef-184a-498e-ad94-95da5f1891e1_2c70984c-ae04-4f00-8a3a-3a6fd33deee0.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 23334,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "134351204",
                                "name": "McSpicy Deluxe Chicken Double Patty Burger",
                                "category": "Burgers & Wraps",
                                "description": "Indulge in a burger made with two spicy and crispy Chicken Patty, Chipotle Sauce, Tomatos, Lettuce & Jalapenos.",
                                "imageId": "8540bab49c99e3b9f0d625c7b17a1347",
                                "inStock": 1,
                                "price": 29048,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136747965",
                                "name": "McChicken Fiesta Burger",
                                "category": "Burgers & Wraps",
                                "description": "Savour your favourite Mc Chicken burger with the spicy delight of Chipotle sauce, sliced onions, along with lettuce.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/fd1130c0-8208-49e2-bc22-980b88139f75_9c0eff25-4480-473d-ae0c-528e985dca01.png",
                                "inStock": 1,
                                "price": 14190,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136748008",
                                "name": "McVeggie Fiesta Burger",
                                "category": "Burgers & Wraps",
                                "description": "Savour your favourite Mc Veggie burger with the delight of Cocktail sauce, jalapenoes, sliced onions along with lettuce.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/54b05732-1902-4278-b21f-d5222b3787d8_138193aa-deac-4475-9863-298cfeb0c56b.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 14952,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136748019",
                                "name": "Mexican Chicken Wrap",
                                "category": "Burgers & Wraps",
                                "description": "A mexican twist of the classic chicken patty wrap with onions, tomatoes and lettuce, making every bite a filling one",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/91a5b3fa-2335-400c-aa59-09ba67c87bea_dccfaa21-3795-4b25-b202-2a547f58f96a.png",
                                "inStock": 1,
                                "price": 18952,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136748027",
                                "name": "Mexican Veggie Wrap",
                                "category": "Burgers & Wraps",
                                "description": "A mexican twist of a corn and cheese patty wrap with onions, tomatoes and lettuce, making every bite a filling one",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/3c675b9f-a652-47cb-a69b-a1310d3c8cac_9ac6d1fb-8411-4bd0-aaee-65e4c0e39ffb.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 18000,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Burger Combos ( Meals )",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "53958679",
                                "name": "McAloo Tikki Double Patty Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a delicious combo of McAloo Tikki Burger double patty burger + Fries (M) + Beverage of your choice in a new, delivery friendly, reusable bottle.",
                                "imageId": "1bcd9724fca70871a0e1fdc298c1f0e0",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 22381,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "137969969",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "137969970",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "137969971",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.9",
                                    "ratingCount": "9 ratings",
                                    "ratingCountV2": "9"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "53958666",
                                "name": "McVeggie Double Patty Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a combo of McVeggie double patty burer + Fries (M) + Drink of your Choice in a new, delivery friendly, resuable bottle.",
                                "imageId": "b13dfa207df1045eae030442555fb69c",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 33810,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "137969981",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "137969982",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "137969983",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "53958662",
                                "name": "McChicken Double Patty Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Your favorite McChicken Burger double pattu burger + Fries (M) + Drink of your choice in a new, delivery friendly, resuable bottle.",
                                "imageId": "e8a8f43ee29a3b97d2fac37e89648eac",
                                "inStock": 1,
                                "price": 34286,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "137969972",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "137969973",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "137969974",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "53958573",
                                "name": "McSpicy Chicken Double Patty Burger combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Your favorite McSpicy Chicken double patty Burger + Fries (M) + Drink of your choice.",
                                "imageId": "91ed96b67df6e630a6830fc2e857b5b1",
                                "inStock": 1,
                                "price": 40857,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "137969975",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "137969976",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "137969977",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.1",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "54782103",
                                "name": "Mexican McAloo Tikki Double Patty Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy the Mexican McAloo Tikki burger with double patty + Fries (M) + Coke (M)",
                                "imageId": "6bfe589298fbd3dc6d5fcebf35cad1c2",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 24286,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "141162585",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "141162586",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "141162587",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378319",
                                "name": "McAloo Tikki Burger Happy Meal",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a combo of McAloo Tikki Burger + Sweet Corn + B Natural Mixed Fruit Beverage + Book",
                                "imageId": "98b4674a979d6faf528f05e65e6799f2",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 21334,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "112259667",
                                    "groupName": "Choose an option for Happy Meal Book",
                                    "choices": [
                                      {
                                        "id": "100543470",
                                        "name": "Happy Meal Book",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "112259669",
                                    "groupName": "Choose an option for Mixed Fruit Beverage",
                                    "choices": [
                                      {
                                        "id": "100543473",
                                        "name": "Fanta (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543472",
                                        "name": "Coke (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543471",
                                        "name": "Sprite (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "14 ratings",
                                    "ratingCountV2": "14"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378326",
                                "name": "McChicken Burger Happy Meal",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a combo of McChicken Burger + Sweet Corn + B Natural Mixed Fruit Beverage + Book",
                                "imageId": "2b7356d14d1c9dc38d20ab8a30247834",
                                "inStock": 1,
                                "price": 32953,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "112259674",
                                    "groupName": "Choose an option for Happy Meal Book",
                                    "choices": [
                                      {
                                        "id": "100543470",
                                        "name": "Happy Meal Book",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "112259677",
                                    "groupName": "Choose an option for Mixed Fruit Beverage",
                                    "choices": [
                                      {
                                        "id": "100543473",
                                        "name": "Fanta (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543472",
                                        "name": "Coke (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543471",
                                        "name": "Sprite (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "35 ratings",
                                    "ratingCountV2": "35"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378331",
                                "name": "McVeggie Burger Happy Meal",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a combo of McVeggie Burger + Sweet Corn + B Natural Mixed Fruit Beverage + Book",
                                "imageId": "ca05cb0597101eb8357cda385b92b584",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 30667,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "112259724",
                                    "groupName": "Choose an option for Happy Meal Book",
                                    "choices": [
                                      {
                                        "id": "100543470",
                                        "name": "Happy Meal Book",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "112259725",
                                    "groupName": "Choose an option for Mixed Fruit Beverage",
                                    "choices": [
                                      {
                                        "id": "100543473",
                                        "name": "Fanta (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543472",
                                        "name": "Coke (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543471",
                                        "name": "Sprite (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.2",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378401",
                                "name": "McSpicy Paneer Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy your favourite McSpicy Paneer Burger + Fries (M) + Drink of your Choice . Order now to experience a customizable, delicious combo",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/15/70fc7aa0-7f3b-418e-8ccd-5947b5f1aacd_055bbe77-fbe7-4200-84d3-4349475eb298.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 34191,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115733532",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115733533",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115733534",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "72 ratings",
                                    "ratingCountV2": "72"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378419",
                                "name": "Veg Maharaja Mac Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a double decker Veg Maharaja Mac+ Fries (M) + Drink of your Choice . Order now to experience a customizable, delicious meal.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/14/d064fb5e-fb2e-4e1d-9515-18f26489f5b1_f6f49dba-2ae7-4ebf-8777-548c5ad4d799.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 38476,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115733535",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115733536",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115733537",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "62 ratings",
                                    "ratingCountV2": "62"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378422",
                                "name": "Kebab Chicken Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Relish on a juicy Chicken Kebab Burger + Fries (M) + Drink of your Choice on this meal. Order now to experience a customizable, delicious meal.",
                                "imageId": "b22592af2edd8c7046fcc74d10a66ace",
                                "inStock": 1,
                                "price": 20469,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "101756791",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "112067326",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "112259777",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "42 ratings",
                                    "ratingCountV2": "42"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378423",
                                "name": "McChicken Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Your favorite McChicken Burger + Fries (M) + Drink of your choice in a new, delivery friendly, resuable bottle.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/15/b943fe56-212d-4366-a085-4e24d3532b30_3776df33-e18d-46c9-a566-c697897f1d16.png",
                                "inStock": 1,
                                "price": 30476,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "164 ratings",
                                    "ratingCountV2": "164"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378432",
                                "name": "McSpicy Chicken Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Your favorite McSpicy Chicken Burger + Fries (M) + Drink of your choice.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/15/214189a0-fd53-4f83-9d18-c3e53f2c017a_70748bf8-e587-47d6-886c-9b7ac57e84b3.png",
                                "inStock": 1,
                                "price": 35143,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115733529",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115733530",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115733531",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "357 ratings",
                                    "ratingCountV2": "357"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378455",
                                "name": "Chicken Maharaja Mac Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a double decker Chicken Maharaja Mac + Fries (M) + Drink of your Choice . Order now to experience a customizable, delicious meal.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/14/ead090f2-5f80-4159-a335-d32658bcfc7c_8bcc5cd9-b22a-4f5d-8cde-0a2372c985c8.png",
                                "inStock": 1,
                                "price": 38476,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115733520",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115733521",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115733522",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "181 ratings",
                                    "ratingCountV2": "181"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378471",
                                "name": "Big Spicy Chicken Wrap Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy your favourite Big Spicy Chicken Wrap + Fries (M) + Drink of your Choice . Order now to experience a customizable, delicious combo",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/f631f834-aec2-410d-ab9d-7636cd53d7a0_8801a3c7-ad83-4f7c-bcb0-76101fadde91.png",
                                "inStock": 1,
                                "price": 37048,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "101756776",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "112067322",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "112259764",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "68 ratings",
                                    "ratingCountV2": "68"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378493",
                                "name": "McVeggie Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a combo of McVeggie + Fries (M) + Drink of your Choice in a new, delivery friendly, resuable bottle.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/15/5c9942c5-bc9d-4637-a312-cf51fe1d7aa8_e7e13473-9424-4eb8-87c3-368cfd084a2f.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29905,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "76 ratings",
                                    "ratingCountV2": "76"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378495",
                                "name": "Big Spicy Paneer Wrap Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy your favourite Big Spicy Paneer Wrap + Fries (M) + Drink of your Choice . Order now to experience a customizable, delicious combo",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/116148a2-7f56-44af-bdd0-6bbb46f48baa_355bbd20-86d4-49b8-b3a9-d290772a9676.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 36095,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "101756779",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "112067324",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "112259770",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.5",
                                    "ratingCount": "31 ratings",
                                    "ratingCountV2": "31"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378501",
                                "name": "Corn & cheese Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a combo of Corn & Cheese Burger + Fries (M) + Coke . Order now to experience a customizable, delicious meal.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/14/c8839f22-e525-44bb-8a50-8ee7cffecd26_cf4c0bcf-c1b9-4c0e-9109-03eb86abf4dd.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28857,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "228 ratings",
                                    "ratingCountV2": "228"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "60305351",
                                "name": "Chicken McNuggets Combo 6 Pcs Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy your favorite Chicken McNuggets + Fries (M) + Drink of your choice.",
                                "imageId": "6e7f9411ed67fe8d8873734af1e8d4e9",
                                "inStock": 1,
                                "price": 34858,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "102193496",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "102193497",
                                    "groupName": "Choose an option for Mustard Sauce",
                                    "choices": [
                                      {
                                        "id": "94834283",
                                        "name": "Barbeque Sauce",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "18 ratings",
                                    "ratingCountV2": "18"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "60305495",
                                "name": "9 Pc Chicken Nuggets Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy your favorite Chicken McNuggets + Fries (M) + Drink of your choice.",
                                "imageId": "4c56f086e500afe6b2025f9c46846e12",
                                "inStock": 1,
                                "price": 38882,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "102193498",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "102193499",
                                    "groupName": "Choose an option for Mustard Sauce",
                                    "choices": [
                                      {
                                        "id": "94834283",
                                        "name": "Barbeque Sauce",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "20 ratings",
                                    "ratingCountV2": "20"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "60740731",
                                "name": "Mexican McAloo Tikki Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a delicious combo of Mexican McAloo Tikki Burger + Fries (M) + Beverage of your choice in a new, delivery friendly, reusable bottle.",
                                "imageId": "0140c49c7274cdb6af08053af1e6cc20",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 22353,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "76 ratings",
                                    "ratingCountV2": "76"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "67554633",
                                "name": "Masala McEgg Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a combo of Masala McEgg + Fries (M) + Drink of your Choice . Order now to experience a customizable, delicious meal.",
                                "imageId": "4f474c833930fa31d08ad2feed3414d8",
                                "inStock": 1,
                                "price": 22667,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "101756866",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "112067339",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "112259821",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "2.6",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "78534386",
                                "name": "Birthday Party Package - McChicken",
                                "category": "Burger Combos ( Meals )",
                                "description": "5 McChicken Burger + 5 Sweet Corn + 5 B Natural Mixed Fruit Beverage + 5 Soft Serve (M) + Book",
                                "imageId": "31da1776bf9e74beea809aadc61cf1da",
                                "inStock": 1,
                                "price": 221144,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "112259641",
                                    "groupName": "Choose an option for Happy Meal Book",
                                    "choices": [
                                      {
                                        "id": "100543470",
                                        "name": "Happy Meal Book",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "112259643",
                                    "groupName": "Choose an option for Mixed Fruit Beverage",
                                    "choices": [
                                      {
                                        "id": "100543473",
                                        "name": "Fanta (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543472",
                                        "name": "Coke (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543471",
                                        "name": "Sprite (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "78534387",
                                "name": "Birthday Party Package - McVeggie",
                                "category": "Burger Combos ( Meals )",
                                "description": "5 McVeggie Burger + 5 Sweet Corn + 5 B Natural Mixed Fruit Beverage + 5 Soft Serve (M) + Book",
                                "imageId": "567411605ac9c72680aa742e17fb83d5",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 221144,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "112259645",
                                    "groupName": "Choose an option for Happy Meal Book",
                                    "choices": [
                                      {
                                        "id": "100543470",
                                        "name": "Happy Meal Book",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "112259647",
                                    "groupName": "Choose an option for Mixed Fruit Beverage",
                                    "choices": [
                                      {
                                        "id": "100543473",
                                        "name": "Fanta (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543472",
                                        "name": "Coke (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543471",
                                        "name": "Sprite (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "78534395",
                                "name": "McEgg Burger Happy Meal",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a combo of McEgg Burger  + Sweet Corn + B Natural Mixed Fruit Beverage + Book",
                                "imageId": "7a328a58de3b5e209116682223e5d94d",
                                "inStock": 1,
                                "price": 23905,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "112259679",
                                    "groupName": "Choose an option for Happy Meal Book",
                                    "choices": [
                                      {
                                        "id": "100543470",
                                        "name": "Happy Meal Book",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "112259680",
                                    "groupName": "Choose an option for Mixed Fruit Beverage",
                                    "choices": [
                                      {
                                        "id": "100543473",
                                        "name": "Fanta (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543472",
                                        "name": "Coke (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543471",
                                        "name": "Sprite (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "80627095",
                                "name": "McSpicy Premium Burger Chicken Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "A deliciously filling meal of McSpicy Premium Chicken Burger + Fries (M) + Drink of your choice",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/14/827df5ce-3efe-48bd-ae39-bfe0dec0f615_f81da671-aed0-4c84-a331-12548d700e25.png",
                                "inStock": 1,
                                "price": 38476,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115733478",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115733479",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115733480",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "108 ratings",
                                    "ratingCountV2": "108"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "100815971",
                                "name": "McCheese Burger Chicken Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a deliciously filling meal of McCheese Chicken Burger + Fries (M) + Beverage of your Choice in a delivery friendly, reusable bottle.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/14/b32eb9b3-7873-4f00-b601-0c92dd5a71ef_ec318a73-0e41-4277-8606-dc5c33b04533.png",
                                "inStock": 1,
                                "price": 38476,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115733542",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115733544",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115733545",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "20 ratings",
                                    "ratingCountV2": "20"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "112620872",
                                "name": "McCheese Burger Veg Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a deliciously filling meal of McCheese Veg Burger + Fries (M) + Beverage of your Choice in a delivery friendly, reusable bottle.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/14/22b25dd0-80ed-426b-a323-82c6b947612d_df827568-54f9-4329-af60-1fff38d105e9.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 38476,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "122430753",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "122430755",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "122430756",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "36 ratings",
                                    "ratingCountV2": "36"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "112713759",
                                "name": "McSpicy Premium Burger Veg Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "A deliciously filling meal of McSpicy Premium Veg Burger + Fries (M) + Drink of your choice",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/14/0469bd9c-863b-4fd8-b1c6-ddb9955f7ff1_5b922e42-8308-48d1-820f-bdf4ff8a7a68.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 38476,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115733481",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115733482",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115733483",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "16 ratings",
                                    "ratingCountV2": "16"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "115129659",
                                "name": "Grilled Cheese and Chicken Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a combo of Grilled Chicken & Cheese Burger + Fries (M) + Coke . Order now to experience a customizable, delicious meal.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/14/f6813404-54a4-492b-a03a-cf32d00ee1ae_c98c4761-69eb-4503-bde3-dffaafd43b15.png",
                                "inStock": 1,
                                "price": 30381,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "115733526",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115733527",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "115733528",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "12 ratings",
                                    "ratingCountV2": "12"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "115129662",
                                "name": "McAloo Tikki Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a delicious combo of McAloo Tikki Burger + Fries (M) + Beverage of your choice in a new, delivery friendly, reusable bottle.",
                                "imageId": "b03a3ad7212fca0da40e90eed372ced9",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 20469,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "8 ratings",
                                    "ratingCountV2": "8"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "117966443",
                                "name": "Jain Meal - McCheese Burger Veg Combo ",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a combo of the Jain friendly, McCheese Burger Veg, Classic corn, Cheese Dip, McFlurry Oreo (Small) with a beverage of your choice in a delivery friendly, resuable bottle.",
                                "imageId": "49e13df87ab3602afa703792ee63fcd3",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 41584,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "101756953",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "123194991",
                                "name": "Mcspicy Fried Chicken Combo.",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy the new McSpicy Fried chicken + Fries (M) + Drink of your choice",
                                "imageId": "2bc1f7542c53c75ee548e5bdd5061742",
                                "inStock": 1,
                                "price": 22000,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "106303259",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "126295652",
                                "name": "2 Pc Chicken Nuggets Happy Meal",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a combo of  2 Pc Chicken Nuggets + Sweet Corn+ B Natural Mixed Fruit Beverage + Book",
                                "imageId": "78924991d845b01f4413bafd169fb8bc",
                                "inStock": 1,
                                "price": 22000,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "116601027",
                                    "groupName": "Choose an option for Happy Meal Book",
                                    "choices": [
                                      {
                                        "id": "100543470",
                                        "name": "Happy Meal Book",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "116601028",
                                    "groupName": "Choose an option for Mixed Fruit Beverage",
                                    "choices": [
                                      {
                                        "id": "100543473",
                                        "name": "Fanta (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543472",
                                        "name": "Coke (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543471",
                                        "name": "Sprite (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "126295655",
                                "name": "4 Pc Chicken Nuggets Happy Meal",
                                "category": "Burger Combos ( Meals )",
                                "description": "Enjoy a combo of  4 Pc Chicken Nuggets + Sweet Corn+ B Natural Mixed Fruit Beverage + Book",
                                "imageId": "d85f06a7806ccad6994a3a4badf90135",
                                "inStock": 1,
                                "price": 26762,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "116601029",
                                    "groupName": "Choose an option for Happy Meal Book",
                                    "choices": [
                                      {
                                        "id": "100543470",
                                        "name": "Happy Meal Book",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "116601030",
                                    "groupName": "Choose an option for Mixed Fruit Beverage",
                                    "choices": [
                                      {
                                        "id": "100543473",
                                        "name": "Fanta (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543472",
                                        "name": "Coke (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543471",
                                        "name": "Sprite (R)",
                                        "price": 800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "132406105",
                                "name": " McSpicy Deluxe Chicken Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "McSpicy Deluxe Chicken Burger + Fries (M) + Drink of your choice.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/15/925ee002-5dad-42b2-bfb3-7ae0dfa291d3_42d881c9-ebea-45f5-a91d-ce0eb4b25d2a.png",
                                "inStock": 1,
                                "price": 37048,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "132025784",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "132025785",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "132025786",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "8 ratings",
                                    "ratingCountV2": "8"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "132406106",
                                "name": "McSpicy Deluxe Paneer Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "McSpicy Deluxe paneer Burger + Fries (M) + Drink of your choice.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/15/72abe84e-7e1d-4bbe-aa2d-a6de6753df3d_60e7e353-1fb1-4365-a6c4-aa4834198570.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 36095,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "132025787",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "132025788",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "132025789",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "5.0",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "134351205",
                                "name": "McSpicy Deluxe Chicken Double Patty Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "McSpicy Deluxe Chicken double patty Burger + Fries (M) + Drink of your choice.",
                                "imageId": "6581baefa0ab6c6a7f4b99e67e1c38c0",
                                "inStock": 1,
                                "price": 42762,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "137969978",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "137969979",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "137969980",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136747969",
                                "name": "McChicken Fiesta Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "All new McChicken Fiesta Burger + Fries ( M ) + Drink of your choice",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/6f698009-1634-4679-8f30-88d033ae8fb7_139c5184-4f46-41d6-9223-d9a5abec7719.png",
                                "inStock": 1,
                                "price": 30476,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "144255028",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "144255029",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "144255032",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136748012",
                                "name": "McVeggie Fiesta Burger Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "All new McVeggie Fiesta  Burger + Fries ( M ) + Drink of your choice",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/4f4aaf75-5308-4213-90e5-0a896f5fa93c_3b5be1f0-a0e3-4251-8a83-4e33157312ea.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 27905,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "144255083",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "144255085",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "144255087",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136748022",
                                "name": "Mexican Chicken Wrap Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "A medium meal of the classic chicken wrap with onions, tomatoes and lettuce, making every bite a filling one with a Mexican twist",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/2eafe1b6-83c4-4c7a-b82e-d053860ad6f2_566a32bf-f89e-4354-8a0a-6561f4a5f90a.png",
                                "inStock": 1,
                                "price": 29429,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "144255099",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "144255100",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "144255103",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136748031",
                                "name": "Mexican Veggie Wrap Combo",
                                "category": "Burger Combos ( Meals )",
                                "description": "A medium meal of the corn and cheese patty wrap with onions, tomatoes and lettuce, making every bite a filling one with a Mexican twist",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/e87b03e1-e4b7-4c98-9c87-0c1ba2c3489e_c23ed29f-a282-4bbd-be0f-b016b6f38da2.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 28476,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "144255115",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "144255116",
                                    "groupName": "Choose an option for Nothing for Today",
                                    "choices": [
                                      {
                                        "id": "100456083",
                                        "name": "Mcflurry Oreo ( S )",
                                        "price": 9400,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  },
                                  {
                                    "groupId": "144255118",
                                    "groupName": "Choose an option for Fries (Medium)",
                                    "choices": [
                                      {
                                        "id": "100543504",
                                        "name": "Mexican Cheese Fries",
                                        "price": 3800,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543503",
                                        "name": "Fries (Large)",
                                        "price": 2000,
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Fries & Sides",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "56378225",
                                "name": "Piri Piri Spice Mix",
                                "category": "Fries & Sides",
                                "description": "The perfect, taste bud tingling partner for our World Famous Fries. Shake Shake, and dive in!",
                                "imageId": "df3edfc74f610edff535324cc53a362a",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 2381,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "1690 ratings",
                                    "ratingCountV2": "1690"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "65331615",
                                "name": "Fries (Regular)",
                                "category": "Fries & Sides",
                                "description": "World Famous Fries, crispy, golden, lightly salted and fried to perfection! Also known as happiness.",
                                "imageId": "5a18fbbff67076c9a4457a6b220a55d9",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 8571,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "391 ratings",
                                    "ratingCountV2": "391"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "65331616",
                                "name": "Fries (Medium)",
                                "category": "Fries & Sides",
                                "description": "World Famous Fries, crispy, golden, lightly salted and fried to perfection! Also known as happiness.",
                                "imageId": "8a61e7fd97c454ea14d0750859fcebb8",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11905,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "417 ratings",
                                    "ratingCountV2": "417"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "65331617",
                                "name": "Fries (Large)",
                                "category": "Fries & Sides",
                                "description": "World Famous Fries, crispy, golden, lightly salted and fried to perfection! Also known as happiness.",
                                "imageId": "a4b3002d0ea35bde5e5983f40e4ebfb4",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13905,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "555 ratings",
                                    "ratingCountV2": "555"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "67458944",
                                "name": "Tomato Ketchup Sachet",
                                "category": "Fries & Sides",
                                "description": "Looking for a sauce to complement your meal? Look no further.",
                                "imageId": "7db5533db29a4e9d2cc033f35c5572bc",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 95,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "67 ratings",
                                    "ratingCountV2": "67"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "68263675",
                                "name": "9 Pc Chicken Nuggets",
                                "category": "Fries & Sides",
                                "description": "9 pieces of our iconic crispy, golden fried Chicken McNuggets!",
                                "imageId": "1ca7abb262e8880f5cb545d0d2f9bb9b",
                                "inStock": 1,
                                "price": 20858,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "54 ratings",
                                    "ratingCountV2": "54"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "68263691",
                                "name": "6 Pc Chicken Nuggets",
                                "category": "Fries & Sides",
                                "description": "6 pieces of our iconic crispy, golden fried Chicken McNuggets!",
                                "imageId": "44dc10c1099d7c366db9f5ce776878bd",
                                "inStock": 1,
                                "price": 17715,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "100142402",
                                    "groupName": "Choose an option for Mustard Sauce",
                                    "choices": [
                                      {
                                        "id": "94834283",
                                        "name": "Barbeque Sauce",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "54 ratings",
                                    "ratingCountV2": "54"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "69614042",
                                "name": "Chilli Sauce Sachet",
                                "category": "Fries & Sides",
                                "description": "Looking for a sauce to complement your meal? Look no further.",
                                "imageId": "f708dfc29c9624d8aef6e6ec30bde1c9",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 190,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "44 ratings",
                                    "ratingCountV2": "44"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "88923934",
                                "name": "Veg Pizza McPuff",
                                "category": "Fries & Sides",
                                "description": "Crispy brown crust with a generous filling of rich tomato sauce, mixed with carrots, bell peppers, beans, onions and mozzarella. Served HOT.",
                                "imageId": "abe4b8cdf0f1bbfd1b9a7a05be3413e8",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 5905,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "584 ratings",
                                    "ratingCountV2": "584"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "112620845",
                                "name": "Classic Corn Cup",
                                "category": "Fries & Sides",
                                "description": "A delicious side of golden sweet kernels of corn in a cup",
                                "imageId": "9d67eae020425c4413acaf5af2a29dce",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9048,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "112620851",
                                "name": "Fries (M) + Piri Piri Mix",
                                "category": "Fries & Sides",
                                "description": "Flat 15% Off on Fries (M) + Piri Piri Mix",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/7f31c10d-b2a7-4611-8b0e-ac9324460fd0_4ec1b62d-543f-4e35-8e9d-8c156d470ef4.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12095,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "50 ratings",
                                    "ratingCountV2": "50"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "112620883",
                                "name": "Classic Cheese Fries",
                                "category": "Fries & Sides",
                                "description": "The world famous, crispy golden Fries, served with delicious cheese sauce with a hint of spice",
                                "imageId": "f13f7c1db7b7fda89c86e84e98dc1d29",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 15714,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "80 ratings",
                                    "ratingCountV2": "80"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "116491416",
                                "name": "20 Pc Chicken Nuggets",
                                "category": "Fries & Sides",
                                "description": "20 pieces of our iconic crispy, golden fried Chicken McNuggets!",
                                "imageId": "1ca7abb262e8880f5cb545d0d2f9bb9b",
                                "inStock": 1,
                                "price": 42383,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "106303252",
                                    "groupName": "Choose an option for Mustard Sauce",
                                    "choices": [
                                      {
                                        "id": "94834283",
                                        "name": "Barbeque Sauce",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "15 ratings",
                                    "ratingCountV2": "15"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "123194975",
                                "name": "Barbeque Sauce",
                                "category": "Fries & Sides",
                                "description": "Looking for a sauce to complement your meal? Look no further.",
                                "imageId": "ba0a188d45aecc3d4d187f340ea9df54",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 1905,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "34 ratings",
                                    "ratingCountV2": "34"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "123194982",
                                "name": "4 Pcs Chicken Nuggets",
                                "category": "Fries & Sides",
                                "description": "4 pieces of our iconic crispy, golden fried Chicken McNuggets!",
                                "imageId": "44dc10c1099d7c366db9f5ce776878bd",
                                "inStock": 1,
                                "price": 11048,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "41 ratings",
                                    "ratingCountV2": "41"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "123194997",
                                "name": "Mustard Sauce",
                                "category": "Fries & Sides",
                                "description": "Looking for a sauce to complement your meal? Look no further.",
                                "imageId": "6c3aeffdbd544ea3ceae1e4b8ce3fc43",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 1905,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.4",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Coffee & Beverages (Hot and Cold)",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "68303570",
                                "name": "Coke",
                                "category": "Coffee & Beverages (Hot and Cold)",
                                "description": "The perfect companion to your burger, fries and everything nice.",
                                "imageId": "a1afed29afd8a2433b25cc47b83d01da",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10286,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "163 ratings",
                                    "ratingCountV2": "163"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "68963616",
                                "name": "Coke zero can",
                                "category": "Coffee & Beverages (Hot and Cold)",
                                "description": "The perfect diet companion to your burger, fries and everything nice. Regular serving size, 300 Ml.",
                                "imageId": "8d6a37c4fc69bceb66b6a66690097190",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 6667,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "115 ratings",
                                    "ratingCountV2": "115"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "69018768",
                                "name": "Vedica Zen Water Bottle",
                                "category": "Coffee & Beverages (Hot and Cold)",
                                "description": "Quench your thirst with the Vedica Zen Water Bottle",
                                "imageId": "6da8fa6b64c806e89058c87c0a85e759",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 4762,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.9",
                                    "ratingCount": "5 ratings",
                                    "ratingCountV2": "5"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "69678752",
                                "name": "Fanta",
                                "category": "Coffee & Beverages (Hot and Cold)",
                                "description": "Add a zest of refreshing orange to your meal.",
                                "imageId": "7d662c96bc13c4ac33cea70c691f7f28",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10286,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "27 ratings",
                                    "ratingCountV2": "27"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "78534402",
                                "name": "Mixed Fruit Beverage",
                                "category": "Coffee & Beverages (Hot and Cold)",
                                "description": "Made with puree, pulp & juice from 6 delicious fruits",
                                "imageId": "8e455d39bbbd8e4107b2099da51f3933",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 7524,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "18 ratings",
                                    "ratingCountV2": "18"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "83840223",
                                "name": "Sprite",
                                "category": "Coffee & Beverages (Hot and Cold)",
                                "description": "The perfect companion to your burger, fries and everything nice.",
                                "imageId": "46e03daf797857bfbce9f9fbb539a6aa",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10286,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "24 ratings",
                                    "ratingCountV2": "24"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "McSaver Combos (2pc Combos)",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "33933752",
                                "name": "Veg Pizza McPuff + McSpicy Chicken Burger",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Tender and juicy chicken patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more. Served with Veg Pizza McPuff",
                                "imageId": "fb4b9d4775505e82d05d6734ef3e2491",
                                "inStock": 1,
                                "price": 23905,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "79 ratings",
                                    "ratingCountV2": "79"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "50264586",
                                "name": "McChicken Burger + McSpicy Chicken Burger",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "The ultimate chicken combo made just for you. Get the top selling McChicken with the McSpicy Chicken Burger.",
                                "imageId": "006d51070b0ab9c839a293b87412541c",
                                "inStock": 1,
                                "price": 29143,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "8 ratings",
                                    "ratingCountV2": "8"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "50264591",
                                "name": "McVeggie Burger + McAloo Tikki Burger",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce, mayonnaise, makes our iconic McVeggie and combo with our top selling McAloo Tikki Burger.",
                                "imageId": "1f4d583548597d41086df0c723560da7",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 18952,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "11 ratings",
                                    "ratingCountV2": "11"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "63149651",
                                "name": "McChicken Burger + Fries (M)",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite. Served with Medium Fries.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/6d3ea25d-bb5c-45fb-bc31-3342c4f0692c_c0310bd6-27de-4287-916a-770eeac6d3ca.png",
                                "inStock": 1,
                                "price": 18000,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "1007 ratings",
                                    "ratingCountV2": "1007"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "63149652",
                                "name": "McVeggie Burger + Fries (M)",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce, mayonnaise, and packed into toasted sesame buns. Served with Medium Fries.",
                                "imageId": "d14cc495747a172686ebe43e675bc941",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 18952,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.5",
                                    "ratingCount": "124 ratings",
                                    "ratingCountV2": "124"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "63149658",
                                "name": "McAloo Tikki Burger + Veg Pizza McPuff + Coke",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "The ultimate veg combo made just for you. Get the top selling McAloo Tikki served with Veg Pizza McPuff and Coke.",
                                "imageId": "9f0269a2d28f4918a3b07f63a487f26d",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 16096,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "99480112",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "95615872",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "95615871",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "183 ratings",
                                    "ratingCountV2": "183"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "65037719",
                                "name": "2 Coke",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "The perfect companion to your burger, fries and everything nice. Double it up with this combo.",
                                "imageId": "2d7540e92ac04c0c0823e9f4f029e2dd",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 16476,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "22 ratings",
                                    "ratingCountV2": "22"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "65346782",
                                "name": "McAloo Tikki + Fries (R)",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Aloo Tikki+ Fries (R)",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/1de86336-7187-469e-b7f3-5ebe9a3d177f_87bd61ba-bf5d-4dbd-9396-14a1f8218dfb.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10762,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "14 ratings",
                                    "ratingCountV2": "14"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "65346798",
                                "name": "Mexican McAloo Tikki Burger + Fries (R)",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "A fusion of international taste combined with your favourite aloo tikki patty, layered with shredded onion, and delicious Chipotle sauce. Served with Regular Fries.",
                                "imageId": "7274d82212a758e597550e8c246fb2f7",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11619,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "31 ratings",
                                    "ratingCountV2": "31"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "65346799",
                                "name": "McChicken Burger + Veg Pizza McPuff",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite. Served with Veg Pizza McPuff.",
                                "imageId": "9a66b8ef66d780b9f83a0fc7cd434ded",
                                "inStock": 1,
                                "price": 17048,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "30 ratings",
                                    "ratingCountV2": "30"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "65346803",
                                "name": "McVeggie Burger + Veg Pizza McPuff",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce, mayonnaise, and packed into toasted sesame buns. Served with Veg Pizza McPuff.",
                                "imageId": "8cb2f75ca6a51061c69280daf1b63bec",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17048,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "22 ratings",
                                    "ratingCountV2": "22"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "65346804",
                                "name": "McVeggie Burger + Fries (R)",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce, mayonnaise, and packed into toasted sesame buns. Served with Regular fries.",
                                "imageId": "52a347eab543d461b1a15b609779b8c2",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17524,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "5.0",
                                    "ratingCount": "9 ratings",
                                    "ratingCountV2": "9"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "66788566",
                                "name": "Mexican McAloo Tikki Burger + Fries (L)",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "A fusion of international taste combined with your favourite aloo tikki patty, layered with shredded onion, and delicious Chipotle sauce. Served with Large Fries.",
                                "imageId": "f4be6e877d2567a0b585d4b16e53871e",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17524,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "27 ratings",
                                    "ratingCountV2": "27"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "66788573",
                                "name": "McChicken Burger + Fries (L)",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Tender and juicy chicken patty cooked to perfection, with creamy mayonnaise and crunchy lettuce adding flavour to each bite. Served with Large Fries.",
                                "imageId": "a4148348225f693c23b73eda06934fac",
                                "inStock": 1,
                                "price": 22762,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "18 ratings",
                                    "ratingCountV2": "18"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "66788576",
                                "name": "McVeggie Burger + Fries (L)",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce, mayonnaise, and packed into toasted sesame buns. Served with Large fries.",
                                "imageId": "f16eeec3e5d19f8627971620ed2da6f8",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 22286,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "5.0",
                                    "ratingCount": "14 ratings",
                                    "ratingCountV2": "14"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "67554606",
                                "name": "McSaver Chicken Nuggets (4 Pc)+ Coke",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "McSaver Chicken Nuggets (4 Pc) + coke",
                                "imageId": "7bf83367ed61708817caefbc79a3c9eb",
                                "inStock": 1,
                                "price": 10381,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "112259690",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "100543500",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "86 ratings",
                                    "ratingCountV2": "86"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "67554611",
                                "name": "McSaver McAloo Tikki+ Coke ",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Enjoy a delicious combo of McAloo Tikki Burger and Beverage of your choice in a new, delivery friendly, reusable bottle.",
                                "imageId": "ab4c47366f0e51ac0071f705b0f2d93e",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10381,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "112259694",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "100543500",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "71 ratings",
                                    "ratingCountV2": "71"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "67554613",
                                "name": "McSaver Chicken Kebab Burger + Coke ",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "McSaver Chicken Kebab Burger + coke",
                                "imageId": "a752e2e5c57a5c0428c3bdcc66813971",
                                "inStock": 1,
                                "price": 10381,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "120206530",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "100543500",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "45 ratings",
                                    "ratingCountV2": "45"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "67554618",
                                "name": "McSaver Masala McEgg + Coke ",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "McSaver Masala McEgg + Coke",
                                "imageId": "8f0cbf7d50d3f8dad87b971fb11f8d6c",
                                "inStock": 1,
                                "price": 7524,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "112259693",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "100543502",
                                        "name": "Sprite",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "100543501",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "25 ratings",
                                    "ratingCountV2": "25"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "67554620",
                                "name": "McSaver Pizza McPuff+ Coke ",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "McSaver Pizza McPuff + Coke",
                                "imageId": "45fa406e76418771de26c37e8863fbb3",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10381,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "145 ratings",
                                    "ratingCountV2": "145"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "67554626",
                                "name": "McSaver Fries (R )+ Coke ",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "McSaver Small Fries + Coke",
                                "imageId": "70771ada9c14923d9535e84d1d2fc2e0",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10381,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "112259721",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "100543500",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "58 ratings",
                                    "ratingCountV2": "58"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "67554630",
                                "name": "McSaver Mexican McAloo Tikki",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "McSaver Mexican McAloo Tikki  + Coke",
                                "imageId": "5897849bed9b0298559968c3e5f4af81",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10381,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "112259714",
                                    "groupName": "Choose an option for Coke",
                                    "choices": [
                                      {
                                        "id": "100543500",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "30 ratings",
                                    "ratingCountV2": "30"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "87284436",
                                "name": "2 Fries (R)",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "World Famous Fries, crispy, golden, lightly salted and fried to perfection! Double your happiness with this fries combo",
                                "imageId": "4a170da5ecae92e11410a8fbb44c8476",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11238,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.7",
                                    "ratingCount": "85 ratings",
                                    "ratingCountV2": "85"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "87284445",
                                "name": "2 McVeggie Burger",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "A delectable patty filled with potatoes, peas, carrots and tasty Indian spices. Topped with crispy lettuce, mayonnaise, and packed into toasted sesame buns makes our iconic McVeggie.",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/f6d6f070-c57d-4604-8c71-df9f190fd5b7_d4abebeb-d6c0-4798-8e26-13de8e5707b0.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 24952,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "93 ratings",
                                    "ratingCountV2": "93"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "102106099",
                                "name": "Grilled Chicken & Cheese Burger + Coke",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Flat 15% Off on Grilled Chicken & Cheese Burger + Coke",
                                "imageId": "f0249c4990ec08a8ae254852217e3bf7",
                                "inStock": 1,
                                "price": 21619,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "32 ratings",
                                    "ratingCountV2": "32"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "102106102",
                                "name": "McAloo Tikki Burger + Veg Pizza McPuff + Fries (R)",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Flat 15% Off on McAloo Tikki + Veg Pizza McPuff + Fries (R)",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/15bcbbe6-396d-4549-a3f4-aaf24799be04_fc5725ca-bc2b-44eb-8cd5-b738afd40cd5.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 15905,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "60 ratings",
                                    "ratingCountV2": "60"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "102106133",
                                "name": "McVeggie Burger + Fries (M) + Piri Piri Mix",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Flat 15% Off on McVeggie Burger + Fries (M) + Piri Piri Mix",
                                "imageId": "0205cbd8b77f841e19e25ce727993d51",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 23238,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "7 ratings",
                                    "ratingCountV2": "7"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "102106142",
                                "name": "McVeggie Burger + Veg Pizza McPuff + Fries (L)",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Flat 15% Off on McVeggie Burger + Veg Pizza McPuff + Fries (L)",
                                "imageId": "58be9ff9147470f125ed042c484959b3",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 26667,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.9",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "108335888",
                                "name": "6 Pc Chicken Nuggets + Fries (M) + Piri Piri Spice Mix",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "The best Non veg sides combo curated for you! Get 6 pc Chicken McNuggets + Fries M. Top it up with Piri Piri mix.",
                                "imageId": "8cba0938b4401e5c8cb2ccf3741b93c4",
                                "inStock": 1,
                                "price": 24762,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "106303258",
                                    "groupName": "Choose an option for Mustard Sauce",
                                    "choices": [
                                      {
                                        "id": "94834283",
                                        "name": "Barbeque Sauce",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "108335889",
                                "name": "McAloo Tikki Burger + Veg Pizza McPuff + Piri Piri Spice Mix",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Get India's favourite burger - McAloo Tikki along with Veg Pizza McPuff and spice it up with a Piri Piri Mix",
                                "imageId": "46bcb1e486cbe6dcdb0487b063af58a6",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12762,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "2.5",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "109040998",
                                "name": "Grilled Chicken & Cheese Burger + Veg Pizza McPuff",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "A delicious Grilled Chicken & Cheese Burger + a crispy brown, delicious Pizza McPuff",
                                "imageId": "b9f02abd64c74307339cbd3421e7f853",
                                "inStock": 1,
                                "price": 19524,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "109041001",
                                "name": "Corn & Cheese Burger + Veg Pizza McPuff",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "A delicious Corn & Cheese Burger + a crispy brown, delicious Pizza McPuff",
                                "imageId": "f847f39d3b81367ecd2aa14bd2dca94d",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 17619,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "109041003",
                                "name": "Corn & Cheese Burger + Fries (R)",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "A delicious Corn & Cheese Burger + a side of crispy, golden, world famous fries ??",
                                "imageId": "495bcb831b35c29883707b9458fd55b0",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 18667,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "10 ratings",
                                    "ratingCountV2": "10"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "109041048",
                                "name": "Corn & Cheese Burger + Coke",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Flat 15% Off on Corn & Cheese Burger + Coke",
                                "imageId": "7194232b8ff13f5a78c4572f981bd621",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 22572,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "8 ratings",
                                    "ratingCountV2": "8"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "112713672",
                                "name": "2 McFlurry Oreo (S)",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Delicious soft serve meets crumbled oreo cookies, a match made in dessert heaven. Make it double with this combo!",
                                "imageId": "65f3574f53112e9d263dfa924b1f8fed",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 15524,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "12 ratings",
                                    "ratingCountV2": "12"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "112713676",
                                "name": "2 Soft Serve Hot Fudge (M)",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "A sinful delight, soft serve topped with delicious, gooey hot chocolate fudge. So good you won't be able to stop at one!",
                                "imageId": "f1238db9da73d8ec7a999792f35865d9",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 15524,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "121924405",
                                "name": "Corn & Cheese Burger + Coke + Fries (M) + Veg Pizza McPuff",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Enjoy Corn and Cheese Burger + Coke + Fries (M) + Veg Pizza McPuff",
                                "imageId": "8d4a82d50f6e79d95fcc324b161374f8",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 35333,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "123194988",
                                "name": "McSpicy Chicken Burger + Fries (M) + Piri Piri Spice Mix",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Tender and juicy chicken patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more. Served with the spicy piri piri mix and medium fries.",
                                "imageId": "e10982204687e18ee6541684365039b8",
                                "inStock": 1,
                                "price": 26476,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "14 ratings",
                                    "ratingCountV2": "14"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "123194990",
                                "name": "McSpicy Chicken Burger + Mexican Cheese Fries",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Tender and juicy chicken patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more. Served with Mexican Cheese Fries.",
                                "imageId": "40259e78ad0e89966755805a7c1ad800",
                                "inStock": 1,
                                "price": 26476,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "21 ratings",
                                    "ratingCountV2": "21"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "123194994",
                                "name": "McSpicy Paneer Burger + Fries (M) + Piri Piri Spice Mix",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Rich and filling cottage cheese patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more. Served with the spicy piri piri mix and medium fries.",
                                "imageId": "87ce9779f986dcb21ab1fcfe794938d1",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 25048,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.5",
                                    "ratingCount": "9 ratings",
                                    "ratingCountV2": "9"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "123194996",
                                "name": "McSpicy Paneer + Classic Cheese Fries",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Rich and filling cottage cheese patty coated in spicy, crispy batter topped with a creamy sauce and crispy shredded lettuce will have you craving for more. Served with Mexican Cheese Fries.",
                                "imageId": "fcc2fb1635f8e14c69b57126014f0bd5",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 25048,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "16 ratings",
                                    "ratingCountV2": "16"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "125972822",
                                "name": "Black Forest Mcflurry (M) BOGO",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Get 2 Black Forest McFlurry for the price of one!",
                                "imageId": "972a2b3aca8059ba25a04875ec091885",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11524,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.6",
                                    "ratingCount": "85 ratings",
                                    "ratingCountV2": "85"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136747959",
                                "name": "Classic Cheese Fries + Sprite",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Relish Classic Cheese Fries + Sprite",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/8884ec57-9e66-4c27-81a9-d02cbe1c6592_e530e5b6-f2ad-4b4e-ba89-7eb4850f6d4a.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 24682,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "144255018",
                                    "groupName": "Choose an option for Sprite",
                                    "choices": [
                                      {
                                        "id": "115680450",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "115680449",
                                        "name": "Coke",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136747960",
                                "name": "Fries (M) + Piri Piri Mix + Sprite",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Enjoy your favourite Fries (M) + Piri Piri Mix + Sprite",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/6ec0d891-1355-4d2e-b9fb-f243a96ae534_cebd2d4b-f605-4085-a183-bac1d7067fc2.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 22093,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "144255021",
                                    "groupName": "Choose an option for Sprite",
                                    "choices": [
                                      {
                                        "id": "115680450",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "115680449",
                                        "name": "Coke",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136748001",
                                "name": "McVeggie Double Patty Burger + Sprite",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "Enjoy the classic combo of McVeggie Double Patty Burger + Sprite",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/88e03107-2e0b-404d-8510-00cca538b03c_663b0c06-1bc1-4f92-9db3-f338ba5aa964.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 29002,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "144255072",
                                    "groupName": "Choose an option for Sprite",
                                    "choices": [
                                      {
                                        "id": "115680450",
                                        "name": "Fanta",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      },
                                      {
                                        "id": "115680449",
                                        "name": "Coke",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136748035",
                                "name": "Mixed Fruit Beverage BOGO",
                                "category": "McSaver Combos (2pc Combos)",
                                "description": "For a limited time only, buy one and get one Mixed Fruit beverage free",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/1926459e-e6c4-4bd9-b3cf-f7d79af4fc56_6177470f-8987-424d-83f4-2d2248b462ba.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9887,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "Desserts",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "68303574",
                                "name": "Mcflurry Oreo ( S )",
                                "category": "Desserts",
                                "description": "Delicious soft serve meets crumbled oreo cookies, a match made in dessert heaven. Perfect for one.",
                                "imageId": "a28369e386195be4071d9cf5078a438d",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 9429,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "143 ratings",
                                    "ratingCountV2": "143"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "112713742",
                                "name": "McFlurry Oreo ( M )",
                                "category": "Desserts",
                                "description": "Delicious soft serve meets crumbled oreo cookies, a match made in dessert heaven. Share it, if you can.",
                                "imageId": "f966500ed8b913a16cfdb25aab9244e4",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 12857,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "24 ratings",
                                    "ratingCountV2": "24"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "112713794",
                                "name": "Soft Serve Hot Fudge (M)",
                                "category": "Desserts",
                                "description": "A sinful delight, soft serve topped with delicious, gooey hot chocolate fudge. Always grab an extra spoon.",
                                "imageId": "9c8958145495e8f2cf70470195f7834a",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 6476,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "65 ratings",
                                    "ratingCountV2": "65"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "112713796",
                                "name": "Soft Serve Strawberry (M)",
                                "category": "Desserts",
                                "description": "The cool vanilla soft serve ice cream with twirls of strawberry syrup.",
                                "imageId": "d7bd22aa47cffdcdde2d5b6223fde06e",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 6476,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "5.0",
                                    "ratingCount": "23 ratings",
                                    "ratingCountV2": "23"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "121924410",
                                "name": "Oreo Sundae ( M )",
                                "category": "Desserts",
                                "description": "Enjoy the classic McFlurry Oreo goodness with a drizzle of hot fudge sauce with the Oreo Sundae!",
                                "imageId": "3696da86802f534ba9ca68bd8be717ab",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 7143,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.9",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "123194978",
                                "name": "Black Forest McFlurry Medium",
                                "category": "Desserts",
                                "description": "A sweet treat to suit your every mood",
                                "imageId": "f513cc8c35cadd098835fb5b23c03561",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 11524,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "41 ratings",
                                    "ratingCountV2": "41"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "123194980",
                                "name": "Brownie Hot Fudge (M)",
                                "category": "Desserts",
                                "description": "Luscious chocolate brownie and hot-chocolate fudge to sweeten your day",
                                "imageId": "6e00a57c6d8ceff6812a765c80e9ce74",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13810,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "11 ratings",
                                    "ratingCountV2": "11"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136747962",
                                "name": "Lotus Biscoff Medium McFlurry",
                                "category": "Desserts",
                                "description": "Try the trending indulgent Lotus Biscoff for a unique sweet end to your meal. Hurry before it's gone!",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/a0144afb-5c88-45be-b7e9-64b0ad29e614_34ef1aa5-ba94-4a13-8859-73297d3980cf.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 13333,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "136747964",
                                "name": "Lotus Biscoff Regular McFlurry",
                                "category": "Desserts",
                                "description": "Try the trending indulgent Lotus Biscoff for a unique sweet end to your meal. Hurry before it's gone!",
                                "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/22/a1d158fd-7cd0-4e3d-b776-bf4d5306b141_297d3942-cae8-4a10-8636-830f7d68618a.png",
                                "inStock": 1,
                                "isVeg": 1,
                                "price": 10381,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        "title": "McBreakfast",
                        "itemCards": [
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "57680537",
                                "name": "Hashbrown",
                                "category": "McBreakfast",
                                "description": "Freshly fried golden brown potatoes that melt in your mouth.",
                                "imageId": "534f18e69e28bb060a85d30e03a102e4",
                                "isVeg": 1,
                                "price": 5333,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "46 ratings",
                                    "ratingCountV2": "46"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "61404105",
                                "name": "Filter Coffee",
                                "category": "McBreakfast",
                                "description": "Enjoy Filter Coffee",
                                "imageId": "0431d9af666fe165205c8f9bddb82c4a",
                                "isVeg": 1,
                                "price": 14190,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104367588",
                                "name": "Double Cheese McMuffin- Sandwich",
                                "category": "McBreakfast",
                                "description": "Make your mornings Cheese with the new Double Cheese McMuffin. Shredded onion, Jalapenos topped with Cheese (and more cheese) layered between toasted and buttered Muffin buns",
                                "imageId": "8bcca26adae8fa3e5593e1c8405dcac9",
                                "isVeg": 1,
                                "price": 10095,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104367590",
                                "name": "Egg & Cheese McMuffin - Sandwich",
                                "category": "McBreakfast",
                                "description": "Fluffy soft egg topped with Cheese served between English muffins",
                                "imageId": "39bb3c273b440ee352b738fa1f00c842",
                                "price": 10095,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104367596",
                                "name": "McSaver Egg & Cheese McMuffin with Filter Coffee",
                                "category": "McBreakfast",
                                "description": "Enjoy McSaver Egg & Cheese McMuffin with Filter Coffee",
                                "imageId": "f35760f29537d10541232e0fe5056a2c",
                                "price": 14190,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "122430769",
                                    "groupName": "Choose an option for Filter Coffee",
                                    "choices": [
                                      {
                                        "id": "105256669",
                                        "name": "Filter Coffee",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104367598",
                                "name": "Sausage & Egg McMuffin - Sandwich",
                                "category": "McBreakfast",
                                "description": "Sizzling aromatic sausage accompanied by the freshly steamed egg between two slices of fresh English muffins. A wholesome breakfast!",
                                "imageId": "63f426865644cf79af5163230a901d80",
                                "price": 15429,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.3",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104367599",
                                "name": "Sausage McMuffin - Sandwich",
                                "category": "McBreakfast",
                                "description": "Sizzling aromatic sausage patty between two slices of fresh English muffins. A wholesome breakfast!",
                                "imageId": "83bcbf3a3eab08d09e332aa2d7acca69",
                                "price": 13238,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104367604",
                                "name": "Spicy Egg McMuffin - Sandwich",
                                "category": "McBreakfast",
                                "description": "Spice up your mornings with the new Spicy Egg McMuffin, Freshly cracked and steamed egg patty topped with spicy masala seasoning, shredded onions, topped with habanero sauce, layered between toasted and buttered Muffin buns.",
                                "imageId": "798e2b493a04283cea3f7c388d6ef6ea",
                                "price": 10762,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.4",
                                    "ratingCount": "4 ratings",
                                    "ratingCountV2": "4"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104367605",
                                "name": "Spicy Egg McMuffin 3 PC Meal",
                                "category": "McBreakfast",
                                "description": "Spicy Egg McMuffin 3 PC Meal with Filter Coffee",
                                "imageId": "7021af6226f4588b3977aca3c5585561",
                                "price": 7238,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "104367606",
                                "name": "Veg McMuffin - Sandwich",
                                "category": "McBreakfast",
                                "description": "Grilled Spinach & Corn patty and slice of processed Cheddar cheese nestled between a toasty English Muffin.",
                                "imageId": "36d8d4789793db20bcfe3359ec814b8e",
                                "isVeg": 1,
                                "price": 11810,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "128072836",
                                "name": "Double Cheese Muffin 3 PC Meal",
                                "category": "McBreakfast",
                                "description": "Double Cheese Muffin 3 PC Meal with Filteer Coffee",
                                "imageId": "b9ccd23fb7abd82dc37f9348b4db9ff3",
                                "isVeg": 1,
                                "price": 5619,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "128072837",
                                "name": "Egg & Cheese McMuffin 3 PC Meal",
                                "category": "McBreakfast",
                                "description": "Egg & Cheese McMuffin 3 PC Meal with Filter Coffee",
                                "imageId": "64dd160bea9f7e1e4dfe669599417839",
                                "price": 6762,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "128072838",
                                "name": "McSaver Spicy Egg McMuffin with Filter Coffee",
                                "category": "McBreakfast",
                                "description": "McSaver Spicy Egg  McMuffin with Filter Coffee",
                                "imageId": "33db53d5a2cf1b68afeee1eeb6f980c2",
                                "price": 14190,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "addons": [
                                  {
                                    "groupId": "122430770",
                                    "groupName": "Choose an option for Filter Coffee",
                                    "choices": [
                                      {
                                        "id": "105256669",
                                        "name": "Filter Coffee",
                                        "inStock": 1,
                                        "isVeg": 1,
                                        "isEnabled": 1
                                      }
                                    ],
                                    "maxAddons": 1,
                                    "maxFreeAddons": -1
                                  }
                                ],
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "128072840",
                                "name": "Sausage McMuffin 2 PC Meal",
                                "category": "McBreakfast",
                                "description": "Sausage McMuffin 2 PC Meal with Filter Coffee",
                                "imageId": "62979e053bda132d79a8000168c8f660",
                                "price": 7238,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "128072841",
                                "name": "Sausage McMuffin 3 PC Meal",
                                "category": "McBreakfast",
                                "description": "Sausage McMuffin 3 PC Meal with Filter Coffee",
                                "imageId": "d50758823e7e73deb6bcfa072bf2ccef",
                                "price": 9238,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "128072842",
                                "name": "Sausage with Egg McMuffin 2 PC Meal",
                                "category": "McBreakfast",
                                "description": "Sausage with Egg McMuffin 2 PC Meal with Filter Coffee",
                                "imageId": "046f3a53100f84b9964e9614ec0df89f",
                                "price": 8667,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "128072843",
                                "name": "Sausage with Egg McMuffin 3 PC Meal",
                                "category": "McBreakfast",
                                "description": "Sausage with Egg McMuffin 3 PC Meal with Filter Coffee",
                                "imageId": "4d60dad78f098a2cabf4caf73c7df537",
                                "price": 10952,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "NONVEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "4.8",
                                    "ratingCount": "6 ratings",
                                    "ratingCountV2": "6"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          },
                          {
                            "card": {
                              "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                              "info": {
                                "id": "128072844",
                                "name": "Veg McMuffin 2 PC Meal",
                                "category": "McBreakfast",
                                "description": "Veg McMuffin 2 PC Meal with Filter Coffee",
                                "imageId": "7cf8e6ab59c35f57297975c8de8b79eb",
                                "isVeg": 1,
                                "price": 6286,
                                "variants": {
                                  
                                },
                                "variantsV2": {
                                  
                                },
                                "nextAvailableAtMessage": "Next available at 9 am, tomorrow",
                                "itemAttribute": {
                                  "vegClassifier": "VEG"
                                },
                                "ribbon": {
                                  
                                },
                                "type": "ITEM",
                                "itemBadge": {
                                  
                                },
                                "badgesV2": {
                                  
                                },
                                "ratings": {
                                  "aggregatedRating": {
                                    "rating": "3.2",
                                    "ratingCount": "3 ratings",
                                    "ratingCountV2": "3"
                                  }
                                }
                              },
                              "analytics": {
                                
                              },
                              "hideRestaurantDetails": true
                            }
                          }
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                        "type": "FSSAI",
                        "imageId": "fssai_final_edss9i",
                        "text": [
                          "License No. 11215312000778"
                        ]
                      }
                    }
                  },
                  {
                    "card": {
                      "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                        "name": "McDonald's",
                        "area": "Hampankatta",
                        "completeAddress": "Hardcastle Restaurants Pvt Ltd, McDonalds Family Restaurants, City Central Mall,KS Rao Road,Hampankatta, Mangalore-01,Karnataka"
                      }
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "firstOffsetRequest": true,
      "isQCLink": false
    },
    "tid": "8211c7e7-faa5-4905-918d-db93284316c1",
    "sid": "cva47421-43c5-4967-b765-7bef3f4044c5",
    "deviceId": "c49814f7-c69e-36dc-f914-8a2b8d1cf4a8",
    "csrfToken": "Ft1sRiwLR2hh-e0s4jSLmBHthZzevFku1LFdPb-g"
  })
})
app.post("/posts",(req,res)=>{
    let {username,content,profile} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/");

})


app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("post",{post});
})


app.delete("/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/");
})


app.get("/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit",{post});
})

app.patch("/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    console.log(id);
    post.content = newContent
    res.render("/");
})