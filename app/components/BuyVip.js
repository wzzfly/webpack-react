import React from 'react';
import Dialog from './Dialog.js';

class BuyVip extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }));
  }
  render() {
    return (
     <div className="tenYears-buyVip">
        <div className="content">
            <p className="act-rules J-actRules" onClick={this._handleClick}>活动规则&gt;</p>
            <ul>
               <li className="vip-1 J-buyVipBtn"><a href="#" className="btn-1" onclick="javascript:goldlog.record('/yt/ykvip.1221viphuodong.1221vipsanqimonthPC','CLK','','H49607588')">立即购买</a></li>
               <li className="vip-12 J-buyVipBtn"><a href="#" className="btn-12" onclick="javascript:goldlog.record('/yt/ykvip.1221viphuodong.1221vipsanqiyearPC','CLK','','H49577797')">立即购买</a></li>
               <li className="vip-3 J-buyVipBtn"><a href="#" className="btn-3" onclick="javascript:goldlog.record('/yt/ykvip.1221viphuodong.1221vipsanqimonthsPC','CLK','','H49637379')">立即购买</a></li>
            </ul>
        </div>  
        <Dialog style = {this.state.isShow}  _handleClick = {this._handleClick}/>                  
    </div>   
    );
  }
};
module.exports = BuyVip;