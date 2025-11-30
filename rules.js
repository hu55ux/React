/*
                                                React

React - React dili Javascriptin kitabxanasidir ki, o, istifadəçilərə tək səhifəli tətbiqlər yaratmağa imkan verir.
 O, komponent əsaslı yanaşmadan istifadə edir və istifadəçi interfeyslərinin yaradılmasını asanlaşdırır.

 İndi gəlin React projectində olan fayllara və onların nə iş gördüyünə baxaq:
 1.node_modules: Bu qovluq layihənizdə istifadə olunan bütün asılılıqları saxlayır. Bu asılılıqlar npm və ya yarn vasitəsilə quraşdırılır.
 
 2.package.json: Bu fayl layihəniz haqqında məlumatları və istifadə olunan asılılıqları saxlayır.
 Həmçinin, layihəni işə salmaq və ya test etmək üçün skriptləri də ehtiva edir. Bunun vasitəsilə biz proyekti açdıqda əgər node_modules yoxdursa cmd-də npm install əməliyyatı ilə
 lazım olan paketləri quraşdıra bilərik və buda layihənin işləməsi üçün vacibdir. Burada olan dependency-lər və devDependency-lər layihənin işləməsi üçün lazım olan paketlərdir.

 3..gitignore: Bu fayl Git-ə hansı faylları və qovluqları izləməməsi lazım olduğunu bildirir. Məsələn, node_modules qovluğu adətən izlənilmir, çünki o, asılılıqların saxlanması üçün istifadə olunur və
    layihənin ölçüsünü artırır.
4. src - Source folderi projectin əsas kodlarının yerləşdiyi qovluqdur. Burada əsasən aşağıdakı fayllar və qovluqlar olur:
1. app.css: Bu fayl tətbiqin ümumi stil qaydalarını ehtiva edir.
2. App.jsx: Bu fayl əsas tətbiq komponentini ehtiva edir. Burada digər komponentlər daxil edilir və tətbiqin əsas strukturu müəyyən edilir.
3. index.css: Bu fayl tətbiqin qlobal stil qaydalarını ehtiva edir.
4. main.jsx: Bu fayl tətbiqin giriş nöqtəsidir. Burada React tətbiqi DOM-a bağlanır.

Digər qovluqlar və fayllar layihənin strukturundan asılı olaraq əlavə edilə bilər.

qısaltmalar:
1. rafce - React Arrow Function Component Export - React ox funksiyası komponenti ixrac edir
2. rfc - React Function Component - React funksiyası komponenti


                                                        Komponentlər

Komponentlər React-in əsas tikinti bloklarıdır. Hər bir komponent öz daxilində HTML, CSS və JavaScript kodunu ehtiva edə bilər.
Onlar təkrar istifadə edilə bilən və müstəqil hissələrdir ki, bu da böyük tətbiqlərin idarə olunmasını asanlaşdırır.

Komponentlərin iki əsas növü var:
1. Funksiya Komponentləri: Bunlar sadə JavaScript funksiyalarıdır ki, JSX qaytarırlar.
2. Sinif Komponentləri: Bunlar ES6 sinifləridir ki, React.Component-dən miras alırlar və daha çox xüsusiyyətlərə malikdirlər.

Hər bir funksional komponent daxilində ümumi bir div var ki, o, bütün digər elementləri əhatə edir. 
məsələn:
<div>App</div>
və ya <>App</> ikisidə düzgün sayılır.

import React from 'react' - Bu sətir React kitabxanasını idxal edir ki, bu da JSX-in işləməsi üçün vacibdir.

const card = ({ product }) => {
    return (
        <div className='w-[300px] h-100 p-5 border border-gray-300 rounded-md shadow-md p-4 m-4 hover:scale-105 hover:shadow-lg transition-transform duration-200'>
            <img src={product.image ? product.image : product.images[0]} alt={product.title} className='w-full h-[150px] object-contain rounded-md mb-4' />
            <h1 className='text-2xl font-semibold mt-3'>{product.title}</h1>
            <p className='text-gray-600 text-sm my-4'>{product.description}</p>
            <p className='text-lg font-bold mt-4'>{product.currency} {product.price}</p>
        </div>
    )
}

Burada da biz bir funksional komponent yaradılır. App komponenti sadəcə "App" mətnini göstərir.
export default App- Bu sətir App komponentini digər fayllarda istifadə etmək üçün ixrac edir.

                                                                Attributes

Attributes (atributlar) HTML elementlərinə əlavə məlumat və ya xüsusiyyətlər əlavə etmək üçün istifadə olunur.
1. className: HTML-də "class" atributu React-də "className" olaraq istifadə olunur, çünki "class" JavaScript-də açar sözdür.
2. style: Bu atribut inline stil əlavə etmək üçün istifadə olunur. O, obyekt şəklində verilir, məsələn: style={{ color: 'red', fontSize: '16px' }}.
3. onClick, onChange, onSubmit: Bu atributlar hadisə idarəedicilərini təyin etmək üçün istifadə olunur. Məsələn, onClick atributu bir düyməyə klik edildikdə çağırılacaq funksiyanı təyin edir.



                                                            Components

Components (komponentlər) React-də istifadəçi interfeysinin tikinti bloklarıdır. Hər bir komponent öz daxilində 
HTML, CSS və JavaScript kodunu ehtiva edə bilər. Məsələn biz ümumi homepage-də bir card elementi istifadə edəcəyikki
 bu element birdən çox yerdə istifadə oluna bilər və biz onu bir dəfə yaradıb bir neçə yerdə istifadə edə bilərik.
 Yuxarıda yazdığımız App.jsx faylında olan kod bir komponent nümunəsidir. Gəlin onu bir digər faylda istifadə edək
import React from 'react'
import App from './App.jsx'  // App komponentini idxal edirik
const Main = () => {
  return (
   <div className='w-full h-screen grid grid-cols-4 gap-5'>
        productsData?.map(product =><Card product={product}/>)
    </div>
  )
}  Hər bir komponentdə return xaricində olan hissədə biz Javascript kodları yaza bilərik. məsələn yuxarlda olan Main komponentinə bir Javascript dəyişəni əlavə edək və onu istifadə edək:


classComponent - Class Komponentlər React-də komponent yaratmaq üçün istifadə olunan başqa bir üsuldur. Onlar ES6 siniflərindən miras alır və daha çox xüsusiyyətlərə malikdirlər.
Bu komponentleri rahat yaratmaq üçün biz rcc snippetindən istifadə edə bilərik.
ClassComponentin əsas fərqi burada yaddaşda data saxlamaq mümkündür.

import React, { Component } from 'react'
export default class Card extends Component {
    render() {
        const {product} = this.props; // props vasitəsilə ötürülən məlumatları əldə edirik
        constructor(props){
        super(props);
        }
        return (
        <div className='w-[300px] h-100 p-5 border border-gray-300 rounded-md shadow-md p-4 m-4 hover:scale-105 hover:shadow-lg transition-transform duration-200'>
                <img src={product.image ? product.image : product.images[0]} alt={product.title} className='w-full h-[150px] object-contain rounded-md mb-4' />
                <h1 className='text-2xl font-semibold mt-3'>{product.title}</h1>
                <p className='text-gray-600 text-sm my-4'>{product.description}</p>
                <p className='text-lg font-bold mt-4'>{product.currency} {product.price}</p>
            </div>
        )
    }
}




                                                                            Hooks


Hook - Hooklar funskional komponentlərdə state və digər React xüsusiyyətlərini istifadə etməyə imkan verən xüsusi funksiyalardır.

useState - useState React-də state idarə etmək üçün istifadə olunan hook-dur. O, komponent daxilində dəyişən məlumatları 
saxlamağa və yeniləməyə imkan verir.

import {useState} from "react"
const[email,setEmail] = useState(); - bu sətirdə gprdüyümüz hissədə email variable adı , setEmail isə bu variable-ın dəyərini dəyişmək 
üçün istifadə olunan funksiyadır. useState() içərisində isə email-in ilkin dəyəri verilir.
const[count,setCount] = useState(0); - burada isə count variable-ının ilkin dəyəri 0 olaraq təyin edilib.

return (
    <div className='w-full h-screen flex justify-center items-center'>
    <button onClick={() => setCount(prevState=>prevState-1)} className='bg-blue-500 text-white px-4 py-2 rounded-md'> 
    - burada bir button yaratdıq və onun onClick hadisəsi baş verdikdə yəni buttona klik edildikdə
    setCount funksiyası işə düşür və count variable-ının dəyərini 1 azaldırıq.
    prevState burada count-un əvvəlki dəyərini təmsil edir və count-1 yazmaq səhv olurdu çünki React state yeniləmələrini asinxron şəkildə idarə edir və
    birdən çox setCount çağırışı ola bilər.
    
     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='border border-gray-300 rounded-md p-2'
    </div>
)
burada isə biz bir input yaratdıq və onun value-sunu email variable-ına bərabər etdik. onChange hadisəsi baş 
verdikdə yəni inputa hər hansı bir dəyər daxil edildikdə setEmail funksiyası işə düşür və e.target.value vasitəsilə 
inputa daxil edilən dəyəri email variable-ına yazırıq.


useEffect - useEffect React-də yan təsirləri idarə etmək üçün istifadə olunan hook-dur. O, komponentin həyat dövrü boyunca müəyyən 
əməliyyatları yerinə yetirməyə imkan verir.

import {useEffect} from "react"

useEffect(() => {
    // Bu hissədə yan təsir əməliyyatları yerinə yetirilir
    console.log("Component mount oldu");
    return () => {
        // Bu hissədə təmizləmə əməliyyatları yerinə yetirilir
        console.log("Component unmount oldu");
    }
}, []); Boş massivdə hər hansı bir data göndərsək, məsələn searchterm datamız var və bu dataya görə API-dən məlumatlar gətiririk. 
useEffect içərisində bu datanı göndərsək, o zaman hər dəfə searchterm dəyişdikdə useEffect işə düşəcək və API-dən yenilənmiş
 məlumatları gətirəcək.   afdakd
 

 
























*/