import React, { createContext,useState } from 'react'
import clothesa from '../assets/clothesa.jpg'
import clothesb from '../assets/clothesb.jpg'
import clothesc from '../assets/clothesc.jpg'
import clothesd from '../assets/clothesd.jpg'
import clothese from '../assets/clothese.jpg'
import clothesf from '../assets/clothesf.jpg'
import accessoriesa from '../assets/accessoriesa.jpg'
import accessoriesb from '../assets/accessoriesb.jpg'
import accessoriesc from '../assets/accessoriesc.jpg'
import accessoriesd from '../assets/accessoriesd.jpg'
import accessoriese from '../assets/accessoriese.jpg'
import accessoriesf from '../assets/accessoriesf.jpg'
import homea from '../assets/homea.jpg'
import homeb from '../assets/homeb.jpg'
import homec from '../assets/homec.jpg'
import homed from '../assets/homed.jpg'
import homee from '../assets/homee.jpg'
import homef from '../assets/homef.jpg'
import grocerya from '../assets/grocerya.jpg'
import groceryb from '../assets/groceryb.jpg'
import groceryc from '../assets/groceryc.jpg'
import groceryd from '../assets/groceryd.jpg'
import grocerye from '../assets/grocerye.jpg'
import groceryf from '../assets/groceryf.jpg'
export const ProductsContext=createContext();
const ProductsContextProvider=(props)=>{
    const [products]=useState([
        {id:1,name:'Clothes',price:300,image:clothesa,available:5, status:'new'},
        {id:2,name:'Accessories',price:400,image:accessoriesa,available:5,status:'hot'},
        {id:3,name:'Home',price:500,image:homea,available:5,status:'new'},
        {id:4,name:'Clothes',price:300,image:clothesb,available:5,status:'hot'},
        {id:5,name:'Accessories',price:400,image:accessoriesb,available:5,status:'hot'},
        {id:6,name:'Home',price:500,image:homeb,available:5,status:'new'},
        {id:7,name:'Clothes',price:300,image:clothesc,available:5,status:'hot'},
        {id:8,name:'Grocery',price:400,image:grocerya,available:5,status:'hot'},
        {id:9,name:'Home',price:500,image:homec,available:5,status:'new'},
        {id:10,name:'Clothes',price:300,image:clothesd,available:5,status:'new'},
        {id:11,name:'Grocery',price:400,image:groceryb,available:5,status:'hot'},
        {id:12,name:'Grocery',price:500,image:groceryc,available:5,status:'new'},
        {id:13,name:'Clothes',price:300,image:clothese,available:5,status:'hot'},
        {id:14,name:'Home',price:400,image:homef,available:5,status:'hot'},
        {id:15,name:'Accessories',price:500,image:accessoriesf,available:5,status:'new'},
        {id:16,name:'Clothes',price:300,image:clothesf,available:5,status:'hot'},
        {id:17,name:'Grocery',price:400,image:groceryd,available:5,status:'hot'},
        {id:18,name:'Accessories',price:500,image:accessoriese,available:5,status:'new'},
        {id:19,name:'Grocery',price:300,image:grocerye,available:5,status:'hot'},
        {id:20,name:'Home',price:400,image:homee,available:5,status:'hot'},
        {id:21,name:'Accessories',price:500,image:accessoriesd,available:5,status:'new'},
        {id:22,name:'Grocery',price:300,image:groceryf,available:5,status:'hot'},
        {id:23,name:'Home',price:400,image:homed,available:5,status:'hot'},
        {id:24,name:'Accessories',price:500,image:accessoriesc,available:5,status:'new'}

    ]);
        return (
            <div>
                <ProductsContext.Provider value={{products:[...products]}}>
                {props.children}
                </ProductsContext.Provider>
            </div>
        )
}
export default ProductsContextProvider;
