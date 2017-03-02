import '../css/main.scss';
import React from 'react';
import Header from './Header.js';
import BuyVip from './BuyVip.js';
import Movie from './Movie.js';

class VipBox extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
			numbers: [
		        {text:'我的狐仙老婆 第一季',playTotal:'1亿次',movieImg:'http://r1.ykimg.com/0510000058AF09BEADC0AE05530BA92C'},
		        {text:'我的狐仙老婆 第二季',playTotal:'2亿次',movieImg:'http://r1.ykimg.com/0510000058AF09BEADC0AE05530BA92C'},
		        {text:'我的狐仙老婆 第三季',playTotal:'3亿次',movieImg:'http://r2.ykimg.com/0516000058AFCCDBADBC09BA3A00D72B'},
		        {text:'我的狐仙老婆 第四季',playTotal:'4亿次',movieImg:'http://r2.ykimg.com/0516000058AFCCDBADBC09BA3A00D72B'}
		    ],
	    	title:'React',
			date: new Date(),
			timer: null
		};
	}
	componentDidMount() {
		this.timer = setInterval(
		  () => this.timeTick(),
		  1000
		);
	}
	componentWillUnmount() {
		clearInterval(this.timer);
	}
	timeTick() {
		this.setState({
		  date: new Date()
		});
	}
	render() {
		//内联样式 
		var myStyle = {
	        color:'#f00',
	        fontSize:100
        };
		return (
		    <div className="tenYear">
		        <h1 style= {myStyle}>Hello, {this.state.title}!</h1>
		        <h2>现在时间：{this.state.date.toLocaleTimeString()}</h2>

		    </div>
		);
	}
};
module.exports = VipBox;