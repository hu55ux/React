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
 





                                                                                Navigation 

Navigation (naviqasiya) React tətbiqlərində səhifələr arasında keçid etmək üçün istifadə olunan mexanizmdir.
React Router - React Router React tətbiqlərində naviqasiya idarə etmək üçün istifadə olunan populyar kitabxanadır. O, tək səhifəli tətbiqlərdə müxtəlif səhifələr yaratmağa və idarə etməyə imkan verir.
  İlk öncə Router istifadəsi üçün cmd-də npm install react-router-dom əmrini işlətməliyik.
Daha sonra main.jsx faylında tətbiqi Router ilə əhatə edirik:
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx'
import './index.css'
createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </React.StrictMode>,
)
Daha sonra bir Navigator.jsx faylı yaradıb orada aşağıdakı kodu yazırıq:





  import { Routes, Route } from 'react-router-dom';
import Products from "../pages/Products";
import Details from "../pages/Details";
import NotFound from "../pages/NotFound";
import UserAccount from "../pages/UserAccount";
import UserDetails from "../pages/UserDetails";
import UserLayout from '../pages/UserLayout';

const Navigator = () => {
    return (
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path='user' element={<UserLayout />}>
                <Route path="/userAccount" element={<UserAccount />} />
                <Route path="/userData" element={<UserDetails />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};


export default Navigator;


Məsəkən biz details səhifəsində bir id göndəririk ki, bu id-yə əsasən API-dən məlumatlar gətirək. bunun üçün Details.jsx faylında useParams hook-dan istifadə edirik:
import { useParams } from 'react-router-dom';
const { id } = useParams(); - bu sətirdə useParams hook-u vasitəsilə URL-dən göndərilən id-ni əldə edirik.

const response = await fetch(`https://api.example.com/products/${id}`); - burada isə API-dən id-yə əsasən məlumatları gətiririk.
const data = await response.json(); - gətirilən məlumatları JSON formatına çeviririk.
return (
    <div>
        <h1>Product Details</h1>
        <p>Product ID: {id}</p>
        <p>Product Name: {data.name}</p>
        <p>Product Description: {data.description}</p>
    </div>
)

Və ya UseLocation hook-dan istifadə edərək URL-dən məlumatları əldə edə bilərik:

import { useLocation } from 'react-router-dom';
const location = useLocation();
const queryParams = new URLSearchParams(location.search);
const id = queryParams.get('id');





props drilling - Props Drilling React-də bir komponentdən digərinə məlumat ötürmək üçün istifadə olunan üsuldur. O, valideyn komponentdən uşaq komponentə props vasitəsilə məlumat ötürülməsini əhatə edir.
Amma bəzən bu üsul çox dərin komponent ağaclarında məlumat ötürülməsi lazım olduqda çətinlik yarada bilər. Buna görədə çox istifadə olunan yanaşma deyil.

                                                        Global State Management

Global State Management (Qlobal Dövlət İdarəetməsi) React tətbiqlərində müxtəlif komponentlər arasında məlumatların paylaşılmasını və idarə edilməsini asanlaşdıran bir yanaşmadır.
Bu üsul istifadəsi zamanı məlumatlar mərkəzləşdirilmiş bir yerdə saxlanılır və müxtəlif komponentlər bu məlumatlara asanlıqla daxil ola bilirlər. Amma bütün datalar bu üsulla saxlanılmalı deyil.
Bu yaxşı bir yanaşma deyil çünki hər bir komponent öz state-inə sahib olmalıdır və yalnız lazım olan məlumatlar qlobal state-də saxlanılmalıdır.

Bu yanaşma üçündə biz zustand, redux və s. kimi kitabxanalardan istifadə edə bilərik. İndi gəlin zustand kitabxanasından istifadə edərək qlobal state idarə etməyə baxaq.
İlk öncə terminalda npm install zustand əmrini işlədərək kitabxananı quraşdıraq.
Məsələn :
Dark mode, istifadəçi məlumatları və s. kimi məlumatlar qlobal state-də saxlanıla bilər. İndi gəlin code nümunəsinə baxaq.
İlk öncə bir mode dəyişmə buttonu yaradaq:


//  Daha sonra src folderində bir store qovluöu yaradırıq və daxilində darkModeStore.js faylını yaradırıq:

import { create } from 'zustand'

export const useDarkMode = create((set) => ({ // useDarkMode adlı bir custom hook yaradılır
    isDarkModeActive: false, // isDarkModeActive adlı state dəyişəni yaradılır və ilkin dəyəri false olaraq təyin edilir
    toggleDarkMode: () => set((state) => ({ // toggleDarkMode adlı bir funksiya yaradılır
        isDarkModeActive: !state.isDarkModeActive // Bu funksiya çağırıldıqda isDarkModeActive dəyişəninin dəyərini tərsinə çevirir
    }))
}))

// İndi isə rules.jsx faylında bu store-u istifadə edək:

import React from 'react'
import { useDarkMode } from '../store/darkModeStore';// darkModeStore-dan useDarkMode hook-u idxal edilir
const Rules = () => {
    const { isDarkModeActive, toggleDarkMode } = useDarkMode(); // useDarkMode hook-u vasitəsilə isDarkModeActive və toggleDarkMode əldə edilir
    
    return (
        <div className={isDarkModeActive ? 'dark-mode' : 'light-mode'}> { isDarkModeActive dəyərinə əsasən div-in className-i təyin edilir  }
        <button onClick={toggleDarkMode}> { button-a klik edildikdə toggleDarkMode funksiyası çağırılır }
                Toggle Dark Mode
            </button>
        </div>
    )
}

export default Rules



Gördüyümüz kimi, useDarkMode hook-u vasitəsilə qlobal state-də saxlanılan isDarkModeActive dəyişəninə və toggleDarkMode funksiyasına daxil ola bilirik.
Amma burada tək bir problem var ki buda bu hook-un müvəqqəti olmasıdır yəni səhifə refresh olunan zaman isDarkModeActive ilkin dəyəri olan false olur. Bu problemi həll etmək üçün biz zustand persist middleware-dən istifadə edə bilərik.
İndi gəlin darkModeStore.js faylını persist ilə yenidən yazaq:



import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useDarkModePersist = create(persist(
    (set) => ({
        isDarkModeActive: false,
        toggleDarkMode: () => set((state) => ({
            isDarkModeActive: !state.isDarkModeActive
        }))
    }),
    {
        name: 'dark-mode-storage', // localStorage-də saxlanacaq məlumatların adı
    }
))


İndi isə rules.jsx faylında bu yeni store-u istifadə edək:


import React from 'react'
import { useDarkModePersist } from '../store/darkModeStore';// darkModeStore-dan useDarkModePersist hook-u idxal edilir

const RulesPersist = () => {
    const { isDarkModeActive, toggleDarkMode } = useDarkModePersist(); // useDarkModePersist hook-u vasitəsilə isDarkModeActive və toggleDarkMode əldə edilir

    return (
        <div className={isDarkModeActive ? 'dark-mode' : 'light-mode'}> { isDarkModeActive dəyərinə əsasən div-in className-i təyin edilir  }
            <button onClick={toggleDarkMode}> { button-a klik edildikdə toggleDarkMode funksiyası çağırılır }
                Toggle Dark Mode
            </button>
        </div>
    )
}

Burada persist istifadə edilərək isDarkModeActive dəyişəninin dəyəri localStorage-də saxlanılır və səhifə yeniləndikdə belə dəyər itmir.
Buda qlobal state management-in bir nümunəsidir.



İndi gəlin bunu daha fərqli bir nümunə ilə izah edək məsələn istifadəçi məlumatlarını qlobal state-də saxlayaq:



import React from 'react'

const Login = () => {
    const [formdata, setFormdata] = React.useState({// burada formdata adlı state yaradılır və ilkin dəyəri obyekt şəklindədir
        email: "",// email adlı property boş string olaraq təyin edilir
        password: ""// password adlı property boş string olaraq təyin edilir
    })

    const handleInputChange = (title, value) => {
        setFormdata(prevState => ({ // setFormdata funksiyası vasitəsilə formdata state-i yenilənir
            ...prevState,// əvvəlki state-i saxlayırıq
            [title]: value// daxil edilən title-a əsasən müvafiq property-nin dəyərini yeniləyirik
        }))
    }

    const handleLogin = async () => {
        try {
            const response = await fetch("https://ilkinibadov.com/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify(formdata)
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Login successful:", data);
            }
        } catch (error) {
            console.log("Login error:", error);
        }
    }

    return (
        <div>
            <input value={formdata.email} type='email' onChange={(e) => {
                handleInputChange("email", e.target.value
                )
            }} />
            <input value={formdata.password} type='password' onChange={(e) => {
                handleInputChange("password", e.target.value
                )
            }} />
            <button onClick={handleLogin}>Login</button>


        </div>
    )
}

export default Login


Indi isə gəlin tokenləri saxlayaq və onlarla işləyək

Ilk öncə tokenStore.js faylını yaradaq:

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useTokens = create(persist(
    (set) => ({
        accesToken: "",
        refreshToken: "",
        setAccesToken: (token) => set((state) => ({ ...state, accesToken: token })),
        setRefreshToken: (token) => set((state) => ({ ...state, refreshToken: token })),
        clearTokens: () => set((state) => ({ ...state, accesToken: "", refreshToken: "" }))
    }), { name: 'token-storage' }
))

// Indi bu hissəni login hissədə istifadə edək

import React from 'react'
const Login = () => {
    const [formdata, setFormdata] = React.useState({// burada formdata adlı state yaradılır və ilkin dəyəri obyekt şəklindədir
        email: "",// email adlı property boş string olaraq təyin edilir
        password: ""// password adlı property boş string olaraq təyin edilir
    })
    const { setAccesToken, setRefreshToken } = useTokens(); // useTokens hook-u vasitəsilə setAccesToken və setRefreshToken funksiyaları əldə edilir

    const handleInputChange = (title, value) => {
        setFormdata(prevState => ({ // setFormdata funksiyası vasitəsilə formdata state-i yenilənir
            ...prevState,// əvvəlki state-i saxlayırıq
            [title]: value// daxil edilən title-a əsasən müvafiq property-nin dəyərini yeniləyirik
        }))
    }

    const handleLogin = async () => {
        try {
            const response = await fetch("https://ilkinibadov.com/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify(formdata)
            });
            if (response.ok) {
                const data = await response.json();
                setAccesToken(data.accessToken); // əldə olunan accessToken qlobal state-də saxlanılır
                setRefreshToken(data.refreshToken); // əldə olunan refreshToken qlobal state-də saxlanılır
            }
        } catch (error) {
            console.log("Login error:", error);
        }
    }

    return (
        <div>
            <input value={formdata.email} type='email' onChange={(e) => {
                handleInputChange("email", e.target.value
                )
            }} />
            <input value={formdata.password} type='password' onChange={(e) => {
                handleInputChange("password", e.target.value
                )
            }} />
            <button onClick={handleLogin}>Login</button>


        </div>
    )
}

export default Login




                                                                    Axios

Axios - Axios JavaScript-də HTTP sorğuları göndərmək üçün istifadə olunan populyar bir kitabxanadır. O, Promise əsaslıdır və brauzer və Node.js mühitlərində işləyir.
İlk öncə terminalda npm install axios əmrini işlədərək kitabxananı quraşdıraq.
import axios from 'axios';

Axios İnterceptorlardan ibarətdir ki 
Interceptors - Interceptor-lar Axios-da sorğu və cavabları tutmaq və onları dəyişdirmək üçün istifadə olunan funksiyalardır. 
Onlar sorğu göndərilməzdən əvvəl və cavab alınmazdan əvvəl işə düşürlər.

 Request interceptoru - Sorğu göndərilməzdən əvvəl işə düşür və sorğu məlumatlarını dəyişdirmək üçün istifadə olunur.
Response interceptoru - Cavab alınmazdan əvvəl işə düşür və cavab məlumatlarını dəyişdirmək üçün istifadə olunur.

Axios code example:

import axios from "axios";// Axios kitabxanası idxal edilir
import { useTokens } from "../stores/tokenStore.js";// TokenStore-dan useTokens hook-u idxal edilir
import { refreshTokens } from "./utils.js";// refreshTokens funksiyası idxal edilir

const api = axios.create({// Axios instance yaradılır
    baseURL: 'https://ilkinibadov.com/api/v1',// API-nin əsas URL-i təyin edilir
    timeout: 10000,// Sorğu üçün vaxt limiti təyin edilir
    headers: {// Ümumi başlıqlar təyin edilir
        'Content-Type': 'application/json',// Məzmun növü JSON olaraq təyin edilir
    }
})

api.interceptors.request.use(// Request interceptoru əlavə edilir
    (config) => {// Sorğu konfiqurasiyası əldə edilir
        const setLoading = useTokens.getState().setLoading// setLoading funksiyası əldə edilir
        const accessToken = useTokens.getState().accessToken// accessToken əldə edilir
        setLoading(true)// Yüklənmə vəziyyəti true olaraq təyin edilir
        if (accessToken) {// accessToken mövcuddursa
            config.headers.Authorization = `Bearer ${accessToken}`;// Authorization başlığına accessToken əlavə edilir
        }
        return config;// Konfiqurasiya qaytarılır
    },
    (error) => {
        return Promise.reject(error);// Xəta baş verərsə, Promise rədd edilir
    }
)

let isRefreshing = false;// Yenilənmə vəziyyəti təyin edilir
let failedQueue = [];// Uğursuz sorğular üçün növbə yaradılır

const processQueue = (error, token = null) => {// Növbəni işləyən funksiya yaradılır
    failedQueue.forEach(prom => {// Növbədəki hər bir sorğu üçün
        if (error) {// Xəta mövcuddursa
            prom.reject(error); // Promise rədd edilir
        } else {
            prom.resolve(token);// Promise həll edilir
        }
    });
    failedQueue = [];// Növbə təmizlənir
}

api.interceptors.response.use(// Response interceptoru əlavə edilir
    (response) => {// Cavab əldə edilir
        const setLoading = useTokens.getState().setLoading;// setLoading funksiyası əldə edilir
        setLoading(false);// Yüklənmə vəziyyəti false olaraq təyin edilir
        return response;// Cavab qaytarılır
    },
    async (error) => {// Xəta baş verərsə
        const setLoading = useTokens.getState().setLoading// setLoading funksiyası əldə edilir
        setLoading(false)// Yüklənmə vəziyyəti false olaraq təyin edilir
        const clearTokens = useTokens.getState().clearTokens// clearTokens funksiyası əldə edilir
        const originalRequest = error.config;// Orijinal sorğu konfiqurasiyası əldə edilir

        if (error.response?.status === 401 && !originalRequest._retry) {// 401 xətası baş verərsə və orijinal sorğu təkrar edilməyibsə
            originalRequest._retry = true;// Orijinal sorğu təkrar edilib kimi işarələnir

            if (isRefreshing) {// Yenilənmə vəziyyəti true-dursa
                return new Promise((resolve, reject) => {// Yeni Promise yaradılır
                    failedQueue.push({ resolve, reject });// Uğursuz sorğu növbəyə əlavə edilir
                }).then(token => {// Token əldə edildikdə
                    originalRequest.headers.Authorization = 'Bearer ' + token; // Authorization başlığına token əlavə edilir
                    return api(originalRequest);// Orijinal sorğu yenidən göndərilir
                }).catch(err => {
                    return Promise.reject(err);// Xəta baş verərsə, Promise rədd edilir
                });
            }

            isRefreshing = true;// Yenilənmə vəziyyəti true olaraq təyin edilir

            try {
                const newToken = await refreshTokens();//refreshTokens funksiyası vasitəsilə yeni token əldə edilir
                processQueue(null, newToken)
                originalRequest.headers.Authorization = 'Bearer ' + newToken;// Authorization başlığına yeni token əlavə edilir
                return api(originalRequest)// Orijinal sorğu yenidən göndərilir
            } catch (error) {
                processQueue(error, null);// Növbə işlənir və xəta ötürülür
                clearTokens();// Tokenlər təmizlənir
                return Promise.reject(error);// Xəta baş verərsə, Promise rədd edilir
            }
            finally {
                isRefreshing = false;   
            }
        }
        return Promise.reject(error);
    }
)

export default api

import axios from "axios"
import { useTokens } from "../stores/tokenStore"

export const refreshTokens = async () => {
    try {
        const refreshToken = useTokens.getState().refreshToken
        const setAccessToken = useTokens.getState().setAccessToken
        const { data, statusText } = await axios.post("https://ilkinibadov.com/api/v1/auth/refresh", { refreshToken })
        if (statusText === "OK") {
            setAccessToken(data.accessToken)
            return data.accessToken
        }
    } catch (error) {
        console.error(error)
    }
}






























*/