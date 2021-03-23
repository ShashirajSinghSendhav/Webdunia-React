import React from 'react';
import './samacharwidget.scss';
import  Globals from '../../api' ;


export default class SamacharWidget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           data : []
         };
      }
    componentDidMount() {
            const url= Globals.language_based_api+'/home-page';
            fetch(url)
            .then((res) => res.json())
            .then((data) => {
              
                this.setState({
                  data : data.Contents
                })
            })   
          }
    render() {
        let pagelist = this.state.data;
        let PagelistData = pagelist.filter((x)=>x.Type == "PageList");
        console.log("🚀 ~ file: bbcwidget.js ~ line 32 ~ efkregrejg ~ render ~ PagelistData", PagelistData)
        let PagelistDatas = PagelistData.slice(8,9);
        //console.log("🚀 ~ file: bbcwidget.js ~ line 34 ~ BBCWidget ~ render ~ PagelistDatas", PagelistDatas)
     const _PagelistDataItemss = PagelistDatas.map((item, i ) =>    
     <div className="news_widget_panel samacharwidget">
     <div className="n_w_p_head">
     <h2><label>{item.Title}</label><span className="n_readmore"><a href={item.ViewAllUrl}>और भी पढ़ें</a></span></h2>
     </div>
     <div className="n_w_p_body">
    

      {item.Pages.map((item, i ) => 
             <div className="news_block_l">
             <div className="n_block_l_thumb"><a href={item.Url}><img  class="lazy" src={item.Image || item.Thumbnail } alt={item.Title} title={item.Title}/></a></div>
             <div className="n_block_l_cont">
             <time>{item.PublishedDate || item.PublishDate}</time>    
             <h2><a href={item.Url}>{item.Title}</a></h2>                     
             </div>       
         </div>	
          )}
        </div>
      </div>
       );
        return (
           <div>
               {_PagelistDataItemss}
           </div>      )
    }
}