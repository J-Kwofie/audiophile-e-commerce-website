import React, {useEffect,useState} from 'react'
import {CategorySectionStyled} from './CategorySectionStyled'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Category({category}){
  const navigate = useNavigate();
    const {name,image} = category;
    let ll = {
     img: `../.${image.trim()}`
    }
    return (
        <div className='category-wrapper'>
            <img src={ll.img} alt='hgh'/>
            <h3>{name}</h3>
            <div onClick={()=>navigate(`/product/${name}`)}>
              <span>Shop</span> 
              <img src={require('../assets/shared/desktop/icon-arrow-right.svg').default} alt="arrow" />
            </div>
        </div>
    )
}
function CategorySection() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      axios('http://localhost:8081/api/vi/category')
      .then((res)=>{
        setCategories(res.data.data);
        })
      
      return () => {
        
      }
    }, [])
  return (
    categories.length >0 &&
    <CategorySectionStyled>
        {
            categories.map((category,index)=> <Category key={index} category={category}/>)
        }
    </CategorySectionStyled>
  )
}

export default CategorySection