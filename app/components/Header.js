import React from 'react';

class Header extends React.Component{
  handleClickLink(e) {
    e.preventDefault();
    alert('啊~~~ 你还真点啊？！');
  }
  render() {
    var movieList = this.props.value;
    return (
    <div className="tenYears-header">
        <div className="banner">
          <a href="#" className="clickBtn" onClick={this.handleClickLink}> 你来点我啊，点我啊！</a>
          <p className="logo zoomInDown">logo</p>
        </div>
    </div>
          
    );
  }
};
module.exports = Header;