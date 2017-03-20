import React from 'react';
import axios from 'axios';
import './picWall.scss';
import PicComponent from './pic/PicComponent.jsx';
import CommonUtils from '../utils/CommonUtils.js';


class PicWallComponents extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            imgs:[]
        }
    }

    loadImages(){
        axios.get("data/images.json").then((data)=>{
            if(data.status === 200){
                this.state.imgs = data.data.data;
                this.setState(this.state);
            }
        });
    }

    componentDidMount(){
        this.loadImages();
    }

    render(){

        return(
                <div className="picContainer">
                    {
                            this.state.imgs.map(function(img){
                                img.left = CommonUtils.getRandom(0,200);
                                img.top = CommonUtils.getRandom(0,450);
                                img.rotate = CommonUtils.getRandom(-10,10);
                               return <PicComponent key={img.id} obj={img} />
                            })
                    }
                </div>

        )
    }

}

export default PicWallComponents;