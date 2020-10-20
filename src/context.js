import React, { Component } from 'react';
//import FeaturedRoom from './components/FeaturedRoom';
import items from "./data";
const RoomContext = React.createContext();
 class RoomProvider extends Component {
     state={
         rooms:[],
         sortedRooms:[],
         featuredRoom:[],
         loading: true
     };
     componentDidMount(){
         let room = this.formatData(items);
         let featuredRooms = room.filter(troom=> troom.featured=== true);
         this.setState({
             rooms:room, 
             featuredRoom:featuredRooms,
             sortedRooms: room,
             loading:false
         });
     }
     formatData(para){
         let tempItems = para.map(item=>{
             let id = item.sys.id
             let images = item.fields.images.map(image=>image.fields.file.url);
             let room = {...item.fields,images,id};
            return room;
         });
         return tempItems;
     }
     getRoom =(slug)=>{
         let tempRooms= {...this.state.rooms};
         const room = tempRooms.find(room =>room.slug===slug);
         return room;
     }
    render() {
        return (
            <RoomContext.Provider value={{...this.state,getRoom: this.getRoom}}>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}
const RoomConsumer = RoomContext.Consumer;
export{RoomProvider,RoomConsumer,RoomContext};