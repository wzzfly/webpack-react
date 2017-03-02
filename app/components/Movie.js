import React from 'react';

class Movie extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    const numbers = this.props.value;
    const listItems = numbers.map((item, index) =>
        <li key={index}>
           <a href="#"> <img src= {item.movieImg} /></a>
           <h3 className="sub-tit">{item.text}</h3>
           <p className="playTotal">热播次数：{item.playTotal}</p>
        </li>
    );
    return (
    <div className="tenYears-movie">
        <h3 className="title">会员尊享精彩内容</h3>
        <div className="movie-list">
            <ul className="lists-top">
               {listItems}
            </ul>
            <ul className="lists-bottom">
               <li ><a href="#" target="_blank"><img src="http://r1.ykimg.com/051000005862096F67BC3D14BE0939D6" /></a></li>
               <li className="right"><a href="#" target="_blank"><img src="http://r1.ykimg.com/051000005862096F67BC3D14BE0939D6"/></a></li>
            </ul>
        </div>
    </div>    
    );
  }
};
module.exports = Movie;