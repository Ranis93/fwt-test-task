import { useContext } from 'react';
import DataContext from '../services/Context';
import './Navigation.css';

function Navigation(props) {
    const ctx = useContext(DataContext);    
    // Ф-ии фильтра
    const onNameFilter = (event) => {
        let results = ctx.dataPaint.filter(item => item.name === event.target.value)
        props.onFilteredPic(results);
    }

    const onAuthorFilter = (event) => {
        let results = ctx.dataPaint.filter(item => +item.authorId === +event.target.value)
        props.onFilteredPic(results);
    }

    const onLocationFilter = (event) => {
        let results = ctx.dataPaint.filter(item => +item.locationId === +event.target.value)
        props.onFilteredPic(results);
    }

    const onCreatedFilter = (event) => {
        let results = ctx.dataPaint.filter(item => item.created === event.target.value)
        props.onFilteredPic(results);
    }

    const name = ctx.dataPaint.map((item) => {
		return  <option value={item.name} style={{color: "#FFFFFF"}} key={item.id}>{item.name}</option>
	});

    const auth = ctx.dataAuth.map((item) => {
		return  <option value={item.id} style={{color: "#FFFFFF"}} key={item.id}>{item.name}</option>
	});

    const loc = ctx.dataLocat.map((item) => {
		return  <option value={item.id} style={{color: "#FFFFFF"}} key={item.id}>{item.location}</option>
	});

    const creat = ctx.dataPaint.map((item) => {
		return  <option value={item.created} style={{color: "#FFFFFF"}} key={item.id}>{item.created}</option>
	});

    
    return (
        <div className="navigation">
            <div className="filter">
                <select style={{color:"gray"}} onChange={onNameFilter}>
                    <option value="" style={{display: "none"}}>Name</option>
                    {name}
                </select>
            </div>
            <div className="filter">
                <select style={{color: "gray"}} onChange={onAuthorFilter}>
                <option value="" style={{display: "none"}}>Author</option>
                    {auth}
                </select>
            </div>
            <div className="filter">
                <select style={{color: "gray"}} onChange={onLocationFilter}>
                    <option value="" style={{display: "none"}}>Location</option>
                    {loc}
                </select>
            </div>
            <div className="filter">
                <select style={{color: "gray"}} onChange={onCreatedFilter}>
                    <option value="" style={{display: "none"}}>Created</option>
                    {creat}
                </select>
            </div>
        </div>
    )
}

export default Navigation;