import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { Image } from 'semantic-ui-react';
import './ScrollMenu.css';

const menu = [
  <Image src="https://img.icons8.com/flat_round/55/000000/wedding-dress.png" key="Women's Fashion" circular />,
  <Image src="https://img.icons8.com/fluent/55/000000/boy-stroller.png" key='Baby' circular style={{"background": 'orange'}}/>,	
  <Image src="https://img.icons8.com/flat_round/55/000000/suit--v1.png" key="Man's Fashion" circular />,
  <Image src="https://img.icons8.com/fluent/55/000000/car.png" key="Automotive" circular style={{"background": 'yellow'}}/>,
  <Image src="https://img.icons8.com/color/55/000000/computer-support.png" key="Computers" circular style={{"background": 'purple'}}/>,
  <Image src="https://img.icons8.com/color/55/000000/boy.png" key="Boy's Fashion" circular style={{"background": 'red'}}/>,
  <Image src="https://img.icons8.com/color/55/000000/girl.png" key="Girl's Fashion" circular style={{"background": 'pink'}}/>,
  <Image src="https://img.icons8.com/color/55/000000/software-box.png" key="Software" circular style={{"background": 'green'}}/>,
  <Image src="https://img.icons8.com/fluent/55/000000/cottage.png" key="Real Estate" circular style={{"background": 'brown'}}/>,
  <Image src="https://img.icons8.com/fluent/55/000000/garden-shears.png" key="House and Garden" circular style={{"background": 'blue'}}/>,
  <Image src="https://img.icons8.com/officel/55/000000/football2--v2.png" key="Sports, Books, Hobby" circular style={{"background": 'orange'}}/>,
  <Image src="https://img.icons8.com/cotton/55/000000/automotive-generator.png" key="Machines, tools, equipment" circular style={{"background": 'green'}}/>
  ]
// list of items
const list = [
  { src: "https://img.icons8.com/flat_round/55/000000/wedding-dress.png", key:"Women's Fashion", style:{} },
  { src: "https://img.icons8.com/fluent/55/000000/boy-stroller.png",  key: 'Baby', style: {"background": 'orange'} },
  { src: "https://img.icons8.com/flat_round/55/000000/suit--v1.png", key:"Man's Fashion", style:{}},
  { src: "https://img.icons8.com/fluent/55/000000/car.png",  key:"Automotive", style: {"background": 'yellow'} },
  { src: "https://img.icons8.com/color/55/000000/computer-support.png", key:"Computers", style:{"background": 'purple'}},
  { src: "https://img.icons8.com/color/55/000000/boy.png", key:"Boy's Fashion", style:{"background": 'red'} },
  { src: "https://img.icons8.com/color/55/000000/girl.png", key:"Girl's Fashion", style:{"background": 'pink'} },
  { src: "https://img.icons8.com/color/55/000000/software-box.png", key:"Software", style:{"background": 'green'} },
  { src: "https://img.icons8.com/fluent/55/000000/cottage.png", key:"Real Estate", style:{"background": 'brown'} },
  { src: "https://img.icons8.com/fluent/55/000000/garden-shears.png", key:"House and Garden", style:{"background": 'blue'}},
  { src: "https://img.icons8.com/officel/55/000000/football2--v2.png", key:"Sports, Books, Hobby", style:{"background": 'orange'}},
  { src: "https://img.icons8.com/cotton/55/000000/automotive-generator.png", key: "Machines, tools, equipment", style: {"background": 'green'}},

];
 
// One item component
// selected prop will be passed
const MenuItem = ({src, key, style, selected}) => {
  return <Image src={src} key={key} alt={key} style={style} selected={selected} />
};
 
// All items component
// Important! add unique key
const Menu = (list, selected) =>
  list.map(element => {
    const { src, key, style } = element;
 
    return <MenuItem className={`menu-item ${selected ? 'active' : ''}`} src={src} key={key} style={style} selected={selected} />;
  });
 
 
const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};
 
 
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });
 
const selected = 'Automotive';
 
export default class ScrollCategoryMenu extends Component {
  constructor(props) {
    super(props)
    // call it again if items count changes
    this.menuItems = Menu(list, selected);
  }
 
  state = {
    selected
  };
 
  onSelect = key => {
    this.setState({ selected: key });
  }
 
 
  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = this.menuItems;
 
    return (
      <div className="App">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}
 