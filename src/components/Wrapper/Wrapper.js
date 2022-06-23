import './Wrapper.css';
import { useContext } from 'react';
import DataContext from '../services/Context';


function Wrapper(props) {
    const ctx = useContext(DataContext);
    let pageNum = props.page;
    let size = 12; //размер подмассива
    let array = ctx.filterPic; //массив, из всех объектов
    if (Math.ceil(array.length/size) <= pageNum) {
        pageNum = 0;
    }
    
    let subarray = []; //массив из страниц по 12шт
    for (let i = 0; i <Math.ceil(array.length/size); i++){
        subarray[i] = array.slice((i*size), (i*size) + size);
    }

    const res = subarray[pageNum].map((item) => {
		return  <div className="pic" key = {item.id}>
                <img src={`https://test-front.framework.team${item.imageUrl}`} alt=""></img>
                <div className="text">{item.name}</div>
                </div>
	});

    
    return (
        <div className="wrapper">
            {res}            
        </div>
    )
}

export default Wrapper;