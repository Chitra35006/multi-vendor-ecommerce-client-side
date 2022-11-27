import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BSaddProducts = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const {user} = useContext(AuthContext);
      const imageHostkey = process.env.REACT_APP_imgbb_key;

      const  navigate = useNavigate();
      const handleAddProducts = (data) => {
        console.log(data);
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`
        fetch(url,{
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(imgData=>{
            // console.log(imgData);
            if(imgData.success){
                console.log(imgData.data.url);
                const b2cproduct ={
                  p_details: data.ProductDetails,
                  p_price: data.price,
                  p_category: data.category,
                  image:imgData.data.url,
                  email:user?.email
                }
                
                //product information to the database
                fetch('http://localhost:5000/b2cProducts',{
                  method: 'POST',
                  headers:{
                      'content-type': 'application/json',
                      authorization:`bearer${localStorage.getItem('accessToken')}`
                  },
                  body: JSON.stringify(b2cproduct)
              })
              .then(res => res.json())
              .then(result =>{
                  console.log(result)})
                  toast.success(`${data.category}  added successfully`);
                  navigate('/dashboard/b2csellerMyShop')
            }
        })
      };
    
    return (
        <div className="w-96 p-7">
        <h2 className="text-3xl mt-4 mb-4">Add Product</h2>
        <form onSubmit={handleSubmit(handleAddProducts)}>
        <textarea className='w-96' {...register("ProductDetails",{ required: true })} placeholder="About Product" />
          
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Price</span>
            </label>
        <select {...register("price", { required: true })}>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">400</option>
        </select>

          </div>
          <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            {...register("img", {
              required: "Phpto is required",
            })}
            className="input input-bordered w-full max-w-xs"
          />
           {errors.img && (
            <p className="text-red-500">{errors.img.message}</p>
          )}
        </div>
        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full mt-3 mb-3" />
        
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
        <select {...register("category", { required: true })}>
            <option value="shoe">Shoe</option>
            <option value="jacket">Jacket</option>
            <option value="bag">Bag</option>
        </select>
          </div>
          <input
            className="btn btn-accent mt-4 w-full"
            value="Add Product"
            type="submit"
          />
        </form>
      </div>
    );
};

export default BSaddProducts;