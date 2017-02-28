import React from 'react';

class Dialog extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        title: '活动规则'
    }
    this._childMethod = this._childMethod.bind(this);
  }
  _childMethod() {
    //通过props调用父组件的方法
    this.props._handleClick();
  }
  render() {
    return (
    <div className="modal_mask" style={this.props.style? {display:'block'}: {display:'none'} }>
      <div className="modal_box" style={this.props.style? {display:'block'}: {display:'none'} }>
          <div className="modal_header">
            <span className="modal_closeBtn J-closeBtn" onClick={this._childMethod}></span></div>
          <div className="modal_body">
              <p className="title">{this.state.title}：</p>
              <p>1、活动时间：2016年12月21日 00：00 --23：59 </p>
              <p>2、活动期间，在本活动页面购买年费黄金会员、季度黄金会员、月底黄金会员尊享买一送一！可重复购买哦！</p>
              <p>3、如有疑问可随时咨询
              <a href="">在线客服</a>，或拨打VIP客服热线：400-810-3568</p>
          </div>
      </div>
    </div>    
    );
  }
};
module.exports = Dialog;