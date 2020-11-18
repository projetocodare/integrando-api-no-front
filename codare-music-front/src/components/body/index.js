import React, { useEffect, useState } from 'react';
import IndexUseCase from '../../pages/index/use-cases/index.use-case';
import Content from '../content';
import Sidebar from '../sidebar';
import './body.css'

const Body = () => {

    const indexUseCase = IndexUseCase

    const[sidebarData, setSidebarData] = useState(null)
    const[mainBannerData, setMainBannerData] = useState(null)

    useEffect(()=> {

        if(!sidebarData) { 
            indexUseCase.loadSideBar().then((data) => {
                setSidebarData(data)
            })
        }

        if(!mainBannerData) { 
            indexUseCase.loadMainBanner().then((data) => {
                setMainBannerData(data)
            })
         }
        

    }, [sidebarData, mainBannerData, indexUseCase])

    return(
        <div id="codare-body">
            <Sidebar data={sidebarData}/>
            <Content banner={mainBannerData}/>
        </div>
    )

}

export default Body