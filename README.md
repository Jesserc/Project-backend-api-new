# Techreek Backend Assignment (APIs)

* GET REQUEST FOR ALL PRODUCTS

localhost:4000/products





* GET REQUEST FOR A SINGLE PRODUCT

localhost:4000/products/61fa980683006510f69b6ac9

{


    "_id": "61fa980683006510f69b6ac9",
    "productName": "Tart Shells - Savory, 4",
    "description": "Other calcification of muscle, unspecified ankle and foot",
    "price": "$337.08",
    "instock": false,
    "createdAt": "2022-02-02T14:41:10.369Z",
    "updatedAt": "2022-02-02T15:54:44.022Z",
    "__v": 0
}





* POST REQUEST

  localhost:4000/products
  
 {
 
        "productName": "Jombo bread",
        "description": "Sweet but not yummy",
        "price": "$45",
        "instock": true
    }
   
   
   
   

* PUT REQUEST FOR A SINGLE PRODUCT

localhost:4000/products/61fcdcc787e7ad9ccbc21352

 {

     
        "productName": "Marketsquare bread",
        "description": "Sweet yet not yummy",
        "price": "$2.4",
        "instock": false
 }





* DELETE REQUEST FOR A SINGLE PRODUCT

localhost:4000/products/61fa95ca83006510f69b6aa7

{

    "msg": "This  Product does not exist"
}
