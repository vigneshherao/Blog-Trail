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
    res.send(// 20240323223900
    // https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=18080
    
    {
      "statusCode": 0,
      "data": {
        "statusMessage": "done successfully",
        "cards": [
          {
            "card": {
              "card": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                "info": {
                  "id": "18080",
                  "name": "Bhagyashree Executive",
                  "city": "Pune",
                  "slugs": {
                    "restaurant": "bhagyashree-executive-amanora-township-magarpatta",
                    "city": "pune"
                  },
                  "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
                  "cloudinaryImageId": "ltodyau9q5ps8wovr89n",
                  "locality": "Near Amanora Township",
                  "areaName": "Magarpatta",
                  "costForTwo": "50000",
                  "costForTwoMessage": "₹500 for two",
                  "cuisines": [
                    "Chinese",
                    "Indian"
                  ],
                  "feeDetails": {
                    "restaurantId": "18080",
                    "fees": [
                      {
                        
                      }
                    ]
                  },
                  "parentId": "44047",
                  "avgRatingString": "--",
                  "totalRatingsString": "Too Few Ratings",
                  "sla": {
                    "restaurantId": "18080",
                    "serviceability": "NON_SERVICEABLE",
                    "nonServiceableReason": "NON_SERVICEABLE_REASON_NON_BATCHABLE_ACTIVE_ORDER",
                    "rainMode": "RAIN_MODE_NONE",
                    "iconType": "ICON_TYPE_EMPTY"
                  },
                  "availability": {
                    "visibility": true,
                    "restaurantClosedMeta": {
                      
                    }
                  },
                  "aggregatedDiscountInfo": {
                    "shortDescriptionList": [
                      {
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      },
                      {
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "NO CODE REQUIRED | ABOVE ₹399",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      },
                      {
                        "meta": "20% off upto ₹125 | Use AMEXMATCHDAY Above ₹549",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "visible": true
                  },
                  "badges": {
                    
                  },
                  "slugString": "bhagyashree-executive-amanora-township-magarpatta",
                  "labels": [
                    {
                      "title": "Timings",
                      "message": "null"
                    },
                    {
                      "title": "Address",
                      "message": "169/1, Near Amanora Township,Tupe Nagar,Hadapsar,Pune"
                    },
                    {
                      "title": "Cuisines",
                      "message": "Chinese,Indian"
                    }
                  ],
                  "aggregatedDiscountInfoV2": {
                    "shortDescriptionList": [
                      {
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      },
                      {
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "descriptionList": [
                      {
                        "meta": "NO CODE REQUIRED | ABOVE ₹399",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                      },
                      {
                        "meta": "20% off upto ₹125 | Use AMEXMATCHDAY Above ₹549",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                      }
                    ],
                    "couponDetailsCta": "View coupon details"
                  },
                  "type": "F",
                  "headerBanner": {
                    "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/18080"
                  },
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
                  "cartOrderabilityNudgeBanner": {
                    "parameters": {
                      
                    },
                    "presentation": {
                      
                    }
                  },
                  "latLong": "18.512386,73.93765800000006",
                  "externalRatings": {
                    "aggregatedRating": {
                      "rating": "--"
                    }
                  },
                  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
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
                  "columns": 4,
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
                          "restId": "18080",
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
                          "restId": "18080",
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
                          "restId": "18080",
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
                          "restId": "18080",
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
                          "title": "Recommended",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "3319828",
                                  "name": "Veg Bhagyashree Special",
                                  "category": "Indian",
                                  "imageId": "dj2uuan0vzxe4xxmueqa",
                                  "isVeg": 1,
                                  "price": 23000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "showImage": true,
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
                                  "id": "3319831",
                                  "name": "Veg Tiranga",
                                  "category": "Indian",
                                  "imageId": "j0jqinng6smpowmvhl7i",
                                  "isVeg": 1,
                                  "price": 25000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "showImage": true,
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
                                  "id": "3319836",
                                  "name": "Kofta Sanj Savera",
                                  "category": "Indian",
                                  "imageId": "hno1pu4xpvicurivox0d",
                                  "isVeg": 1,
                                  "price": 22500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "showImage": true,
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
                                  "id": "3319860",
                                  "name": "Murgh Angara",
                                  "category": "Indian",
                                  "imageId": "tiq9rbnf8jgtmqocxcwt",
                                  "price": 24000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "showImage": true,
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
                                  "id": "3319980",
                                  "name": "Paneer Satay",
                                  "category": "Chinese",
                                  "imageId": "cpibmtlhszv1iofidygb",
                                  "isVeg": 1,
                                  "price": 21500,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "VEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "showImage": true,
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
                                  "id": "3319997",
                                  "name": "Chicken Lollipop",
                                  "category": "Chinese",
                                  "imageId": "w1xdguxfvrcwp57j8nsd",
                                  "price": 25000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "NONVEG"
                                  },
                                  "ribbon": {
                                    
                                  },
                                  "showImage": true,
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
                          ],
                          "type": "CATEGORY_TYPE_RECOMMENDED"
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                          "title": "Quick Bites",
                          "itemCards": [
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "3319729",
                                  "name": "Aloo Chaat",
                                  "category": "Quick Bites",
                                  "isVeg": 1,
                                  "price": 13000,
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
                                  "id": "3319730",
                                  "name": "Onion Pakora",
                                  "category": "Quick Bites",
                                  "isVeg": 1,
                                  "price": 12500,
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
                                  "id": "3319731",
                                  "name": "Mixed Veg Pakora",
                                  "category": "Quick Bites",
                                  "isVeg": 1,
                                  "price": 14000,
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
                                  "id": "3319732",
                                  "name": "Cheese Chilli Toast",
                                  "category": "Quick Bites",
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
                            },
                            {
                              "card": {
                                "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                "info": {
                                  "id": "3319733",
                                  "name": "Cheese Pakora",
                                  "category": "Quick Bites",
                                  "isVeg": 1,
                                  "price": 13500,
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
                                  "id": "3319734",
                                  "name": "Egg Omelette",
                                  "category": "Quick Bites",
                                  "price": 10000,
                                  "variants": {
                                    
                                  },
                                  "variantsV2": {
                                    
                                  },
                                  "itemAttribute": {
                                    "vegClassifier": "EGG"
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
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                          "title": "Indian",
                          "categories": [
                            {
                              "title": "Soups",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319735",
                                      "name": "Cream of Tomato Soup",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 10000,
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
                                      "id": "3319736",
                                      "name": "Cream of Vegetable Soup",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 10000,
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
                                      "id": "3319737",
                                      "name": "Cream of Palak Soup",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 10000,
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
                                      "id": "3319738",
                                      "name": "Cream of Mushroom Soup",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 12000,
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
                                      "id": "3319739",
                                      "name": "Mushroom & Spinach Soup",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 12000,
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
                                      "id": "3319740",
                                      "name": "Cream of Chicken Soup",
                                      "category": "Indian",
                                      "price": 12000,
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
                                }
                              ]
                            },
                            {
                              "title": "Veg Starters",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319741",
                                      "name": "Stuffed Mushroom",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 21000,
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
                                      "id": "3319742",
                                      "name": "Finger Chips",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 12500,
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
                                      "id": "3319743",
                                      "name": "Paneer Koliwada",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 23000,
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
                                      "id": "3319744",
                                      "name": "Baby corn Mushroom Tikka",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 21000,
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
                                      "id": "3319745",
                                      "name": "Mushroom Tikka",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319746",
                                      "name": "Gobi Tikka",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319747",
                                      "name": "Tandoori Aloo",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319748",
                                      "name": "Veg Seekh Kebab",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319749",
                                      "name": "Veg Hara Bhara Kebab",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 19000,
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
                                      "id": "3319750",
                                      "name": "Paneer Tikka",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3319751",
                                      "name": "Paneer Reshmi Tikka",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3319752",
                                      "name": "Paneer Lehsuni Tikka",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3319753",
                                      "name": "Paneer Achari Tikka",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3319754",
                                      "name": "Paneer Banjara Tikka",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3319755",
                                      "name": "Paneer Malai Tikka",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 23000,
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
                            },
                            {
                              "title": "Egg Starter",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319756",
                                      "name": "Egg Bhurji",
                                      "category": "Indian",
                                      "price": 12000,
                                      "variants": {
                                        
                                      },
                                      "variantsV2": {
                                        
                                      },
                                      "itemAttribute": {
                                        "vegClassifier": "EGG"
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
                            },
                            {
                              "title": "Chicken Starters",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319757",
                                      "name": "Tandoori Chicken",
                                      "category": "Indian",
                                      "price": 21000,
                                      "variants": {
                                        "variantGroups": [
                                          {
                                            "groupId": "112180",
                                            "name": "Quantity",
                                            "variations": [
                                              {
                                                "name": "Half",
                                                "default": 1,
                                                "id": "311299",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              },
                                              {
                                                "name": "Full",
                                                "price": 13000,
                                                "id": "311300",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              }
                                            ]
                                          }
                                        ]
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
                                      "id": "3319758",
                                      "name": "Pepper Tandoori Chicken",
                                      "category": "Indian",
                                      "price": 25000,
                                      "variants": {
                                        "variantGroups": [
                                          {
                                            "groupId": "112181",
                                            "name": "Quantity",
                                            "variations": [
                                              {
                                                "name": "Half",
                                                "default": 1,
                                                "id": "311301",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              },
                                              {
                                                "name": "Full",
                                                "price": 13000,
                                                "id": "311302",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              }
                                            ]
                                          }
                                        ]
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
                                      "id": "3319759",
                                      "name": "Murgh Tikka",
                                      "category": "Indian",
                                      "price": 24000,
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
                                      "id": "3319760",
                                      "name": "Murgh Reshmi Kebab",
                                      "category": "Indian",
                                      "price": 25000,
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
                                      "id": "3319761",
                                      "name": "Murgh Malai Kebab",
                                      "category": "Indian",
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
                                      "id": "3319762",
                                      "name": "Afghani Kebab",
                                      "category": "Indian",
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
                                      "id": "3319763",
                                      "name": "Murgh Sholey Kebab",
                                      "category": "Indian",
                                      "price": 25000,
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
                                      "id": "3319764",
                                      "name": "Murgh Pahadi Kebab",
                                      "category": "Indian",
                                      "price": 25000,
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
                                      "id": "3319765",
                                      "name": "Murgh Kasturi Kebab",
                                      "category": "Indian",
                                      "price": 25000,
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
                                      "id": "3319766",
                                      "name": "Lehsuni Kebab",
                                      "category": "Indian",
                                      "price": 25000,
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
                                      "id": "3319767",
                                      "name": "Murgh Banjara (Dry)",
                                      "category": "Indian",
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
                                      "id": "3319768",
                                      "name": "Murgh Pudina Kebab",
                                      "category": "Indian",
                                      "price": 25000,
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
                                      "id": "3319769",
                                      "name": "Bhagyashree Special Chicken Kebab",
                                      "category": "Indian",
                                      "price": 38000,
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
                                      "id": "3319770",
                                      "name": "Chicken Seekh Kebab",
                                      "category": "Indian",
                                      "price": 28000,
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
                                      "id": "3319771",
                                      "name": "Chicken Patri Kebab",
                                      "category": "Indian",
                                      "price": 32500,
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
                                      "id": "3319773",
                                      "name": "Angara Kebab",
                                      "category": "Indian",
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
                                      "id": "3319774",
                                      "name": "Tangdi Kebab (2 Pcs)",
                                      "category": "Indian",
                                      "price": 30000,
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
                                }
                              ]
                            },
                            {
                              "title": "Mutton Starter",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319772",
                                      "name": "Mutton Seekh Kebab",
                                      "category": "Indian",
                                      "price": 32000,
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
                                }
                              ]
                            },
                            {
                              "title": "Seafood Starters",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319775",
                                      "name": "Tandoori Pomfret",
                                      "category": "Indian",
                                      "price": 45000,
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
                                      "id": "3319776",
                                      "name": "Fish Tikka",
                                      "category": "Indian",
                                      "price": 39000,
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
                                      "id": "3319777",
                                      "name": "Tandoori Surmai",
                                      "category": "Indian",
                                      "price": 48000,
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
                                      "id": "3319778",
                                      "name": "Fish Pudina Tikka",
                                      "category": "Indian",
                                      "price": 39000,
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
                                      "id": "3319779",
                                      "name": "Fish Ajwaini Tikka",
                                      "category": "Indian",
                                      "price": 39000,
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
                                      "id": "3319780",
                                      "name": "Tandoori Prawns",
                                      "category": "Indian",
                                      "price": 40000,
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
                                      "id": "3319781",
                                      "name": "Prawns Pepper Tikka",
                                      "category": "Indian",
                                      "price": 39000,
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
                                      "id": "3319782",
                                      "name": "Prawns Banjara Tikka",
                                      "category": "Indian",
                                      "price": 39000,
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
                                }
                              ]
                            },
                            {
                              "title": "Veg Main Course",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319783",
                                      "name": "Veg Kadai",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319784",
                                      "name": "Veg Kolhapuri",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319785",
                                      "name": "Veg Makhani",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319786",
                                      "name": "Veg Jalfrezi",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319787",
                                      "name": "Veg Handi",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319788",
                                      "name": "Veg Hyderabadi",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319789",
                                      "name": "Veg Chilli Millli",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 19000,
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
                                      "id": "3319790",
                                      "name": "Green Peas Curry",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319791",
                                      "name": "Green Peas Palak",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319792",
                                      "name": "Dum Aloo Kashmiri",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319793",
                                      "name": "Dum Aloo Punjabi",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319794",
                                      "name": "Veg Bhuna",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 19000,
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
                                      "id": "3319795",
                                      "name": "Veg Patiala",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 24500,
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
                                      "id": "3319796",
                                      "name": "Aloo Gobi",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319797",
                                      "name": "Aloo Mattar",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319798",
                                      "name": "Aloo Methi",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319799",
                                      "name": "Jeera Aloo",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 17500,
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
                                      "id": "3319800",
                                      "name": "Veg Kofta Curry",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319801",
                                      "name": "Bhindi Masala",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319802",
                                      "name": "Bhindi Tawa",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319803",
                                      "name": "Baby corn Mushroom Tawa",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 19000,
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
                                      "id": "3319804",
                                      "name": "Mushroom Peas Masala",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 19000,
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
                                      "id": "3319805",
                                      "name": "Methi Malai Mattar",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 19000,
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
                                      "id": "3319806",
                                      "name": "Veg Angara",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319807",
                                      "name": "Veg Maratha",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 19000,
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
                                      "id": "3319808",
                                      "name": "Veg Keema Masala",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319809",
                                      "name": "Malai Kofta",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319810",
                                      "name": "Navrattan Korma",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319811",
                                      "name": "Veg Jaipuri",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 19000,
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
                                      "id": "3319812",
                                      "name": "Corn Palak",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319813",
                                      "name": "Cheese Peas Curry",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319814",
                                      "name": "Veg Kebab Masala",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319815",
                                      "name": "Veg Diwani Handi",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22500,
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
                                      "id": "3319816",
                                      "name": "Tamatar Badshahi",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22500,
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
                                      "id": "3319817",
                                      "name": "Stuffed Tomato",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319818",
                                      "name": "Stuffed Capsicum",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319819",
                                      "name": "Baby corn Palak",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 19000,
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
                                      "id": "3319820",
                                      "name": "Mushroom Palak",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 19000,
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
                                      "id": "3319821",
                                      "name": "Chana Masala",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319822",
                                      "name": "Baingan Bharta",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 17500,
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
                                      "id": "3319823",
                                      "name": "Baingan Masala",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 17500,
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
                                      "id": "3319824",
                                      "name": "Kaju Butter Masala",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 23000,
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
                                      "id": "3319825",
                                      "name": "Kaju Curry",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 23000,
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
                                      "id": "3319826",
                                      "name": "Mushroom Kadai",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319827",
                                      "name": "Baby corn Kadai",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319828",
                                      "name": "Veg Bhagyashree Special",
                                      "category": "Indian",
                                      "imageId": "dj2uuan0vzxe4xxmueqa",
                                      "isVeg": 1,
                                      "price": 23000,
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
                                      "id": "3319829",
                                      "name": "Veg Lahori",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 19500,
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
                                      "id": "3319830",
                                      "name": "Veg Rajwada",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319831",
                                      "name": "Veg Tiranga",
                                      "category": "Indian",
                                      "imageId": "j0jqinng6smpowmvhl7i",
                                      "isVeg": 1,
                                      "price": 25000,
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
                                      "id": "3319832",
                                      "name": "Veg Banjara",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22500,
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
                                      "id": "3319833",
                                      "name": "Veg Nilgiri Korma",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22500,
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
                                      "id": "3319834",
                                      "name": "Kadhi Pakoda",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319835",
                                      "name": "Lehsuni Palak",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319836",
                                      "name": "Kofta Sanj Savera",
                                      "category": "Indian",
                                      "imageId": "hno1pu4xpvicurivox0d",
                                      "isVeg": 1,
                                      "price": 22500,
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
                            },
                            {
                              "title": "Paneer Main Course",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319837",
                                      "name": "Paneer Mattar",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 21000,
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
                                      "id": "3319838",
                                      "name": "Paneer Butter Masala",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 21000,
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
                                      "id": "3319839",
                                      "name": "Paneer Pasanda",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3319840",
                                      "name": "Methi Paneer",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 21000,
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
                                      "id": "3319841",
                                      "name": "Paneer Bhurji",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 23000,
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
                                      "id": "3319842",
                                      "name": "Paneer Palak",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 21000,
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
                                      "id": "3319843",
                                      "name": "Paneer Kadai",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3319844",
                                      "name": "Paneer Tikka Masala",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3319845",
                                      "name": "Paneer Mushroom Baby corn",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3319846",
                                      "name": "Paneer Kofta",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3319847",
                                      "name": "Paneer Lazeez",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3319848",
                                      "name": "Paneer Mirch Masala",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3319849",
                                      "name": "Paneer Lahori",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3319850",
                                      "name": "Paneer Banjara",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3319851",
                                      "name": "Paneer Angara",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3319852",
                                      "name": "Paneer Handi",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3319853",
                                      "name": "Paneer Rajwada",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 22000,
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
                            },
                            {
                              "title": "Egg Main Course",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319854",
                                      "name": "Egg Masala",
                                      "category": "Indian",
                                      "price": 12000,
                                      "variants": {
                                        
                                      },
                                      "variantsV2": {
                                        
                                      },
                                      "itemAttribute": {
                                        "vegClassifier": "EGG"
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
                            },
                            {
                              "title": "Chicken Main Course",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319855",
                                      "name": "Murgh Masala",
                                      "category": "Indian",
                                      "price": 22500,
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
                                      "id": "3319856",
                                      "name": "Murgh Kadai",
                                      "category": "Indian",
                                      "price": 23000,
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
                                      "id": "3319857",
                                      "name": "Murgh Keema Masala",
                                      "category": "Indian",
                                      "price": 24000,
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
                                      "id": "3319858",
                                      "name": "Murgh Adraki",
                                      "category": "Indian",
                                      "price": 24000,
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
                                      "id": "3319859",
                                      "name": "Murgh Hyderabadi",
                                      "category": "Indian",
                                      "price": 24000,
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
                                      "id": "3319860",
                                      "name": "Murgh Angara",
                                      "category": "Indian",
                                      "imageId": "tiq9rbnf8jgtmqocxcwt",
                                      "price": 24000,
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
                                      "id": "3319861",
                                      "name": "Murgh Maratha (Gravy)",
                                      "category": "Indian",
                                      "price": 24000,
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
                                      "id": "3319862",
                                      "name": "Murgh Tikka Masala",
                                      "category": "Indian",
                                      "price": 24000,
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
                                      "id": "3319863",
                                      "name": "Murgh Reshmi Tikka Masala",
                                      "category": "Indian",
                                      "price": 24000,
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
                                      "id": "3319864",
                                      "name": "Murgh Kali Mirch",
                                      "category": "Indian",
                                      "price": 24000,
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
                                      "id": "3319865",
                                      "name": "Murgh Methi Tawa",
                                      "category": "Indian",
                                      "price": 24000,
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
                                      "id": "3319866",
                                      "name": "Murgh Banjara (Gravy)",
                                      "category": "Indian",
                                      "price": 24000,
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
                                      "id": "3319867",
                                      "name": "Murgh Bhuna",
                                      "category": "Indian",
                                      "price": 24000,
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
                                      "id": "3319868",
                                      "name": "Murgh Tangdi Kebab Masala",
                                      "category": "Indian",
                                      "price": 27500,
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
                                      "id": "3319869",
                                      "name": "Murgh Rogan",
                                      "category": "Indian",
                                      "price": 24000,
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
                                      "id": "3319870",
                                      "name": "Murgh Patiala",
                                      "category": "Indian",
                                      "price": 32500,
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
                                      "id": "3319871",
                                      "name": "Murgh Bhagyashree Special",
                                      "category": "Indian",
                                      "price": 32500,
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
                                      "id": "3319872",
                                      "name": "Butter Chicken",
                                      "category": "Indian",
                                      "price": 29500,
                                      "variants": {
                                        "variantGroups": [
                                          {
                                            "groupId": "112182",
                                            "name": "Quantity",
                                            "variations": [
                                              {
                                                "name": "Half",
                                                "default": 1,
                                                "id": "311303",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              },
                                              {
                                                "name": "Full",
                                                "price": 25500,
                                                "id": "311304",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              }
                                            ]
                                          }
                                        ]
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
                                      "id": "3319873",
                                      "name": "Murgh Handi",
                                      "category": "Indian",
                                      "price": 28000,
                                      "variants": {
                                        "variantGroups": [
                                          {
                                            "groupId": "112183",
                                            "name": "Quantity",
                                            "variations": [
                                              {
                                                "name": "Half",
                                                "default": 1,
                                                "id": "311305",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              },
                                              {
                                                "name": "Full",
                                                "price": 22000,
                                                "id": "311306",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              }
                                            ]
                                          }
                                        ]
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
                                      "id": "3319874",
                                      "name": "Murgh Mussallam",
                                      "category": "Indian",
                                      "price": 30000,
                                      "variants": {
                                        "variantGroups": [
                                          {
                                            "groupId": "112184",
                                            "name": "Quantity",
                                            "variations": [
                                              {
                                                "name": "Half",
                                                "default": 1,
                                                "id": "311307",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              },
                                              {
                                                "name": "Full",
                                                "price": 25000,
                                                "id": "311308",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              }
                                            ]
                                          }
                                        ]
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
                                      "id": "3319875",
                                      "name": "Murgh Lazeez",
                                      "category": "Indian",
                                      "price": 25000,
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
                                      "id": "3319876",
                                      "name": "Murgh Malwani",
                                      "category": "Indian",
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
                                      "id": "3319877",
                                      "name": "Murgh Maratha (Gravy)",
                                      "category": "Indian",
                                      "price": 25000,
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
                                      "id": "3319878",
                                      "name": "Murgh Kolhapuri",
                                      "category": "Indian",
                                      "price": 25000,
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
                                      "id": "3319879",
                                      "name": "Murgh Rara",
                                      "category": "Indian",
                                      "price": 25000,
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
                                      "id": "3319880",
                                      "name": "Murgh Bukhara",
                                      "category": "Indian",
                                      "price": 25000,
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
                                }
                              ]
                            },
                            {
                              "title": "Mutton Main Course",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319881",
                                      "name": "Mutton Masala",
                                      "category": "Indian",
                                      "price": 29000,
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
                                      "id": "3319882",
                                      "name": "Mutton Bhuna",
                                      "category": "Indian",
                                      "price": 29000,
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
                                      "id": "3319883",
                                      "name": "Mutton Kali Mirch",
                                      "category": "Indian",
                                      "price": 29000,
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
                                      "id": "3319884",
                                      "name": "Mutton Rogan Josh",
                                      "category": "Indian",
                                      "price": 29000,
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
                                      "id": "3319885",
                                      "name": "Mutton Hyderabadi",
                                      "category": "Indian",
                                      "price": 29000,
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
                                      "id": "3319886",
                                      "name": "Keema Mattar",
                                      "category": "Indian",
                                      "price": 29000,
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
                                      "id": "3319887",
                                      "name": "Mutton Fry",
                                      "category": "Indian",
                                      "price": 29000,
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
                                      "id": "3319888",
                                      "name": "Mutton Angara",
                                      "category": "Indian",
                                      "price": 29000,
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
                                      "id": "3319889",
                                      "name": "Mutton Malwani",
                                      "category": "Indian",
                                      "price": 31000,
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
                                      "id": "3319890",
                                      "name": "Mutton Handi",
                                      "category": "Indian",
                                      "price": 29500,
                                      "variants": {
                                        "variantGroups": [
                                          {
                                            "groupId": "112185",
                                            "name": "Quantity",
                                            "variations": [
                                              {
                                                "name": "Half",
                                                "default": 1,
                                                "id": "311309",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              },
                                              {
                                                "name": "Full",
                                                "price": 28000,
                                                "id": "311310",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              }
                                            ]
                                          }
                                        ]
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
                                      "id": "3319891",
                                      "name": "Mutton Rara",
                                      "category": "Indian",
                                      "price": 29000,
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
                                      "id": "3319892",
                                      "name": "Mutton Dabba Gosh",
                                      "category": "Indian",
                                      "price": 29000,
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
                                      "id": "3319893",
                                      "name": "Mutton Saaliboti",
                                      "category": "Indian",
                                      "price": 29000,
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
                                }
                              ]
                            },
                            {
                              "title": "Dal",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319894",
                                      "name": "Dal Fry",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 12500,
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
                                      "id": "3319895",
                                      "name": "Butter Dal Tadka",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 14000,
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
                                      "id": "3319896",
                                      "name": "Dal Tadka",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 13500,
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
                                      "id": "3319897",
                                      "name": "Dal Kolhapuri",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 13500,
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
                                      "id": "3319898",
                                      "name": "Dal Bahar",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 13000,
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
                                      "id": "3319899",
                                      "name": "Dal Makhani",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319900",
                                      "name": "Lehsuni Dal Palak",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 17500,
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
                            },
                            {
                              "title": "Biryanis",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319901",
                                      "name": "Veg Biryani",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 19000,
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
                                      "id": "3319902",
                                      "name": "Egg Biryani",
                                      "category": "Indian",
                                      "price": 20000,
                                      "variants": {
                                        
                                      },
                                      "variantsV2": {
                                        
                                      },
                                      "itemAttribute": {
                                        "vegClassifier": "EGG"
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
                                      "id": "3319903",
                                      "name": "Chicken Biryani",
                                      "category": "Indian",
                                      "price": 27500,
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
                                      "id": "3319904",
                                      "name": "Chicken Tikka Biryani",
                                      "category": "Indian",
                                      "price": 30000,
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
                                      "id": "3319905",
                                      "name": "Mutton Biryani",
                                      "category": "Indian",
                                      "price": 32500,
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
                                      "id": "3319906",
                                      "name": "Mutton Hyderabadi Biryani",
                                      "category": "Indian",
                                      "price": 32500,
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
                                      "id": "3319907",
                                      "name": "Prawns Biryani",
                                      "category": "Indian",
                                      "price": 35000,
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
                                }
                              ]
                            },
                            {
                              "title": "Rice",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319908",
                                      "name": "Steamed Rice",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 12000,
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
                                      "id": "3319909",
                                      "name": "Jeera Rice",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 13000,
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
                                      "id": "3319910",
                                      "name": "Veg Pulao",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319911",
                                      "name": "Biryani Rice",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 13000,
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
                                      "id": "3319912",
                                      "name": "Ghee Rice",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319913",
                                      "name": "Mattar Pulao",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319914",
                                      "name": "Kashmiri Pulao",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319915",
                                      "name": "Palak Fried Rice",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 18500,
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
                                      "id": "3319916",
                                      "name": "Dal Khichdi",
                                      "category": "Indian",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319917",
                                      "name": "Khichdi Kadhi Rice",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319918",
                                      "name": "Curd Rice",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 15000,
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
                            },
                            {
                              "title": "Indian Breads",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319919",
                                      "name": "Tandoori Roti",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 2500,
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
                                      "id": "3319920",
                                      "name": "Butter Roti",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 2800,
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
                                      "id": "3319921",
                                      "name": "Naan",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 3500,
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
                                      "id": "3319922",
                                      "name": "Butter Naan",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 4000,
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
                                      "id": "3319923",
                                      "name": "Paratha",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 4000,
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
                                      "id": "3319924",
                                      "name": "Butter Paratha",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 4500,
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
                                      "id": "3319925",
                                      "name": "Kulcha",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 4000,
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
                                      "id": "3319926",
                                      "name": "Butter Kulcha",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 4300,
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
                                      "id": "3319927",
                                      "name": "Masala Kulcha",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 4800,
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
                                      "id": "3319928",
                                      "name": "Methi Paratha",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 8000,
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
                                      "id": "3319929",
                                      "name": "Pudina Paratha",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 8000,
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
                                      "id": "3319930",
                                      "name": "Aloo Paratha",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 9500,
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
                                      "id": "3319931",
                                      "name": "Stuffed Onion Paratha",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 9500,
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
                                      "id": "3319932",
                                      "name": "Stuffed Veg Paratha",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 9500,
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
                                      "id": "3319933",
                                      "name": "Stuffed Aloo Kulcha",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 9500,
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
                                      "id": "3319934",
                                      "name": "Garlic Naan",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 8000,
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
                                      "id": "3319935",
                                      "name": "Butter Garlic Naan",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 8500,
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
                                      "id": "3319936",
                                      "name": "Cheese Naan",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 10000,
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
                                      "id": "3319937",
                                      "name": "Paneer Cheese Naan",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 12000,
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
                                      "id": "3319938",
                                      "name": "Khasta Roti",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 5000,
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
                                      "id": "3319939",
                                      "name": "Missi Roti",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 4500,
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
                                      "id": "3319940",
                                      "name": "Rumali Roti",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 4500,
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
                                      "id": "3319941",
                                      "name": "Roti Ki Tokri",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 45000,
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
                            },
                            {
                              "title": "Accompaniments",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319942",
                                      "name": "Roasted Papad",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 2000,
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
                                      "id": "3319943",
                                      "name": "Fried Papad",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 2800,
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
                                      "id": "3319944",
                                      "name": "Masala Papad",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 3500,
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
                                      "id": "3319945",
                                      "name": "Fresh Green Salad",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 9000,
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
                                      "id": "3319946",
                                      "name": "Veg Raita",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 9000,
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
                                      "id": "3319947",
                                      "name": "Pineapple Raita",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 9000,
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
                                      "id": "3319948",
                                      "name": "Boondi Raita",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 9000,
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
                                      "id": "3319949",
                                      "name": "Tadka Raita",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 9000,
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
                                      "id": "3319950",
                                      "name": "Curd",
                                      "category": "Indian",
                                      "isVeg": 1,
                                      "price": 8000,
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
                          ]
                        }
                      }
                    },
                    {
                      "card": {
                        "card": {
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory",
                          "title": "Chinese",
                          "categories": [
                            {
                              "title": "Veg Soups",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319951",
                                      "name": "Sweet Corn Veg Soup",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 9500,
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
                                      "id": "3319952",
                                      "name": "Baby corn Veg Soup",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 9500,
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
                                      "id": "3319953",
                                      "name": "Veg Lung Fung Soup",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 9500,
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
                                      "id": "3319954",
                                      "name": "Veg Talumein Soup",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 9500,
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
                                      "id": "3319955",
                                      "name": "Veg Clear Soup",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 9000,
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
                                      "id": "3319956",
                                      "name": "Veg Manchow Soup",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 9500,
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
                                      "id": "3319957",
                                      "name": "Veg Hot & Sour Soup",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 9500,
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
                                      "id": "3319958",
                                      "name": "Veg Noodles Soup",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 9500,
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
                            },
                            {
                              "title": "Non-Veg Soups",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319959",
                                      "name": "Sweet Corn Chicken Soup",
                                      "category": "Chinese",
                                      "price": 10000,
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
                                      "id": "3319960",
                                      "name": "Baby corn Chicken Soup",
                                      "category": "Chinese",
                                      "price": 10000,
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
                                      "id": "3319961",
                                      "name": "Chicken Lung Fung Soup",
                                      "category": "Chinese",
                                      "price": 10000,
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
                                      "id": "3319962",
                                      "name": "Chicken Clear Soup",
                                      "category": "Chinese",
                                      "price": 10000,
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
                                      "id": "3319963",
                                      "name": "Chicken Manchow Soup",
                                      "category": "Chinese",
                                      "price": 10000,
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
                                      "id": "3319964",
                                      "name": "Chicken Hot & Sour Soup",
                                      "category": "Chinese",
                                      "price": 10500,
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
                                      "id": "3319965",
                                      "name": "Chicken Noodles Soup",
                                      "category": "Chinese",
                                      "price": 11000,
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
                                      "id": "3319966",
                                      "name": "Seafood Soup",
                                      "category": "Chinese",
                                      "description": "Contains prawns & fish.",
                                      "price": 13000,
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
                                      "id": "3319967",
                                      "name": "Seafood Lung Fung Soup",
                                      "category": "Chinese",
                                      "description": "Contains prawns & fish.",
                                      "price": 13000,
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
                                }
                              ]
                            },
                            {
                              "title": "Veg Starters",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319968",
                                      "name": "Veg Sesame Toast",
                                      "category": "Chinese",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319969",
                                      "name": "Veg Crispy",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 19000,
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
                                      "id": "3319970",
                                      "name": "Veg Spring Roll",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319971",
                                      "name": "Veg Fried Wonton",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319972",
                                      "name": "Veg 65",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 19500,
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
                                      "id": "3319973",
                                      "name": "Veg Balls in Garlic Sauce",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319974",
                                      "name": "Veg Gold Coin",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 19500,
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
                                      "id": "3319975",
                                      "name": "Veg Manchurian",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 18500,
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
                                      "id": "3319976",
                                      "name": "Veg Chilli",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 18500,
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
                                      "id": "3319977",
                                      "name": "Golden Fried Baby corn",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 18500,
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
                                      "id": "3319978",
                                      "name": "Honey Cheese Potato",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 22500,
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
                                      "id": "3319979",
                                      "name": "Paneer 65",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 21500,
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
                                      "id": "3319980",
                                      "name": "Paneer Satay",
                                      "category": "Chinese",
                                      "imageId": "cpibmtlhszv1iofidygb",
                                      "isVeg": 1,
                                      "price": 21500,
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
                                      "id": "3319981",
                                      "name": "Paneer Salt & Pepper",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 21500,
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
                                      "id": "3319982",
                                      "name": "Paneer Hot Pan",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 25000,
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
                                      "id": "3319983",
                                      "name": "Paneer in Schezwan Sauce",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 21500,
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
                                      "id": "3319984",
                                      "name": "Paneer Chilli",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 21500,
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
                                      "id": "3319985",
                                      "name": "Paneer Manchurian",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 21500,
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
                                      "id": "3319986",
                                      "name": "Paneer Crispy",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 21500,
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
                                      "id": "3319987",
                                      "name": "Paneer Hot Garlic Sauce",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 21500,
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
                                      "id": "3319988",
                                      "name": "Cauliflower Manchurian",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 19000,
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
                                      "id": "3319989",
                                      "name": "Crispy Potato Schezwan Sauce",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319990",
                                      "name": "Mushroom Manchurian",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319991",
                                      "name": "Mushroom Chilli",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319992",
                                      "name": "Veg Mushroom & Bamboo Shoots",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3319993",
                                      "name": "Vegetables in Choice of Sauce",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 20000,
                                      "variants": {
                                        "variantGroups": [
                                          {
                                            "groupId": "112186",
                                            "name": "Sauces",
                                            "variations": [
                                              {
                                                "name": "Hot Bean Sauce",
                                                "default": 1,
                                                "id": "311311",
                                                "inStock": 1,
                                                "isVeg": 1,
                                                "isEnabled": 1
                                              },
                                              {
                                                "name": "Hong Kong Sauce",
                                                "id": "311312",
                                                "inStock": 1,
                                                "isVeg": 1,
                                                "isEnabled": 1
                                              },
                                              {
                                                "name": "Thai Sauce",
                                                "id": "311313",
                                                "inStock": 1,
                                                "isVeg": 1,
                                                "isEnabled": 1
                                              }
                                            ]
                                          }
                                        ]
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
                                      "id": "3319994",
                                      "name": "Veg Taronest",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 24000,
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
                                      "id": "3319995",
                                      "name": "Baby corn Manchurian",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 19000,
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
                            },
                            {
                              "title": "Chicken Starters",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3319996",
                                      "name": "Chicken Sesame Toast",
                                      "category": "Chinese",
                                      "price": 25000,
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
                                      "id": "3319997",
                                      "name": "Chicken Lollipop",
                                      "category": "Chinese",
                                      "imageId": "w1xdguxfvrcwp57j8nsd",
                                      "price": 25000,
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
                                      "id": "3319998",
                                      "name": "Chicken Lollipop in Garlic Sauce",
                                      "category": "Chinese",
                                      "price": 27500,
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
                                      "id": "3319999",
                                      "name": "Chicken 65",
                                      "category": "Chinese",
                                      "price": 24000,
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
                                      "id": "3320000",
                                      "name": "Chicken Satay",
                                      "category": "Chinese",
                                      "price": 27000,
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
                                      "id": "3320001",
                                      "name": "Chicken Hot Pan",
                                      "category": "Chinese",
                                      "price": 30000,
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
                                      "id": "3320002",
                                      "name": "Salt & Pepper Chicken",
                                      "category": "Chinese",
                                      "price": 27500,
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
                                      "id": "3320003",
                                      "name": "Chicken Spring Roll",
                                      "category": "Chinese",
                                      "price": 25000,
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
                                      "id": "3320004",
                                      "name": "Chicken Crispy",
                                      "category": "Chinese",
                                      "price": 25000,
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
                                      "id": "3320005",
                                      "name": "Chicken Chilli",
                                      "category": "Chinese",
                                      "price": 24000,
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
                                      "id": "3320006",
                                      "name": "Chicken Manchurian",
                                      "category": "Chinese",
                                      "price": 24000,
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
                                      "id": "3320007",
                                      "name": "Chicken in Schezwan Sauce",
                                      "category": "Chinese",
                                      "price": 24000,
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
                                      "id": "3320008",
                                      "name": "Chicken Fried Wonton",
                                      "category": "Chinese",
                                      "price": 23000,
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
                                      "id": "3320009",
                                      "name": "Ginger Chicken",
                                      "category": "Chinese",
                                      "price": 24000,
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
                                      "id": "3320010",
                                      "name": "Garlic Chicken",
                                      "category": "Chinese",
                                      "price": 24000,
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
                                      "id": "3320011",
                                      "name": "Sweet & Sour Chicken",
                                      "category": "Chinese",
                                      "price": 24000,
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
                                      "id": "3320012",
                                      "name": "Chicken in Oyster Sauce",
                                      "category": "Chinese",
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
                                      "id": "3320013",
                                      "name": "Chicken Taronest",
                                      "category": "Chinese",
                                      "price": 27000,
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
                                      "id": "3320014",
                                      "name": "Chicken Meat Balls in Garlic Sauce",
                                      "category": "Chinese",
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
                                          
                                        }
                                      }
                                    },
                                    "analytics": {
                                      
                                    },
                                    "hideRestaurantDetails": true
                                  }
                                }
                              ]
                            },
                            {
                              "title": "Seafood Starters",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3320015",
                                      "name": "Fish Chilli",
                                      "category": "Chinese",
                                      "price": 35000,
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
                                      "id": "3320016",
                                      "name": "Fish Manchurian",
                                      "category": "Chinese",
                                      "price": 35000,
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
                                      "id": "3320017",
                                      "name": "Fish in Choice of Sauce",
                                      "category": "Chinese",
                                      "price": 35000,
                                      "variants": {
                                        "variantGroups": [
                                          {
                                            "groupId": "112187",
                                            "name": "Sauces",
                                            "variations": [
                                              {
                                                "name": "Thai Sauce",
                                                "default": 1,
                                                "id": "311314",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              },
                                              {
                                                "name": "Ginger Garlic Sauce",
                                                "id": "311315",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              },
                                              {
                                                "name": "Schezwan Sauce",
                                                "id": "311316",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              },
                                              {
                                                "name": "Oyster Sauce",
                                                "id": "311317",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              }
                                            ]
                                          }
                                        ]
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
                                      "id": "3320018",
                                      "name": "Golden Fried Prawns",
                                      "category": "Chinese",
                                      "price": 37500,
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
                                      "id": "3320019",
                                      "name": "Salt & Pepper Prawns",
                                      "category": "Chinese",
                                      "price": 37500,
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
                                      "id": "3320020",
                                      "name": "Prawns Chilli",
                                      "category": "Chinese",
                                      "price": 37500,
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
                                      "id": "3320021",
                                      "name": "Prawns Manchurian",
                                      "category": "Chinese",
                                      "price": 37500,
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
                                      "id": "3320022",
                                      "name": "Prawns 65",
                                      "category": "Chinese",
                                      "price": 37500,
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
                                      "id": "3320023",
                                      "name": "Prawns Satay",
                                      "category": "Chinese",
                                      "price": 37500,
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
                                      "id": "3320024",
                                      "name": "Prawns in Hot Pan",
                                      "category": "Chinese",
                                      "price": 37500,
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
                                      "id": "3320025",
                                      "name": "Prawns in Choice of Sauce",
                                      "category": "Chinese",
                                      "price": 37500,
                                      "variants": {
                                        "variantGroups": [
                                          {
                                            "groupId": "112188",
                                            "name": "Sauces",
                                            "variations": [
                                              {
                                                "name": "Ginger Garlic Sauce",
                                                "default": 1,
                                                "id": "311318",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              },
                                              {
                                                "name": "Blackbean Sauce",
                                                "id": "311319",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              },
                                              {
                                                "name": "Schezwan Sauce",
                                                "id": "311320",
                                                "inStock": 1,
                                                "isEnabled": 1
                                              }
                                            ]
                                          }
                                        ]
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
                                }
                              ]
                            },
                            {
                              "title": "Fried Rice",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3320026",
                                      "name": "Veg Fried Rice",
                                      "category": "Chinese",
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
                                },
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3320027",
                                      "name": "Mushroom Tomato Fried Rice",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 18500,
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
                                      "id": "3320028",
                                      "name": "Veg Schezwan Fried Rice",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 18500,
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
                                      "id": "3320029",
                                      "name": "Veg Triple Fried Rice",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 25000,
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
                                      "id": "3320030",
                                      "name": "Egg Fried Rice",
                                      "category": "Chinese",
                                      "price": 19500,
                                      "variants": {
                                        
                                      },
                                      "variantsV2": {
                                        
                                      },
                                      "itemAttribute": {
                                        "vegClassifier": "EGG"
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
                                      "id": "3320031",
                                      "name": "Chicken Fried Rice",
                                      "category": "Chinese",
                                      "price": 21000,
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
                                      "id": "3320032",
                                      "name": "Chicken Schezwan Fried Rice",
                                      "category": "Chinese",
                                      "price": 22000,
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
                                      "id": "3320033",
                                      "name": "Chicken Triple Fried Rice",
                                      "category": "Chinese",
                                      "price": 27500,
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
                                      "id": "3320034",
                                      "name": "Mutton Fried Rice",
                                      "category": "Chinese",
                                      "price": 24000,
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
                                      "id": "3320035",
                                      "name": "Prawns Fried Rice",
                                      "category": "Chinese",
                                      "price": 28000,
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
                                      "id": "3320036",
                                      "name": "Prawns Schezwan Fried Rice",
                                      "category": "Chinese",
                                      "price": 28500,
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
                                      "id": "3320037",
                                      "name": "Mixed Fried Rice",
                                      "category": "Chinese",
                                      "description": "Contains chicken, mutton & fish.",
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
                                          
                                        }
                                      }
                                    },
                                    "analytics": {
                                      
                                    },
                                    "hideRestaurantDetails": true
                                  }
                                }
                              ]
                            },
                            {
                              "title": "Noodles",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3320038",
                                      "name": "Veg Hakka Noodles",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 20000,
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
                                      "id": "3320039",
                                      "name": "Veg Schezwan Noodles",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 21000,
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
                                      "id": "3320040",
                                      "name": "Veg Chow mein",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 22000,
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
                                      "id": "3320041",
                                      "name": "Chicken Hakka Noodles",
                                      "category": "Chinese",
                                      "price": 22500,
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
                                      "id": "3320042",
                                      "name": "Chicken Schezwan Noodles",
                                      "category": "Chinese",
                                      "price": 23500,
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
                                      "id": "3320043",
                                      "name": "Mixed Hakka Noodles",
                                      "category": "Chinese",
                                      "description": "Contains chicken, mutton & fish.",
                                      "price": 27000,
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
                                      "id": "3320044",
                                      "name": "Chicken Chow mein",
                                      "category": "Chinese",
                                      "price": 24000,
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
                                }
                              ]
                            },
                            {
                              "title": "Chop sueys",
                              "itemCards": [
                                {
                                  "card": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                                    "info": {
                                      "id": "3320045",
                                      "name": "Veg American Chop suey",
                                      "category": "Chinese",
                                      "isVeg": 1,
                                      "price": 25000,
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
                                      "id": "3320046",
                                      "name": "Chicken American Chop suey",
                                      "category": "Chinese",
                                      "price": 27500,
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
                                }
                              ]
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
                                  "id": "3320047",
                                  "name": "Malai Kulfi",
                                  "category": "Desserts",
                                  "isVeg": 1,
                                  "price": 9000,
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
                          "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                          "name": "Bhagyashree Executive",
                          "area": "Magarpatta",
                          "completeAddress": "169/1, Near Amanora Township,Tupe Nagar,Hadapsar,Pune"
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
      "csrfToken": "aulEQWVOkCbm-kGZ9GrGa8oUnz43pnJcTh8rnQWk"
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