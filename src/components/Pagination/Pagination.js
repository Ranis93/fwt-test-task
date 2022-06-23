import './Paginaton.css';
import { useContext, useState } from 'react';
import DataContext from '../services/Context';

function Pagination(props) {

    const ctx = useContext(DataContext);

    const [first, setFirst] = useState("1");
    const [second, setSecond] = useState("2");
    const [third, setThird] = useState("3");
    const [isActive, setActive] = useState("1");

    const lengthPic = Math.ceil(ctx.filterPic.length/12)

    if (lengthPic < +isActive) {
        setActive("1");
    }

    const paginOn = (event) => {
        setActive(event.target.innerHTML);
    }

    const nextActiveItem = () => {
        if (isActive !== String(lengthPic)) {
            if (third !== isActive) {
                setActive(String(+isActive + 1));
            } else {
                scrollNext();
            }
        }
    }
    const prevActiveItem = () => {
        
        if (isActive !== "1") {
            if (first !== isActive) {
                setActive(String(+isActive - 1));
            } else {
                scrollPrev();
            }
        }        
    }
    const scrollNext = () => {
        if (isActive !== String(lengthPic) && isActive !== String(lengthPic - 1) && isActive !== String(lengthPic - 2)) {
            setActive(String(+isActive + 1));
            setFirst(String(+isActive + 1));
            setSecond(String(+isActive + 2));
            setThird(String(+isActive + 3));
        }
    }
    const scrollPrev = () => {
        if (isActive !== "1" && isActive !== "2" && isActive !== "3") {
            setActive(String(+isActive - 1));
            setFirst(String(+isActive - 3));
            setSecond(String(+isActive - 2));
            setThird(String(+isActive - 1));
        }
    }

    props.getPage(+isActive - 1);

    return (
        <div className="pagination">
            <ul className="pagination__list">
                <li className="pagination__item">
                    <div className="pagination__item__link" onClick={scrollPrev} data-value="pPrev"> &#171; </div>
                </li>
                <li className="pagination__item">
                    <div className="pagination__item__link" onClick={prevActiveItem} data-value="prev"> &#8249; </div>
                </li>
                <li className={(isActive === first) ? "pagination__item active" : "pagination__item"}>
                    <div className="pagination__item__link" onClick={paginOn} data-value="first">{first}</div>
                </li>
                <li className={(isActive === second) ? "pagination__item active" : "pagination__item"}>
                    <div className="pagination__item__link" onClick={paginOn} data-value="second">{second}</div>
                </li>
                <li className={(isActive === third) ? "pagination__item active" : "pagination__item"}>
                    <div className="pagination__item__link" onClick={paginOn} data-value="third">{third}</div>
                </li>
                <li className="pagination__item">
                    <div className="pagination__item__link" onClick={nextActiveItem} data-value="next"> &#8250; </div>
                </li>
                <li className="pagination__item">
                    <div className="pagination__item__link" onClick={scrollNext} data-value="nNext"> &#187; </div>
                </li>
            </ul>
        </div>
    )
}

export default Pagination;